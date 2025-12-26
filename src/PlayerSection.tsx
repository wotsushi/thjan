import styled from "styled-components";
import type { Player } from "./GameSection";
import { UnknownCard } from "./card";

export function PlayerSection({
  player,
  isParent,
  diff,
  setName,
  showPartnerModal,
}: {
  player: Player;
  isParent: boolean;
  diff?: number;
  setName: (name: string) => void;
  showPartnerModal: () => void;
}) {
  return (
    <Root>
      <Left onClick={showPartnerModal}>
        {player.partner?.img({ bordered: isParent }) ?? <UnknownCard />}
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
        <Diff $diff={diff}>
          {diff !== undefined &&
            (diff > 0
              ? `+${diff.toLocaleString()}`
              : diff < 0 && diff.toLocaleString())}
        </Diff>
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
  align-items: end;
`;

const Name = styled.input`
  font-size: 24px;
  width: 220px;
`;

const Point = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const Diff = styled.div<{ $diff?: number }>`
  color: ${({ $diff }) => (($diff ?? 0) >= 0 ? "#16A34A" : "#DC2626")};
  font-size: 36px;
  font-weight: bold;
  height: 43px;
`;
