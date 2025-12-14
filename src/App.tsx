import styled from "styled-components";

import "./App.css";
import { HandList } from "./HandList";
import { GameSection } from "./GameSection";

function App() {
  return (
    <Root>
      <GameSection />
      <HandList />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 16px;
`;

export default App;
