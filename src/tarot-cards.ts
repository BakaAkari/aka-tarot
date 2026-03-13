export interface TarotCard {
  id: number
  name: string
  nameEn: string
  suit: 'major' | 'cups' | 'wands' | 'swords' | 'pentacles'
  number: number
  upright: {
    keywords: string[]
    description: string
  }
  reversed: {
    keywords: string[]
    description: string
  }
}

export const tarotCards: TarotCard[] = [
  // 大阿卡纳 (Major Arcana) 0-21
  {
    id: 0,
    name: '愚者',
    nameEn: 'The Fool',
    suit: 'major',
    number: 0,
    upright: {
      keywords: ['新开始', '冒险', '纯真', '自由', '自发性'],
      description: '代表新的开始、冒险精神和纯真的心态。'
    },
    reversed: {
      keywords: ['鲁莽', '愚蠢', '缺乏方向', '风险', '冲动'],
      description: '可能表示鲁莽的行为或缺乏计划性。'
    }
  },
  {
    id: 1,
    name: '魔术师',
    nameEn: 'The Magician',
    suit: 'major',
    number: 1,
    upright: {
      keywords: ['意志力', '技能', '专注', '创造力', '自信'],
      description: '代表拥有实现目标的能力和技能。'
    },
    reversed: {
      keywords: ['操纵', '欺骗', '缺乏技能', '意志薄弱', '滥用权力'],
      description: '可能表示技能不足或滥用能力。'
    }
  },
  {
    id: 2,
    name: '女祭司',
    nameEn: 'The High Priestess',
    suit: 'major',
    number: 2,
    upright: {
      keywords: ['直觉', '神秘', '潜意识', '智慧', '内在知识'],
      description: '代表直觉、内在智慧和神秘知识。'
    },
    reversed: {
      keywords: ['缺乏直觉', '秘密', '隐藏信息', '内在冲突', '忽视直觉'],
      description: '可能表示忽视内在声音或隐藏重要信息。'
    }
  },
  {
    id: 3,
    name: '皇后',
    nameEn: 'The Empress',
    suit: 'major',
    number: 3,
    upright: {
      keywords: ['丰盛', '母性', '创造力', '自然', '富足'],
      description: '代表丰盛、创造力和母性的力量。'
    },
    reversed: {
      keywords: ['依赖', '缺乏自信', '创造力受阻', '过度保护', '物质主义'],
      description: '可能表示创造力受阻或过度依赖他人。'
    }
  },
  {
    id: 4,
    name: '皇帝',
    nameEn: 'The Emperor',
    suit: 'major',
    number: 4,
    upright: {
      keywords: ['权威', '结构', '控制', '领导力', '稳定'],
      description: '代表权威、领导力和结构化的方法。'
    },
    reversed: {
      keywords: ['专制', '缺乏纪律', '权力滥用', '僵化', '控制欲过强'],
      description: '可能表示专制或缺乏灵活性。'
    }
  },
  {
    id: 5,
    name: '教皇',
    nameEn: 'The Hierophant',
    suit: 'major',
    number: 5,
    upright: {
      keywords: ['传统', '精神指导', '学习', '仪式', '信仰'],
      description: '代表传统、精神指导和传统智慧。'
    },
    reversed: {
      keywords: ['反叛', '非传统', '个人信仰', '挑战权威', '教条主义'],
      description: '可能表示挑战传统或教条主义。'
    }
  },
  {
    id: 6,
    name: '恋人',
    nameEn: 'The Lovers',
    suit: 'major',
    number: 6,
    upright: {
      keywords: ['爱情', '关系', '选择', '和谐', '价值观'],
      description: '代表爱情、关系和重要的选择。'
    },
    reversed: {
      keywords: ['不和谐', '错误选择', '价值观冲突', '关系问题', '缺乏平衡'],
      description: '可能表示关系问题或价值观冲突。'
    }
  },
  {
    id: 7,
    name: '战车',
    nameEn: 'The Chariot',
    suit: 'major',
    number: 7,
    upright: {
      keywords: ['意志力', '胜利', '决心', '控制', '成功'],
      description: '代表意志力、决心和成功的驱动力。'
    },
    reversed: {
      keywords: ['缺乏控制', '方向不明', '意志薄弱', '失败', '缺乏纪律'],
      description: '可能表示缺乏控制或方向不明。'
    }
  },
  {
    id: 8,
    name: '力量',
    nameEn: 'Strength',
    suit: 'major',
    number: 8,
    upright: {
      keywords: ['内在力量', '勇气', '耐心', '控制', '同情心'],
      description: '代表内在力量、勇气和耐心。'
    },
    reversed: {
      keywords: ['内在软弱', '缺乏自信', '自我怀疑', '控制欲', '恐惧'],
      description: '可能表示内在软弱或缺乏自信。'
    }
  },
  {
    id: 9,
    name: '隐者',
    nameEn: 'The Hermit',
    suit: 'major',
    number: 9,
    upright: {
      keywords: ['内省', '寻求', '智慧', '孤独', '指导'],
      description: '代表内省、寻求智慧和内在指导。'
    },
    reversed: {
      keywords: ['孤立', '缺乏方向', '拒绝帮助', '孤独', '迷失'],
      description: '可能表示过度孤立或拒绝寻求帮助。'
    }
  },
  {
    id: 10,
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    suit: 'major',
    number: 10,
    upright: {
      keywords: ['变化', '命运', '周期', '机会', '转折点'],
      description: '代表命运的变化和新的机会。'
    },
    reversed: {
      keywords: ['坏运气', '缺乏控制', '外部变化', '挫折', '命运逆转'],
      description: '可能表示坏运气或缺乏对变化的控制。'
    }
  },
  {
    id: 11,
    name: '正义',
    nameEn: 'Justice',
    suit: 'major',
    number: 11,
    upright: {
      keywords: ['公正', '平衡', '真理', '责任', '因果'],
      description: '代表公正、平衡和因果报应。'
    },
    reversed: {
      keywords: ['不公正', '缺乏平衡', '偏见', '不诚实', '责任逃避'],
      description: '可能表示不公正或缺乏平衡。'
    }
  },
  {
    id: 12,
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    suit: 'major',
    number: 12,
    upright: {
      keywords: ['牺牲', '等待', '新视角', '暂停', '精神成长'],
      description: '代表牺牲、等待和新的视角。'
    },
    reversed: {
      keywords: ['拖延', '抗拒变化', '牺牲无意义', '停滞', '缺乏行动'],
      description: '可能表示拖延或抗拒必要的变化。'
    }
  },
  {
    id: 13,
    name: '死神',
    nameEn: 'Death',
    suit: 'major',
    number: 13,
    upright: {
      keywords: ['结束', '转变', '重生', '释放', '新开始'],
      description: '代表结束、转变和重生的过程。'
    },
    reversed: {
      keywords: ['抗拒变化', '停滞', '恐惧', '拖延', '无法放手'],
      description: '可能表示抗拒变化或无法放手过去。'
    }
  },
  {
    id: 14,
    name: '节制',
    nameEn: 'Temperance',
    suit: 'major',
    number: 14,
    upright: {
      keywords: ['平衡', '和谐', '耐心', '节制', '融合'],
      description: '代表平衡、和谐和节制的力量。'
    },
    reversed: {
      keywords: ['不平衡', '极端', '缺乏耐心', '冲突', '不和谐'],
      description: '可能表示不平衡或极端行为。'
    }
  },
  {
    id: 15,
    name: '恶魔',
    nameEn: 'The Devil',
    suit: 'major',
    number: 15,
    upright: {
      keywords: ['束缚', '诱惑', '物质主义', '权力', '依赖'],
      description: '代表束缚、诱惑和物质主义的陷阱。'
    },
    reversed: {
      keywords: ['释放', '自由', '克服诱惑', '精神觉醒', '打破束缚'],
      description: '可能表示释放束缚或克服诱惑。'
    }
  },
  {
    id: 16,
    name: '塔',
    nameEn: 'The Tower',
    suit: 'major',
    number: 16,
    upright: {
      keywords: ['突然变化', '启示', '破坏', '解放', '觉醒'],
      description: '代表突然的变化、启示和破坏性的觉醒。'
    },
    reversed: {
      keywords: ['避免灾难', '抗拒变化', '内在动荡', '延迟', '恐惧变化'],
      description: '可能表示避免灾难或抗拒必要的变化。'
    }
  },
  {
    id: 17,
    name: '星星',
    nameEn: 'The Star',
    suit: 'major',
    number: 17,
    upright: {
      keywords: ['希望', '灵感', '精神指导', '平静', '更新'],
      description: '代表希望、灵感和精神指导。'
    },
    reversed: {
      keywords: ['绝望', '缺乏信心', '失去希望', '精神空虚', '缺乏指导'],
      description: '可能表示绝望或缺乏精神指导。'
    }
  },
  {
    id: 18,
    name: '月亮',
    nameEn: 'The Moon',
    suit: 'major',
    number: 18,
    upright: {
      keywords: ['幻觉', '恐惧', '潜意识', '欺骗', '直觉'],
      description: '代表幻觉、恐惧和潜意识的显现。'
    },
    reversed: {
      keywords: ['释放恐惧', '真相', '清晰', '克服幻觉', '内在平静'],
      description: '可能表示释放恐惧或获得清晰。'
    }
  },
  {
    id: 19,
    name: '太阳',
    nameEn: 'The Sun',
    suit: 'major',
    number: 19,
    upright: {
      keywords: ['快乐', '成功', '活力', '乐观', '成就'],
      description: '代表快乐、成功和积极能量。'
    },
    reversed: {
      keywords: ['过度自信', '缺乏活力', '延迟成功', '悲观', '过度乐观'],
      description: '可能表示过度自信或缺乏活力。'
    }
  },
  {
    id: 20,
    name: '审判',
    nameEn: 'Judgement',
    suit: 'major',
    number: 20,
    upright: {
      keywords: ['重生', '觉醒', '宽恕', '救赎', '内在召唤'],
      description: '代表重生、觉醒和内在的召唤。'
    },
    reversed: {
      keywords: ['缺乏自我意识', '自我批评', '内疚', '拒绝召唤', '缺乏宽恕'],
      description: '可能表示缺乏自我意识或过度自我批评。'
    }
  },
  {
    id: 21,
    name: '世界',
    nameEn: 'The World',
    suit: 'major',
    number: 21,
    upright: {
      keywords: ['完成', '成就', '旅行', '成功', '圆满'],
      description: '代表完成、成就和圆满的成功。'
    },
    reversed: {
      keywords: ['缺乏完成', '延迟', '缺乏成就感', '内在空虚', '缺乏方向'],
      description: '可能表示缺乏完成感或延迟的成就。'
    }
  }
]

