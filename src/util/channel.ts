import * as discordeno from "../../deps.ts"
import { getBot } from "./bot.ts"

/**
 * Fetches a single channel object from the api.
 * @param id 
 * @returns 
 */
export async function getChannel(id:bigint) {
    return await discordeno.getChannel(getBot(), id);
}

/**
 * Create a channel in your server. 
 * Bot needs MANAGE_CHANNEL permissions in the server.
 * @param guildId 
 * @param options 
 * @param reason 
 * @returns 
 */
export async function createChannel(guildId:bigint, options?:discordeno.CreateGuildChannel, reason?:string) {
    return await discordeno.createChannel(getBot(), guildId, options, reason);
}

/**
 * Delete a channel in your server. 
 * Bot needs MANAGE_CHANNEL permissions in the server. 
 * Bot needs MANAGE_THREADS permissions in the server if deleting thread.
 * @param channelId 
 * @param reason 
 */
export async function deleteChannel(channelId:bigint, reason?:string) {
    await discordeno.deleteChannel(getBot(), channelId, reason);
}

/**
 * Update a channel's settings. 
 * Requires the MANAGE_CHANNELS permission for the guild.
 * @param channelId 
 * @param options 
 * @param reason 
 * @returns 
 */
export async function editChannel(channelId:bigint, options:discordeno.ModifyChannel, reason?:string) {
    return await discordeno.editChannel(getBot(), channelId, options, reason);
}

/**
 * Edit the channel permission overwrites for a user or role in this channel. 
 * Requires MANAGE_ROLES permission.
 * @param channelId 
 * @param overwrite 
 */
export async function editChannelOverwrite(channelId:bigint, overwrite:discordeno.OverwriteReadable) {
    await discordeno.editChannelOverwrite(getBot(), channelId, overwrite)
}

/**
 * Get pinned messages in this channel.
 * @param channelId 
 * @returns 
 */
export async function getPins(channelId:bigint) {
    return await discordeno.getPins(getBot(), channelId);
}

