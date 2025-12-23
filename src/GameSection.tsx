import styled from "styled-components";
import { Bonus } from "./Bonus";
import { useState } from "react";
import { type Card } from "./card";
import { PlayerSection } from "./PlayerSection";
import { GameControl } from "./GameControl";
import { PartnerModal } from "./PartnerModal";
import { ModeControl } from "./ModeControl";

export class Game {
  constructor(
    public matchType: MatchType,
    public kyoku: number,
    public honba: number,
    public players: Player[]
  ) {}
  participants(): Player[] {
    return this.players.filter((p) => !p.isNull());
  }
  getParent(): Player {
    const participants = this.participants();
    return participants[(this.kyoku - 1) % participants.length];
  }
  isLastRound(): boolean {
    const participants = this.participants();
    return this.matchType === MatchType.Single
      ? this.kyoku === participants.length
      : this.kyoku === 2 * participants.length;
  }
}

export const MatchType = {
  Single: "Single",
  Double: "Double",
} as const;

export type MatchType = (typeof MatchType)[keyof typeof MatchType];

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

  static nullPlayer(id: number) {
    return new Player(id, null, "", null);
  }
}

export function GameSection() {
  const [game, setGame] = useState(
    new Game(
      MatchType.Double,
      0,
      0,
      [...Array(4)].map((_, i) => Player.nullPlayer(i + 1))
    )
  );
  const mutateGame = (mutator: (game: Game) => void) => {
    setGame((game) => {
      const copy = new Game(
        game.matchType,
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
      {game.kyoku === 0 ? (
        <ModeControl game={game} mutateGame={mutateGame} />
      ) : (
        <GameControl game={game} mutateGame={mutateGame} />
      )}
      <PartnerModal
        isOpen={partnerModal !== null}
        setPartner={(card: Card) =>
          mutateGame((current) => {
            if (partnerModal !== null) {
              const player = current.players.find((p) => p.id === partnerModal);
              if (player) player.partner = card;
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
