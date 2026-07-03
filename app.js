const DIMENSIONS = [
  ["power", "权力驱动力"],
  ["order", "秩序偏好"],
  ["risk", "风险承担"],
  ["realism", "现实主义"],
  ["idealism", "理想主义"],
  ["expression", "表达欲"],
  ["insight", "人性洞察"],
  ["organization", "组织能力"],
  ["patience", "隐忍程度"],
  ["detachment", "自我超脱"],
];

const DIMENSION_HELP = {
  power: "是否倾向掌控局面、争取主导权、影响他人。",
  order: "是否重视规则、流程、稳定、制度和边界。",
  risk: "是否愿意冒险、下注、突破常规。",
  realism: "是否重视利益、资源、结果和可执行性。",
  idealism: "是否重视原则、信念、道义和长期价值。",
  expression: "是否倾向表达自我、讲故事、影响情绪和气氛。",
  insight: "是否擅长识人、判断动机、处理复杂关系。",
  organization: "是否擅长安排流程、协调资源、维持系统运转。",
  patience: "是否能等待、克制、延迟满足、承受压抑。",
  detachment: "是否不执着于世俗成功、名利、权力和外部评价。",
};

const QUESTIONS = [
  {
    text: "你进入一个混乱的团队，最先会做什么？",
    options: [
      ["先明确规则和分工，让事情恢复秩序", { order: 4, organization: 4, power: 1 }],
      ["先找到真正有影响力的人，建立关键关系", { insight: 4, realism: 3, power: 2 }],
      ["先提出一个足够有吸引力的目标，让大家愿意跟随", { expression: 3, idealism: 3, power: 3 }],
      ["先观察局面，不急着表态，等关键矛盾暴露", { insight: 4, patience: 4, detachment: 1 }],
    ],
  },
  {
    text: "面对一个高风险但高回报的机会，你会怎么选？",
    options: [
      ["只要收益足够大，可以果断下注", { risk: 5, power: 3, realism: 2 }],
      ["先计算资源、代价和失败后果", { realism: 5, order: 2, organization: 2 }],
      ["如果它符合我的长期目标，我愿意承担风险", { idealism: 4, risk: 3, patience: 2 }],
      ["我更倾向于不被机会牵着走，保持自己的节奏", { detachment: 5, patience: 3, risk: 1 }],
    ],
  },
  {
    text: "突然被安排到一个陌生地方谋生，你会优先做什么？",
    options: [
      ["先找稳定差事，保证基本生活", { order: 3, realism: 4, patience: 2 }],
      ["先观察本地谁说了算，摸清关系网", { insight: 5, realism: 3, patience: 1 }],
      ["先学一门手艺，让自己有不可替代性", { organization: 3, patience: 4, idealism: 1 }],
      ["先找机会流动，不把自己困在一个地方", { risk: 4, detachment: 3, realism: 2 }],
    ],
  },
  {
    text: "当你发现规则对自己不公平时，你通常会怎么做？",
    options: [
      ["忍一段时间，等自己有能力后再调整位置", { patience: 5, realism: 3, insight: 1 }],
      ["直接寻找规则漏洞，让自己少吃亏", { realism: 4, insight: 3, risk: 2 }],
      ["尽量争取改变规则，不想一直被压着", { power: 4, idealism: 4, expression: 1 }],
      ["离开这个环境，不把时间浪费在烂规则里", { detachment: 4, risk: 3, idealism: 1 }],
    ],
  },
  {
    text: "有人在众人面前误解你，你会怎么处理？",
    options: [
      ["当场讲清楚，不能让误会继续扩散", { expression: 4, power: 2, idealism: 2 }],
      ["先稳住场面，事后找关键人解释", { insight: 4, patience: 3, realism: 2 }],
      ["拿出证据和流程，让事实自己说话", { order: 4, organization: 3, realism: 2 }],
      ["能不争就不争，不把评价看得太重", { detachment: 5, patience: 2, expression: 1 }],
    ],
  },
  {
    text: "资源不够时，你更可能采用哪种办法？",
    options: [
      ["重新排优先级，把有限资源用在最关键处", { organization: 4, realism: 4, order: 1 }],
      ["去谈交换，找到彼此都能接受的筹码", { insight: 3, realism: 4, expression: 2 }],
      ["先撑住最基本的局面，慢慢等机会", { patience: 5, order: 2, realism: 2 }],
      ["干脆换一条路，不被原计划拖住", { risk: 4, detachment: 3, power: 1 }],
    ],
  },
  {
    text: "面对一个很强势的上级，你通常怎么相处？",
    options: [
      ["把事情做稳，少给对方挑错的机会", { order: 4, organization: 3, patience: 2 }],
      ["判断对方真正要什么，再决定怎么回应", { insight: 5, realism: 3, patience: 1 }],
      ["适度表达自己的价值，不能一直隐身", { expression: 3, power: 3, realism: 1 }],
      ["保持距离，不让自己完全被对方牵着走", { detachment: 4, patience: 2, insight: 2 }],
    ],
  },
  {
    text: "一群人要完成一件复杂任务，你会自然承担什么角色？",
    options: [
      ["排计划、分节点、盯进度的人", { organization: 5, order: 4, power: 1 }],
      ["负责协调关系、化解冲突的人", { insight: 4, expression: 2, patience: 2 }],
      ["提出方向、鼓动大家往前走的人", { power: 4, expression: 3, idealism: 2 }],
      ["做关键但不显眼的部分，不必站中心", { patience: 3, realism: 3, detachment: 2 }],
    ],
  },
  {
    text: "如果竞争越来越激烈，你会怎样调整？",
    options: [
      ["加快行动，占住更有利的位置", { power: 4, risk: 3, realism: 2 }],
      ["找到别人忽略的细分位置，避开正面硬碰", { insight: 4, realism: 4, detachment: 1 }],
      ["坚持自己的标准，不为了竞争乱改方向", { idealism: 4, patience: 3, order: 1 }],
      ["把注意力放回长期积累，少被外界带节奏", { patience: 4, organization: 2, detachment: 3 }],
    ],
  },
  {
    text: "长期处在压抑环境里，你最可能怎样保护自己？",
    options: [
      ["记录规律和边界，尽量减少不可控损耗", { order: 4, patience: 4, realism: 1 }],
      ["寻找能互相照应的人，别一个人硬扛", { insight: 3, expression: 2, realism: 3 }],
      ["把不满转化成目标，等机会翻身", { idealism: 3, power: 3, patience: 3 }],
      ["降低欲望，给自己留一块不被打扰的空间", { detachment: 5, patience: 3, idealism: 1 }],
    ],
  },
  {
    text: "失败以后，你通常先想到什么？",
    options: [
      ["哪里判断错了，下次如何修正流程", { organization: 4, order: 3, realism: 2 }],
      ["谁在局里起了关键作用，人情变化是什么", { insight: 5, realism: 2, patience: 1 }],
      ["这个失败有没有违背我真正想做的事", { idealism: 4, detachment: 2, patience: 1 }],
      ["先活下来，亏损止住，再谈以后", { realism: 5, risk: 1, patience: 2 }],
    ],
  },
  {
    text: "到一个消息混乱的新环境，你会怎样收集信息？",
    options: [
      ["看制度、告示、账册和公开规则", { order: 4, organization: 3, realism: 1 }],
      ["听茶馆酒肆里的闲话，从细节里辨真假", { insight: 4, expression: 3, realism: 1 }],
      ["亲自试几次，用行动换真实反馈", { risk: 4, realism: 3, power: 1 }],
      ["先少说话，多看人怎么做", { patience: 4, insight: 3, detachment: 2 }],
    ],
  },
  {
    text: "面对利益分配，你更看重什么？",
    options: [
      ["规则清楚，别让以后留下争议", { order: 5, organization: 2, idealism: 1 }],
      ["实际贡献和风险承担要说得过去", { realism: 4, risk: 2, power: 1 }],
      ["关系不要撕破，留着以后还能合作", { insight: 4, patience: 2, realism: 2 }],
      ["够用就好，不为一点得失耗尽自己", { detachment: 5, patience: 2, idealism: 1 }],
    ],
  },
  {
    text: "如果在自由和稳定之间选，你会更偏向哪边？",
    options: [
      ["稳定更重要，有稳定才有余地", { order: 4, realism: 3, patience: 2 }],
      ["自由更重要，不能把自己困死", { detachment: 4, risk: 3, idealism: 1 }],
      ["看阶段，能上升时要敢抓机会", { risk: 3, power: 3, realism: 3 }],
      ["我想要的是有边界的自由，而不是混乱", { order: 2, detachment: 3, idealism: 3 }],
    ],
  },
  {
    text: "有人给你一个上升机会，但代价是不确定且会得罪人，你会怎么想？",
    options: [
      ["机会窗口很短，值得认真下注", { power: 4, risk: 4, realism: 1 }],
      ["先算清楚得罪谁、损失什么、有没有退路", { realism: 5, insight: 3, organization: 1 }],
      ["如果它符合我的原则和长期方向，可以承受代价", { idealism: 5, risk: 2, patience: 1 }],
      ["不急着上升，位置合适比爬得快更重要", { detachment: 4, patience: 4, order: 1 }],
    ],
  },
];

