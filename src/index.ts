import { Context, Schema } from 'koishi'
import { allTarotCards, drawRandomCard, drawMultipleCards, drawCardFromSuit, TarotCard } from './tarot-cards'

export const name = 'aka-tarot'

export interface Config {
  enableDailyDraw: boolean
  maxCardsPerDraw: number
}

export const Config: Schema<Config> = Schema.object({
  enableDailyDraw: Schema.boolean().default(true).description('启用每日抽牌功能'),
  maxCardsPerDraw: Schema.number().min(1).max(10).default(3).description('单次最大抽牌数量')
})

export function apply(ctx: Context, config: Config) {
  // 单张抽牌
  ctx.command('tarot', '塔罗牌占卜')
    .option('count', '-c <count:number>', { fallback: 1 })
    .option('suit', '-s <suit:string>', { fallback: 'all' })
    .action(({ options, session }) => {
      const count = Math.min(Math.max(1, options.count || 1), config.maxCardsPerDraw)
      const suit = options.suit || 'all'
      
      // 验证牌组参数
      const validSuits = ['all', 'major', 'cups', 'wands', 'swords', 'pentacles']
      if (!validSuits.includes(suit)) {
        return `无效的牌组参数。支持的牌组: ${validSuits.join(', ')}`
      }
      
      let cards: TarotCard[]
      
      if (suit === 'all') {
        cards = drawMultipleCards(count)
      } else {
        cards = Array.from({ length: count }, () => drawCardFromSuit(suit as any))
      }
      
      let result = `🔮 塔罗牌占卜结果 (${cards.length}张牌)\n\n`
      
      cards.forEach((card, index) => {
        const isReversed = Math.random() < 0.5
        const orientation = isReversed ? '逆位' : '正位'
        const keywords = isReversed ? card.reversed.keywords : card.upright.keywords
        const description = isReversed ? card.reversed.description : card.upright.description
        
        result += `${index + 1}. ${card.name} (${card.nameEn}) ${orientation}\n`
        result += `   关键词: ${keywords.join('、')}\n`
        result += `   含义: ${description}\n\n`
      })
      
      return result
    })

  // 每日抽牌
  if (config.enableDailyDraw) {
    ctx.command('tarot.daily', '每日塔罗牌')
      .action(({ session }) => {
        const card = drawRandomCard()
        const isReversed = Math.random() < 0.5
        const orientation = isReversed ? '逆位' : '正位'
        const keywords = isReversed ? card.reversed.keywords : card.upright.keywords
        const description = isReversed ? card.reversed.description : card.upright.description
        
        return `🔮 今日塔罗牌\n\n${card.name} (${card.nameEn}) ${orientation}\n关键词: ${keywords.join('、')}\n含义: ${description}`
      })
  }

  // 牌组信息
  ctx.command('tarot.info', '塔罗牌信息')
    .option('card', '-c <card:string>', { fallback: '' })
    .action(({ options, session }) => {
      if (options.card) {
        const card = allTarotCards.find(c => 
          c.name.includes(options.card) || c.nameEn.toLowerCase().includes(options.card.toLowerCase())
        )
        
        if (!card) {
          return `未找到名为 "${options.card}" 的塔罗牌`
        }
        
        return `🔮 ${card.name} (${card.nameEn})\n牌组: ${getSuitName(card.suit)}\n\n正位:\n关键词: ${card.upright.keywords.join('、')}\n含义: ${card.upright.description}\n\n逆位:\n关键词: ${card.reversed.keywords.join('、')}\n含义: ${card.reversed.description}`
      }
      
      return `🔮 塔罗牌系统\n\n包含 ${allTarotCards.length} 张牌:\n• 大阿卡纳: 22张\n• 圣杯牌组: 14张\n• 权杖牌组: 14张\n• 宝剑牌组: 14张\n• 星币牌组: 14张\n\n使用 /tarot 命令进行占卜`
    })

  // 牌组列表
  ctx.command('tarot.list', '塔罗牌列表')
    .option('suit', '-s <suit:string>', { fallback: 'all' })
    .action(({ options, session }) => {
      const suit = options.suit || 'all'
      
      // 验证牌组参数
      const validSuits = ['all', 'major', 'cups', 'wands', 'swords', 'pentacles']
      if (!validSuits.includes(suit)) {
        return `无效的牌组参数。支持的牌组: ${validSuits.join(', ')}`
      }
      
      let cards: TarotCard[]
      
      if (suit === 'all') {
        cards = allTarotCards
      } else {
        cards = allTarotCards.filter(card => card.suit === suit)
      }
      
      const suitName = suit === 'all' ? '全部' : getSuitName(suit as any)
      let result = `🔮 ${suitName}塔罗牌列表 (${cards.length}张)\n\n`
      
      cards.forEach((card, index) => {
        result += `${index + 1}. ${card.name} (${card.nameEn})\n`
      })
      
      return result
    })
}

function getSuitName(suit: string): string {
  const suitNames = {
    major: '大阿卡纳',
    cups: '圣杯牌组',
    wands: '权杖牌组',
    swords: '宝剑牌组',
    pentacles: '星币牌组'
  }
  return suitNames[suit] || suit
}
