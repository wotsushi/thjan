import { createPortal } from "react-dom";
import styled from "styled-components";
import { Card, Cards } from "./card";

export function FinishModal({
  isOpen,
  hand,
  setHand,
  pon,
  setPon,
  onClose,
}: {
  isOpen: boolean;
  hand: Card[];
  setHand: (cards: Card[]) => void;
  pon: Card[];
  setPon: (cards: Card[]) => void;
  onClose: () => void;
}) {
  const handleCardClick = (card: Card) => {
    const inHand = hand.includes(card);
    const inPon = pon.includes(card);

    if (!inHand && !inPon) {
      // なし → hand
      setHand([...hand, card]);
    } else if (inHand) {
      // hand → pon
      setHand(hand.filter(c => c !== card));
      setPon([...pon, card]);
    } else if (inPon) {
      // pon → なし
      setPon(pon.filter(c => c !== card));
    }
  };

  if (!isOpen) return null;
  return createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {Object.entries(series).map(([title, cards]) => (
          <Series key={title}>
            {cards.map((card) => {
              const inHand = hand.includes(card);
              const inPon = pon.includes(card);
              const isSelected = inHand || inPon;

              return (
                <CardWrapper
                  key={card.name}
                  onClick={() => handleCardClick(card)}
                >
                  <CardImage $isSelected={isSelected}>
                    {card.img()}
                  </CardImage>
                  {inHand && (
                    <CheckMark>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                        <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </CheckMark>
                  )}
                  {inPon && (
                    <CheckMark>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#3b82f6"/>
                        <text x="12" y="16" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">P</text>
                      </svg>
                    </CheckMark>
                  )}
                </CardWrapper>
              );
            })}
          </Series>
        ))}
      </Content>
    </Overlay>,
    document.body
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
`;
const Series = styled.div`
  display: flex;
`;

const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const CardImage = styled.div<{ $isSelected: boolean }>`
  opacity: ${props => props.$isSelected ? 0.2 : 1};
  transition: opacity 0.2s;
`;

const CheckMark = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  pointer-events: none;
`;

const series = {
  紅魔郷: [
    Cards.rumia,
    Cards.dai,
    Cards.cirno,
    Cards.meirin,
    Cards.koa,
    Cards.pache,
    Cards.sakuya,
    Cards.remi,
    Cards.fran,
  ],
  妖々夢: [
    Cards.letty,
    Cards.chen,
    Cards.alice,
    Cards.lunasa,
    Cards.merlin,
    Cards.lyrica,
    Cards.youmu,
    Cards.yuyuko,
    Cards.ran,
    Cards.yukari,
  ],
  永夜抄: [
    Cards.wriggle,
    Cards.mystia,
    Cards.keine,
    Cards.reimu,
    Cards.marisa,
    Cards.tewi,
    Cards.udonge,
    Cards.eirin,
    Cards.kaguya,
    Cards.exkeine,
    Cards.mokou,
  ],
  花映塚・黄昏: [
    Cards.lilyw,
    Cards.lilyb,
    Cards.medi,
    Cards.yuka,
    Cards.komachi,
    Cards.eiki,
    Cards.suika,
    Cards.iku,
    Cards.tenshi,
  ],
  風神録: [
    Cards.sizuha,
    Cards.minoriko,
    Cards.hina,
    Cards.nitori,
    Cards.momiji,
    Cards.aya,
    Cards.sanae,
    Cards.kanako,
    Cards.suwako,
  ],
  地霊殿: [
    Cards.kisume,
    Cards.yamame,
    Cards.parsee,
    Cards.yugi,
    Cards.satori,
    Cards.orin,
    Cards.utuho,
    Cards.koisi,
  ],
  星蓮船: [
    Cards.nazu,
    Cards.kogasa,
    Cards.ichirin,
    Cards.unzan,
    Cards.murasa,
    Cards.syou,
    Cards.byakuren,
    Cards.nue,
  ],
  神霊廟: [
    Cards.kyoko,
    Cards.yosika,
    Cards.seiga,
    Cards.tojiko,
    Cards.futo,
    Cards.miko,
    Cards.mamizou,
  ],
  その他: [
    Cards.hatate,
    Cards.sunny,
    Cards.luna,
    Cards.star,
    Cards.toyohime,
    Cards.yorihime,
    Cards.reisen,
    Cards.korin,
    Cards.nanashi,
    Cards.akyuu,
    Cards.merry,
    Cards.renko,
    Cards.kasen,
  ]
};
