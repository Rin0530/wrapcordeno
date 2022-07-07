import { CreateApplicationCommand, InteractionResponse } from "../deps.ts"
import { ApplicationCommandInteraction } from "./mod.ts"

export interface CommandStructure {
    command: CreateApplicationCommand,
    guildId?: bigint
    /** This will be executed when the command is run. */
    execute: (interaction: ApplicationCommandInteraction) => InteractionResponse;
  }