const RAW_RESULTS = [
  [1, "县衙师爷型", "张良、陈平、刘伯温", "识局、谋划、幕后影响", [58, 68, 34, 76, 45, 42, 88, 72, 72, 42]],
  [2, "边关小吏型", "苏武、班超早期、张骞", "忍耐、执行、环境适应", [38, 72, 48, 70, 50, 28, 58, 66, 88, 40]],
  [3, "寒门书生型", "范仲淹、欧阳修、王安石", "上进、压抑、长期积累", [62, 66, 36, 56, 78, 52, 50, 64, 84, 24]],
  [4, "江南账房型", "沈万三、胡雪岩早期、子贡", "计算、稳妥、资源意识", [42, 78, 28, 88, 34, 26, 60, 84, 64, 30]],
  [5, "茶馆掌柜型", "吕不韦、冯梦龙、纪晓岚", "消息、人情、圆滑观察", [48, 42, 44, 72, 34, 78, 88, 50, 54, 38]],
  [6, "驿站差役型", "张骞、郑和、徐霞客", "奔波、传递、抗压", [34, 48, 68, 64, 38, 42, 58, 56, 78, 46]],
  [7, "府中幕僚型", "李斯、贾诩、姚广孝", "低调、判断、借势", [66, 58, 38, 82, 34, 34, 90, 68, 76, 38]],
  [8, "宗族里正型", "曾国藩、司马光、范仲淹", "秩序、责任、协调", [56, 88, 24, 64, 70, 36, 60, 86, 72, 26]],
  [9, "镖局伙计型", "关羽、鲁智深、武松", "义气、行动、江湖规则", [58, 44, 74, 56, 62, 44, 42, 38, 42, 24]],
  [10, "书院先生型", "孔子、朱熹、王阳明", "教化、原则、精神秩序", [46, 82, 22, 34, 92, 62, 58, 72, 70, 44]],
  [11, "医馆学徒型", "李时珍、张仲景、孙思邈", "细心、观察、长期学习", [26, 72, 20, 62, 66, 24, 76, 70, 86, 48]],
  [12, "商队管事型", "子贡、范蠡、胡雪岩", "交易、调度、现实判断", [56, 66, 62, 90, 28, 48, 70, 82, 54, 32]],
  [13, "市井说书人型", "司马迁、蒲松龄、施耐庵", "表达、故事、情绪感染", [36, 28, 46, 42, 58, 96, 70, 28, 40, 50]],
  [14, "寺庙抄经人型", "玄奘、慧能、弘一法师", "克制、重复、内在秩序", [18, 78, 12, 34, 78, 18, 52, 58, 94, 84]],
  [15, "隐居山民型", "陶渊明、庄子、许由", "自洽、低欲望、疏离", [14, 42, 24, 30, 62, 26, 50, 30, 72, 96]],
  [16, "军营老卒型", "廉颇、黄忠、程咬金", "经验、服从、战场直觉", [44, 76, 58, 68, 42, 24, 56, 62, 82, 22]],
  [17, "码头脚夫型", "樊哙、武松、鲁智深", "直接、体力、生存本能", [42, 28, 70, 74, 28, 38, 32, 28, 46, 18]],
  [18, "田间佃农型", "刘邦早期、朱元璋早期、陈胜", "忍耐、务实、低安全感", [32, 58, 24, 82, 30, 18, 42, 48, 92, 20]],
  [19, "盐铺伙计型", "管仲、桑弘羊、吕不韦", "精算、谨慎、利益敏感", [44, 72, 26, 92, 24, 30, 68, 70, 62, 24]],
  [20, "药铺掌柜型", "孙思邈、李时珍、董奉", "稳重、信誉、经验判断", [34, 78, 20, 74, 58, 34, 70, 74, 72, 38]],
  [21, "客栈老板型", "孟尝君门客、吕不韦、冯梦龙", "人际流动、察言观色", [46, 46, 46, 76, 30, 64, 86, 58, 50, 36]],
  [22, "城门守卒型", "周亚夫、蒙恬、戚继光", "纪律、边界、防御", [36, 90, 30, 62, 48, 18, 46, 66, 72, 18]],
  [23, "抄书小吏型", "司马迁、班固、沈括", "细节、记录、系统记忆", [24, 84, 14, 58, 64, 30, 64, 82, 86, 42]],
  [24, "织坊女工型", "黄道婆、缇萦、孟母", "忍耐、技艺、韧性", [24, 70, 18, 68, 52, 22, 46, 64, 92, 30]],
  [25, "绣楼才女型", "李清照、谢道韫、卓文君", "敏感、才情、自我保留", [30, 42, 24, 32, 70, 82, 72, 36, 68, 56]],
  [26, "内宅管事型", "孝庄、吕雉、上官婉儿", "分寸、管理、权力边界", [62, 78, 28, 70, 42, 42, 82, 88, 70, 28]],
  [27, "大户账房型", "萧何、刘晏、张居正", "稳定系统、计算、执行", [52, 88, 22, 90, 36, 24, 58, 94, 66, 20]],
  [28, "乡间郎中型", "华佗、扁鹊、张仲景", "实用、同理、经验判断", [28, 62, 26, 76, 64, 32, 78, 58, 78, 42]],
  [29, "游方道士型", "张三丰、葛洪、庄子", "边缘自由、超脱、观察", [20, 28, 54, 38, 66, 44, 72, 24, 66, 94]],
  [30, "落魄文士型", "杜甫、柳宗元、辛弃疾", "自尊、失意、表达欲", [42, 36, 30, 32, 82, 90, 58, 30, 72, 44]],
  [31, "商铺少东家型", "胡雪岩、吕不韦、范蠡", "机会、转型、继承压力", [58, 54, 58, 86, 34, 54, 64, 66, 44, 22]],
  [32, "行会工匠型", "鲁班、黄道婆、宋应星", "技艺、专注、慢成长", [26, 74, 18, 66, 58, 24, 48, 76, 88, 36]],
  [33, "码头牙人型", "吕不韦、子贡、沈万三", "交易、人脉、机会嗅觉", [54, 36, 64, 88, 22, 66, 84, 54, 38, 26]],
  [34, "官府捕快型", "狄仁杰、包拯、海瑞", "规则、行动、灰度判断", [50, 78, 56, 64, 58, 30, 70, 58, 50, 18]],
  [35, "府衙文书型", "萧何、司马光、班固", "流程、秩序、低风险", [28, 92, 12, 68, 48, 20, 52, 90, 78, 24]],
  [36, "赶考举子型", "范进、蒲松龄、王安石早期", "焦虑、上进、身份跃迁", [58, 66, 30, 52, 78, 58, 42, 60, 82, 18]],
  [37, "山寨喽啰型", "李逵、程咬金早期、陈胜", "跟随、冲动、义气", [36, 26, 82, 48, 48, 46, 30, 24, 28, 16]],
  [38, "逃荒流民型", "朱元璋早期、刘邦早期、陈胜", "生存、适应、不安全感", [34, 30, 58, 84, 20, 24, 54, 28, 76, 34]],
  [39, "边境商贩型", "张骞、班超、范蠡", "冒险、机会、现实主义", [52, 42, 82, 92, 24, 48, 66, 54, 40, 34]],
  [40, "船帮水手型", "郑和、鉴真、徐霞客", "流动、协作、风险承受", [38, 48, 76, 66, 42, 36, 54, 52, 66, 48]],
  [41, "宫廷女官型", "上官婉儿、班昭、孝庄", "分寸、观察、权力敏感", [64, 76, 24, 68, 52, 54, 90, 76, 78, 28]],
  [42, "冷宫侍女型", "班婕妤、甄宓、陈阿娇", "忍耐、压抑、高敏感", [18, 52, 12, 38, 58, 48, 78, 34, 96, 54]],
  [43, "戏班伶人型", "李龟年、柳永、关汉卿", "表演、取悦、漂泊", [34, 24, 60, 46, 52, 98, 74, 24, 44, 58]],
  [44, "私塾学生型", "王阳明少年、曾国藩少年、苏轼少年", "规训、成长、被期待", [34, 82, 18, 44, 72, 46, 42, 58, 80, 20]],
  [45, "庙会摊贩型", "东方朔、纪晓岚、冯梦龙", "灵活、嘴甜、小本经营", [40, 28, 54, 78, 32, 86, 72, 34, 36, 38]],
  [46, "边军斥候型", "霍去病、赵云、岳飞", "警觉、冒险、独立判断", [52, 44, 88, 62, 54, 28, 82, 38, 48, 42]],
  [47, "大族旁支型", "曹雪芹、刘备早期、袁绍", "身份焦虑、比较、资源不足", [56, 58, 34, 50, 52, 48, 62, 46, 72, 18]],
  [48, "破落地主型", "曹雪芹、蒲松龄、纳兰性德", "怀旧、失落、体面焦虑", [38, 54, 18, 34, 66, 70, 56, 40, 76, 36]],
  [49, "新兴商人型", "范蠡、吕不韦、胡雪岩", "突破、机会、重塑规则", [70, 48, 78, 92, 28, 58, 72, 64, 38, 26]],
  [50, "退隐幕僚型", "范蠡、张良、陶渊明", "看透、克制、及时抽身", [44, 58, 28, 62, 52, 30, 88, 54, 86, 82]],
];

