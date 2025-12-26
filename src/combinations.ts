import { Cards, type Card } from "./card";

export const Pairs = new Map<Card, Set<Card>>([
  [
    Cards.reimu,
    new Set([
      Cards.marisa,
      Cards.remi,
      Cards.alice,
      Cards.yukari,
      Cards.aya,
      Cards.sanae,
      Cards.suika,
      Cards.korin,
      Cards.kasen,
    ]),
  ],
  [
    Cards.marisa,
    new Set([
      Cards.reimu,
      Cards.pache,
      Cards.alice,
      Cards.yuka,
      Cards.nitori,
      Cards.korin,
    ]),
  ],
  [Cards.rumia, new Set([Cards.wriggle])],
  [Cards.dai, new Set([Cards.cirno, Cards.lilyw, Cards.sunny])],
  [Cards.cirno, new Set([Cards.dai, Cards.letty, Cards.wriggle, Cards.aya])],
  [Cards.meirin, new Set([Cards.pache, Cards.remi])],
  [Cards.koa, new Set([Cards.pache])],
  [
    Cards.pache,
    new Set([Cards.marisa, Cards.koa, Cards.meirin, Cards.remi, Cards.fran]),
  ],
  [Cards.sakuya, new Set([Cards.remi, Cards.eirin])],
  [
    Cards.remi,
    new Set([Cards.reimu, Cards.meirin, Cards.pache, Cards.sakuya, Cards.fran]),
  ],
  [Cards.fran, new Set([Cards.pache, Cards.remi])],
  [Cards.letty, new Set([Cards.cirno])],
  [Cards.chen, new Set([Cards.youmu, Cards.ran])],
  [Cards.alice, new Set([Cards.reimu, Cards.marisa, Cards.keine])],
  [Cards.youmu, new Set([Cards.chen, Cards.yuyuko])],
  [Cards.yuyuko, new Set([Cards.youmu, Cards.ran, Cards.yukari])],
  [Cards.ran, new Set([Cards.chen, Cards.yuyuko, Cards.yukari, Cards.mamizou])],
  [
    Cards.yukari,
    new Set([
      Cards.reimu,
      Cards.yuyuko,
      Cards.ran,
      Cards.suika,
      Cards.akyuu,
      Cards.merry,
    ]),
  ],
  [Cards.wriggle, new Set([Cards.rumia, Cards.cirno])],
  [Cards.mystia, new Set([Cards.kyoko])],
  [
    Cards.keine,
    new Set([Cards.alice, Cards.exkeine, Cards.mokou, Cards.akyuu]),
  ],
  [Cards.tewi, new Set([Cards.udonge, Cards.eirin])],
  [
    Cards.udonge,
    new Set([Cards.tewi, Cards.eirin, Cards.kaguya, Cards.reisen]),
  ],
  [
    Cards.eirin,
    new Set([Cards.sakuya, Cards.tewi, Cards.udonge, Cards.kaguya, Cards.medi]),
  ],
  [Cards.kaguya, new Set([Cards.udonge, Cards.eirin, Cards.mokou])],
  [Cards.exkeine, new Set([Cards.keine, Cards.mokou])],
  [Cards.mokou, new Set([Cards.keine, Cards.exkeine, Cards.kaguya])],
  [Cards.lilyw, new Set([Cards.dai, Cards.lilyb, Cards.luna])],
  [Cards.lilyb, new Set([Cards.lilyw, Cards.eiki, Cards.star])],
  [Cards.medi, new Set([Cards.eirin])],
  [Cards.yuka, new Set([Cards.marisa])],
  [Cards.komachi, new Set([Cards.eiki, Cards.kasen, Cards.murasa])],
  [Cards.eiki, new Set([Cards.lilyb, Cards.komachi])],
  [Cards.sizuha, new Set([Cards.minoriko])],
  [Cards.minoriko, new Set([Cards.sizuha])],
  [Cards.hina, new Set([Cards.parsee])],
  [
    Cards.nitori,
    new Set([Cards.marisa, Cards.momiji, Cards.aya, Cards.yamame, Cards.utuho]),
  ],
  [Cards.momiji, new Set([Cards.nitori, Cards.aya])],
  [
    Cards.aya,
    new Set([
      Cards.reimu,
      Cards.cirno,
      Cards.nitori,
      Cards.momiji,
      Cards.hatate,
    ]),
  ],
  [
    Cards.sanae,
    new Set([Cards.reimu, Cards.kanako, Cards.suwako, Cards.koisi, Cards.futo]),
  ],
  [Cards.kanako, new Set([Cards.sanae, Cards.suwako, Cards.utuho])],
  [Cards.suwako, new Set([Cards.sanae, Cards.kanako])],
  [
    Cards.suika,
    new Set([Cards.reimu, Cards.yukari, Cards.tenshi, Cards.yugi, Cards.kasen]),
  ],
  [Cards.iku, new Set([Cards.tenshi])],
  [Cards.tenshi, new Set([Cards.suika, Cards.iku])],
  [Cards.kisume, new Set([Cards.yamame])],
  [Cards.yamame, new Set([Cards.nitori, Cards.kisume])],
  [Cards.parsee, new Set([Cards.hina])],
  [Cards.yugi, new Set([Cards.suika])],
  [Cards.satori, new Set([Cards.orin, Cards.utuho, Cards.koisi])],
  [Cards.orin, new Set([Cards.satori, Cards.utuho])],
  [
    Cards.utuho,
    new Set([Cards.nitori, Cards.kanako, Cards.satori, Cards.orin]),
  ],
  [Cards.koisi, new Set([Cards.sanae, Cards.satori])],
  [Cards.nazu, new Set([Cards.syou])],
  [Cards.kogasa, new Set([Cards.nue, Cards.yosika])],
  [Cards.ichirin, new Set([Cards.unzan, Cards.murasa, Cards.byakuren])],
  [Cards.unzan, new Set([Cards.ichirin])],
  [
    Cards.murasa,
    new Set([Cards.komachi, Cards.ichirin, Cards.byakuren, Cards.nue]),
  ],
  [Cards.syou, new Set([Cards.nazu, Cards.byakuren])],
  [
    Cards.byakuren,
    new Set([Cards.ichirin, Cards.murasa, Cards.syou, Cards.nue, Cards.kyoko]),
  ],
  [
    Cards.nue,
    new Set([Cards.kogasa, Cards.murasa, Cards.byakuren, Cards.mamizou]),
  ],
  [Cards.hatate, new Set([Cards.aya])],
  [Cards.sunny, new Set([Cards.dai])],
  [Cards.luna, new Set([Cards.lilyw])],
  [Cards.star, new Set([Cards.lilyb])],
  [Cards.toyohime, new Set([Cards.yorihime])],
  [Cards.yorihime, new Set([Cards.toyohime])],
  [Cards.reisen, new Set([Cards.udonge])],
  [Cards.korin, new Set([Cards.reimu, Cards.marisa, Cards.nanashi])],
  [Cards.nanashi, new Set([Cards.korin])],
  [Cards.akyuu, new Set([Cards.yukari, Cards.keine])],
  [Cards.merry, new Set([Cards.yukari, Cards.renko])],
  [Cards.renko, new Set([Cards.merry])],
  [
    Cards.kasen,
    new Set([Cards.reimu, Cards.komachi, Cards.suika, Cards.seiga]),
  ],
  [Cards.kyoko, new Set([Cards.mystia, Cards.byakuren])],
  [Cards.yosika, new Set([Cards.kogasa, Cards.seiga])],
  [Cards.seiga, new Set([Cards.kasen, Cards.yosika, Cards.miko])],
  [Cards.tojiko, new Set([Cards.futo, Cards.miko])],
  [Cards.futo, new Set([Cards.sanae, Cards.tojiko, Cards.miko])],
  [Cards.miko, new Set([Cards.seiga, Cards.tojiko, Cards.futo])],
  [Cards.mamizou, new Set([Cards.ran, Cards.nue])],
]);

