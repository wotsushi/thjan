import { Cards, Series, type Card } from "../card";
import { Pairs, Quartets, Sextets, StageBosses, Trios } from "../combinations";

export type Yaku = { name: string; point: number };

export function finish(
  hand: Card[],
  pon: Card[],
  bonus: Card,
  uraBonus: Card | null,
  ippatsu: boolean,
  tsumo: boolean,
  partner: Card
): Yaku[] {
  const cards = form(hand, pon, uraBonus !== null || tsumo);
  if (cards.length === 0) {
    return [];
  }

  const all = new Set(hand).union(new Set(pon));
  const yakus: [boolean, Yaku][] = [
    [uraBonus !== null, { name: "リーチ", point: 1 }],
    [ippatsu, { name: "一発", point: 1 }],
    [tsumo, { name: "メンゼンツモ", point: 1 }],
    ...cards
      .map(trioType)
      .map<[boolean, Yaku]>((type) => [
        type === TrioType.SameStage,
        { name: "同じステージ", point: 2 },
      ]),
    ...cards
      .map(trioType)
      .map<[boolean, Yaku]>((type) => [
        type === TrioType.ConsecutiveStage,
        { name: "ステージ連番", point: 3 },
      ]),
    [cards.length === 3, { name: "オールペア", point: 4 }],
    ...Sextets.map<[boolean, Yaku]>((sextet) => [
      new Set(sextet.cards).isSubsetOf(all),
      { name: sextet.name, point: sextet.point },
    ]),
    // 一色手
    ...Object.values(Series).map<[boolean, Yaku]>((series) => [
      Array.from(all).every(({ series: s }) => s === series),
      { name: series, point: series === Series.th09 ? 30 : 5 },
    ]),
    // ステージ◯◯ボス
    ...StageBosses.map<[boolean, Yaku]>(({ stage, name, point }) => [
      cards.length === 2 &&  // オールペア形の場合はステージ◯◯ボスは付かない（例: 永琳、輝夜、萃香、天子、神奈子、空をダマロンした場合）
      Array.from(all).every(({ stage: s }) => s === stage),
      { name, point },
    ]),
    ...Quartets.map<[boolean, Yaku]>((quartet) => [
      new Set(quartet.cards).isSubsetOf(all),
      { name: quartet.name, point: quartet.point },
    ]),
    ...Trios.map<[boolean, Yaku]>((trio) => [
      new Set(trio.cards).isSubsetOf(all),
      { name: trio.name, point: trio.point },
    ]),
    ...Pairs.entries().flatMap(([card, pairs]) =>
      pairs.values().map<[boolean, Yaku]>((pair) => [
        all.has(card) &&
          all.has(pair) &&
          (CardOrder.get(card) ?? 100) < (CardOrder.get(pair) ?? 0), // 重複カウント防止のため、順序を決める
        { name: `ペア: ${card.name} & ${pair.name}`, point: 1 },
      ])
    ),
    [all.has(bonus), { name: "ボーナスカード", point: 1 }],
    [
      uraBonus !== null && all.has(uraBonus),
      { name: "裏ボーナスカード", point: 1 },
    ],
    [
      partner.stage !== null && all.has(partner),
      { name: "パートナーボーナス", point: 1 },
    ],
    [
      partner.stage === null && all.has(partner),
      { name: "パートナーボーナス+", point: 2 },
    ],
    [hand.at(-1) === partner, { name: "パートナーフィニッシュ", point: 1 }],
    [pon.length > 0, { name: "鳴き", point: -2 }],
  ];

  return yakus.filter(([ok]) => ok).map(([, yaku]) => yaku);
}

