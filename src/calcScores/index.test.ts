import { calcScores } from ".";
import { Cards } from "../card";
import { Game, MatchType, Player } from "../GameSection";

const newGame = ({
  matchType = MatchType.Double,
  kyoku = 1,
  honba = 0,
  scores = [20000, 20000, 20000, 20000],
}: {
  matchType?: MatchType;
  kyoku?: number;
  honba?: number;
  scores?: [number, number, number] | [number, number, number, number];
}) =>
  new Game(
    matchType,
    kyoku,
    honba,
    Array.from(Array(4)).map((_, i) =>
      i < scores.length
        ? new Player(i + 1, Cards.reimu, `プレイヤー${i + 1}`, scores[i])
        : Player.nullPlayer(i + 1)
    )
  );

describe("ポイント", () => {
  it.each<[point: number, expected: number]>([
    [3, 400],
    [4, 800],
    [5, 1200],
    [6, 1600],
    [7, 2400],
    [8, 4000],
    [9, 6400],
    [10, 8000],
    [11, 12000],
    [12, 12000],
    [13, 12000],
    [14, 16000],
    [15, 16000],
    [16, 20000],
  ])("%s", (point, expected) => {
    const actual = calcScores(newGame({}), 4, 1, point)[3];
    expect(actual).toEqual(expected);
  });
});
describe("四打ち", () => {
  it.each<
    [
      name: string,
      {
        kyoku: number;
        honba: number;
        winner: number | null;
        loser: number | null;
      },
      expected: [number, number, number, number]
    ]
  >([
    [
      "親ツモ",
      { kyoku: 1, honba: 0, winner: 1, loser: null },
      [+12000, -4000, -4000, -4000],
    ],
    [
      "親ロン",
      { kyoku: 1, honba: 0, winner: 1, loser: 2 },
      [+12000, -12000, 0, 0],
    ],
    [
      "子ツモ",
      { kyoku: 1, honba: 0, winner: 2, loser: null },
      [-4000, +8000, -2000, -2000],
    ],
    [
      "子ロン",
      { kyoku: 1, honba: 0, winner: 2, loser: 1 },
      [-8000, +8000, 0, 0],
    ],
    [
      "ツモ(1本場)",
      { kyoku: 1, honba: 1, winner: 3, loser: null },
      [-4100, -2100, +8300, -2100],
    ],
    [
      "ロン(2本場)",
      { kyoku: 1, honba: 2, winner: 1, loser: 4 },
      [+12600, 0, 0, -12600],
    ],
    ["流局", { kyoku: 1, honba: 0, winner: null, loser: null }, [0, 0, 0, 0]],
  ])("%s", (_, { kyoku, honba, winner, loser }, expected) => {
    const actual = calcScores(newGame({ kyoku, honba }), winner, loser, 10);
    expect(actual).toEqual(expected);
  });
});

describe("三打ち", () => {
  it.each<
    [
      name: string,
      {
        kyoku: number;
        honba: number;
        winner: number | null;
        loser: number | null;
      },
      expected: [number, number, number]
    ]
  >([
    [
      "親ツモ",
      { kyoku: 1, honba: 0, winner: 1, loser: null },
      [+8000, -4000, -4000],
    ],
    [
      "親ロン",
      { kyoku: 1, honba: 0, winner: 1, loser: 2 },
      [+12000, -12000, 0],
    ],
    [
      "子ツモ",
      { kyoku: 1, honba: 0, winner: 2, loser: null },
      [-4000, +6000, -2000],
    ],
    ["子ロン", { kyoku: 1, honba: 0, winner: 2, loser: 1 }, [-8000, +8000, 0]],
    [
      "ツモ(1本場)",
      { kyoku: 1, honba: 1, winner: 3, loser: null },
      [-4100, -2100, +6200],
    ],
    [
      "ロン(2本場)",
      { kyoku: 1, honba: 2, winner: 1, loser: 3 },
      [+12400, 0, -12400],
    ],
    ["流局", { kyoku: 1, honba: 0, winner: null, loser: null }, [0, 0, 0]],
  ])("%s", (_, { kyoku, honba, winner, loser }, expected) => {
    const actual = calcScores(
      newGame({ kyoku, honba, scores: [20000, 20000, 20000] }),
      winner,
      loser,
      10
    );
    expect(actual).toEqual(expected);
  });
});
