import styled from "styled-components";
import type { Player } from "./GameSection";
import { UnknownCard } from "./card";

export function PlayerSection({
  player,
  setName,
  showPartnerModal,
}: {
  player: Player;
  setName: (name: string) => void;
  showPartnerModal: () => void;
}) {
  return (
    <Root>
      <Left onClick={showPartnerModal}>
        {player.partner?.img() ?? <UnknownCard />}
      </Left>
      <Right>
        <div>
          <Name
            type="text"
            id={player.id.toString()}
            value={player.name}
            onChange={(e) => setName(e.target.value)}
          ></Name>
        </div>
        <Point>{player.score?.toLocaleString()}</Point>
      </Right>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  gap: 8px;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.input`
  font-size: 24px;
  width: 220px;
`;

const Point = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: left;
  margin-left: 24px;
`;
