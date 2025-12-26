import styled from "styled-components";

import { Card } from "./card";
import { Trios, Quartets, Sextets } from "./combinations";

export function HandList() {
  return (
    <Root>
      <Hands>
        {Trios.slice(0, 13).map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {Trios.slice(13, 25).map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {Trios.slice(25).map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {Quartets.map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
      <Hands>
        {Sextets.map(({ name, cards }) => (
          <Hand key={name} name={name} cards={cards} />
        ))}
      </Hands>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  gap: 15px;
  height: 100%;
`;

const Hands = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`;

function Hand({ name, cards }: { name: string; cards: Card[] }) {
  return (
    <div>
      <Name>{name}</Name>
      <HandCards>{cards.map((card) => card.img({ mini: true }))}</HandCards>
    </div>
  );
}

const Name = styled.div`
  font-size: 15px;
`;

const HandCards = styled.div`
  height: 42px;
`;
