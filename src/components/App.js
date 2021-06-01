import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import {COLORS} from "../constants";
import styled from "styled-components";
import CheckList from "./ToDos/CheckList";
import Home from "./Home";
import Mood from "./Mood/Mood";
import SideBar from "./SideBar";
import Logo from "./Logo"
function App() {
  return (
    <Wrapper className="App">
      <Router>

        <SideBar />
    
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/todos">
              <CheckList />
            </Route>
            <Route exact path="/mood">
              <Mood />
            </Route>
          </Switch>
        </Main>
        <GlobalStyles />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100px 200px 100px;
  background-color: ${COLORS.secondary};
  height:  100vh;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 70px 4fr;
  }
`;
const Main = styled.div`

  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export default App;
