import {
    Bot,
    DiscordPresenceUpdate,
    transformPresence
} from "../../deps.ts"

import { configs } from "../config.ts"

let bot:Bot

export function getBot() {
    if(configs.BOT === undefined){
        console.error("Bot is not initialized!")
        Deno.exit(1)
    }
    if(bot === undefined)
        bot = configs.BOT
    
    return bot as Bot
}



export function StatusUpdate(payload:DiscordPresenceUpdate) {
    return transformPresence(bot, payload)
}
