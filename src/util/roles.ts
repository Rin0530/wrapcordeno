import * as discordeno from "../../deps.ts"
import { getBot } from "./bot.ts"

/**
 * Add a role to the member
 * @param guildId 
 * @param memberId 
 * @param roleId 
 * @param reason 
 */
 export async function addRole(guildId:bigint, memberId:bigint, roleId:bigint, reason?:string){
    await discordeno.addRole(getBot(), guildId, memberId, roleId, reason);
}

/**
 * Create a new role for the guild.
 * Requires the MANAGE_ROLES permission.
 * @param guildId 
 * @param options 
 * @param reason 
 * @returns 
 */
export async function createRole(guildId: bigint, options: discordeno.CreateGuildRole, reason?: string){
    return await discordeno.createRole(getBot(), guildId, options, reason);
}

/**
 * Delete a guild role.
 * Requires the MANAGE_ROLES permission.
 * @param guildId 
 * @param id id of role or name of role
 * @param all Whether to remove all applicable
 * @returns 
 */
export async function deleteRole(guildId:bigint, id:bigint|string, all?:boolean) {
    if(typeof(id) === "bigint")
        await discordeno.deleteRole(getBot(), guildId, id);
    else {
        const role = await getRole(guildId, id);
        if(all === undefined){
            const fRole = role.first();
            if(fRole != undefined)
                await discordeno.deleteRole(getBot(), guildId, fRole.id);
        }
        else{
            role.forEach(async (value) => await discordeno.deleteRole(getBot(), guildId, value.id));
        } 
    }
}

/**
 * Returns a list of role objects for the guild.
 * 
 * ⚠️ **If you need this, you are probably doing something wrong. 
 * This is not intended for use. Your roles will be cached in your guild.**
 * @param guildId 
 * @returns 
 */
 export async function getRoles(guildId:bigint) {
    return await discordeno.getRoles(getBot(), guildId);
}

/**
 * Returns a list of role objects for the guild.
 * 
 * ⚠️ **If you need this, you are probably doing something wrong. 
 * This is not intended for use. Your roles will be cached in your guild.**
 * @param guildId 
 * @param id id of role or name of role
 * @returns 
 */
export async function getRole(guildId:bigint, id:bigint|string) {
    const roles = await discordeno.getRoles(getBot(), guildId);

    if(typeof(id) === "bigint"){
        return roles.filter((value) => value.id === id );
    }
    else {
        return roles.filter((value) => value.name === id );
    }
}

/**
 * Edit a guild role. 
 * Requires the MANAGE_ROLES permission.
 * @param guildId 
 * @param id 
 * @param options 
 * @returns 
 */
export async function editRole(guildId:bigint, id:bigint, options:discordeno.EditGuildRole) {
    return await discordeno.editRole(getBot(), guildId, id, options);
}