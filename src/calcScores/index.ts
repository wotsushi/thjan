import type { Game } from "../GameSection";

export function calcScores(
  game: Game,
  winner: number | null,
  loser: number | null,
  point: number | null
): number[] {
  const parent = game.getParent()?.id;
  if (parent === null || winner === null) {
    return game.participants().map(() => 0);
  }
  const wp = game.players.find(({ id }) => id === winner);
  const lp = game.players.find(({ id }) => id === loser);
  if (point === null || wp === undefined)
    return game.participants().map(() => 0);
  const baseScore = scoreTable[point] / 4;
  // ツモ
  if (lp === undefined) {
    const res = game.participants().map((p) => {
      if (p.id === winner) return 0;
      return -(
        (winner === parent || p.id === parent ? 2 : 1) * baseScore +
        100 * game.honba
      );
    });
    res[game.participants().findIndex((p) => p.id === winner)] = -res.reduce(
      (t, s) => t + s,
      0
    );
    return res;
  }
  // ロン
  const score =
    (winner === parent ? 6 : 4) * baseScore +
    100 * game.honba * (game.participants().length - 1);
  return game.participants().map((p) => {
    if (p.id === winner) return score;
    if (p.id === loser) return -score;
    return 0;
  });
}

// scoreTable[x]はxPで子が和了したときの点数
const scoreTable = [
  0, 400, 400, 400, 800, 1200, 1600, 2400, 4000, 6400, 8000, 12000, 12000,
  12000, 16000, 16000, 20000, 20000, 24000, 24000, 28000, 28000, 32000, 32000,
  36000, 36000, 40000, 40000, 44000, 44000, 48000, 48000, 52000, 52000, 56000,
  56000, 60000, 60000, 64000, 64000, 68000, 68000, 72000, 72000, 76000, 76000,
  80000, 80000, 84000, 84000, 88000, 88000, 92000,
];
