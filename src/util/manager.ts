import * as discordeno from "../../deps.ts"
import { getBot } from "./bot.ts"

/**
 * Create a new guild. Returns a guild object on success. 
 * Fires a Guild Create Gateway event. 
 * This endpoint can be used only by bots in less than 10 guilds.
 * @param options 
 * @returns 
 */
 export async function createGuild(options:discordeno.CreateGuild){
    return await discordeno.createGuild(getBot(), options);
}

/**
 * Create a new guild based on a template 
 * NOTE: This endpoint can be used only by bots in less than 10 guilds.
 * @param templateCode 
 * @param data 
 * @returns 
 */
export async function createGuildFromTemplate(templateCode: string, data: discordeno.CreateGuildFromTemplate) {
    return await discordeno.createGuildFromTemplate(getBot(), templateCode, data);
}

/**
 * id of the guild this bot belongs to
 * @returns 
 */
export function getGuilds() {
    return getBot().activeGuildIds
}