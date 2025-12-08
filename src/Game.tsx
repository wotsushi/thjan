import styled from "styled-components";
import { Bonus } from "./Bonus";
import { useState } from "react";
import { Cards, type Card } from "./card";
import { Player } from "./Player";
import { Control } from "./Control";
import { PartnerModal } from "./PartnerModal";

export type Game = {
  kyoku: number;
  honba: number;
  players: Player[];
};

export type Player = {
  id: number;
  partner: Card;
  name: string;
  score: number;
};

export function Game() {
  const [game, setGame] = useState<Game>({
    kyoku: 1,
    honba: 0,
    players: [...Array(4)].map((_, i) => ({
      id: i,
      partner: Cards.reimu,
      name: `プレイヤー${i}`,
      score: 20000,
    })),
  });
  const mutateGame = (mutator: (game: Game) => void) => {
    setGame((game) => {
      const copy = {
        ...game,
        players: game.players.map((p) => ({ ...p })),
      };
      mutator(copy);
      return copy;
    });
  };
  const [partnerModal, setPartnerModal] = useState<number | null>(null);

  return (
    <div>
      <Header key={`${game.kyoku}-${game.honba}`}>
        <Round>
          <Kyoku>第{game.kyoku}局</Kyoku>
          <Honba>{game.honba}本場</Honba>
        </Round>
        <Bonus />
      </Header>
      <div>
        {game.players.map((player, i) => (
          <Player
            key={player.id}
            player={player}
            setName={(name) =>
              mutateGame((current) => {
                current.players[i].name = name;
              })
            }
            showPartnerModal={() => setPartnerModal(player.id)}
          />
        ))}
      </div>
      <Control players={game.players} mutateGame={mutateGame} />
      <PartnerModal
        isOpen={partnerModal !== null}
        setPartner={(card: Card) =>
          mutateGame((current) => {
            if (partnerModal !== null) {
              current.players[partnerModal].partner = card;
            }
          })
        }
        onClose={() => setPartnerModal(null)}
      />
    </div>
  );
}

const Header = styled.div`
  display: flex;
  column-gap: 20px;
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
