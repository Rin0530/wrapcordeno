import * as discordeno from "../../deps.ts"
import { getBot } from "./bot.ts"

export function getActiveThreads(guildId:bigint) : Promise<{
    threads: discordeno.Collection<bigint, discordeno.Channel>;
    members: discordeno.Collection<bigint | undefined, discordeno.ThreadMember>;
}>{
    return discordeno.getActiveThreads(getBot(), guildId)
}

export function getArchivedThreads(
    channelId:bigint,
    options?: (discordeno.ListArchivedThreads & {
        type?: "public" | "private" | "privateJoinedThreads" | undefined;
        })
) {

    return discordeno.getArchivedThreads(getBot(), channelId, options)
}

export async function startThreadWithoutMessage(channelId:bigint, options:discordeno.StartThreadWithoutMessage) {
    return await discordeno.startThreadWithoutMessage(getBot(), channelId, options)
}