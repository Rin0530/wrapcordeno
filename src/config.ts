import { createBot, CreateBotOptions, Bot, enableCachePlugin } from "../deps.ts"

export const configs:{BOT?: Bot, DISCORD_PUBLIC_KEY: string } = {
    BOT: undefined,
    DISCORD_PUBLIC_KEY: ""
}

export function setEnv(botOptions:CreateBotOptions, publicKey:string) {
    configs.BOT = createBot(botOptions)
    configs.DISCORD_PUBLIC_KEY = publicKey;

    enableCachePlugin(configs.BOT)
}