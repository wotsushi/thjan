import styled from "styled-components";
import type { Game } from "../GameSection";
import Radio from "../Radio";
import { clearance } from "./index.internal";

export function GameControl({
  game,
  winner,
  loser,
  point,
  setWinner,
  setLoser,
  setPoint,
  mutateGame,
}: {
  game: Game;
  winner: number | null;
  loser: number | null;
  point: number | null;
  setWinner: (winner: number | null) => void;
  setLoser: (loser: number | null) => void;
  setPoint: (point: number | null) => void;
  mutateGame: (mutator: (game: Game) => void) => void;
}) {
  return (
    <Root>
      <Selectors>
        <Selector>
          <Title>和了</Title>
          <Options>
            {game.participants().map(({ name, id }) => (
              <Radio
                key={id}
                name="winner"
                label={name}
                checked={winner === id}
                onClick={() => setWinner(winner === id ? null : id)}
              />
            ))}
          </Options>
        </Selector>
        <Selector>
          <Title>放銃</Title>
          <Options>
            {game.participants().map(({ name, id }) => (
              <Radio
                key={id}
                name="loser"
                label={name}
                checked={loser === id}
                onClick={() => setLoser(loser === id ? null : id)}
              />
            ))}
          </Options>
        </Selector>
      <PointContainer>
        <Title>P</Title>
        <Point
          type="number"
          name="point"
          min="3"
          max="52"
          value={point ?? ""}
          onChange={(e) =>
            setPoint(e.target.value ? Number(e.target.value) : null)
          }
        />
      </PointContainer>
      </Selectors>
      <Button
        type="button"
        disabled={
          (winner !== null && point === null) ||
          (winner !== null && winner === loser) ||
          (winner === null && loser !== null)
        }
        onClick={() => {
          mutateGame((g) => clearance(g, winner, loser, point));
          setWinner(null);
          setLoser(null);
          setPoint(null);
        }}
      >
        清算
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

const Selectors = styled.div`
  display: flex;
  column-gap: 16px;
`;

const Selector = styled.div`
  text-align: start;
`;

const Title = styled.span`
  font-size: 36px;
  text-align: center; 
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Point = styled.input`
  font-size: 32px;
  width: 40px;
`;

const Button = styled.button`
  font-size: 24px;
  width: 200px;
  align-self: center;
`;
