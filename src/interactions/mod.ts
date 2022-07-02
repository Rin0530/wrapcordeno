import { getBot } from "../util/mod.ts"
import { commands } from "../caches/mod.ts"
import { ApplicationCommandInteraction } from "../../types/mod.ts"
import { DiscordInteraction, InteractionResponse, InteractionResponseTypes, sendInteractionResponse} from "../../deps.ts"

export async function onApplicationCommand(interaction: ApplicationCommandInteraction){
    // 同名コマンドをcacheから検索
    const command = commands.find(value => value.command.name === interaction.data.name);
    // 存在しない場合は未実装の旨を通知
    if(command == undefined){
        await createInteractionResponse(
            interaction, 
            "This command is not yet implemented"
        )
    }else
        // 存在した場合はそれを実行
        command.execute(interaction)
}

export async function createInteractionResponse(interaction:DiscordInteraction, options:InteractionResponse|string) {
    const response:InteractionResponse = typeof(options) === "string"
    ? {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
            content: options
        }
      }
    : options

    await sendInteractionResponse(
        getBot(),
        BigInt(interaction.id),
        interaction.token,
        response
    )
}