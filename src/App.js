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
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"
import Login from "./components/Login"
import Spinner from "react-spinkit"

function App() {

  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack logo"
          />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <>
      <Router>
        {!user ? (
          <Login />
        ) : (
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
        )}

      </Router>
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  display:100vh;
`
const AppLoading = styled.div`
  display:grid;
  place-items:center;
  height:100vh;
  width:100%;
`

const AppLoadingContents = styled.div`
  text-align:center;
  padding-bottom:20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  > img {
    height:100px;
    padding:20px;
    margin-bottom:40px;
  }

`