// 小阿卡纳 - 圣杯牌组 (Cups) 22-35
const cupsCards: TarotCard[] = [
  {
    id: 22,
    name: '圣杯王牌',
    nameEn: 'Ace of Cups',
    suit: 'cups',
    number: 1,
    upright: {
      keywords: ['新感情', '精神觉醒', '直觉', '爱', '情感满足'],
      description: '代表新的感情开始和精神觉醒。'
    },
    reversed: {
      keywords: ['情感阻塞', '精神空虚', '缺乏爱', '情感不稳定', '拒绝感情'],
      description: '可能表示情感阻塞或精神空虚。'
    }
  },
  {
    id: 23,
    name: '圣杯二',
    nameEn: 'Two of Cups',
    suit: 'cups',
    number: 2,
    upright: {
      keywords: ['伙伴关系', '爱情', '和谐', '相互吸引', '情感联系'],
      description: '代表伙伴关系、爱情和情感和谐。'
    },
    reversed: {
      keywords: ['关系问题', '不平衡', '缺乏和谐', '情感冲突', '分离'],
      description: '可能表示关系问题或情感冲突。'
    }
  },
  {
    id: 24,
    name: '圣杯三',
    nameEn: 'Three of Cups',
    suit: 'cups',
    number: 3,
    upright: {
      keywords: ['友谊', '庆祝', '社交', '快乐', '团体和谐'],
      description: '代表友谊、庆祝和社交快乐。'
    },
    reversed: {
      keywords: ['社交问题', '缺乏庆祝', '友谊冲突', '孤立', '过度社交'],
      description: '可能表示社交问题或友谊冲突。'
    }
  },
  {
    id: 25,
    name: '圣杯四',
    nameEn: 'Four of Cups',
    suit: 'cups',
    number: 4,
    upright: {
      keywords: ['冷漠', '沉思', '错失机会', '情感满足', '内省'],
      description: '代表冷漠、沉思和可能错失的机会。'
    },
    reversed: {
      keywords: ['觉醒', '新机会', '情感参与', '接受帮助', '走出舒适圈'],
      description: '可能表示觉醒或接受新的机会。'
    }
  },
  {
    id: 26,
    name: '圣杯五',
    nameEn: 'Five of Cups',
    suit: 'cups',
    number: 5,
    upright: {
      keywords: ['失落', '悲伤', '失望', '遗憾', '情感痛苦'],
      description: '代表失落、悲伤和情感痛苦。'
    },
    reversed: {
      keywords: ['接受', '宽恕', '新开始', '情感愈合', '放下过去'],
      description: '可能表示接受现实或情感愈合。'
    }
  },
  {
    id: 27,
    name: '圣杯六',
    nameEn: 'Six of Cups',
    suit: 'cups',
    number: 6,
    upright: {
      keywords: ['怀旧', '童年', '纯真', '给予', '情感安全'],
      description: '代表怀旧、童年回忆和纯真。'
    },
    reversed: {
      keywords: ['活在当下', '成长', '情感成熟', '放下过去', '向前看'],
      description: '可能表示需要成长或放下过去。'
    }
  },
  {
    id: 28,
    name: '圣杯七',
    nameEn: 'Seven of Cups',
    suit: 'cups',
    number: 7,
    upright: {
      keywords: ['选择', '幻想', '白日梦', '诱惑', '多种可能性'],
      description: '代表选择、幻想和多种可能性。'
    },
    reversed: {
      keywords: ['明确选择', '现实', '专注', '清晰', '行动'],
      description: '可能表示需要明确选择或面对现实。'
    }
  },
  {
    id: 29,
    name: '圣杯八',
    nameEn: 'Eight of Cups',
    suit: 'cups',
    number: 8,
    upright: {
      keywords: ['放弃', '寻找', '精神追求', '情感成长', '离开'],
      description: '代表放弃现状，寻找更深层的意义。'
    },
    reversed: {
      keywords: ['避免放弃', '坚持', '情感满足', '接受现状', '缺乏勇气'],
      description: '可能表示避免必要的放弃或缺乏勇气。'
    }
  },
  {
    id: 30,
    name: '圣杯九',
    nameEn: 'Nine of Cups',
    suit: 'cups',
    number: 9,
    upright: {
      keywords: ['满足', '愿望实现', '情感满足', '快乐', '成功'],
      description: '代表情感满足和愿望实现。'
    },
    reversed: {
      keywords: ['缺乏满足', '过度自信', '情感空虚', '不切实际', '贪婪'],
      description: '可能表示缺乏满足或过度自信。'
    }
  },
  {
    id: 31,
    name: '圣杯十',
    nameEn: 'Ten of Cups',
    suit: 'cups',
    number: 10,
    upright: {
      keywords: ['家庭幸福', '和谐', '情感满足', '完美关系', '快乐'],
      description: '代表家庭幸福和情感和谐。'
    },
    reversed: {
      keywords: ['家庭问题', '缺乏和谐', '情感冲突', '不满足', '关系问题'],
      description: '可能表示家庭问题或情感冲突。'
    }
  },
  {
    id: 32,
    name: '圣杯侍从',
    nameEn: 'Page of Cups',
    suit: 'cups',
    number: 11,
    upright: {
      keywords: ['创意', '直觉', '情感表达', '纯真', '新开始'],
      description: '代表创意、直觉和情感表达。'
    },
    reversed: {
      keywords: ['情感不成熟', '缺乏创意', '情感阻塞', '拒绝成长', '幻想'],
      description: '可能表示情感不成熟或缺乏创意。'
    }
  },
  {
    id: 33,
    name: '圣杯骑士',
    nameEn: 'Knight of Cups',
    suit: 'cups',
    number: 12,
    upright: {
      keywords: ['浪漫', '魅力', '情感追求', '理想主义', '艺术'],
      description: '代表浪漫、魅力和情感追求。'
    },
    reversed: {
      keywords: ['情感不稳定', '不切实际', '缺乏承诺', '过度情绪化', '逃避'],
      description: '可能表示情感不稳定或缺乏承诺。'
    }
  },
  {
    id: 34,
    name: '圣杯皇后',
    nameEn: 'Queen of Cups',
    suit: 'cups',
    number: 13,
    upright: {
      keywords: ['同情心', '直觉', '情感智慧', '关怀', '精神指导'],
      description: '代表同情心、直觉和情感智慧。'
    },
    reversed: {
      keywords: ['情感依赖', '缺乏边界', '过度情绪化', '操纵', '自我牺牲'],
      description: '可能表示情感依赖或缺乏边界。'
    }
  },
  {
    id: 35,
    name: '圣杯国王',
    nameEn: 'King of Cups',
    suit: 'cups',
    number: 14,
    upright: {
      keywords: ['情感控制', '智慧', '同情心', '平衡', '精神领导'],
      description: '代表情感控制、智慧和同情心。'
    },
    reversed: {
      keywords: ['情感操纵', '缺乏控制', '情绪化', '滥用权力', '不诚实'],
      description: '可能表示情感操纵或缺乏控制。'
    }
  }
]

