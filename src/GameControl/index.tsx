import styled from "styled-components";
import { Game, Player } from "../GameSection";
import Radio from "../Radio";
import type { Card } from "../card";
import { Cards } from "../card";

function randomCard(): Card {
  return Object.values(Cards)[
    Math.floor(Math.random() * Object.values(Cards).length)
  ];
}

export function GameControl({
  game,
  winner,
  loser,
  ippatsu,
  setWinner,
  setLoser,
  setIppatsu,
  setFinishModal,
  setGame,
  setBonus,
  setUraBonus,
}: {
  game: Game;
  winner: number | null;
  loser: number | null;
  ippatsu: boolean;
  setWinner: (winner: number | null) => void;
  setLoser: (loser: number | null) => void;
  setIppatsu: (ippatsu: boolean) => void;
  setFinishModal: (open: boolean) => void;
  setGame: (game: Game) => void;
  setBonus: (bonus: Card) => void;
  setUraBonus: (uraBonus: Card | null) => void;
}) {
  const handleRyukyoku = () => {
    if (window.confirm("流局しますか？")) {
      const parent = game.getParent()?.id;
      if (parent === undefined) return;

      const isParentTop =
        game.participants().toSorted((a, b) => b.getScore() - a.getScore())[0]
          .id === parent;

      let newKyoku = game.kyoku;
      let newHonba = game.honba;

      // オーラスで親がトップならゲーム終了
      if (game.isLastRound() && isParentTop) {
        newKyoku = 0;
        newHonba = 0;
      } else {
        // それ以外は本場+1
        newHonba = game.honba + 1;
      }

      const newGame = new Game(
        game.matchType,
        newKyoku,
        newHonba,
        game.players.map((p) => new Player(p.id, p.partner, p.name, p.score))
      );
      setGame(newGame);
      setBonus(randomCard());
      setUraBonus(null);
    }
  };

  return (
    <Root>
      <Selectors>
        <Selector>
          <Title>和了</Title>
          <Options>
            {game.participants().map(({ name, id }) => (
              <Radio
                key={id}
                name="winner"
                label={name}
                checked={winner === id}
                onClick={() => setWinner(winner === id ? null : id)}
              />
            ))}
          </Options>
        </Selector>
        <Selector>
          <Title>放銃</Title>
          <Options>
            {game.participants().map(({ name, id }) => (
              <Radio
                key={id}
                name="loser"
                label={name}
                checked={loser === id}
                onClick={() => setLoser(loser === id ? null : id)}
              />
            ))}
          </Options>
        </Selector>
        <IppatsuContainer>
          <Title>一発</Title>
          <Checkbox
            type="checkbox"
            checked={ippatsu}
            onChange={(e) => setIppatsu(e.target.checked)}
          />
        </IppatsuContainer>
      </Selectors>
      {winner === null && loser === null ? (
        <Button type="button" onClick={handleRyukyoku}>
          流局
        </Button>
      ) : (
        <Button
          type="button"
          onClick={() => {
            setFinishModal(true);
          }}
        >
          アガリ
        </Button>
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 16px;
`;

const Selectors = styled.div`
  display: flex;
  column-gap: 16px;
`;

const Selector = styled.div`
  text-align: start;
`;

const Title = styled.span`
  font-size: 36px;
  text-align: center; 
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const IppatsuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Button = styled.button`
  font-size: 24px;
  width: 200px;
  align-self: center;
`;