export const Trios: {
  name: string;
  cards: [Card, Card, Card];
  point: number;
}[] = [
  {
    name: "旧作-怪綺談",
    cards: [Cards.reimu, Cards.marisa, Cards.alice],
    point: 4,
  },
  {
    name: "旧作-幻想郷",
    cards: [Cards.reimu, Cards.marisa, Cards.yuka],
    point: 4,
  },
  {
    name: "妖々夢自機",
    cards: [Cards.reimu, Cards.marisa, Cards.sakuya],
    point: 4,
  },
  {
    name: "星蓮船自機",
    cards: [Cards.reimu, Cards.marisa, Cards.sanae],
    point: 4,
  },
  {
    name: "けねもこ+",
    cards: [Cards.keine, Cards.exkeine, Cards.mokou],
    point: 4,
  },
  {
    name: "守矢神社",
    cards: [Cards.sanae, Cards.kanako, Cards.suwako],
    point: 4,
  },
  {
    name: "地霊殿",
    cards: [Cards.satori, Cards.orin, Cards.utuho],
    point: 4,
  },
  {
    name: "プリズムリバーライブ",
    cards: [Cards.lunasa, Cards.merlin, Cards.lyrica],
    point: 6,
  },
  {
    name: "妖怪と式と式の式",
    cards: [Cards.chen, Cards.ran, Cards.yukari],
    point: 4,
  },
  {
    name: "黄昏",
    cards: [Cards.suika, Cards.iku, Cards.tenshi],
    point: 4,
  },
  {
    name: "魔法を使う程度の能力",
    cards: [Cards.marisa, Cards.pache, Cards.byakuren],
    point: 4,
  },
  {
    name: "非想天則",
    cards: [Cards.cirno, Cards.meirin, Cards.sanae],
    point: 4,
  },
  {
    name: "アンブレラ",
    cards: [Cards.yukari, Cards.yuka, Cards.kogasa],
    point: 4,
  },
  {
    name: "ネコ科動物",
    cards: [Cards.chen, Cards.syou, Cards.orin],
    point: 4,
  },
  {
    name: "地霊殿サポート-霊夢",
    cards: [Cards.yukari, Cards.aya, Cards.suika],
    point: 4,
  },
  {
    name: "地霊殿サポート-魔理沙",
    cards: [Cards.pache, Cards.alice, Cards.nitori],
    point: 4,
  },
  {
    name: "屋台で一杯",
    cards: [Cards.mystia, Cards.aya, Cards.suika],
    point: 4,
  },
  {
    name: "蓬莱人",
    cards: [Cards.eirin, Cards.kaguya, Cards.mokou],
    point: 4,
  },
  {
    name: "文花帖-LEVEL4",
    cards: [Cards.tewi, Cards.udonge, Cards.medi],
    point: 4,
  },
  {
    name: "DS-LEVEL3",
    cards: [Cards.kisume, Cards.yamame, Cards.kogasa],
    point: 4,
  },
  {
    name: "DS-LEVEL5",
    cards: [Cards.ichirin, Cards.unzan, Cards.murasa],
    point: 4,
  },
  {
    name: "天狗",
    cards: [Cards.momiji, Cards.aya, Cards.hatate],
    point: 4,
  },
  {
    name: "三妖精",
    cards: [Cards.sunny, Cards.luna, Cards.star],
    point: 6,
  },
  {
    name: "大戦争中ボス",
    cards: [Cards.dai, Cards.lilyw, Cards.lilyb],
    point: 4,
  },
  {
    name: "大戦争EX",
    cards: [Cards.marisa, Cards.dai, Cards.lilyw],
    point: 4,
  },
  {
    name: "月の使者",
    cards: [Cards.eirin, Cards.toyohime, Cards.yorihime],
    point: 4,
  },
  {
    name: "儚月抄",
    cards: [Cards.toyohime, Cards.yorihime, Cards.reisen],
    point: 4,
  },
  {
    name: "兎",
    cards: [Cards.tewi, Cards.udonge, Cards.reisen],
    point: 4,
  },
  {
    name: "MUSIC COLLECTION",
    cards: [Cards.akyuu, Cards.merry, Cards.renko],
    point: 4,
  },
  {
    name: "カラス",
    cards: [Cards.aya, Cards.hatate, Cards.utuho],
    point: 4,
  },
  {
    name: "豪族乱舞",
    cards: [Cards.tojiko, Cards.futo, Cards.miko],
    point: 4,
  },
  {
    name: "NICE BOAT.",
    cards: [Cards.komachi, Cards.murasa, Cards.futo],
    point: 4,
  },
  {
    name: "NO NAME",
    cards: [Cards.dai, Cards.koa, Cards.nanashi],
    point: 4,
  },
  {
    name: "Perfume",
    cards: [Cards.yuka, Cards.suika, Cards.yosika],
    point: 4,
  },
  {
    name: "イヌ科動物",
    cards: [Cards.ran, Cards.momiji, Cards.mamizou],
    point: 4,
  },
  {
    name: "宗教家",
    cards: [Cards.kanako, Cards.byakuren, Cards.miko],
    point: 4,
  },
  {
    name: "ミステリースポット",
    cards: [Cards.merry, Cards.renko, Cards.yuyuko],
    point: 4,
  },
];

