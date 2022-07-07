import { commands } from "../caches/mod.ts"
import { ApplicationCommandInteraction } from "../../types/mod.ts"
import { InteractionResponse, InteractionResponseTypes } from "../../deps.ts"

export function onApplicationCommand(interaction: ApplicationCommandInteraction): InteractionResponse{
    // 同名コマンドをcacheから検索
    const command = commands.find(value => value.command.name === interaction.data.name);
    // 存在しない場合は未実装の旨を通知
    if(command == undefined){
        return {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                content: "This command is not yet implemented"
            }
        }
    }else
        // 存在した場合はそれを実行
        return command.execute(interaction)
}