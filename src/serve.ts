import { 
  json,
  serve,
  sign,
  validateRequest,
  InteractionResponse,
  DiscordInteraction
} from "../deps.ts";

import {
  isCommand,
  isMessage
} from "./guards/mod.ts"

import {
  createCommands
} from "./caches/mod.ts"

import {
  onApplicationCommand
} from "./interactions/mod.ts"

import {
  configs,
  setEnv
} from "./config.ts"

import { botOptions, CommandStructure } from "../types/mod.ts"

export function start(commands:CommandStructure[], options:botOptions){
  setEnv(options.botOptions, options.publicKey)
  createCommands(commands)
  serve({
    "/": main,
  });
}

// The main logic of the Discord Slash Command is defined in this function.
async function main(request: Request) {
  // validateRequest() ensures that a request is of POST method and
  // has the following headers.
  const { error } = await validateRequest(request, {
    POST: {
      headers: ["X-Signature-Ed25519", "X-Signature-Timestamp"],
    },
  });
  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  // verifySignature() verifies if the request is coming from Discord.
  // When the request's signature is not valid, we return a 401 and this is
  // important as Discord sends invalid requests to test our verification.
  const { valid, body } = await verifySignature(request);
  if (!valid) {
    return json(
      { error: "Invalid request" },
      {
        status: 401,
      },
    );
  }

  const interaction:DiscordInteraction = JSON.parse(body);
  // Discord performs Ping interactions to test our application.
  // Type 1 in a request implies a Ping interaction.
  if(interaction.type === 1) {
    return json({
      type: 1, // Type 1 in a response is a Pong interaction response type.
    });
  }

  // Type 2 in a request is an ApplicationCommand interaction.
  // It implies that a user has issued a command.
  if(isCommand(interaction)){
    const resolve:InteractionResponse = onApplicationCommand(interaction)
    return json(resolve);
  }

  if(isMessage(interaction)) {
    //const  resolve:InteractionResponse = onMessageComponent(interaction);
    //return json(resolve);
  }

  // We will return a bad request error as a valid Discord request
  // shouldn't reach here.
  return json({ error: "bad request" }, { status: 400 });
}

/** Verify whether the request is coming from Discord. */
async function verifySignature(
  request: Request,
): Promise<{ valid: boolean; body: string }> {
  const PUBLIC_KEY = configs.DISCORD_PUBLIC_KEY;
  // Discord sends these headers with every request.
  const signature = request.headers.get("X-Signature-Ed25519")!;
  const timestamp = request.headers.get("X-Signature-Timestamp")!;
  const body = await request.text();
  const valid = sign.detached.verify(
    new TextEncoder().encode(timestamp + body),
    hexToUint8Array(signature),
    hexToUint8Array(PUBLIC_KEY),
  );

  return { valid, body };
}

/** Converts a hexadecimal string to Uint8Array. */
function hexToUint8Array(hex: string) {
  return new Uint8Array(hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)));
}