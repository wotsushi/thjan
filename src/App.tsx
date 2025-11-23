import styled from "styled-components";

import "./App.css";
import { Bonus } from "./Bonus";
import { HandList } from "./HandList";

function App() {
  return (
    <Root>
      <Bonus />
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
