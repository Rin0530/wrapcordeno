import { CommandStructure } from "../../types/mod.ts"
import { getBot } from "../util/mod.ts"
import { Collection, CreateApplicationCommand, KY } from "../../deps.ts"

export const commands = new Collection<string, CommandStructure>();

export function createCommands(commandList:CommandStructure[]){    
    commandList.forEach(async (value) => {        
        // cacheにコマンドを入れる
        commands.set(value.command.name, value);
        // コマンドを登録
        await createApplicationCommand(value.command, value.guildId);
    })
}

async function createApplicationCommand(command:CreateApplicationCommand, guildId?:bigint) {
    const bot = getBot()
    const url = (guildId == undefined)
        ? `https://discord.com/api/v10/applications/${bot.id}/commands`
        : `https://discord.com/api/v10/applications/${bot.id}/guilds/${guildId}/commands`;
    const headers = {
        Authorization: `Bot ${bot.token}`
    }    
    
    try {
        await KY.post(url, {headers:headers, json: command }).json()
    } catch (e) {
        console.log("error");
        console.error(e)
        Deno.exit()
    }
}