const RESULTS = RAW_RESULTS.map(([id, name, refs, keywordText, vector]) => ({
  id,
  name,
  refs,
  keywords: keywordText.split("、"),
  vector: Object.fromEntries(DIMENSIONS.map(([key], index) => [key, vector[index]])),
}));

const RESULT_COPY = new Map([
  [1, {
    survival: "你不是站在台前敲锣的人，而是站在暗处看清谁能成事的人。你靠识局、留余地、替别人把难题拆开活下来。",
    decision: "你做事先看局势的骨架，再决定自己该落在哪个位置。你很少被一句热血话带走，更相信时机、关系和代价。",
    strength: "你最强的地方，是能在混乱里看见真正的关键人。别人忙着表态时，你已经知道该帮谁、劝谁、避开谁。",
    weakness: "你容易把自己藏得太深，明明出了很多力，却不愿把功劳拿到明面上。久了之后，别人会习惯你的隐身。"
  }],
  [2, {
    survival: "你像被派到风雪边地的人，环境不问你喜不喜欢，只问你能不能撑住。你靠忍耐、执行和适应活下来。",
    decision: "你做事不太迷信情绪，先看条件够不够、路线通不通、上面要什么。再苦的任务，你也会先想办法把它完成。",
    strength: "你的厉害在于不轻易崩。别人抱怨环境太差时，你已经开始熟悉规矩、找水源、记路线，把陌生地方慢慢变成可控。",
    weakness: "你太习惯扛事，容易把委屈当成本分。别人未必知道你忍了多少，只会继续把难活交给你。"
  }],
  [3, {
    survival: "你像寒门里一盏舍不得熄的灯，靠上进、压抑和长期积累给自己换路。你不是没有野心，只是太清楚起点有多低。",
    decision: "你做选择时会问这件事能不能改变命运，能不能让我离原来的困境远一点。短期舒服，对你常常不如长期翻身重要。",
    strength: "你的强处是能把焦虑熬成纪律。别人靠天分冲一阵，你会靠日日重复、不断补课，把差距一点点追回来。",
    weakness: "你容易把人生过成一场永远不能失误的考试。太怕辜负期待，会让你忘了自己其实也需要喘口气。"
  }],
  [4, {
    survival: "你像坐在账桌后的人，知道每一笔进出背后都是安全感。你靠计算、稳妥和资源意识活下来。",
    decision: "你不轻易被漂亮前景打动，先问钱从哪里来、人靠不靠得住、亏了谁兜底。你相信能落账的东西，才算真正可靠。",
    strength: "你的优势是能把虚热的局面冷下来。别人看见机会，你能看见成本、现金流和隐藏的窟窿。",
    weakness: "你有时会把风险看得太重，错过一些需要先上车再调整的机会。太想稳，会让你在该扩张时保守。"
  }],
  [5, {
    survival: "你像茶馆里耳听八方的掌柜，不急着卷进争斗，却知道风向从哪边变。你靠消息、人情和圆滑观察活下来。",
    decision: "你做事先听人怎么说，再看人没说什么。你会把话留半分，把关系留半分，让自己总有转圜空间。",
    strength: "你最打动人的地方，是懂得给人台阶。很多僵局到你手里，不是被说服的，而是被你慢慢泡软的。",
    weakness: "你太会照顾场面，有时会把真正的态度藏起来。别人舒服了，你自己的边界却容易被一点点挤掉。"
  }],
  [6, {
    survival: "你像驿道上不停赶路的人，风雨不会等你准备好。你靠奔波、传递和抗压活下来。",
    decision: "你不怕事情杂，也不怕路远，先把消息送到、任务交清、下一站找好。你相信动起来，就比困在原地强。",
    strength: "你的优势是耐折腾。别人需要稳定环境才能发挥，你却能在变化里迅速找节奏，把压力扛成经验。",
    weakness: "你容易一直在路上，却很少问自己到底想去哪里。忙到最后，可能只剩下疲惫，没有真正属于你的落点。"
  }],
  [7, {
    survival: "你像府中幕后的谋士，明白权力不只在座位上，也在判断里。你靠低调、借势和精准判断活下来。",
    decision: "你不会急着亮牌，会先看谁有势、谁有欲望、谁会犯错。你出手不多，但每次都尽量卡在能改变局面的地方。",
    strength: "你的强处是看得见人心背后的算盘。复杂关系在别人眼里是迷雾，在你眼里往往是一张可以推演的图。",
    weakness: "你容易把亲近也当成局势来分析。太清醒会保护你，也会让你难以真正相信别人。"
  }],
  [8, {
    survival: "你像宗族里撑住门面的人，知道一家人最怕散，一群人最怕乱。你靠秩序、责任和协调活下来。",
    decision: "你做事先问有没有规矩可依，谁该承担，谁需要被安抚。你不喜欢事情失控，更不喜欢没人出来收拾。",
    strength: "你的优势是能让一盘散沙重新坐回桌边。你不一定最会讨好人，但你能让大家知道边界在哪里。",
    weakness: "你太容易把责任往自己身上揽。别人省事了，你却可能长期活在必须懂事、必须稳住的疲惫里。"
  }],
  [9, {
    survival: "你像镖局里讲义气的伙计，江湖不总讲理，但一定认人。你靠行动、胆气和自己的规矩活下来。",
    decision: "你做事看重谁值得护、谁不能背叛。遇到关键时刻，你宁愿先上前一步，也不愿站在旁边算得太细。",
    strength: "你的打动人之处，是关键时刻不躲。别人还在权衡利弊时，你愿意为认定的人和事担一点风险。",
    weakness: "你容易被义气推着走，替别人扛了本不该扛的锅。不是所有并肩的人，都配得上你的真心。"
  }],
  [10, {
    survival: "你像书院里守灯的人，相信人不能只为眼前饭碗活着。你靠原则、教化和精神秩序活下来。",
    decision: "你做事先问正不正、值不值得、会不会把人带坏。现实很硬，但你不愿让它轻易改写自己的标准。",
    strength: "你的优势是能给混乱的人心立一根尺。别人只看输赢时，你会提醒大家还有更长远的方向。",
    weakness: "你容易对世界要求太高，也对自己太严。遇到灰度和妥协时，你会比别人更痛苦。"
  }],
  [11, {
    survival: "你像医馆里低头记方的学徒，不靠一时锋芒，而靠长期观察。你靠细心、学习和耐性活下来。",
    decision: "你做事习惯先看症结，不急着下结论。你相信真正可靠的判断，来自反复确认和一点点积累。",
    strength: "你的强处是看得见细微变化。别人忽略的小反应、小偏差、小信号，到你这里都可能成为关键。",
    weakness: "你容易一直觉得自己还不够好，迟迟不敢独立开方。学得太久，也会错过自己已经能上手的时刻。"
  }],
  [12, {
    survival: "你像商队里管货、管人、管路的人，知道一趟远行靠的不是运气。你靠交易、调度和现实判断活下来。",
    decision: "你做事会同时看货、路、人和风险。哪里能赚，哪里会断，谁能托付，谁会拖后腿，你都要心里有数。",
    strength: "你的优势是能把复杂资源串起来。别人只看到单点机会，你能看到整条路怎样走才不塌。",
    weakness: "你容易把所有关系都放进成本收益里计算。算得太久，人情会变薄，你也会更难放松。"
  }],
  [13, {
    survival: "你像市井里靠一张嘴留住人群的说书人，最懂人为什么哭、为什么笑。你靠表达、故事和情绪感染活下来。",
    decision: "你做事先找能打动人的入口。道理太硬，你会把它讲成故事，情绪太散，你会把它收成一句让人记住的话。",
    strength: "你的优势是能让别人看见自己没说出口的心事。你不是只会热闹，你会把混乱的人生讲出一点意义。",
    weakness: "你容易把掌声当成确认，把回应当成安全感。没人听的时候，你会怀疑自己的价值。"
  }],
  [14, {
    survival: "你像寺庙里日复一日抄经的人，外面再乱，你也想守住心里那点秩序。你靠克制、重复和内在安定活下来。",
    decision: "你做事不追求快，先求心不乱、手不抖、方向不偏。你相信真正能留下来的东西，往往来自重复里的沉淀。",
    strength: "你的强处是能在单调里修出力量。别人嫌慢的过程，你能一点点做深，做到最后反而最稳。",
    weakness: "你容易把退让当修行，把沉默当成熟。可有些事如果一直不说，别人会以为你不痛。"
  }],
  [15, {
    survival: "你像山里自己生火煮茶的人，不想把一生交给名利评判。你靠自洽、低欲望和疏离活下来。",
    decision: "你做选择时最在意内心是否安稳。别人争位置、争脸面，你更想知道这件事会不会让自己变得不像自己。",
    strength: "你的优势是很难被外界牵着走。别人害怕失去的东西，你未必那么想要，所以你反而自由。",
    weakness: "你容易把远离当成唯一的保护。退得太久，真正重要的人和机会也会被你一起隔在山外。"
  }],
  [16, {
    survival: "你像军营里见过太多胜败的老卒，热血已经沉成经验。你靠服从、直觉和扛过风浪的身体记忆活下来。",
    decision: "你做事先看形势稳不稳、命令清不清、退路有没有。你不爱空谈，因为你知道真正出事时，能执行的人最稀缺。",
    strength: "你的强处是临场不慌。很多人第一次见风浪就乱了，你却能凭经验把事情一件件压住。",
    weakness: "你容易把疲惫藏成沉默，把受伤当成应该。没人问的时候，你也不会主动说自己其实撑得很久。"
  }],
  [17, {
    survival: "你像码头上靠肩膀吃饭的人，世界很直接，能不能扛得住一眼就看出来。你靠体力、直觉和生存本能活下来。",
    decision: "你做事不喜欢绕太多弯，能干就干，不能干就换条路。你更相信眼前的人和事，不太吃虚头巴脑那一套。",
    strength: "你的优势是有一种落地的生命力。别人还在想体面，你已经知道先把饭碗端稳，把今天过下去。",
    weakness: "你容易低估自己的细腻，把很多委屈都说成没事。其实你不是不敏感，只是不习惯把痛讲得好听。"
  }],
  [18, {
    survival: "你像田里靠天吃饭的佃农，最懂日子不是靠愿望过出来的。你靠忍耐、务实和对风险的警觉活下来。",
    decision: "你做事会先想最坏情况，粮够不够、债能不能还、家里还能不能撑。你不轻易乐观，因为你知道失去安全感有多疼。",
    strength: "你的强处是能把艰难日子过出秩序。哪怕条件不多，你也会一点点攒、一点点守，不让生活彻底塌掉。",
    weakness: "你容易把自己困在怕失去里。太久没有安全感，会让你面对好机会时也先想到坏结局。"
  }],
  [19, {
    survival: "你像盐铺里每日称斤两的人，知道一点误差都会变成亏损。你靠精算、谨慎和利益敏感活下来。",
    decision: "你做事先看账、看人、看规矩。表面热闹不算数，真正能留下多少，才是你最关心的答案。",
    strength: "你的优势是能提前闻到亏损的味道。别人被气氛推着走时，你会冷静地问一句，这笔账到底谁付。",
    weakness: "你容易把世界看得太像账本。算得清利益，却未必算得清有些人为什么值得多信一次。"
  }],
  [20, {
    survival: "你像药铺里被街坊记住名字的掌柜，靠的不是吆喝，而是长久信誉。你靠稳重、经验和可靠感活下来。",
    decision: "你做事不会轻易下猛药，先看体质、看火候、看能不能长期承受。你更相信慢慢调理，也不愿为一时好看伤根本。",
    strength: "你的强处是让人安心。别人慌的时候，会下意识想来问你，因为你给出的判断不花哨，但可靠。",
    weakness: "你容易太怕砸了招牌，明明可以更大胆，也会先压住自己。长期稳重，有时会变成不敢改变。"
  }],
  [21, {
    survival: "你像客栈里迎来送往的老板，见过太多人短暂停留，也见过太多故事转身就散。你靠察言观色和人际流动活下来。",
    decision: "你做事先判断来人是哪一路，能不能深交，什么时候该热情，什么时候该保持距离。你知道每个人都有自己的行李。",
    strength: "你的优势是适应不同的人。你能让陌生人很快放松，也能在复杂关系里找到彼此都舒服的位置。",
    weakness: "你容易把自己活成一个中转站，谁都能来，谁都能走。热闹之后，你可能反而不知道谁真正留下。"
  }],
  [22, {
    survival: "你像守城门的人，知道一座城能不能安稳，常常取决于边界有没有守住。你靠纪律、边界和防御意识活下来。",
    decision: "你做事先问规矩在哪里，口子能不能开，开了会不会收不住。你不怕被说固执，因为你知道失守往往从一次例外开始。",
    strength: "你的强处是能替大家挡住混乱。别人嫌你谨慎时，可能没有看见你守住的是整件事的底线。",
    weakness: "你容易把自己也关在城门里。防得太久，会忘记有些人靠近不是为了攻城。"
  }],
  [23, {
    survival: "你像灯下抄书的小吏，知道世界再乱，也要有人把事实记下来。你靠细节、记录和系统记忆活下来。",
    decision: "你做事先把来龙去脉理清楚，谁说过什么，哪一步改过，哪里留下凭据。你相信混乱会过去，记录会说话。",
    strength: "你的优势是可靠到近乎安静。别人忘了的线索、漏掉的证据、混乱的流程，到你手里能重新排出顺序。",
    weakness: "你容易把自己缩进细节里，害怕出错，害怕被挑刺。可人生不全是文书，有些决定不能等到完全无误。"
  }],
  [24, {
    survival: "你像织坊里一针一线熬日子的人，手上的活越细，心里的韧性越深。你靠忍耐、技艺和不声张的坚持活下来。",
    decision: "你做事不爱抢声量，更愿意把手里的事做到稳、做到熟、做到别人离不开。你相信真正的底气藏在手艺里。",
    strength: "你的强处是能把重复的日子织出价值。别人看见辛苦，你知道那也是你一点点攒下的筹码。",
    weakness: "你容易太习惯忍，习惯把自己的累说成应该。可长期不被看见，会让你的心慢慢发硬。"
  }],
  [25, {
    survival: "你像绣楼里把心事藏进针脚的人，敏感不是脆弱，是你看见了别人没看见的细微。你靠才情、自我保留和分寸活下来。",
    decision: "你做事会先感受气氛，再决定要不要表达。你不是没有锋芒，只是知道有些话说出口，关系就回不去了。",
    strength: "你的优势是能把复杂情绪说准、做细、留美感。别人粗糙地活着，你能看见其中的疼和光。",
    weakness: "你容易把自尊藏得太深，等别人来懂。可不是每个人都细腻到能读懂你的沉默。"
  }],
  [26, {
    survival: "你像内宅里真正管事的人，表面不在朝堂，手里却牵着许多秩序。你靠分寸、管理和权力边界活下来。",
    decision: "你做事知道什么时候该软，什么时候必须硬。你不轻易撕破脸，但会把人、事、资源安排到该在的位置。",
    strength: "你的强处是能在看不见的地方稳住局面。你不一定声势最大，却常常是最清楚全盘如何运转的人。",
    weakness: "你容易长期替别人兜底，还要保持体面。久了之后，你会忘记自己也可以不那么周全。"
  }],
  [27, {
    survival: "你像大户人家账房里握着总账的人，外面风光不归你，但系统不能没有你。你靠计算、执行和稳定结构活下来。",
    decision: "你做事先看账目、流程和漏洞。你不喜欢临时拍脑袋，因为你知道真正的大事，坏就坏在无人核对。",
    strength: "你的优势是把庞杂系统变得可管理。别人只会喊目标，你能把目标拆成款项、步骤和责任人。",
    weakness: "你容易被困在必须准确、必须可靠的位置上。太久替系统运转，会让你忘了自己也有想冒险的一面。"
  }],
  [28, {
    survival: "你像乡间郎中，走进别人最狼狈的日子里，却不能先慌。你靠实用、同理和经验判断活下来。",
    decision: "你做事先看眼前能不能缓解，长期会不会伤根。你不迷信大道理，更在意这个人此刻能不能撑过去。",
    strength: "你的强处是能把理解落到行动上。你不是空泛地善良，而是知道该递水、该止血、该让人慢慢恢复。",
    weakness: "你容易把别人的痛背到自己身上。看多了苦，你会变得很能撑，也很难真正放下。"
  }],
  [29, {
    survival: "你像游方道士，既在人间走动，又不完全属于人间。你靠边缘自由、观察和超脱活下来。",
    decision: "你做事不急着进入中心，先看这场热闹值不值得参与。你愿意走偏路，因为正路未必通向你的答案。",
    strength: "你的优势是跳得出局。别人被名利和身份追着跑时，你还能退一步看清自己到底想不想要。",
    weakness: "你容易把飘走当成清醒。可有些关系和责任，不是看透了就能轻轻放下。"
  }],
  [30, {
    survival: "你像落魄文士，心里有文章，也有不甘。你靠自尊、表达和对失意的消化活下来。",
    decision: "你做事常常先问这件事配不配得上自己。哪怕处境不顺，你也不愿完全把骄傲交出去。",
    strength: "你的强处是能把失意说出重量。别人只是受挫，你能把受挫变成理解世界、理解自己的材料。",
    weakness: "你容易被自尊困住，既渴望被看见，又怕显得太想被看见。越在意，越容易装作不在意。"
  }],
  [31, {
    survival: "你像商铺少东家，手里有一点资源，也背着一堆期待。你靠机会感、转型意识和继承压力活下来。",
    decision: "你做事会同时想守住原来的东西，也想证明自己能开新局。你怕败家，也怕一辈子只活在上一代的影子里。",
    strength: "你的优势是能看见旧资源的新用法。别人只会守摊，你会想怎样换招牌、换客源、换活法。",
    weakness: "你容易在证明自己和不敢失败之间拉扯。越想做出成绩，越怕别人说你只是运气好。"
  }],
  [32, {
    survival: "你像行会里的工匠，不靠嘴上热闹，而靠手上真章。你靠技艺、专注和慢成长活下来。",
    decision: "你做事相信熟能生巧，先把基本功磨稳，再谈变化。你不怕慢，怕的是东西还没做扎实就急着出名。",
    strength: "你的强处是能沉下去。别人追风口，你会把一件事反复打磨，直到它成为别人拿不走的本事。",
    weakness: "你容易把自己锁在手艺里，不愿经营人情和展示。会做不等于会被看见，这点会让你吃亏。"
  }],
  [33, {
    survival: "你像码头牙人，站在人和货之间，靠眼力吃饭。你靠交易、人脉和机会嗅觉活下来。",
    decision: "你做事先看谁有需求，谁有资源，谁急着成交。你不怕局面乱，因为乱里面常常藏着缝隙。",
    strength: "你的优势是能让两边都动起来。别人只看到陌生人，你看到的是可能的合作、交换和下一单生意。",
    weakness: "你容易习惯把自己放在中间撮合，却忘了给自己留真正的立场。人脉很多，不代表都可靠。"
  }],
  [34, {
    survival: "你像官府捕快，既要守规则，又要走进规则照不到的地方。你靠行动、判断和对灰度的处理活下来。",
    decision: "你做事不会只听一面之词，会看证据、看动机，也看现场哪里不对。你知道人性比案卷复杂。",
    strength: "你的强处是能把模糊的危险抓出形状。别人害怕麻烦，你会一步步靠近真相。",
    weakness: "你容易长期处在警觉里，连放松都像失职。看多了复杂人心，会让你越来越难轻易相信。"
  }],
  [35, {
    survival: "你像府衙文书，真正的权力不在嗓门里，而在流程和文字里。你靠秩序、低风险和准确执行活下来。",
    decision: "你做事会先看章程、凭据和责任边界。你不喜欢留下漏洞，因为你知道一个小错可能变成大麻烦。",
    strength: "你的优势是让事情有据可查。别人凭印象争吵时，你能拿出记录，让混乱回到事实。",
    weakness: "你容易太怕出错，久而久之只敢做规定允许的事。安全是你的护身符，也可能变成你的天花板。"
  }],
  [36, {
    survival: "你像赶考路上的举子，把很多人的期待背在行囊里。你靠上进、焦虑和身份跃迁的渴望活下来。",
    decision: "你做事总会想这能不能让我更上一层。你不是单纯功利，而是太知道原来的位置有多难受。",
    strength: "你的强处是愿意为改变命运长期投入。别人受不了的枯燥和压力，你能咬牙熬过去。",
    weakness: "你容易把人生变成永远放榜前一晚。太想证明自己，会让你即使赢了也很难真正安心。"
  }],
  [37, {
    survival: "你像山寨里的喽啰，不一定掌舵，但很需要一个能跟的方向。你靠跟随、冲动和义气活下来。",
    decision: "你做事常被当下情绪和身边人点燃。只要觉得这人值得、这事够义气，你就不太愿意缩在后面。",
    strength: "你的打动人之处，是心热。你未必算得最精，但真遇到事，你会让人感觉身边还有人。",
    weakness: "你容易把别人的旗帜当成自己的命。跟错人时，你的热血会被拿去替别人买单。"
  }],
  [38, {
    survival: "你像逃荒路上的流民，安全感不是概念，是今天有没有饭、明天有没有路。你靠生存、适应和不安全感活下来。",
    decision: "你做事先找能活下去的方案，再谈体面和理想。你很会看风向，因为走错一步，代价可能不是难受，而是失去。",
    strength: "你的优势是韧性极强。环境再差，你也能快速判断哪里有水、哪里有人、哪里不能久留。",
    weakness: "你容易一直活在预备逃跑的状态。就算后来安全了，你心里也很难完全相信好日子会稳定。"
  }],
  [39, {
    survival: "你像边境商贩，机会和危险都在路上。你靠冒险、现实主义和对新地方的嗅觉活下来。",
    decision: "你做事会问这趟值不值得走，风险能不能换来更大的空间。你不怕陌生，只怕一直困在熟悉的小地方。",
    strength: "你的优势是敢跨出去。别人守着旧摊位时，你已经在看远处哪里有新的货、新的人、新的规则。",
    weakness: "你容易把流动当成解决一切的办法。可有些问题不是换地方就会消失，它会跟着你一起上路。"
  }],
  [40, {
    survival: "你像船帮水手，脚下没有固定土地，只能相信同伴和水势。你靠流动、协作和风险承受活下来。",
    decision: "你做事会看风向，也看船上谁能配合。你不怕辛苦，但很在意团队能不能同频，否则再好的航线也会翻。",
    strength: "你的强处是能在不稳定中保持协作。风浪来了，你不会只顾自己，而是知道谁该拉绳、谁该稳舵。",
    weakness: "你容易习惯漂着，哪里需要就去哪里。久了之后，你可能会分不清自己是自由，还是没有停靠的地方。"
  }],
  [41, {
    survival: "你像宫廷女官，离权力很近，也离危险很近。你靠分寸、观察和权力敏感活下来。",
    decision: "你做事先看话能不能说，眼神能不能接，位置能不能站。你知道有些错不是能力问题，而是分寸问题。",
    strength: "你的优势是读空气极准。别人还没察觉气氛变化，你已经知道谁被冷落、谁在试探、谁不能得罪。",
    weakness: "你容易活得太谨慎，连真情绪都要先过一遍风险。安全了，却也累了。"
  }],
  [42, {
    survival: "你像冷宫里的侍女，最懂被忽视、被搁置、被迫等待是什么滋味。你靠忍耐、敏感和压抑中的自保活下来。",
    decision: "你做事不敢轻易惊动局面，会先观察谁有恶意，谁只是路过，什么时候沉默比解释更安全。",
    strength: "你的强处是能在冷处活下来。别人需要热闹支撑，你却能在无人看见的地方保存一点清醒和尊严。",
    weakness: "你容易把自己放得太低，低到连需求都不敢承认。被冷落久了，会误以为不被善待才是常态。"
  }],
  [43, {
    survival: "你像戏班伶人，台上要笑，台下要扛。你靠表演、取悦和漂泊中的敏感活下来。",
    decision: "你做事会先看观众要什么，场子需要什么情绪。你很会调动气氛，也很懂什么时候不能让冷场出现。",
    strength: "你的优势是有感染力。你能让沉闷的人群重新抬头，也能把自己的伤包装成别人愿意听的歌。",
    weakness: "你容易把被喜欢当成被爱。掌声一停，你会怀疑那个不表演的自己还值不值得留下。"
  }],
  [44, {
    survival: "你像私塾里被寄予厚望的学生，规训早早落在身上。你靠成长、被期待和守规矩活下来。",
    decision: "你做事常会先想这样对不对，会不会让人失望。你努力不是为了显摆，而是太怕自己不够好。",
    strength: "你的强处是愿意被打磨。你能承受长期训练，把外界要求慢慢变成自己的能力。",
    weakness: "你容易把别人的期待听成命令。长大以后，你需要分清哪些路是他们要你走，哪些才是你真正想走。"
  }],
  [45, {
    survival: "你像庙会摊贩，摊子不大，但要会招呼人、会看热闹、会抓机会。你靠灵活、嘴甜和小本经营活下来。",
    decision: "你做事讲究当场反应，今天人群往哪边走，哪句话能让人停下，你都能很快调整。",
    strength: "你的优势是生命力鲜活。再小的局面，你也能找出一点转机，把冷摊子慢慢叫热。",
    weakness: "你容易太依赖临场机灵，忽略长期积累。热闹能带来生意，但真正撑住你的还是稳定的底盘。"
  }],
  [46, {
    survival: "你像边军斥候，常常一个人先走到危险前面。你靠警觉、冒险和独立判断活下来。",
    decision: "你做事先看异常，哪里太安静，哪里太顺利，哪里可能埋伏。你不等所有人同意，必要时会先判断、先行动。",
    strength: "你的强处是敏锐又敢走前路。别人需要安全感才行动，你能在不确定里先摸出方向。",
    weakness: "你容易长期处在备战状态，连亲近都像风险。太习惯独自判断，会让你很难把后背交给别人。"
  }],
  [47, {
    survival: "你像大族旁支，身边有光，却不完全照到你身上。你靠比较、资源不足中的挣扎和身份焦虑活下来。",
    decision: "你做事会不自觉地问自己有没有被看低，有没有机会证明。你不是单纯要面子，而是太想摆脱边缘位置。",
    strength: "你的优势是对机会和差距都很敏感。你知道资源从来不是平均分配，所以会努力寻找自己的突破口。",
    weakness: "你容易把别人的起点当成自己的审判。一直比较，会让你看不见自己已经走了多远。"
  }],
  [48, {
    survival: "你像破落地主，旧日体面还在心里，新生活却已经不等人。你靠怀旧、失落和维持尊严活下来。",
    decision: "你做事常在过去和现实之间拉扯。你想保住一点体面，也知道有些旧东西已经撑不起今天。",
    strength: "你的优势是有审美、有记忆，也懂得何为体面。你能在衰败里保留一种不粗糙的自尊。",
    weakness: "你容易把失去反复拿出来确认，越怀念越难重建。真正困住你的不一定是贫穷，而是不甘心。"
  }],
  [49, {
    survival: "你像新兴商人，不想只在旧规则里排队，想自己开一条路。你靠突破、机会和重塑规则活下来。",
    decision: "你做事会找杠杆，找风口，找能把小资源放大的办法。你不怕被说野，因为你知道旧路未必给你位置。",
    strength: "你的优势是能把变化看成入口。别人害怕秩序松动，你却能在缝隙里搭起新的生意和身份。",
    weakness: "你容易跑得太快，快到身边人跟不上，风险也来不及收口。重塑规则之前，先确认自己不会被反噬。"
  }],
  [50, {
    survival: "你像退隐幕僚，见过局，也看过局散。你靠看透、克制和及时抽身活下来。",
    decision: "你做事会先看这场事值不值得入局，入了能不能退，赢了会不会反而被困住。你不迷恋热闹，更在意全身而退。",
    strength: "你的强处是懂得收手。很多人只会争取，你却知道什么时候离开才是最高明的保存。",
    weakness: "你容易太早看穿，太快抽身。避开了消耗，也可能避开了某些值得认真投入的人和事。"
  }],
]);

