import styled from "styled-components";
import type { Game, Player } from "./Game";
import { useState } from "react";

export function Control({
  game,
  mutateGame,
}: {
  game: Game;
  mutateGame: (mutator: (game: Game) => void) => void;
}) {
  const [winner, setWinner] = useState<number | null>(null);
  const [loser, setLoser] = useState<number | null>(null);
  const [point, setPoint] = useState<number | null>(null);

  return (
    <Root>
      <Selectors>
        <Selector>
          <Title>和了</Title>
          <Options>
            {game.players.map(({ name, id }) => (
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
            {game.players.map(({ name, id }) => (
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
      </Selectors>
      <PointContainer>
        <Title>ポイント</Title>
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
      {game.kyoku === 0 ? (
        <Button
          type="button"
          disabled={
            game.players.filter(
              ({ partner, name }) => partner !== null && name !== null
            ).length < 2
          }
          onClick={() =>
            mutateGame((game) => {
              game.kyoku = 1;
              game.honba = 0;
              game.players.forEach((player) => {
                player.score = 20000;
              });
              const players = shufflePlayers(
                game.players.filter(({ partner }) => partner !== null)
              );
              game.players = players.concat(
                game.players.filter(({ partner }) => partner === null)
              );
            })
          }
        >
          開始
        </Button>
      ) : (
        <Button
          type="button"
          disabled={
            (winner !== null && point === null) ||
            (winner !== null && winner === loser) ||
            (winner === null && loser !== null)
          }
          onClick={() => {
            mutateGame((game) => {
              const parent = game.players[game.kyoku - 1].id;
              const mutateScore = () => {
                if (winner === null) {
                  return;
                }
                const wp = game.players.find(({ id }) => id === winner);
                const lp = game.players.find(({ id }) => id === loser);
                if (point === null || wp === undefined) return;

                const baseScore = scoreTable[point] / 4;
                // ツモ
                if (lp === undefined) {
                  let score = 0;
                  game.players.forEach((p) => {
                    if (p.id === winner) return;
                    const s =
                      (winner === parent || p.id === parent ? 2 : 1) *
                        baseScore +
                      100 * game.honba;
                    p.score -= s;
                    score += s;
                  });
                  wp.score += score;
                }
                // ロン
                else {
                  const score =
                    (winner === parent ? 6 : 4) * baseScore +
                    100 * game.honba * (game.players.length - 1);
                  lp.score -= score;
                  wp.score += score;
                }
              };
              mutateScore();

              const isParentTop =
                game.players.toSorted((a, b) => b.score - a.score)[0].id ===
                parent;

              if (
                game.players.some((p) => p.score < 0) || // トビがいれば終了
                (game.kyoku === game.players.length &&
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
            });
            setWinner(null);
            setLoser(null);
            setPoint(null);
          }}
        >
          清算
        </Button>
      )}
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
  column-gap: 24px;
`;

const Selector = styled.div`
  text-align: start;
`;

const Title = styled.span`
  font-size: 32px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 20px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #bbb;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease;
  margin: 0;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
    background-color: #4f46e5;
  }

  &:checked {
    border-color: #4f46e5;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export default function Radio({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <RadioLabel>
      <RadioInput {...props} />
      {label}
    </RadioLabel>
  );
}

const PointContainer = styled.div`
  display: flex;
  column-gap: 12px;
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

// scoreTable[x]はxPで子が和了したときの点数
const scoreTable = [
  0, 400, 400, 400, 800, 1200, 1600, 2400, 4000, 6400, 8000, 12000, 12000,
  12000, 16000, 16000, 20000, 20000, 24000, 24000, 28000, 28000, 32000, 32000,
  36000, 36000, 40000, 40000, 44000, 44000, 48000, 48000, 52000, 52000, 56000,
  56000, 60000, 60000, 64000, 64000, 68000, 68000, 72000, 72000, 76000, 76000,
  80000, 80000, 84000, 84000, 88000, 88000, 92000,
];

function shufflePlayers(players: Player[]): Player[] {
  const result = [...players];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
