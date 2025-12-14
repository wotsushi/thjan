import styled from "styled-components";
import { Bonus } from "./Bonus";
import { useState } from "react";
import { type Card } from "./card";
import { PlayerSection } from "./PlayerSection";
import { Control } from "./Control";
import { PartnerModal } from "./PartnerModal";

export class Game {
  constructor(
    public kyoku: number,
    public honba: number,
    public players: Player[]
  ) {}
  participants(): Player[] {
    return this.players.filter((p) => !p.isNull());
  }
}

export class Player {
  constructor(
    public id: number,
    public partner: Card | null,
    public name: string,
    public score: number | null
  ) {}
  isNull() {
    return this.partner === null || this.name === "";
  }
  addScore(s: number) {
    if (this.score !== null) {
      this.score += s;
    }
  }
  getScore() {
    return this.score ?? 0;
  }
}

export function GameSection() {
  const [game, setGame] = useState(
    new Game(
      0,
      0,
      [...Array(4)].map((_, i) => new Player(i, null, "", null))
    )
  );
  const mutateGame = (mutator: (game: Game) => void) => {
    setGame((game) => {
      const copy = new Game(
        game.kyoku,
        game.honba,
        game.players.map((p) => new Player(p.id, p.partner, p.name, p.score))
      );
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
          <PlayerSection
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
      <Control game={game} mutateGame={mutateGame} />
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
