import React from "react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./common/GlobalStyled";
import Profile from "./common/Profile/Profile";
import Routers from "./Router/Router";

const App = () => {
  return (
    <>
      <RecoilRoot>
        {/* <GlobalStyle />
        <Routers /> */}
        <Profile />
      </RecoilRoot>
    </>
  );
};

export default App;
