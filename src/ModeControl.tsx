import styled from "styled-components";
import { MatchType, type Game, type Player } from "./GameSection";
import Radio from "./Radio";

export function ModeControl({
  game,
  mutateGame,
}: {
  game: Game;
  mutateGame: (mutator: (game: Game) => void) => void;
}) {
  return (
    <Root>
      <Options>
        <Radio
          name="matchType"
          label="東風戦"
          checked={game.matchType === MatchType.Single}
          onChange={() =>
            mutateGame((game) => {
              game.matchType = MatchType.Single;
            })
          }
        />
        <Radio
          name="matchType"
          label="東南戦"
          checked={game.matchType === MatchType.Double}
          onChange={() =>
            mutateGame((game) => {
              game.matchType = MatchType.Double;
            })
          }
        />
      </Options>
      <Button
        type="button"
        disabled={game.participants().length < 2}
        onClick={() =>
          mutateGame((game) => {
            game.kyoku = 1;
            game.honba = 0;
            game.participants().forEach((player) => {
              player.score = 20000;
            });
            const players = shufflePlayers(game.participants());
            game.players = players.concat(
              game.players.filter((p) => p.isNull())
            );
          })
        }
      >
        開始
      </Button>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 16px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Button = styled.button`
  font-size: 24px;
  width: 200px;
  align-self: center;
`;

function shufflePlayers(players: Player[]): Player[] {
  const result = [...players];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