export const Quartets: {
  name: string;
  cards: [Card, Card, Card, Card];
  point: number;
}[] = [
  {
    name: "永遠亭",
    cards: [Cards.tewi, Cards.udonge, Cards.eirin, Cards.kaguya],
    point: 9,
  },
  {
    name: "地霊殿＋",
    cards: [Cards.satori, Cards.orin, Cards.utuho, Cards.koisi],
    point: 5,
  },
  {
    name: "妖怪の山",
    cards: [Cards.nitori, Cards.momiji, Cards.aya, Cards.suika],
    point: 9,
  },
  {
    name: "花映塚",
    cards: [Cards.medi, Cards.yuka, Cards.komachi, Cards.eiki],
    point: 9,
  },
  {
    name: "天空の花の都",
    cards: [Cards.lunasa, Cards.merlin, Cards.lyrica, Cards.lilyw],
    point: 5,
  },
  {
    name: "エイトフォー",
    cards: [Cards.ran, Cards.yukari, Cards.eirin, Cards.kanako],
    point: 9,
  },
  {
    name: "文花帖-LEVEL EX",
    cards: [Cards.fran, Cards.yukari, Cards.mokou, Cards.suika],
    point: 9,
  },
  {
    name: "姉's",
    cards: [Cards.remi, Cards.sizuha, Cards.satori, Cards.toyohime],
    point: 9,
  },
  {
    name: "妹's",
    cards: [Cards.fran, Cards.minoriko, Cards.koisi, Cards.yorihime],
    point: 9,
  },
  {
    name: "月人",
    cards: [Cards.eirin, Cards.kaguya, Cards.toyohime, Cards.yorihime],
    point: 5,
  },
  {
    name: "妖精大戦争",
    cards: [Cards.cirno, Cards.sunny, Cards.luna, Cards.star],
    point: 5,
  },
  {
    name: "鳥4",
    cards: [Cards.mystia, Cards.aya, Cards.utuho, Cards.hatate],
    point: 5,
  },
  {
    name: "神霊廟自機",
    cards: [Cards.reimu, Cards.marisa, Cards.youmu, Cards.sanae],
    point: 5,
  },
  {
    name: "永夜抄人間",
    cards: [Cards.reimu, Cards.marisa, Cards.sakuya, Cards.youmu],
    point: 5,
  },
  {
    name: "永夜抄妖怪",
    cards: [Cards.remi, Cards.alice, Cards.yuyuko, Cards.yukari],
    point: 9,
  },
];

