import styled from "styled-components";
import { Bonus } from "./Bonus";
import { useState } from "react";

export function Game() {
  const [kyoku] = useState(1);
  const [honba] = useState(0);
  return (
    <div>
      <Header>
        <Round>
          <Kyoku>第{kyoku}局</Kyoku>
          <Honba>{honba}本場</Honba>
        </Round>
        <Bonus />
      </Header>
    </div>
  );
}

const Header = styled.div`
  display: flex;
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
