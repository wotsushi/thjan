import styled from "styled-components";
import { Card, Cards } from "./card";
import { useState } from "react";

export function Bonus() {
  const [bonus] = useState(randomCard());
  const [uraBonus, setUraBonus] = useState<Card | null>(null);
  return (
    <Root>
      <BonusContainer>
        <BonusLabel>ボーナス</BonusLabel>
        {bonus.img()}
      </BonusContainer>
      <BonusContainer onClick={() => setUraBonus((b) => b ?? randomCard())}>
        <BonusLabel>裏ボーナス</BonusLabel>
        {uraBonus ? uraBonus.img() : <UnknownCard />}
      </BonusContainer>
    </Root>
  );
}

function randomCard(): Card {
  return Object.values(Cards)[
    Math.floor(Math.random() * Object.values(Cards).length)
  ];
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

const UnknownCard = styled.div`
  width: 72px;
  height: 92px;
  background-color: gray;
  border-radius: 8px;
`;
