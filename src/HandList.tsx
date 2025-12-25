import styled from "styled-components";

import { Card, Cards } from "./card";

export function HandList() {
  return (
    <Root>
      <Hands>
        {trios.slice(0, 13).map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {trios.slice(13, 25).map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {trios.slice(25).map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {quartets.map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {sextets.map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  gap: 15px;
  height: 100%;
`;

const Hands = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`;

function Hand({ name, cards }: { name: string; cards: Card[] }) {
  return (
    <div>
      <Name>{name}</Name>
      <HandCards>{cards.map((card) => card.img({ mini: true }))}</HandCards>
    </div>
  );
}

const Name = styled.div`
  font-size: 15px;
`;

const HandCards = styled.div`
  height: 42px;
`;

const trios: {
  name: string;
  cards: [Card, Card, Card];
}[] = [
  {
    name: "旧作-怪綺談",
    cards: [Cards.reimu, Cards.marisa, Cards.alice],
  },
  {
    name: "旧作-幻想郷",
    cards: [Cards.reimu, Cards.marisa, Cards.yuka],
  },
  {
    name: "妖々夢自機",
    cards: [Cards.reimu, Cards.marisa, Cards.sakuya],
  },
  {
    name: "星蓮船自機",
    cards: [Cards.reimu, Cards.marisa, Cards.sanae],
  },
  {
    name: "けねもこ+",
    cards: [Cards.keine, Cards.exkeine, Cards.mokou],
  },
  {
    name: "守矢神社",
    cards: [Cards.sanae, Cards.kanako, Cards.suwako],
  },
  {
    name: "地霊殿",
    cards: [Cards.satori, Cards.orin, Cards.utuho],
  },
  {
    name: "プリズムリバーライブ(6P)",
    cards: [Cards.lunasa, Cards.merlin, Cards.lyrica],
  },
  {
    name: "妖怪と式と式の式",
    cards: [Cards.chen, Cards.ran, Cards.yukari],
  },
  {
    name: "黄昏",
    cards: [Cards.suika, Cards.iku, Cards.tenshi],
  },
  {
    name: "魔法を使う程度の能力",
    cards: [Cards.marisa, Cards.pache, Cards.byakuren],
  },
  {
    name: "非想天則",
    cards: [Cards.cirno, Cards.meirin, Cards.sanae],
  },
  {
    name: "アンブレラ",
    cards: [Cards.yukari, Cards.yuka, Cards.kogasa],
  },
  {
    name: "ネコ科動物",
    cards: [Cards.chen, Cards.syou, Cards.orin],
  },
  {
    name: "地霊殿サポート-霊夢",
    cards: [Cards.yukari, Cards.aya, Cards.suika],
  },
  {
    name: "地霊殿サポート-魔理沙",
    cards: [Cards.pache, Cards.alice, Cards.nitori],
  },
  {
    name: "屋台で一杯",
    cards: [Cards.mystia, Cards.aya, Cards.suika],
  },
  {
    name: "蓬莱人",
    cards: [Cards.eirin, Cards.kaguya, Cards.mokou],
  },
  {
    name: "文花帖-LEVEL4",
    cards: [Cards.tewi, Cards.udonge, Cards.medi],
  },
  {
    name: "DS-LEVEL3",
    cards: [Cards.kisume, Cards.yamame, Cards.kogasa],
  },
  {
    name: "DS-LEVEL5",
    cards: [Cards.ichirin, Cards.unzan, Cards.murasa],
  },
  {
    name: "天狗",
    cards: [Cards.momiji, Cards.aya, Cards.hatate],
  },
  {
    name: "三妖精(6P)",
    cards: [Cards.sunny, Cards.luna, Cards.star],
  },
  {
    name: "大戦争中ボス",
    cards: [Cards.dai, Cards.lilyw, Cards.lilyb],
  },
  {
    name: "大戦争EX",
    cards: [Cards.marisa, Cards.lilyw, Cards.lilyb],
  },
  {
    name: "月の使者",
    cards: [Cards.eirin, Cards.toyohime, Cards.yorihime],
  },
  {
    name: "儚月抄",
    cards: [Cards.toyohime, Cards.yorihime, Cards.reisen],
  },
  {
    name: "兎",
    cards: [Cards.tewi, Cards.udonge, Cards.reisen],
  },
  {
    name: "MUSIC COLLECTION",
    cards: [Cards.akyuu, Cards.merry, Cards.renko],
  },
  {
    name: "カラス",
    cards: [Cards.aya, Cards.hatate, Cards.utuho],
  },
  {
    name: "豪族乱舞",
    cards: [Cards.tojiko, Cards.futo, Cards.miko],
  },
  {
    name: "NICE BOAT.",
    cards: [Cards.komachi, Cards.murasa, Cards.futo],
  },
  {
    name: "NO NAME",
    cards: [Cards.dai, Cards.koa, Cards.nanashi],
  },
  {
    name: "Perfume",
    cards: [Cards.yuka, Cards.suika, Cards.yosika],
  },
  {
    name: "イヌ科動物",
    cards: [Cards.ran, Cards.momiji, Cards.mamizou],
  },
  {
    name: "宗教家",
    cards: [Cards.kanako, Cards.byakuren, Cards.miko],
  },
  {
    name: "ミステリースポット",
    cards: [Cards.merry, Cards.renko, Cards.yuyuko],
  },
];

const quartets: {
  name: string;
  cards: [Card, Card, Card, Card];
}[] = [
  {
    name: "永遠亭",
    cards: [Cards.tewi, Cards.udonge, Cards.eirin, Cards.kaguya],
  },
  {
    name: "地霊殿＋",
    cards: [Cards.satori, Cards.orin, Cards.utuho, Cards.koisi],
  },
  {
    name: "妖怪の山",
    cards: [Cards.nitori, Cards.momiji, Cards.aya, Cards.suika],
  },
  {
    name: "花映塚",
    cards: [Cards.medi, Cards.yuka, Cards.komachi, Cards.eiki],
  },
  {
    name: "天空の花の都",
    cards: [Cards.lunasa, Cards.merlin, Cards.lyrica, Cards.lilyw],
  },
  {
    name: "エイトフォー",
    cards: [Cards.ran, Cards.yukari, Cards.eirin, Cards.kanako],
  },
  {
    name: "文花帖-LEVEL EX",
    cards: [Cards.fran, Cards.yukari, Cards.mokou, Cards.suika],
  },
  {
    name: "姉's",
    cards: [Cards.remi, Cards.sizuha, Cards.satori, Cards.toyohime],
  },
  {
    name: "妹's",
    cards: [Cards.fran, Cards.minoriko, Cards.koisi, Cards.yorihime],
  },
  {
    name: "月人",
    cards: [Cards.eirin, Cards.kaguya, Cards.toyohime, Cards.yorihime],
  },
  {
    name: "妖精大戦争",
    cards: [Cards.cirno, Cards.sunny, Cards.luna, Cards.star],
  },
  {
    name: "鳥4",
    cards: [Cards.mystia, Cards.aya, Cards.utuho, Cards.hatate],
  },
  {
    name: "神霊廟自機",
    cards: [Cards.reimu, Cards.marisa, Cards.youmu, Cards.sanae],
  },
  {
    name: "永夜抄人間",
    cards: [Cards.reimu, Cards.marisa, Cards.sakuya, Cards.youmu],
  },
  {
    name: "永夜抄妖怪",
    cards: [Cards.remi, Cards.alice, Cards.yuyuko, Cards.yukari],
  },
];

const sextets: {
  name: string;
  cards: [Card, Card, Card, Card, Card, Card];
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
  },
];
