import { createPortal } from "react-dom";
import styled from "styled-components";
import { Card, Cards } from "./card";

export function PartnerModal({
  isOpen,
  setPartner,
  onClose,
}: {
  isOpen: boolean;
  setPartner: (card: Card) => void;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {Object.entries(series).map(([title, cards]) => (
          <Series key={title}>
            {cards.map((card) => (
              <div key={card.name} onClick={() => {
                setPartner(card);
                onClose();
              }}>
                {card.img()}
              </div>
            ))}
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
