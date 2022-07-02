import * as discordeno from "../../deps.ts"
import { getBot } from "./bot.ts"

/**
 * This function fetches a guild's data. 
 * This is not the same data as a GUILD_CREATE. 
 * So it does not cache the guild, you must do it manually.
 * @param id guild id
 * @returns 
 */
export async function getGuild(id:bigint) {
    return await discordeno.getGuild(getBot(), id);
}

/**
 * Modify a guilds settings. 
 * Requires the MANAGE_GUILD permission.
 * @param guildId 
 * @param options 
 * @param shardId 
 * @returns 
 */
export async function editGuild(guildId: bigint, options: discordeno.ModifyGuild, shardId: number) {
    return await discordeno.editGuild(getBot(), guildId, options, shardId);
}

/**
 * Returns a guild member object for the specified user.
 * @param guildId 
 * @param id member id
 * @returns 
 */
export async function getMember(guildId:bigint, id:bigint) {
    return await discordeno.getMember(getBot(), guildId, id);
}

/**
 * Highly recommended to NOT use this function to get members instead use fetchMembers().
 * REST(this function): 50/s global(across all shards) rate limit with ALL requests this included GW(fetchMembers): 
 *  120/m(PER shard) rate limit. Meaning if you have 8 shards your limit is 960/m.
 * @param guildId 
 * @param options:ListGuildMembers
 * @returns 
 */
export async function getMembers(guildId:bigint, options?:discordeno.ListGuildMembers) {
    if(options === undefined) 
        options = {
            limit: 1000,
            //after: "0"
        }

    return await discordeno.getMembers(getBot(), guildId, options);
}

/**
 * Edit the member
 * @param guildId 
 * @param memberId 
 * @param options 
 * @returns 
 */
export async function editMember(guildId:bigint, memberId:bigint, options:discordeno.ModifyGuildMember) {
    return await discordeno.editMember(getBot(), guildId, memberId, options);
}

/**
 * Ban a user from the guild and optionally delete previous messages sent by the user.
 * Requires the BAN_MEMBERS permission.
 * @param guildId 
 * @param id 
 * @param options 
 * @returns 
 */
export async function banMember(guildId:bigint, id:bigint, options?:discordeno.CreateGuildBan) {
    await discordeno.banMember(getBot(), guildId, id, options);
}

/**
 * Returns an emoji for the given guild and emoji Id.
 * @param guildId 
 * @param emojiId 
 * @returns 
 */
export async function getEmoji(guildId:bigint, emojiId:bigint){
    return await discordeno.getEmoji(getBot(), guildId, emojiId);
}

/**
 * Returns a list of emojis for the given guild.
 * @param guildId 
 * @returns 
 */
export async function getEmojis(guildId:bigint) {
    return await discordeno.getEmojis(getBot(),guildId);
}

export async function editEmoji(guildId:bigint, id:bigint, options:discordeno.ModifyGuildEmoji) {
    return await discordeno.editEmoji(getBot(), guildId, id, options);
}

/**
 * Returns a ban object for the given user or a 404 not found if the ban cannot be found. 
 * Requires the BAN_MEMBERS permission.
 * @param guildId 
 * @param memberId 
 * @returns 
 */
export async function getBan(guildId:bigint, memberId:bigint){
    return await discordeno.getBan(getBot(), guildId, memberId);
}

/**
 * Returns a list of ban objects for the users banned from this guild.
 * Requires the BAN_MEMBERS permission.
 * @param guildId 
 * @param options:GetBans 
 * @returns 
 */
export async function getBans(guildId:bigint, options?: discordeno.GetBans) {
    return await discordeno.getBans(getBot(), guildId, options);
}



/**
 * Returns the guild preview object for the given id.
 * If the bot is not in the guild, then the guild must be Discoverable.
 * @param guildId 
 * @returns 
 */
export async function getGuildPreview(guildId: bigint) {
    return await discordeno.getGuildPreview(getBot(), guildId);
}

/**
 * Returns an array of templates.
 * Requires the MANAGE_GUILD permission.
 * @param guildId 
 * @returns 
 */
export async function getGuildTemplates(guildId:bigint) {
    return await discordeno.getGuildTemplates(getBot(), guildId);
}

/**
 * Edit a template's metadata. 
 * Requires the MANAGE_GUILD permission.
 * @param guildId 
 * @param templateCode 
 * @param data 
 * @returns 
 */
export async function editGuildTemplate(guildId: bigint, templateCode: string, data: discordeno.ModifyGuildTemplate) {
    return await discordeno.editGuildTemplate(getBot(), guildId, templateCode, data);
}

/**
 * Returns a list of voice region objects for the guild. 
 * Unlike the similar /voice route, this returns VIP servers when the guild is VIP-enabled.
 * @param guildId 
 * @returns 
 */
export async function getVoiceRegions(guildId:bigint) {
    return await discordeno.getVoiceRegions(getBot(), guildId);
}