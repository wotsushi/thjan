import type { Game } from "../GameSection";

export function reset(game: Game): void {
  game.kyoku = 1;
  game.honba = 0;
  game.participants().forEach((player) => {
    player.score = 20000;
  });
  const participants = game.participants();
  const parentIndex = Math.floor(Math.random() * participants.length);
  game.players = participants
    .slice(parentIndex)
    .concat(participants.slice(0, parentIndex))
    .concat(game.players.filter((p) => p.isNull()));
}
