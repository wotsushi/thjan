import { Cards } from "../card";
import { Game, MatchType, Player } from "../GameSection";
import { reset } from "./index.internal";

describe("リセット", () => {
  it("四打ち", () => {
    const game = new Game(MatchType.Double, 4, 1, [
      new Player(1, Cards.reimu, "プレイヤー1", 15000),
      new Player(2, Cards.marisa, "プレイヤー2", 20000),
      new Player(3, Cards.sakuya, "プレイヤー3", 30000),
      new Player(4, Cards.youmu, "プレイヤー4", 15000),
    ]);
    reset(game);
    expect(game.kyoku).toBe(1);
    expect(game.honba).toBe(0);
    const scores = game.participants().map((p) => p.getScore());
    expect(scores).toEqual([20000, 20000, 20000, 20000]);
  });

  it("三打ち", () => {
    const game = new Game(MatchType.Single, 2, 2, [
      new Player(1, Cards.reimu, "プレイヤー1", 15000),
      new Player(2, Cards.marisa, "プレイヤー2", 20000),
      new Player(3, Cards.sakuya, "プレイヤー3", 25000),
      Player.nullPlayer(4),
    ]);
    reset(game);
    expect(game.kyoku).toBe(1);
    expect(game.honba).toBe(0);
    const scores = game.participants().map((p) => p.getScore());
    expect(scores).toEqual([20000, 20000, 20000]);
  });

  describe("プレイヤー並び替え", () => {
    it.each<[n: number, parentID: number, expected: number[]]>([
      [4, 1, [1, 2, 3, 4]],
      [4, 2, [2, 3, 4, 1]],
      [4, 3, [3, 4, 1, 2]],
      [4, 4, [4, 1, 2, 3]],
      [3, 1, [1, 2, 3]],
      [3, 2, [2, 3, 1]],
      [3, 3, [3, 1, 2]],
    ])("n=%d parentID=%d", (n, parentID, expected) => {
      const game = new Game(MatchType.Double, 4, 0, [
        new Player(1, Cards.reimu, "プレイヤー1", 20000),
        new Player(2, Cards.marisa, "プレイヤー2", 20000),
        new Player(3, Cards.sakuya, "プレイヤー3", 20000),
        n === 4
          ? new Player(4, Cards.youmu, "プレイヤー4", 20000)
          : Player.nullPlayer(4),
      ]);
      vi.spyOn(Math, "random").mockReturnValueOnce(parentID / n - 1 / (2 * n));
      reset(game);
      const actual = game.participants().map((p) => p.id);
      expect(actual).toEqual(expected);
    });
  });
});
