import { Bot, enableCachePlugin } from "../deps.ts"

export const configs:{BOT?: Bot, DISCORD_PUBLIC_KEY: string } = {
    BOT: undefined,
    DISCORD_PUBLIC_KEY: ""
}

export function setEnv(bot:Bot, publicKey:string) {
    configs.BOT = bot
    configs.DISCORD_PUBLIC_KEY = publicKey;

    enableCachePlugin(configs.BOT)
}