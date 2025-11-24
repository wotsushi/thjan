import styled from "styled-components";
import { Bonus } from "./Bonus";
import { useState } from "react";
import { Cards, type Card } from "./card";
import { Player } from "./Player";

export type Player = {
  id: number;
  partner: Card;
  name: string;
  point: number;
};

export function Game() {
  const [kyoku] = useState(1);
  const [honba] = useState(0);
  const [players, setPlayers] = useState<Player[]>(
    [...Array(4)].map((_, i) => ({
      id: i,
      partner: Cards.reimu,
      name: `プレイヤー${i}`,
      point: 20000,
    }))
  );
  const mutatePlayers = (mutator: (players: Player[]) => void) => {
    setPlayers((players) => {
      const copy = [...players];
      mutator(copy);
      return copy;
    });
  };
  return (
    <div>
      <Header>
        <Round>
          <Kyoku>第{kyoku}局</Kyoku>
          <Honba>{honba}本場</Honba>
        </Round>
        <Bonus />
      </Header>
      <div>
        {players.map((player, i) => (
          <Player
            key={player.id}
            player={player}
            setName={(name) =>
              mutatePlayers((current) => {
                current[i].name = name;
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

const Header = styled.div`
  display: flex;
`;

const Round = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Kyoku = styled.div`
  font-size: 32px;
  border: 4px solid white;
  border-radius: 24px;
  padding: 8px 16px;
`;

const Honba = styled.div`
  font-size: 20px;
`;
