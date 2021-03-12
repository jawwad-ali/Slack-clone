import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import styled from "styled-components"
import Chat from "./components/Chat"

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  display:100vh;
`

// Start from 2.44.15