// 小阿卡纳 - 权杖牌组 (Wands) 36-49
const wandsCards: TarotCard[] = [
  {
    id: 36,
    name: '权杖王牌',
    nameEn: 'Ace of Wands',
    suit: 'wands',
    number: 1,
    upright: {
      keywords: ['新开始', '创造力', '灵感', '能量', '激情'],
      description: '代表新的开始、创造力和激情。'
    },
    reversed: {
      keywords: ['缺乏能量', '创造力受阻', '延迟', '缺乏灵感', '挫折'],
      description: '可能表示缺乏能量或创造力受阻。'
    }
  },
  {
    id: 37,
    name: '权杖二',
    nameEn: 'Two of Wands',
    suit: 'wands',
    number: 2,
    upright: {
      keywords: ['个人力量', '计划', '未来规划', '控制', '决策'],
      description: '代表个人力量、计划和未来规划。'
    },
    reversed: {
      keywords: ['缺乏计划', '个人力量不足', '缺乏远见', '控制欲', '优柔寡断'],
      description: '可能表示缺乏计划或个人力量不足。'
    }
  },
  {
    id: 38,
    name: '权杖三',
    nameEn: 'Three of Wands',
    suit: 'wands',
    number: 3,
    upright: {
      keywords: ['扩张', '远见', '领导力', '合作', '进步'],
      description: '代表扩张、远见和领导力。'
    },
    reversed: {
      keywords: ['缺乏远见', '延迟', '缺乏合作', '挫折', '缺乏领导力'],
      description: '可能表示缺乏远见或合作问题。'
    }
  },
  {
    id: 39,
    name: '权杖四',
    nameEn: 'Four of Wands',
    suit: 'wands',
    number: 4,
    upright: {
      keywords: ['庆祝', '和谐', '稳定', '成就', '社区'],
      description: '代表庆祝、和谐和稳定。'
    },
    reversed: {
      keywords: ['缺乏庆祝', '不稳定', '缺乏和谐', '延迟成就', '社区问题'],
      description: '可能表示缺乏庆祝或不稳定。'
    }
  },
  {
    id: 40,
    name: '权杖五',
    nameEn: 'Five of Wands',
    suit: 'wands',
    number: 5,
    upright: {
      keywords: ['竞争', '冲突', '挑战', '多样性', '成长'],
      description: '代表竞争、冲突和挑战。'
    },
    reversed: {
      keywords: ['避免冲突', '缺乏竞争', '妥协', '和平', '缺乏挑战'],
      description: '可能表示避免冲突或缺乏挑战。'
    }
  },
  {
    id: 41,
    name: '权杖六',
    nameEn: 'Six of Wands',
    suit: 'wands',
    number: 6,
    upright: {
      keywords: ['胜利', '成功', '认可', '领导力', '自信'],
      description: '代表胜利、成功和认可。'
    },
    reversed: {
      keywords: ['失败', '缺乏认可', '缺乏自信', '延迟成功', '自我怀疑'],
      description: '可能表示失败或缺乏认可。'
    }
  },
  {
    id: 42,
    name: '权杖七',
    nameEn: 'Seven of Wands',
    suit: 'wands',
    number: 7,
    upright: {
      keywords: ['挑战', '竞争', '坚持', '防御', '勇气'],
      description: '代表挑战、竞争和坚持。'
    },
    reversed: {
      keywords: ['放弃', '缺乏勇气', '过度防御', '优柔寡断', '缺乏坚持'],
      description: '可能表示放弃或缺乏勇气。'
    }
  },
  {
    id: 43,
    name: '权杖八',
    nameEn: 'Eight of Wands',
    suit: 'wands',
    number: 8,
    upright: {
      keywords: ['快速行动', '进展', '速度', '能量', '突破'],
      description: '代表快速行动、进展和突破。'
    },
    reversed: {
      keywords: ['延迟', '缺乏进展', '速度过快', '缺乏方向', '挫折'],
      description: '可能表示延迟或缺乏进展。'
    }
  },
  {
    id: 44,
    name: '权杖九',
    nameEn: 'Nine of Wands',
    suit: 'wands',
    number: 9,
    upright: {
      keywords: ['坚持', '韧性', '防御', '经验', '最后努力'],
      description: '代表坚持、韧性和防御。'
    },
    reversed: {
      keywords: ['放弃', '缺乏韧性', '过度防御', '疲惫', '缺乏坚持'],
      description: '可能表示放弃或缺乏韧性。'
    }
  },
  {
    id: 45,
    name: '权杖十',
    nameEn: 'Ten of Wands',
    suit: 'wands',
    number: 10,
    upright: {
      keywords: ['负担', '责任', '压力', '成就', '完成'],
      description: '代表负担、责任和压力。'
    },
    reversed: {
      keywords: ['释放负担', '缺乏责任', '过度压力', '缺乏成就', '逃避'],
      description: '可能表示需要释放负担或缺乏责任。'
    }
  },
  {
    id: 46,
    name: '权杖侍从',
    nameEn: 'Page of Wands',
    suit: 'wands',
    number: 11,
    upright: {
      keywords: ['热情', '新想法', '探索', '创造力', '学习'],
      description: '代表热情、新想法和探索精神。'
    },
    reversed: {
      keywords: ['缺乏热情', '缺乏创意', '缺乏方向', '延迟', '缺乏学习'],
      description: '可能表示缺乏热情或创意。'
    }
  },
  {
    id: 47,
    name: '权杖骑士',
    nameEn: 'Knight of Wands',
    suit: 'wands',
    number: 12,
    upright: {
      keywords: ['冒险', '热情', '冲动', '能量', '行动'],
      description: '代表冒险、热情和冲动行动。'
    },
    reversed: {
      keywords: ['缺乏方向', '冲动', '缺乏耐心', '延迟', '缺乏能量'],
      description: '可能表示缺乏方向或过度冲动。'
    }
  },
  {
    id: 48,
    name: '权杖皇后',
    nameEn: 'Queen of Wands',
    suit: 'wands',
    number: 13,
    upright: {
      keywords: ['自信', '创造力', '热情', '独立', '领导力'],
      description: '代表自信、创造力和热情。'
    },
    reversed: {
      keywords: ['缺乏自信', '创造力受阻', '缺乏热情', '依赖', '缺乏领导力'],
      description: '可能表示缺乏自信或创造力受阻。'
    }
  },
  {
    id: 49,
    name: '权杖国王',
    nameEn: 'King of Wands',
    suit: 'wands',
    number: 14,
    upright: {
      keywords: ['领导力', '远见', '创造力', '自信', '冒险'],
      description: '代表领导力、远见和创造力。'
    },
    reversed: {
      keywords: ['专制', '缺乏远见', '创造力受阻', '缺乏自信', '冲动'],
      description: '可能表示专制或缺乏远见。'
    }
  }
]

