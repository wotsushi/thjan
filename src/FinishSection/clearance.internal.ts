import { calcScores } from "../calcScores";
import type { Game } from "../GameSection";

export function clearance(
  game: Game,
  winner: number | null,
  loser: number | null,
  point: number | null
) {
  const parent = game.getParent()?.id;
  if (parent === undefined) return;
  const scores = calcScores(game, winner, loser, point);
  game.participants().forEach((p, i) => {
    p.addScore(scores[i]);
  });

  const isParentTop =
    game.participants().toSorted((a, b) => b.getScore() - a.getScore())[0]
      .id === parent;

  if (
    game.participants().some((p) => p.getScore() < 0) || // トビがいれば終了
    (game.isLastRound() &&
      (isParentTop || (winner !== null && winner !== parent))) // オーラス
  ) {
    game.kyoku = 0;
    game.honba = 0;
    return;
  }
  if (winner === null || winner === parent) game.honba++;
  else {
    game.kyoku++;
    game.honba = 0;
  }
}
