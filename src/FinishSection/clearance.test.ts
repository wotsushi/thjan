import { Cards } from "../card";
import { Game, MatchType, Player } from "../GameSection";
import { clearance } from "./clearance.internal";

describe("清算", () => {
  describe("四打ち", () => {
    const newGame = ({
      matchType = MatchType.Double,
      kyoku = 1,
      honba = 0,
      scores = [20000, 20000, 20000, 20000],
    }: {
      matchType?: MatchType;
      kyoku?: number;
      honba?: number;
      scores?: [number, number, number, number];
    }) =>
      new Game(
        matchType,
        kyoku,
        honba,
        scores.map(
          (s, i) => new Player(i + 1, Cards.reimu, `プレイヤー${i + 1}`, s)
        )
      );
    describe("局進行", () => {
      it.each<
        [
          name: string,
          game: {
            kyoku: number;
            honba: number;
            winner: number | null;
            loser: number | null;
          },
          expected: { kyoku: number; honba: number }
        ]
      >([
        [
          "親ツモ",
          { kyoku: 1, honba: 0, winner: 1, loser: null },
          { kyoku: 1, honba: 1 },
        ],
        [
          "親ロン",
          { kyoku: 1, honba: 0, winner: 1, loser: 2 },
          { kyoku: 1, honba: 1 },
        ],
        [
          "子ツモ",
          { kyoku: 1, honba: 1, winner: 2, loser: null },
          { kyoku: 2, honba: 0 },
        ],
        [
          "子ロン",
          { kyoku: 1, honba: 1, winner: 2, loser: 1 },
          { kyoku: 2, honba: 0 },
        ],
        [
          "流局",
          { kyoku: 3, honba: 2, winner: null, loser: null },
          { kyoku: 3, honba: 3 },
        ],
      ])("%s", (_, game, expected) => {
        const g = newGame({
          kyoku: game.kyoku,
          honba: game.honba,
        });
        clearance(g, game.winner, game.loser, 10);
        expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
      });
    });
    describe("終局", () => {
      describe("東風戦オーラス", () => {
        it.each<
          [
            name: string,
            game: {
              scores: [number, number, number, number];
              winner: number | null;
              point: number | null;
            },
            expected: { kyoku: number; honba: number }
          ]
        >([
          [
            "親アガリ連荘",
            { scores: [22000, 22000, 26000, 10000], winner: 4, point: 10 },
            { kyoku: 4, honba: 1 },
          ],
          [
            "親アガリ止め",
            { scores: [22000, 22000, 25000, 11000], winner: 4, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "子アガリ",
            { scores: [0, 20000, 20000, 40000], winner: 1, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "流局親継続",
            { scores: [20000, 20000, 20000, 20000], winner: null, point: null },
            { kyoku: 4, honba: 1 },
          ],
          [
            "流局終局",
            { scores: [20000, 20000, 19000, 21000], winner: null, point: null },
            { kyoku: 0, honba: 0 },
          ],
        ])("%s", (_, game, expected) => {
          const g = newGame({
            matchType: MatchType.Single,
            kyoku: 4,
            honba: 0,
            scores: game.scores,
          });
          clearance(g, game.winner, null, game.point);
          expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
        });
      });
      describe("東南戦オーラス", () => {
        it.each<
          [
            name: string,
            game: {
              scores: [number, number, number, number];
              winner: number | null;
              point: number | null;
            },
            expected: { kyoku: number; honba: number }
          ]
        >([
          [
            "親アガリ連荘",
            { scores: [22000, 22000, 26000, 10000], winner: 4, point: 10 },
            { kyoku: 8, honba: 1 },
          ],
          [
            "親アガリ止め",
            { scores: [22000, 22000, 25000, 11000], winner: 4, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "子アガリ",
            { scores: [0, 20000, 20000, 40000], winner: 1, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "流局親継続",
            { scores: [20000, 20000, 20000, 20000], winner: null, point: null },
            { kyoku: 8, honba: 1 },
          ],
          [
            "流局終局",
            { scores: [20000, 20000, 19000, 21000], winner: null, point: null },
            { kyoku: 0, honba: 0 },
          ],
        ])("%s", (_, game, expected) => {
          const g = newGame({
            matchType: MatchType.Double,
            kyoku: 8,
            honba: 0,
            scores: game.scores,
          });
          clearance(g, game.winner, null, game.point);
          expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
        });
      });
      describe("トビ", () => {
        it.each<
          [
            name: string,
            game: {
              kyoku: number;
              honba: number;
              scores: [number, number, number, number];
              winner: number | null;
              loser: number | null;
              point: number | null;
            },
            expected: { kyoku: number; honba: number }
          ]
        >([
          [
            "親アガリ",
            {
              kyoku: 8,
              honba: 1,
              scores: [38000, 30000, 12000, 0],
              winner: 4,
              loser: 3,
              point: 10,
            },
            { kyoku: 0, honba: 0 },
          ],
          [
            "子アガリ",
            {
              kyoku: 1,
              honba: 0,
              scores: [20000, 20000, 20000, 20000],
              winner: 2,
              loser: 4,
              point: 18,
            },
            { kyoku: 0, honba: 0 },
          ],
          [
            "二人トビ",
            {
              kyoku: 3,
              honba: 1,
              scores: [32000, 4000, 8000, 36000],
              winner: 1,
              loser: null,
              point: 14,
            },
            { kyoku: 0, honba: 0 },
          ],
        ])("%s", (_, game, expected) => {
          const g = newGame({
            matchType: MatchType.Double,
            kyoku: game.kyoku,
            honba: game.honba,
            scores: game.scores,
          });
          clearance(g, game.winner, game.loser, game.point);
          expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
        });
      });
    });
  });

  describe("三打ち", () => {
    const newGame = ({
      matchType = MatchType.Double,
      kyoku = 1,
      honba = 0,
      scores = [20000, 20000, 20000],
    }: {
      matchType?: MatchType;
      kyoku?: number;
      honba?: number;
      scores?: [number, number, number];
    }) =>
      new Game(
        matchType,
        kyoku,
        honba,
        scores
          .map(
            (s, i) => new Player(i + 1, Cards.reimu, `プレイヤー${i + 1}`, s)
          )
          .concat([Player.nullPlayer(4)])
      );
    describe("局進行", () => {
      it.each<
        [
          name: string,
          game: {
            kyoku: number;
            honba: number;
            winner: number | null;
            loser: number | null;
          },
          expected: { kyoku: number; honba: number }
        ]
      >([
        [
          "親ツモ",
          { kyoku: 4, honba: 0, winner: 1, loser: null },
          { kyoku: 4, honba: 1 },
        ],
        [
          "親ロン",
          { kyoku: 3, honba: 0, winner: 3, loser: 2 },
          { kyoku: 3, honba: 1 },
        ],
        [
          "子ツモ",
          { kyoku: 5, honba: 1, winner: 1, loser: null },
          { kyoku: 6, honba: 0 },
        ],
        [
          "子ロン",
          { kyoku: 5, honba: 1, winner: 3, loser: 2 },
          { kyoku: 6, honba: 0 },
        ],
        [
          "流局",
          { kyoku: 4, honba: 2, winner: null, loser: null },
          { kyoku: 4, honba: 3 },
        ],
      ])("%s", (_, game, expected) => {
        const g = newGame({
          kyoku: game.kyoku,
          honba: game.honba,
        });
        clearance(g, game.winner, game.loser, 10);
        expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
      });
    });
    describe("終局", () => {
      describe("東風戦オーラス", () => {
        it.each<
          [
            name: string,
            game: {
              scores: [number, number, number];
              winner: number | null;
              point: number | null;
            },
            expected: { kyoku: number; honba: number }
          ]
        >([
          [
            "親アガリ連荘",
            { scores: [24000, 24000, 12000], winner: 3, point: 10 },
            { kyoku: 3, honba: 1 },
          ],
          [
            "親アガリ止め",
            { scores: [24000, 23000, 13000], winner: 3, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "子アガリ",
            { scores: [0, 20000, 40000], winner: 1, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "流局親継続",
            { scores: [20000, 20000, 20000], winner: null, point: null },
            { kyoku: 3, honba: 1 },
          ],
          [
            "流局終局",
            { scores: [20000, 19000, 21000], winner: null, point: null },
            { kyoku: 0, honba: 0 },
          ],
        ])("%s", (_, game, expected) => {
          const g = newGame({
            matchType: MatchType.Single,
            kyoku: 3,
            honba: 0,
            scores: game.scores,
          });
          clearance(g, game.winner, null, game.point);
          expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
        });
      });
      describe("東南戦オーラス", () => {
        it.each<
          [
            name: string,
            game: {
              scores: [number, number, number];
              winner: number | null;
              point: number | null;
            },
            expected: { kyoku: number; honba: number }
          ]
        >([
          [
            "親アガリ連荘",
            { scores: [24000, 24000, 12000], winner: 3, point: 10 },
            { kyoku: 6, honba: 1 },
          ],
          [
            "親アガリ止め",
            { scores: [24000, 23000, 13000], winner: 3, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "子アガリ",
            { scores: [0, 20000, 40000], winner: 1, point: 10 },
            { kyoku: 0, honba: 0 },
          ],
          [
            "流局親継続",
            { scores: [20000, 20000, 20000], winner: null, point: null },
            { kyoku: 6, honba: 1 },
          ],
          [
            "流局終局",
            { scores: [20000, 19000, 21000], winner: null, point: null },
            { kyoku: 0, honba: 0 },
          ],
        ])("%s", (_, game, expected) => {
          const g = newGame({
            matchType: MatchType.Double,
            kyoku: 6,
            honba: 0,
            scores: game.scores,
          });
          clearance(g, game.winner, null, game.point);
          expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
        });
      });
      describe("トビ", () => {
        it.each<
          [
            name: string,
            game: {
              kyoku: number;
              honba: number;
              scores: [number, number, number];
              winner: number | null;
              loser: number | null;
              point: number | null;
            },
            expected: { kyoku: number; honba: number }
          ]
        >([
          [
            "親アガリ",
            {
              kyoku: 6,
              honba: 1,
              scores: [38000, 12000, 0],
              winner: 3,
              loser: 2,
              point: 10,
            },
            { kyoku: 0, honba: 0 },
          ],
          [
            "子アガリ",
            {
              kyoku: 1,
              honba: 0,
              scores: [20000, 20000, 20000],
              winner: 2,
              loser: 3,
              point: 18,
            },
            { kyoku: 0, honba: 0 },
          ],
          [
            "二人トビ",
            {
              kyoku: 3,
              honba: 1,
              scores: [4000, 8000, 48000],
              winner: 3,
              loser: null,
              point: 14,
            },
            { kyoku: 0, honba: 0 },
          ],
        ])("%s", (_, game, expected) => {
          const g = newGame({
            matchType: MatchType.Double,
            kyoku: game.kyoku,
            honba: game.honba,
            scores: game.scores,
          });
          clearance(g, game.winner, game.loser, game.point);
          expect({ kyoku: g.kyoku, honba: g.honba }).toEqual(expected);
        });
      });
    });
  });
});
