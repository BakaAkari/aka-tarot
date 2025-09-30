import { Context, Schema } from 'koishi'
import { drawMultipleCards, TarotCard } from './tarot-cards'

export const name = 'aka-tarot'

export interface Config {
  uprightRate: number
}

export const Config: Schema<Config> = Schema.object({
  uprightRate: Schema.number().min(0).max(1).default(0.5).description('正位率 (0-1，0.5表示50%概率为正位)')
})

export function apply(ctx: Context, config: Config) {
  // 塔罗牌抽牌指令
  ctx.command('塔罗牌', '抽取塔罗牌')
    .action(({ session }) => {
      const cards = drawMultipleCards(3)
      
      let result = `🔮 塔罗牌占卜结果 (3张牌)\n\n`
      
      cards.forEach((card, index) => {
        const isReversed = Math.random() >= config.uprightRate
        const orientation = isReversed ? '逆位' : '正位'
        const keywords = isReversed ? card.reversed.keywords : card.upright.keywords
        const description = isReversed ? card.reversed.description : card.upright.description
        
        result += `${index + 1}. ${card.name} (${card.nameEn}) ${orientation}\n`
        result += `   关键词: ${keywords.join('、')}\n`
        result += `   含义: ${description}\n\n`
      })
      
      return result
    })
}
