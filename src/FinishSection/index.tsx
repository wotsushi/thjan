import styled from "styled-components";
import { useEffect } from "react";
import type { Card } from "../card";
import { finish } from "./index.internal";
import { clearance } from "./clearance.internal";
import { Cards } from "../card";
import { Game, Player } from "../GameSection";

function randomCard(): Card {
  return Object.values(Cards)[
    Math.floor(Math.random() * Object.values(Cards).length)
  ];
}

export function FinishSection({
  hand,
  pon,
  bonus,
  uraBonus,
  winner,
  loser,
  ippatsu,
  game,
  setWinner,
  setLoser,
  setIppatsu,
  setHand,
  setPon,
  setGame,
  setTotalPoint,
  setBonus,
  setUraBonus,
  setFinishModal,
}: {
  hand: Card[];
  pon: Card[];
  bonus: Card;
  uraBonus: Card | null;
  winner: number | null;
  loser: number | null;
  ippatsu: boolean;
  game: Game;
  setWinner: (winner: number | null) => void;
  setLoser: (loser: number | null) => void;
  setIppatsu: (ippatsu: boolean) => void;
  setHand: (cards: Card[]) => void;
  setPon: (cards: Card[]) => void;
  setGame: (game: Game) => void;
  setTotalPoint: (point: number | null) => void;
  setBonus: (bonus: Card) => void;
  setUraBonus: (uraBonus: Card | null) => void;
  setFinishModal: (open: boolean) => void;
}) {
  // ポンしている場合はメンゼンツモ不成立
  const tsumo = loser === null && pon.length === 0;

  // winnerのパートナーカードを取得
  const partner = winner !== null
    ? game.players.find(p => p.id === winner)?.partner ?? Cards.rumia
    : Cards.rumia;

  // 役を計算（handとponの合計が6枚の場合のみ）
  const yakus = (hand.length + pon.length === 6)
    ? finish(hand, pon, bonus, uraBonus, ippatsu, tsumo, partner)
    : [];

  const totalPoint = yakus.reduce((sum, yaku) => sum + yaku.point, 0);

  // totalPointが変更されたら親コンポーネントに通知
  useEffect(() => {
    setTotalPoint(yakus.length > 0 ? totalPoint : null);
  }, [totalPoint, yakus.length, setTotalPoint]);

  const handleClearance = () => {
    const newGame = new Game(
      game.matchType,
      game.kyoku,
      game.honba,
      game.players.map((p) => new Player(p.id, p.partner, p.name, p.score))
    );
    clearance(newGame, winner, loser, totalPoint);
    setGame(newGame);
    setWinner(null);
    setLoser(null);
    setIppatsu(false);
    setHand([]);
    setPon([]);
    setTotalPoint(null);
    setBonus(randomCard());
    setUraBonus(null);
  };

  return (
    <Root>
      <HandCards onClick={() => setFinishModal(true)}>
        <HandGroup>
          {hand.map((card, index) => (
            <div key={`hand-${index}`}>{card.img()}</div>
          ))}
        </HandGroup>
        {pon.length > 0 && (
          <PonGroup>
            {pon.map((card, index) => (
              <div key={`pon-${index}`}>{card.img()}</div>
            ))}
          </PonGroup>
        )}
      </HandCards>
      {yakus.length > 0 ? (
        <YakuList>
          {yakus.map((yaku, index) => (
            <YakuItem key={index}>
              <YakuName>{yaku.name}</YakuName>
              <YakuPoint>{yaku.point}P</YakuPoint>
            </YakuItem>
          ))}
          <TotalItem>
            <YakuName>合計</YakuName>
            <YakuPoint>{totalPoint}P</YakuPoint>
          </TotalItem>
          <ClearanceButton
            onClick={handleClearance}
            disabled={winner === null || (winner !== null && winner === loser) || (winner === null && loser !== null)}
          >
            清算
          </ClearanceButton>
        </YakuList>
      ) : (
        <EmptyMessage>アガリではありません</EmptyMessage>
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 880px;
  box-sizing: border-box;
`;

const HandCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  cursor: pointer;
`;

const HandGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const PonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
`;

const YakuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const YakuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
`;

const TotalItem = styled(YakuItem)`
  background: rgba(255, 255, 255, 0.15);
  font-weight: bold;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
`;

const YakuName = styled.span`
  font-size: 16px;
  color: white;
`;

const YakuPoint = styled.span`
  font-size: 16px;
  color: white;
`;

const EmptyMessage = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding: 20px;
`;

const ClearanceButton = styled.button`
  margin-top: 12px;
  padding: 12px 24px;
  font-size: 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;

  &:hover:not(:disabled) {
    background: #2563eb;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;