function form(hand: Card[], pon: Card[], reachOrTsumo: boolean): Card[][] {
  const all = hand.concat(pon);
  if (Sextets.some(({ cards }) => equalSet(cards, all))) {
    return [all];
  }
  if (new Set(all.map(({ series }) => series)).size === 1) {
    // 一色
    return [all];
  }

  if (
    Quartets.some(({ cards }) => equalSet(cards, pon)) &&
    Pairs.get(hand[0])?.has(hand[1])
  ) {
    // 4枚役ポン + ペア
    return [hand, pon];
  }

  if (
    (trioType(hand) === TrioType.Yaku && trioType(pon) !== null) ||
    (trioType(hand) !== null && trioType(pon) === TrioType.Yaku)
  ) {
    // トリオポン + トリオ
    return [hand, pon];
  }

  if (pon.length > 0) {
    return [];
  }

  // 以降はセクステットでないメンゼン手のみ
  const handSet = new Set(hand);

  const quartetForm = Quartets.map(({ cards }) => {
    const cardSet = new Set(cards);
    if (!cardSet.isSubsetOf(handSet)) {
      return [];
    }
    const rest = Array.from(handSet.difference(cardSet));
    if (Pairs.get(rest[0])?.has(rest[1])) {
      return [cards, rest];
    }
    return [];
  }).find((form) => form.length > 0);
  if (quartetForm) {
    return quartetForm;
  }

  const trioForm = Trios.map(({ cards }) => {
    const cardSet = new Set(cards);
    if (!cardSet.isSubsetOf(handSet)) {
      return [];
    }
    const rest = Array.from(handSet.difference(cardSet));
    const restTrioType = trioType(rest);
    if (restTrioType !== null) {
      return [cards, rest];
    }
    return [];
  }).find((form) => form.length > 0); // 3枚役+3枚役 とも 3枚役+同ステ/ステ連 ともみなせる形は存在しないので、最初に見つけた形で確定してよい
  if (trioForm) {
    return trioForm;
  }

  if (reachOrTsumo) {
    const stageForm = permutations(hand).map((p) => {
        if (
          trioType([p[0], p[1], p[2]]) !== null &&
          trioType([p[3], p[4], p[5]]) !== null
        ) {
          return [
            [p[0], p[1], p[2]],
            [p[3], p[4], p[5]]
          ];
        }
        return [];
    }).find((cards) => cards.length > 0);
    if (stageForm) {
      return stageForm;
    }
  }

  return (
    permutations(hand)
      .map((p) => {
        if (
          Pairs.get(p[0])?.has(p[1]) &&
          Pairs.get(p[2])?.has(p[3]) &&
          Pairs.get(p[4])?.has(p[5])
        ) {
          return [
            [p[0], p[1]],
            [p[2], p[3]],
            [p[4], p[5]],
          ];
        }
        return [];
      })
      .find((cards) => cards.length > 0) ?? []
  );
}

function equalSet(a: Card[], b: Card[]): boolean {
  const setA = new Set(a);
  const setB = new Set(b);
  return setA.size === setB.size && setA.isSubsetOf(setB);
}

function trioType(cards: Card[]): TrioType | null {
  if (cards.length !== 3) {
    return null;
  }
  if (Trios.some((trio) => equalSet(trio.cards, cards))) {
    return TrioType.Yaku;
  }
  const stages = cards.map(({ stage }) => stage).filter((s) => s !== null);
  if (stages.length !== 3) {
    return null;
  }
  stages.sort((a, b) => a - b);
  if (stages[0] === stages[2]) {
    return TrioType.SameStage;
  }
  if (
    new Set(cards.map(({ series }) => series)).size === 1 &&
    stages[1] === stages[0] + 1 &&
    stages[2] === stages[1] + 1
  ) {
    return TrioType.ConsecutiveStage;
  }
  return null;
}

const TrioType = {
  SameStage: "同じステージ",
  ConsecutiveStage: "ステージ連番",
  Yaku: "3枚役",
} as const;

type TrioType = (typeof TrioType)[keyof typeof TrioType];

const CardOrder = new Map<Card, number>(
  Object.values(Cards).map((card, index) => [card, index] as const)
);

function permutations(cards: Card[]): Card[][] {
  if (cards.length === 0) return [[]];
  return cards.flatMap((c, i) =>
    permutations(cards.filter((_, j) => i !== j)).map((p) => [c, ...p])
  );
}
