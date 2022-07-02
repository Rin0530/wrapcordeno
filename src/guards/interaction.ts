import { DiscordInteraction, InteractionTypes } from "../../deps.ts"
import { ApplicationCommandInteraction, MessageComponentInteraction } from "../../types/mod.ts"

export function isCommand(value:DiscordInteraction):value is ApplicationCommandInteraction {
    return value.type === InteractionTypes.ApplicationCommand
}

export function isMessage(value:DiscordInteraction):value is MessageComponentInteraction {
    return value.type === InteractionTypes.MessageComponent
}
