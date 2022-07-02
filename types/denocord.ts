import { DiscordInteraction, DiscordInteractionData, DiscordInteractionMember, DiscordMessage } from "../deps.ts"

export interface ApplicationCommandInteraction extends DiscordInteraction{
    member: DiscordInteractionMember;
    data: DiscordInteractionData;
}

export interface MessageComponentInteraction extends DiscordInteraction{
    message: DiscordMessage;
    data: DiscordInteractionData;
}