export const Sextets: {
  name: string;
  cards: [Card, Card, Card, Card, Card, Card];
  point: number;
}[] = [
  {
    name: "「全人類の緋想天」",
    cards: [
      Cards.udonge,
      Cards.komachi,
      Cards.aya,
      Cards.suika,
      Cards.iku,
      Cards.tenshi,
    ],
    point: 30,
  },
  {
    name: "紅魔館",
    cards: [
      Cards.meirin,
      Cards.koa,
      Cards.pache,
      Cards.sakuya,
      Cards.remi,
      Cards.fran,
    ],
    point: 30,
  },
  {
    name: "命蓮寺",
    cards: [
      Cards.nazu,
      Cards.ichirin,
      Cards.unzan,
      Cards.murasa,
      Cards.syou,
      Cards.byakuren,
    ],
    point: 30,
  },
  {
    name: "中ボス",
    cards: [
      Cards.dai,
      Cards.koa,
      Cards.lilyw,
      Cards.sizuha,
      Cards.momiji,
      Cards.kisume,
    ],
    point: 30,
  },
  {
    name: "神",
    cards: [
      Cards.sizuha,
      Cards.minoriko,
      Cards.hina,
      Cards.sanae,
      Cards.kanako,
      Cards.suwako,
    ],
    point: 30,
  },
  {
    name: "これからの幻想郷の話",
    cards: [
      Cards.reimu,
      Cards.marisa,
      Cards.kanako,
      Cards.byakuren,
      Cards.akyuu,
      Cards.miko,
    ],
    point: 30,
  },
  {
    name: "不遇なキャラの話",
    cards: [
      Cards.momiji,
      Cards.iku,
      Cards.tenshi,
      Cards.kisume,
      Cards.toyohime,
      Cards.yorihime,
    ],
    point: 30,
  },
];

export const StageBosses: { stage: number; name: string; point: number }[] = [
  { stage: 1, name: "ステージ1ボス", point: 30 },
  { stage: 2, name: "ステージ2ボス", point: 10 },
  { stage: 3, name: "ステージ3ボス", point: 6 },
  { stage: 4, name: "ステージ4ボス", point: 5 },
  { stage: 5, name: "ステージ5ボス", point: 6 },
  { stage: 6, name: "ステージFINALボス", point: 5 },
  { stage: 7, name: "ステージEXTRAボス", point: 6 },
];
