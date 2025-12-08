import styled from "styled-components";
import type { Player } from "./Game";

export function Player({
  player,
  setName,
}: {
  player: Player;
  setName: (name: string) => void;
}) {
  return (
    <Root>
      {player.partner.img()}
      <Right>
        <div>
          <Name
            type="text"
            id={player.id.toString()}
            value={player.name}
            onChange={(e) => setName(e.target.value)}
          ></Name>
        </div>
        <Point>{player.score.toLocaleString()}</Point>
      </Right>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.input`
  font-size: 24px;
`;

const Point = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: left;
  margin-left: 24px;
`;
