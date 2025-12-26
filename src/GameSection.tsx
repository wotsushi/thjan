import styled from "styled-components";
import { Bonus } from "./Bonus";
import { useState } from "react";
import { type Card } from "./card";
import { PlayerSection } from "./PlayerSection";
import { GameControl } from "./GameControl";
import { PartnerModal } from "./PartnerModal";
import { ModeControl } from "./ModeControl";
import { calcScores } from "./calcScores";

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
  getParent(): Player | null {
    if (this.kyoku === 0) return null;
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

export function GameSection({
  setFinishModal,
  bonus,
  setBonus,
  uraBonus,
  setUraBonus,
  winner,
  setWinner,
  loser,
  setLoser,
  ippatsu,
  setIppatsu,
  totalPoint,
  game,
  setGame,
}: {
  finishModal: boolean;
  setFinishModal: (open: boolean) => void;
  hand: Card[];
  setHand: (cards: Card[]) => void;
  bonus: Card;
  setBonus: (bonus: Card) => void;
  uraBonus: Card | null;
  setUraBonus: (uraBonus: Card | null) => void;
  winner: number | null;
  setWinner: (winner: number | null) => void;
  loser: number | null;
  setLoser: (loser: number | null) => void;
  ippatsu: boolean;
  setIppatsu: (ippatsu: boolean) => void;
  totalPoint: number | null;
  game: Game;
  setGame: (game: Game) => void;
}) {

  const mutateGame = (mutator: (game: Game) => void) => {
    const copy = new Game(
      game.matchType,
      game.kyoku,
      game.honba,
      game.players.map((p) => new Player(p.id, p.partner, p.name, p.score))
    );
    mutator(copy);
    setGame(copy);
  };
  const [partnerModal, setPartnerModal] = useState<number | null>(null);
  const diffScores = calcScores(game, winner, loser, totalPoint);

  return (
    <Root>
      <Header key={`${game.kyoku}-${game.honba}`}>
        <Round>
          <Kyoku>第{game.kyoku}局</Kyoku>
          <Honba>{game.honba}本場</Honba>
        </Round>
        <Bonus bonus={bonus} uraBonus={uraBonus} setUraBonus={setUraBonus} />
      </Header>
      <div>
        {game.players.map((player, i) => (
          <PlayerSection
            key={player.id}
            player={player}
            isParent={game.getParent()?.id === player.id}
            diff={diffScores.at(i)}
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
        <GameControl
          game={game}
          winner={winner}
          loser={loser}
          ippatsu={ippatsu}
          setWinner={setWinner}
          setLoser={setLoser}
          setIppatsu={setIppatsu}
          setFinishModal={setFinishModal}
          setGame={setGame}
          setBonus={setBonus}
          setUraBonus={setUraBonus}
        />
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
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

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
