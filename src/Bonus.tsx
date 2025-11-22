import styled from "styled-components";
import { Card, Cards } from "./card";
import { useState } from "react";

export function Bonus() {
  const [bonus, setBonus] = useState(randomCard());
  const [uraBonus, setUraBonus] = useState(randomCard());
  return (
    <Root>
      <div>
        <BonusButton type="button" onClick={() => setBonus(randomCard())}>
          ボーナス
        </BonusButton>
        {bonus.img()}
      </div>
      <div>
        <BonusButton type="button" onClick={() => setUraBonus(randomCard())}>
          裏ボーナス
        </BonusButton>
        {uraBonus.img()}
      </div>
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
`;

const BonusButton = styled.button`
  display: block;
`;
