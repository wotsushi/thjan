import styled from "styled-components";
import { Card, Cards, UnknownCard } from "./card";

function randomCard(): Card {
  return Object.values(Cards)[
    Math.floor(Math.random() * Object.values(Cards).length)
  ];
}

export function Bonus({
  bonus,
  uraBonus,
  setUraBonus,
}: {
  bonus: Card;
  uraBonus: Card | null;
  setUraBonus: (uraBonus: Card | null) => void;
}) {
  return (
    <Root>
      <BonusContainer>
        <BonusLabel>ボーナス</BonusLabel>
        {bonus.img()}
      </BonusContainer>
      <BonusContainer onClick={() => setUraBonus(uraBonus ? null : randomCard())}>
        <BonusLabel>裏ボーナス</BonusLabel>
        {uraBonus ? uraBonus.img() : <UnknownCard />}
      </BonusContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  column-gap: 20px;
`;

const BonusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BonusLabel = styled.div`
  display: block;
`;