const STORAGE_KEY = "ancient-survival-quiz-state";
const ANALYTICS_KEY = "ancient-survival-quiz-analytics";
const app = document.querySelector("#app");
let state = loadState();
let returnView = "home";

function isWeChatBrowser() {
  return /MicroMessenger/i.test(navigator.userAgent || "");
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { current: 0, answers: [] };
  } catch {
    return { current: 0, answers: [] };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function track(event, detail = {}) {
  const data = JSON.parse(localStorage.getItem(ANALYTICS_KEY) || "{}");
  const events = data.events || [];
  events.push({ event, detail, at: new Date().toISOString() });
  const next = {
    pageViews: (data.pageViews || 0) + (event === "view" ? 1 : 0),
    starts: (data.starts || 0) + (event === "start" ? 1 : 0),
    completions: (data.completions || 0) + (event === "complete" ? 1 : 0),
    shares: (data.shares || 0) + (event === "share" ? 1 : 0),
    retakes: (data.retakes || 0) + (event === "retake" ? 1 : 0),
    events: events.slice(-80),
  };
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(next));
}

function setView(html) {
  app.innerHTML = html;
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  document.body.dataset.view = "home";
  track("view", { page: "home" });
  setView(`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-points" aria-label="测试特点">
          <span>15 道情境题</span>
          <i aria-hidden="true">·</i>
          <span>10 维度匹配</span>
          <i aria-hidden="true">·</i>
          <span>50 种古代身份</span>
        </div>
        <p class="eyebrow">穿越不是开挂，是看你怎么活</p>
        <h1>你的古代生存<br />人格是什么</h1>
        <p class="hero-subtitle">如果回到古代，你会靠什么活下来？</p>
      </div>
      <figure class="hero-visual" aria-label="古代书案与纸张插画">
        <img src="./assets/ancient-desk.png" alt="" />
      </figure>
      <div class="hero-copy-card">
        <p class="hero-copy">你不一定会成为皇帝、名臣或大将。更多时候，你可能是在县衙、书院、商铺、码头、内宅、市井之间寻找自己的位置。这个测试会根据你的选择，判断你更像哪一种古代生存人格。</p>
        <div class="hero-card-seal" aria-hidden="true">
          <span>古法</span>
          <span>测评</span>
        </div>
      </div>
      <div class="hero-actions">
        <button class="primary-button hero-start" type="button" data-action="start">
          <span>开始测试</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div class="hero-footnote">
        <p>大约 1 分钟，看你更擅长借势、守序、冒险，还是抽身。 · 本测试仅供娱乐，不构成严肃心理测评或历史评价。</p>
      </div>
      <aside class="hero-result-card" aria-label="结果卡片预览">
        <div class="hero-card-topline">
          <span>结果卡预览</span>
          <span>可截图分享</span>
        </div>
        <p class="hero-card-kicker">你的古代生存人格</p>
        <h2>一局见分寸</h2>
        <p>看你如何识局、取舍、守住位置。</p>
        <div class="hero-card-metrics">
          <span><strong>10</strong>维度</span>
          <span><strong>50</strong>身份</span>
          <span><strong>1</strong>分钟</span>
        </div>
      </aside>
    </section>
  `);
}

