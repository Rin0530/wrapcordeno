import * as discordeno from "../../deps.ts"
import { getBot } from "./bot.ts"

/**
 * Fetch a single message from the server. 
 * Requires VIEW_CHANNEL and READ_MESSAGE_HISTORY
 * @param channelId 
 * @param id 
 * @returns 
 */
export async function getMessage(channelId:bigint, id:bigint) {
    return await discordeno.getMessage(getBot(), channelId, id)
}

/**
 * Fetches between 2-100 messages.
 * Requires VIEW_CHANNEL and READ_MESSAGE_HISTORY
 * @param channelId 
 * @param options 
 * @returns 
 */
export async function getMessages(channelId:bigint, options?:discordeno.GetMessagesOptions) {
    return await discordeno.getMessages(getBot(), channelId, options);
}

/**
 * Edit the message.
 * @param channelId 
 * @param messageId 
 * @param content 
 * @returns 
 */
export async function editMessage(channelId:bigint, messageId:bigint, content:discordeno.EditMessage) {
    return await discordeno.editMessage(getBot(), channelId, messageId, content);
}


/**
 * Delete a message with the channel id and message id only.
 * @param channelId 
 * @param messageId 
 * @param reason 
 * @param delayMilliseconds 
 */
export async function deleteMessage(channelId:bigint, messageId:bigint, reason?:string, delayMilliseconds?:number) {
    await discordeno.deleteMessage(getBot(), channelId, messageId, reason, delayMilliseconds);
}

/**
 * Pin a message in a channel.
 * Requires MANAGE_MESSAGES. Max pins allowed in a channel = 50.
 * @param channelId 
 * @param messageId 
 */
export async function pinMessage(channelId:bigint, messageId:bigint) {
    await discordeno.pinMessage(getBot(), channelId, messageId);
}

/**
 * Unpin a message in a channel. 
 * Requires MANAGE_MESSAGES. 
 * @param channelId 
 * @param messageId 
 */
export async function unpin(channelId:bigint, messageId:bigint) {
    await discordeno.unpinMessage(getBot(), channelId, messageId);
}

/**
 * Get a list of users that reacted with this emoji.
 * @param channelId 
 * @param messageId 
 * @param reaction 
 * @param options 
 * @returns 
 */
export async function getReactions(channelId:bigint, messageId:bigint, reaction:string, options?:discordeno.GetReactions) {
    return await discordeno.getReactions(getBot(), channelId, messageId, reaction, options);
}


/**
 * Adds multiple reactions to a message. 
 * If ordered is true(default is false), it will add the reactions one at a time in the order provided. 
 * Note: Reaction takes the form of name:id for custom guild emoji, or Unicode characters. 
 * Requires READ_MESSAGE_HISTORY and ADD_REACTIONS
 * @param channelId 
 * @param messageId 
 * @param reactions 
 * @param ordered 
 * @returns 
 */
export async function addReactions(channelId:bigint, messageId:bigint, reactions:string[], ordered?:boolean) {
    await discordeno.addReactions(getBot(), channelId, messageId, reactions, ordered);
}

/**
 * Create a reaction for the message. 
 * Reaction takes the form of name:id for custom guild emoji, or Unicode characters. 
 * Requires READ_MESSAGE_HISTORY and ADD_REACTIONS
 * @param channelId 
 * @param messageId 
 * @param reaction 
 * @returns 
 */
export async function addReaction(channelId:bigint, messageId:bigint, reaction:string) {
    await discordeno.addReaction(getBot(), channelId, messageId, reaction)
}

/**
 * Removes a reaction from the given user on this message, defaults to bot.
 * Reaction takes the form of name:id for custom guild emoji, or Unicode characters.
 * @param channelId 
 * @param messageId 
 * @param reaction 
 * @param options 
 */
export async function removeReaction(channelId:bigint, messageId:bigint, reaction:string, options?:{userId?:bigint} ) {
    await discordeno.removeReaction(getBot(), channelId, messageId, reaction, options);
}

/**
 * Removes all reactions for a single emoji on this message. 
 * Reaction takes the form of **name:id** for custom guild emoji, or Unicode characters.
 * @param channelId 
 * @param messageId 
 * @param reaction 
 */
export async function removeReactionEmoji(channelId:bigint, messageId:bigint, reaction:string) {
    await discordeno.removeReactionEmoji(getBot(), channelId, messageId, reaction);
}

/**
 * Removes all reactions for all emojis on this message.
 * @param channelId 
 * @param messageId 
 */
export async function removeAllReactions(channelId:bigint, messageId:bigint) {
    await discordeno.removeAllReactions(getBot(), channelId, messageId);
}

/**
 * Creates a new public thread from an existing message. 
 * Returns a thread channel.
 * @param channelId 
 * @param messageId 
 * @param options 
 * @returns 
 */
export async function startThread(channelId:bigint, messageId:bigint, options:discordeno.StartThreadWithMessage) {
    return await discordeno.startThreadWithMessage(getBot(), channelId, messageId, options);
}


