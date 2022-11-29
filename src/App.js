import React from "react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./common/GlobalStyled";
import Routers from "./Router/Router";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Routers />
      </RecoilRoot>
    </>
  );
};

export default App;