function startQuiz() {
  state = { current: 0, answers: [], startedAt: Date.now() };
  saveState();
  track("start");
  renderQuiz();
}

function renderQuiz() {
  document.body.dataset.view = "quiz";
  const index = Math.min(state.current, QUESTIONS.length - 1);
  const question = QUESTIONS[index];
  const selected = state.answers[index];
  track("view", { page: "quiz", index: index + 1 });
  setView(`
    <section class="quiz-wrap">
      <div class="quiz-panel">
        <div class="progress-row">
          <span>第 ${index + 1} / ${QUESTIONS.length} 题</span>
          <span>${Math.round((index / QUESTIONS.length) * 100)}%</span>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${Math.round((index / QUESTIONS.length) * 100)}%"></div>
        </div>
        <h1 class="question-title">${question.text}</h1>
        <div class="option-list" role="list">
          ${question.options
            .map(
              ([text], optionIndex) => `
                <button class="option-button" type="button" role="listitem" aria-pressed="${selected === optionIndex}" data-option="${optionIndex}">
                  <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
                  <span>${text}</span>
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="quiz-actions">
          <button class="secondary-button" type="button" data-action="prev" ${index === 0 ? "disabled" : ""}>上一题</button>
          <span class="muted quiz-hint">选后自动下一题，可返回修改。</span>
        </div>
      </div>
    </section>
  `);
}

function chooseOption(optionIndex) {
  state.answers[state.current] = optionIndex;
  saveState();
  const buttons = document.querySelectorAll("[data-option]");
  buttons.forEach((button, index) => button.setAttribute("aria-pressed", String(index === optionIndex)));
  window.setTimeout(() => {
    if (state.current < QUESTIONS.length - 1) {
      state.current += 1;
      saveState();
      renderQuiz();
      return;
    }
    track("complete", {
      durationMs: Date.now() - (state.startedAt || Date.now()),
      answers: state.answers,
    });
    renderResult();
  }, 180);
}

function previousQuestion() {
  state.current = Math.max(0, state.current - 1);
  saveState();
  renderQuiz();
}

function calculateScores() {
  const totals = Object.fromEntries(DIMENSIONS.map(([key]) => [key, 0]));
  const max = Object.fromEntries(DIMENSIONS.map(([key]) => [key, 0]));

  QUESTIONS.forEach((question, qIndex) => {
    DIMENSIONS.forEach(([key]) => {
      max[key] += Math.max(...question.options.map(([, scores]) => scores[key] || 0));
    });
    const optionIndex = state.answers[qIndex];
    const scores = question.options[optionIndex]?.[1] || {};
    Object.entries(scores).forEach(([key, value]) => {
      totals[key] += value;
    });
  });

  return Object.fromEntries(
    DIMENSIONS.map(([key]) => [key, Math.round(((totals[key] || 0) / (max[key] || 1)) * 100)]),
  );
}

function rankResults(scores) {
  return RESULTS.map((result) => {
    const distance = Math.sqrt(
      DIMENSIONS.reduce((sum, [key]) => sum + (scores[key] - result.vector[key]) ** 2, 0),
    );
    return {
      ...result,
      distance,
      match: Math.max(48, Math.min(98, Math.round(100 - distance / 3.35))),
    };
  }).sort((a, b) => a.distance - b.distance);
}

function topDimensions(scores, count = 3) {
  return DIMENSIONS.map(([key, label]) => ({ key, label, value: scores[key] }))
    .sort((a, b) => b.value - a.value)
    .slice(0, count);
}

function bottomDimensions(scores, count = 2) {
  return DIMENSIONS.map(([key, label]) => ({ key, label, value: scores[key] }))
    .sort((a, b) => a.value - b.value)
    .slice(0, count);
}

const DIMENSION_GIFTS = {
  power: "更敢争取主动权，不太愿意把命运完全交给别人安排",
  order: "会先搭规则和边界，让混乱局面慢慢回到可控状态",
  risk: "能在机会还没完全明朗时先迈出一步，不容易被未知吓退",
  realism: "看得见资源、代价和后果，不容易被漂亮话带偏",
  idealism: "心里有一套长期标准，不会为了眼前好处轻易改掉方向",
  expression: "能把情绪、故事和立场讲出来，让别人听见你真正想影响的东西",
  insight: "擅长看人和看局，能闻到关系里没说出口的危险与机会",
  organization: "能把散乱的人和事重新排好顺序，让事情真正推进",
  patience: "熬得住慢局和冷局，不会因为一时没有回报就立刻散掉",
  detachment: "不容易被名利和评价牵着走，能在热闹之外保留自己的判断",
};

const DIMENSION_NEEDS = {
  power: "你需要练习把需求说得更明确，否则别人未必知道你也想要位置",
  order: "你需要接受世上总有灰度，否则一遇到不按规矩的人就会很耗神",
  risk: "你需要给自己一点试错空间，否则机会来了也容易先想到失败",
  realism: "你需要把理想落到资源上，否则容易在好愿望里消耗自己",
  idealism: "你需要确认哪些坚持真是你的，哪些只是别人放在你身上的期待",
  expression: "你需要让别人听见你，而不是总等他们自己懂",
  insight: "你需要少一点过度揣测，否则会把简单关系也看得很累",
  organization: "你需要允许事情偶尔不按计划走，不必每次都由你收拾残局",
  patience: "你需要分清忍耐和压抑，前者让你变稳，后者会让你变钝",
  detachment: "你需要确认自己是真的放下，还是只是提前退出以免受伤",
};

function expandResultText(section, base, result, scores) {
  const [top] = topDimensions(scores, 1);
  const [low] = bottomDimensions(scores, 1);
  const gift = DIMENSION_GIFTS[top.key];
  const need = DIMENSION_NEEDS[low.key];

  if (section === "survival") {
    return `${base} 你身上的${top.label}很突出，它让你${gift}。`;
  }
  if (section === "decision") {
    return `${base} 压力越大时，你越会先调用${top.label}，这是你最熟悉的安全感来源。`;
  }
  if (section === "strength") {
    return `${base} 这份优势最容易出现在别人慌乱、关系复杂、局面没有标准答案的时候。`;
  }
  return `${base} 你最需要照看的地方，是${low.label}，${need}。`;
}

function resultCopy(result, key) {
  return RESULT_COPY.get(result.id)?.[key];
}

function survivalSummary(result, scores) {
  const custom = resultCopy(result, "survival");
  const [first, second] = result.keywords;
  const high = topDimensions(scores, 2).map((item) => item.label).join("和");
  const base = custom || `你更像古代社会里的${result.name}。你不一定急着站到最前面，但会凭借${first}和${second}找到可持续的位置。面对复杂局面时，你的${high}会先发挥作用，让你判断哪里可进、哪里该守、哪里需要暂时避开。`;
  return expandResultText("survival", base, result, scores);
}

function shortenText(text, limit = 42) {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}

function posterSummary(result, scores) {
  const [first, second] = result.keywords;
  const high = topDimensions(scores, 2).map((item) => item.label).join("、");
  return `你靠${first}和${second}活下来，核心优势落在${high}。`;
}

function decisionText(scores, result) {
  const custom = result ? resultCopy(result, "decision") : "";
  const base = custom || (
    scores.insight > 70
      ? "你倾向先识人、识局，再决定是否行动。比起马上表态，你更在意真正决定局面的人和关系。你会把话说在关键处，把力气用在能改变结果的位置上。"
      : scores.order > 70
        ? "你会优先建立规则和流程，让事情从混乱回到可控状态，再逐步推进。对你来说，先把边界、职责和节奏理清楚，后面的行动才不容易失控。"
        : scores.risk > 70
          ? "你对机会窗口比较敏感，必要时愿意承担不确定性，用行动换取更真实的反馈。你不是单纯冒进，而是更愿意在局面未完全明朗时先占住一个位置。"
          : "你通常会先判断代价和可行性，不轻易被气氛推着走。面对选择时，你会把收益、风险和长期处境放在一起衡量，再决定是推进、观望还是退一步。"
  );
  return expandResultText("decision", base, result, scores);
}

function relationText(scores) {
  if (scores.expression > 70) return "你会用表达影响气氛，也愿意在必要时讲清楚自己的位置。";
  if (scores.insight > 70) return "你不会轻易相信表面的说法，会观察谁有用、谁危险、谁能决定局面。";
  if (scores.detachment > 70) return "你能与人保持必要距离，不把所有评价都放到自己身上。";
  return "你的人际策略偏稳，既不急着撕破脸，也不会完全放弃边界。";
}

function riskText(scores) {
  if (scores.risk > 72) return "你不排斥下注，但更适合在信息足够、退路清楚时出手。";
  if (scores.patience > 75) return "你对风险比较敏感，更愿意等待局面清楚以后再调整位置。";
  if (scores.detachment > 75) return "你不容易被上升机会牵着走，位置合适对你比爬得快更重要。";
  return "你会在收益、代价和长期方向之间权衡，不太喜欢无意义冒险。";
}

function strengthText(result, scores) {
  const custom = resultCopy(result, "strength");
  const base = custom || (
    scores.organization > 72
      ? `你的优势是能把散乱局面整理成可执行的秩序，这让你很适合${result.name}这种需要稳住系统的位置。别人还在争论方向时，你往往已经开始拆分任务、安排顺序、修补漏洞。`
      : scores.realism > 75
        ? "你的优势是看得见资源、代价和后果，不容易被漂亮话带偏。你擅长把宏大的目标落到具体条件上，知道什么时候该争取、什么时候该保留退路。"
        : scores.idealism > 72
          ? "你的优势是有自己的长期标准，环境再复杂也不容易完全失去方向。你会为了某些原则承受压力，也能在短期得失之外保留判断。"
          : `你的优势是能在复杂环境中找到自己的位置，并把${result.keywords[0]}转化成实际生存能力。你未必总是最显眼的人，但往往能在合适的时机稳住局面、保存资源。`
  );
  return expandResultText("strength", base, result, scores);
}

function weaknessText(scores, result) {
  const custom = result ? resultCopy(result, "weakness") : "";
  const base = custom || (
    scores.patience > 78
      ? "你可能会想得太久、忍得太久，错过一些需要及时表态的机会。长期压住自己的判断，会让别人误以为你没有立场，也会消耗你的行动窗口。"
      : scores.risk > 78
        ? "你有时会低估代价，尤其在机会看起来很近的时候，需要多留一条退路。真正危险的不是下注本身，而是没有为失败后的局面预留缓冲。"
        : scores.order > 78
          ? "你可能会对不稳定和灰度空间不太舒服，遇到野路子局面时容易消耗。过度依赖规则会让你在规则失效时反应变慢，需要给自己保留一点弹性。"
          : scores.expression > 78
            ? "你容易把注意力放在表达和回应上，需要留意真实资源是否跟得上。话语能打开局面，但后续承接、资源调度和风险收口同样重要。"
            : "你的短板不在于某项能力缺失，而是容易在稳妥和行动之间反复权衡。想得太细会提高安全感，但也可能让你在真正该出手时慢半拍。"
  );
  return expandResultText("weakness", base, result, scores);
}

function radarChart(scores) {
  const center = 62;
  const radius = 45;
  const shortLabels = ["权", "序", "险", "实", "理", "表", "察", "组", "忍", "脱"];
  const points = DIMENSIONS.map(([key], index) => {
    const angle = (Math.PI * 2 * index) / DIMENSIONS.length - Math.PI / 2;
    const valueRadius = (scores[key] / 100) * radius;
    return [
      Math.round((center + Math.cos(angle) * valueRadius) * 10) / 10,
      Math.round((center + Math.sin(angle) * valueRadius) * 10) / 10,
    ];
  });
  const polygon = points.map(([x, y]) => `${x},${y}`).join(" ");
  const rings = [0.25, 0.5, 0.75, 1]
    .map((scale) => {
      const ring = DIMENSIONS.map((_, index) => {
        const angle = (Math.PI * 2 * index) / DIMENSIONS.length - Math.PI / 2;
        return [
          Math.round((center + Math.cos(angle) * radius * scale) * 10) / 10,
          Math.round((center + Math.sin(angle) * radius * scale) * 10) / 10,
        ];
      })
        .map(([x, y]) => `${x},${y}`)
        .join(" ");
      return `<polygon class="radar-ring" points="${ring}" />`;
    })
    .join("");
  const axes = DIMENSIONS.map((_, index) => {
    const angle = (Math.PI * 2 * index) / DIMENSIONS.length - Math.PI / 2;
    const x = Math.round((center + Math.cos(angle) * radius) * 10) / 10;
    const y = Math.round((center + Math.sin(angle) * radius) * 10) / 10;
    return `<line class="radar-axis" x1="${center}" y1="${center}" x2="${x}" y2="${y}" />`;
  }).join("");
  const labels = DIMENSIONS.map(([key, label], index) => {
    const angle = (Math.PI * 2 * index) / DIMENSIONS.length - Math.PI / 2;
    const x = Math.round((center + Math.cos(angle) * 55) * 10) / 10;
    const y = Math.round((center + Math.sin(angle) * 55) * 10) / 10;
    return `<text class="radar-label radar-hotspot" tabindex="0" x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" data-tooltip="${label} ${scores[key]}：${DIMENSION_HELP[key]}">${shortLabels[index]}</text>`;
  }).join("");
  const hotspots = points
    .map(([x, y], index) => {
      const [key, label] = DIMENSIONS[index];
      return `
        <g class="radar-hotspot" tabindex="0" data-tooltip="${label} ${scores[key]}：${DIMENSION_HELP[key]}">
          <circle class="radar-hit-area" cx="${x}" cy="${y}" r="10" />
          <circle class="radar-point" cx="${x}" cy="${y}" r="2.2" />
        </g>
      `;
    })
    .join("");

  return `
    <svg class="radar-chart" viewBox="0 0 124 124" role="img" aria-label="十维人格雷达图">
      <title>十维人格雷达图</title>
      ${rings}
      ${axes}
      <polygon class="radar-area" points="${polygon}" />
      ${hotspots}
      ${labels}
    </svg>
  `;
}