// 小阿卡纳 - 宝剑牌组 (Swords) 50-63
const swordsCards: TarotCard[] = [
  {
    id: 50,
    name: '宝剑王牌',
    nameEn: 'Ace of Swords',
    suit: 'swords',
    number: 1,
    upright: {
      keywords: ['新想法', '清晰', '真理', '突破', '精神力量'],
      description: '代表新想法、清晰和真理。'
    },
    reversed: {
      keywords: ['混乱', '缺乏清晰', '欺骗', '精神混乱', '缺乏真理'],
      description: '可能表示混乱或缺乏清晰。'
    }
  },
  {
    id: 51,
    name: '宝剑二',
    nameEn: 'Two of Swords',
    suit: 'swords',
    number: 2,
    upright: {
      keywords: ['困难选择', '平衡', '僵局', '逃避', '决策'],
      description: '代表困难的选择和平衡。'
    },
    reversed: {
      keywords: ['明确选择', '缺乏平衡', '优柔寡断', '逃避现实', '缺乏决策'],
      description: '可能表示需要明确选择或缺乏平衡。'
    }
  },
  {
    id: 52,
    name: '宝剑三',
    nameEn: 'Three of Swords',
    suit: 'swords',
    number: 3,
    upright: {
      keywords: ['心碎', '悲伤', '痛苦', '背叛', '情感创伤'],
      description: '代表心碎、悲伤和情感创伤。'
    },
    reversed: {
      keywords: ['愈合', '宽恕', '接受', '情感恢复', '放下痛苦'],
      description: '可能表示愈合或情感恢复。'
    }
  },
  {
    id: 53,
    name: '宝剑四',
    nameEn: 'Four of Swords',
    suit: 'swords',
    number: 4,
    upright: {
      keywords: ['休息', '恢复', '冥想', '和平', '内省'],
      description: '代表休息、恢复和冥想。'
    },
    reversed: {
      keywords: ['缺乏休息', '过度活动', '缺乏恢复', '不安', '缺乏内省'],
      description: '可能表示缺乏休息或过度活动。'
    }
  },
  {
    id: 54,
    name: '宝剑五',
    nameEn: 'Five of Swords',
    suit: 'swords',
    number: 5,
    upright: {
      keywords: ['冲突', '背叛', '失败', '不公正', '胜利'],
      description: '代表冲突、背叛和不公正的胜利。'
    },
    reversed: {
      keywords: ['和解', '宽恕', '妥协', '和平', '避免冲突'],
      description: '可能表示和解或避免冲突。'
    }
  },
  {
    id: 55,
    name: '宝剑六',
    nameEn: 'Six of Swords',
    suit: 'swords',
    number: 6,
    upright: {
      keywords: ['过渡', '改变', '离开', '平静', '新开始'],
      description: '代表过渡、改变和平静的新开始。'
    },
    reversed: {
      keywords: ['抗拒改变', '缺乏过渡', '停滞', '不安', '缺乏新开始'],
      description: '可能表示抗拒改变或缺乏过渡。'
    }
  },
  {
    id: 56,
    name: '宝剑七',
    nameEn: 'Seven of Swords',
    suit: 'swords',
    number: 7,
    upright: {
      keywords: ['欺骗', '偷窃', '策略', '秘密', '不诚实'],
      description: '代表欺骗、策略和不诚实。'
    },
    reversed: {
      keywords: ['诚实', '真相', '缺乏策略', '直接', '透明'],
      description: '可能表示诚实或缺乏策略。'
    }
  },
  {
    id: 57,
    name: '宝剑八',
    nameEn: 'Eight of Swords',
    suit: 'swords',
    number: 8,
    upright: {
      keywords: ['束缚', '限制', '自我限制', '恐惧', '无力'],
      description: '代表束缚、限制和自我限制。'
    },
    reversed: {
      keywords: ['自由', '解放', '克服恐惧', '力量', '突破限制'],
      description: '可能表示自由或克服恐惧。'
    }
  },
  {
    id: 58,
    name: '宝剑九',
    nameEn: 'Nine of Swords',
    suit: 'swords',
    number: 9,
    upright: {
      keywords: ['焦虑', '恐惧', '噩梦', '担忧', '精神痛苦'],
      description: '代表焦虑、恐惧和精神痛苦。'
    },
    reversed: {
      keywords: ['释放恐惧', '平静', '希望', '精神愈合', '克服焦虑'],
      description: '可能表示释放恐惧或精神愈合。'
    }
  },
  {
    id: 59,
    name: '宝剑十',
    nameEn: 'Ten of Swords',
    suit: 'swords',
    number: 10,
    upright: {
      keywords: ['结束', '背叛', '失败', '痛苦', '新开始'],
      description: '代表结束、背叛和痛苦的新开始。'
    },
    reversed: {
      keywords: ['恢复', '希望', '重生', '愈合', '避免结束'],
      description: '可能表示恢复或避免结束。'
    }
  },
  {
    id: 60,
    name: '宝剑侍从',
    nameEn: 'Page of Swords',
    suit: 'swords',
    number: 11,
    upright: {
      keywords: ['新想法', '好奇心', '学习', '沟通', '警觉'],
      description: '代表新想法、好奇心和学习。'
    },
    reversed: {
      keywords: ['缺乏想法', '缺乏好奇心', '缺乏学习', '沟通问题', '缺乏警觉'],
      description: '可能表示缺乏想法或好奇心。'
    }
  },
  {
    id: 61,
    name: '宝剑骑士',
    nameEn: 'Knight of Swords',
    suit: 'swords',
    number: 12,
    upright: {
      keywords: ['行动', '冲动', '直接', '挑战', '能量'],
      description: '代表行动、冲动和直接挑战。'
    },
    reversed: {
      keywords: ['缺乏行动', '冲动', '缺乏方向', '延迟', '缺乏能量'],
      description: '可能表示缺乏行动或过度冲动。'
    }
  },
  {
    id: 62,
    name: '宝剑皇后',
    nameEn: 'Queen of Swords',
    suit: 'swords',
    number: 13,
    upright: {
      keywords: ['独立', '清晰', '直接', '智慧', '诚实'],
      description: '代表独立、清晰和智慧。'
    },
    reversed: {
      keywords: ['依赖', '缺乏清晰', '间接', '缺乏智慧', '不诚实'],
      description: '可能表示依赖或缺乏清晰。'
    }
  },
  {
    id: 63,
    name: '宝剑国王',
    nameEn: 'King of Swords',
    suit: 'swords',
    number: 14,
    upright: {
      keywords: ['权威', '真理', '公正', '领导力', '智慧'],
      description: '代表权威、真理和公正。'
    },
    reversed: {
      keywords: ['滥用权威', '不公正', '缺乏真理', '专制', '缺乏智慧'],
      description: '可能表示滥用权威或不公正。'
    }
  }
]

