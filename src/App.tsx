import styled from "styled-components";
import { useState } from "react";

import "./App.css";
import { HandList } from "./HandList";
import { GameSection, Game, MatchType, Player } from "./GameSection";
import { FinishModal } from "./FinishModal";
import { FinishSection } from "./FinishSection";
import type { Card } from "./card";
import { Cards } from "./card";

function randomCard(): Card {
  return Object.values(Cards)[
    Math.floor(Math.random() * Object.values(Cards).length)
  ];
}

function App() {
  const [finishModal, setFinishModal] = useState<boolean>(false);
  const [hand, setHand] = useState<Card[]>([]);
  const [pon, setPon] = useState<Card[]>([]);
  const [bonus, setBonus] = useState(randomCard());
  const [uraBonus, setUraBonus] = useState<Card | null>(null);
  const [winner, setWinner] = useState<number | null>(null);
  const [loser, setLoser] = useState<number | null>(null);
  const [ippatsu, setIppatsu] = useState<boolean>(false);
  const [totalPoint, setTotalPoint] = useState<number | null>(null);
  const [game, setGame] = useState(
    new Game(
      MatchType.Double,
      0,
      0,
      [...Array(4)].map((_, i) => Player.nullPlayer(i + 1))
    )
  );

  return (
    <Root>
      <GameSection
        finishModal={finishModal}
        setFinishModal={setFinishModal}
        hand={hand}
        setHand={setHand}
        bonus={bonus}
        setBonus={setBonus}
        uraBonus={uraBonus}
        setUraBonus={setUraBonus}
        winner={winner}
        setWinner={setWinner}
        loser={loser}
        setLoser={setLoser}
        ippatsu={ippatsu}
        setIppatsu={setIppatsu}
        totalPoint={totalPoint}
        game={game}
        setGame={setGame}
      />
      {hand.length > 0 || pon.length > 0 ? (
        <FinishSection
          hand={hand}
          pon={pon}
          bonus={bonus}
          uraBonus={uraBonus}
          winner={winner}
          loser={loser}
          ippatsu={ippatsu}
          game={game}
          setWinner={setWinner}
          setLoser={setLoser}
          setIppatsu={setIppatsu}
          setHand={setHand}
          setPon={setPon}
          setGame={setGame}
          setTotalPoint={setTotalPoint}
          setBonus={setBonus}
          setUraBonus={setUraBonus}
          setFinishModal={setFinishModal}
        />
      ) : (
        <HandList />
      )}
      <FinishModal
        isOpen={finishModal}
        hand={hand}
        setHand={setHand}
        pon={pon}
        setPon={setPon}
        onClose={() => setFinishModal(false)}
      />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 16px;
  gap: 40px;
`;

export default App;