function renderResult() {
  document.body.dataset.view = "result";
  if (state.answers.length < QUESTIONS.length) {
    renderQuiz();
    return;
  }
  const scores = calculateScores();
  const ranked = rankResults(scores);
  const [result, second, third] = ranked;
  const similar = [result, second, third];
  track("view", { page: "result", resultId: result.id });

  setView(`
    <section class="result-wrap">
      <article class="result-panel">
        <section class="result-summary-card" aria-label="你的古代生存人格结果卡片">
          <div class="result-summary-main">
            <p class="result-card-kicker">你的古代生存人格是什么</p>
            <h1 class="result-title">${result.name}</h1>
            <p class="hero-copy result-ref">历史气质参考：${result.refs}</p>
            <div class="tag-row">${result.keywords.map((keyword) => `<span class="tag">${keyword}</span>`).join("")}</div>
          </div>
          <div class="result-summary-metrics">
            <div class="match-badge" aria-label="匹配度 ${result.match}%">
              <span><strong>${result.match}%</strong>匹配度</span>
            </div>
            ${radarChart(scores)}
          </div>
          <div class="radar-tooltip" role="status" aria-live="polite"></div>
        </section>

        <div class="result-poster-grid">
          <section class="poster-block poster-block-wide">
            <h3>生存方式</h3>
            <p>${survivalSummary(result, scores)}</p>
          </section>
          <section class="poster-block">
            <h3>行事方式</h3>
            <p>${decisionText(scores, result)}</p>
          </section>
          <section class="poster-block">
            <h3>生存优势</h3>
            <p>${strengthText(result, scores)}</p>
          </section>
          <section class="poster-block">
            <h3>潜在短板</h3>
            <p>${weaknessText(scores, result)}</p>
          </section>
          <section class="poster-block poster-block-similar">
            <h3>相似人格</h3>
            <p>${similar
              .slice(1)
              .map((item) => `${item.name} ${item.match}%`)
              .join(" / ")}</p>
          </section>
        </div>

        <div class="result-actions">
          <button class="secondary-button" type="button" data-action="retake">重新测试</button>
        </div>
        <div class="toast" role="status" aria-live="polite"></div>
      </article>
    </section>
  `);
}