// 小阿卡纳 - 星币牌组 (Pentacles) 64-77
const pentaclesCards: TarotCard[] = [
  {
    id: 64,
    name: '星币王牌',
    nameEn: 'Ace of Pentacles',
    suit: 'pentacles',
    number: 1,
    upright: {
      keywords: ['新机会', '物质成功', '潜力', '稳定', '财富'],
      description: '代表新机会、物质成功和财富潜力。'
    },
    reversed: {
      keywords: ['错失机会', '缺乏成功', '缺乏潜力', '不稳定', '缺乏财富'],
      description: '可能表示错失机会或缺乏成功。'
    }
  },
  {
    id: 65,
    name: '星币二',
    nameEn: 'Two of Pentacles',
    suit: 'pentacles',
    number: 2,
    upright: {
      keywords: ['平衡', '优先事项', '时间管理', '适应', '灵活性'],
      description: '代表平衡、优先事项和时间管理。'
    },
    reversed: {
      keywords: ['不平衡', '缺乏优先事项', '时间管理问题', '缺乏适应', '缺乏灵活性'],
      description: '可能表示不平衡或时间管理问题。'
    }
  },
  {
    id: 66,
    name: '星币三',
    nameEn: 'Three of Pentacles',
    suit: 'pentacles',
    number: 3,
    upright: {
      keywords: ['团队合作', '技能', '计划', '质量', '协作'],
      description: '代表团队合作、技能和协作。'
    },
    reversed: {
      keywords: ['缺乏合作', '缺乏技能', '缺乏计划', '质量差', '缺乏协作'],
      description: '可能表示缺乏合作或技能问题。'
    }
  },
  {
    id: 67,
    name: '星币四',
    nameEn: 'Four of Pentacles',
    suit: 'pentacles',
    number: 4,
    upright: {
      keywords: ['安全', '控制', '保守', '稳定', '物质主义'],
      description: '代表安全、控制和保守。'
    },
    reversed: {
      keywords: ['缺乏安全', '缺乏控制', '冒险', '不稳定', '缺乏物质主义'],
      description: '可能表示缺乏安全或过度冒险。'
    }
  },
  {
    id: 68,
    name: '星币五',
    nameEn: 'Five of Pentacles',
    suit: 'pentacles',
    number: 5,
    upright: {
      keywords: ['贫困', '孤立', '缺乏', '困难', '精神空虚'],
      description: '代表贫困、孤立和困难。'
    },
    reversed: {
      keywords: ['恢复', '帮助', '富足', '改善', '精神满足'],
      description: '可能表示恢复或获得帮助。'
    }
  },
  {
    id: 69,
    name: '星币六',
    nameEn: 'Six of Pentacles',
    suit: 'pentacles',
    number: 6,
    upright: {
      keywords: ['慷慨', '分享', '给予', '平衡', '慈善'],
      description: '代表慷慨、分享和给予。'
    },
    reversed: {
      keywords: ['自私', '缺乏分享', '缺乏给予', '不平衡', '缺乏慈善'],
      description: '可能表示自私或缺乏分享。'
    }
  },
  {
    id: 70,
    name: '星币七',
    nameEn: 'Seven of Pentacles',
    suit: 'pentacles',
    number: 7,
    upright: {
      keywords: ['耐心', '长期规划', '投资', '成长', '评估'],
      description: '代表耐心、长期规划和投资。'
    },
    reversed: {
      keywords: ['缺乏耐心', '缺乏规划', '缺乏投资', '缺乏成长', '缺乏评估'],
      description: '可能表示缺乏耐心或规划。'
    }
  },
  {
    id: 71,
    name: '星币八',
    nameEn: 'Eight of Pentacles',
    suit: 'pentacles',
    number: 8,
    upright: {
      keywords: ['技能发展', '专注', '质量', '学习', '工艺'],
      description: '代表技能发展、专注和学习。'
    },
    reversed: {
      keywords: ['缺乏技能', '缺乏专注', '质量差', '缺乏学习', '缺乏工艺'],
      description: '可能表示缺乏技能或专注。'
    }
  },
  {
    id: 72,
    name: '星币九',
    nameEn: 'Nine of Pentacles',
    suit: 'pentacles',
    number: 9,
    upright: {
      keywords: ['独立', '自给自足', '成功', '享受', '富足'],
      description: '代表独立、自给自足和成功。'
    },
    reversed: {
      keywords: ['依赖', '缺乏自给自足', '缺乏成功', '缺乏享受', '缺乏富足'],
      description: '可能表示依赖或缺乏自给自足。'
    }
  },
  {
    id: 73,
    name: '星币十',
    nameEn: 'Ten of Pentacles',
    suit: 'pentacles',
    number: 10,
    upright: {
      keywords: ['财富', '家庭', '传统', '成功', '稳定'],
      description: '代表财富、家庭和传统成功。'
    },
    reversed: {
      keywords: ['缺乏财富', '家庭问题', '缺乏传统', '缺乏成功', '不稳定'],
      description: '可能表示缺乏财富或家庭问题。'
    }
  },
  {
    id: 74,
    name: '星币侍从',
    nameEn: 'Page of Pentacles',
    suit: 'pentacles',
    number: 11,
    upright: {
      keywords: ['学习', '机会', '潜力', '实用', '新开始'],
      description: '代表学习、机会和实用潜力。'
    },
    reversed: {
      keywords: ['缺乏学习', '缺乏机会', '缺乏潜力', '缺乏实用', '缺乏新开始'],
      description: '可能表示缺乏学习或机会。'
    }
  },
  {
    id: 75,
    name: '星币骑士',
    nameEn: 'Knight of Pentacles',
    suit: 'pentacles',
    number: 12,
    upright: {
      keywords: ['效率', '实用', '可靠', '耐心', '努力工作'],
      description: '代表效率、实用和可靠。'
    },
    reversed: {
      keywords: ['缺乏效率', '缺乏实用', '不可靠', '缺乏耐心', '缺乏努力工作'],
      description: '可能表示缺乏效率或不可靠。'
    }
  },
  {
    id: 76,
    name: '星币皇后',
    nameEn: 'Queen of Pentacles',
    suit: 'pentacles',
    number: 13,
    upright: {
      keywords: ['实用', '关怀', '富足', '稳定', '物质成功'],
      description: '代表实用、关怀和富足。'
    },
    reversed: {
      keywords: ['缺乏实用', '缺乏关怀', '缺乏富足', '不稳定', '缺乏物质成功'],
      description: '可能表示缺乏实用或关怀。'
    }
  },
  {
    id: 77,
    name: '星币国王',
    nameEn: 'King of Pentacles',
    suit: 'pentacles',
    number: 14,
    upright: {
      keywords: ['成功', '稳定', '实用', '领导力', '财富'],
      description: '代表成功、稳定和财富。'
    },
    reversed: {
      keywords: ['缺乏成功', '不稳定', '缺乏实用', '缺乏领导力', '缺乏财富'],
      description: '可能表示缺乏成功或稳定。'
    }
  }
]

// 合并所有牌组
export const allTarotCards = [
  ...tarotCards,
  ...cupsCards,
  ...wandsCards,
  ...swordsCards,
  ...pentaclesCards
]

// 按牌组分类的牌
export const tarotCardsBySuit = {
  major: tarotCards,
  cups: cupsCards,
  wands: wandsCards,
  swords: swordsCards,
  pentacles: pentaclesCards
}

// 随机抽取一张牌
export function drawRandomCard(): TarotCard {
  const randomIndex = Math.floor(Math.random() * allTarotCards.length)
  return allTarotCards[randomIndex]
}

// 随机抽取多张牌
export function drawMultipleCards(count: number): TarotCard[] {
  const shuffled = [...allTarotCards].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// 按牌组抽取牌
export function drawCardFromSuit(suit: 'major' | 'cups' | 'wands' | 'swords' | 'pentacles'): TarotCard {
  const suitCards = tarotCardsBySuit[suit]
  const randomIndex = Math.floor(Math.random() * suitCards.length)
  return suitCards[randomIndex]
}