async function shareResult() {
  const scores = calculateScores();
  const [result] = rankResults(scores);
  const text = `我的古代生存人格是：${result.name}。关键词：${result.keywords.join("、")}。`;
  const shareData = {
    title: "你的古代生存人格是什么",
    text,
    url: window.location.href.split("#")[0],
  };
  track("share", { resultId: result.id });
  try {
    if (isWeChatBrowser()) {
      await copyShareText(`${text} ${shareData.url}`);
      showToast("分享文案已复制。微信内可截图结果卡片，或点右上角菜单转发。");
      return;
    }
    if (navigator.share) {
      await navigator.share(shareData);
      showToast("已打开系统分享面板。");
      return;
    }
    await copyShareText(`${text} ${shareData.url}`);
    showToast("分享文案已复制。");
  } catch {
    showToast("当前浏览器不支持自动分享，可以直接截图结果卡片。");
  }
}

async function copyShareText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.top = "-1000px";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (toast) toast.textContent = message;
}

function showRadarTooltip(target, clientX, clientY) {
  const tooltip = document.querySelector(".radar-tooltip");
  const text = target?.dataset?.tooltip;
  if (!tooltip || !text) return;
  tooltip.textContent = text;
  tooltip.classList.add("is-visible");
  const rect = target.getBoundingClientRect?.();
  const x = Number.isFinite(clientX) ? clientX : (rect?.left || 0) + (rect?.width || 0) / 2;
  const y = Number.isFinite(clientY) ? clientY : (rect?.bottom || 0);
  const maxX = Math.max(12, (window.innerWidth || 360) - 284);
  const maxY = Math.max(12, (window.innerHeight || 640) - 96);
  tooltip.style.left = `${Math.min(Math.max(12, x + 12), maxX)}px`;
  tooltip.style.top = `${Math.min(Math.max(12, y + 12), maxY)}px`;
}

function hideRadarTooltip() {
  const tooltip = document.querySelector(".radar-tooltip");
  if (!tooltip) return;
  tooltip.classList.remove("is-visible");
}

function retake() {
  track("retake");
  localStorage.removeItem(STORAGE_KEY);
  startQuiz();
}

function currentReturnView() {
  const view = document.body.dataset.view;
  if (view === "quiz" || view === "result") return view;
  return "home";
}

function renderReturnView() {
  if (returnView === "quiz" && state.answers.length < QUESTIONS.length) {
    renderQuiz();
    return;
  }
  if (returnView === "result" && state.answers.length >= QUESTIONS.length) {
    renderResult();
    return;
  }
  renderHome();
}

function renderAbout() {
  document.body.dataset.view = "about";
  track("view", { page: "about" });
  setView(`
    <section class="plain-wrap">
      <article class="plain-panel">
        <h1>关于这个测试</h1>
        <p>这是一个轻量级 Web 娱乐测试。它通过 15 道情境选择题，分析你的决策方式、人际策略、风险偏好和生存优势，再匹配到 50 个古代身份型人格之一。</p>
        <h2>评分方式</h2>
        <p>每个选项会给 1 至 3 个维度加分。答题结束后，系统会将 10 个维度归一化为 0 至 100 分，再与 50 个结果画像进行距离匹配。</p>
        <h2>结果边界</h2>
        <p>结果不是心理诊断、职业诊断、命理判断或历史学术评价。历史人物只用于气质类比，不代表你与某位历史人物完全相同。</p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-action="start">开始测试</button>
          <button class="secondary-button" type="button" data-action="return">返回上一页</button>
        </div>
      </article>
    </section>
  `);
}

function renderPrivacy() {
  document.body.dataset.view = "privacy";
  track("view", { page: "privacy" });
  setView(`
    <section class="plain-wrap">
      <article class="plain-panel">
        <h1>隐私说明</h1>
        <p>当前 MVP 不需要登录，也不会向服务器提交你的答题记录。页面会在本机浏览器中保存答题进度和匿名访问统计，便于刷新后继续测试。</p>
        <h2>本地保存内容</h2>
        <ul>
          <li>当前题目位置和已选答案。</li>
          <li>开始、完成、分享、重新测试等匿名事件计数。</li>
          <li>最终结果仅在本机临时计算，不包含姓名、手机号等身份信息。</li>
        </ul>
        <h2>清除方式</h2>
        <p>可以通过浏览器清除本网站的本地存储数据，或点击重新测试覆盖旧进度。</p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-action="start">开始测试</button>
          <button class="secondary-button" type="button" data-action="return">返回上一页</button>
        </div>
      </article>
    </section>
  `);
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-route]")?.dataset.route;
  const action = event.target.closest("[data-action]")?.dataset.action;
  const option = event.target.closest("[data-option]")?.dataset.option;

  if (route === "home") renderHome();
  if (route === "about") {
    returnView = currentReturnView();
    renderAbout();
  }
  if (route === "privacy") {
    returnView = currentReturnView();
    renderPrivacy();
  }
  if (action === "start") startQuiz();
  if (action === "prev") previousQuestion();
  if (action === "share") shareResult();
  if (action === "retake") retake();
  if (action === "return") renderReturnView();
  if (option !== undefined) chooseOption(Number(option));
});

document.addEventListener("mousemove", (event) => {
  const hotspot = event.target.closest(".radar-hotspot");
  if (!hotspot) {
    hideRadarTooltip();
    return;
  }
  showRadarTooltip(hotspot, event.clientX, event.clientY);
});

document.addEventListener("focusin", (event) => {
  const hotspot = event.target.closest(".radar-hotspot");
  if (hotspot) showRadarTooltip(hotspot);
});

document.addEventListener("focusout", (event) => {
  if (event.target.closest(".radar-hotspot")) hideRadarTooltip();
});

renderHome();
