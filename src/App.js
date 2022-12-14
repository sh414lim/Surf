import React from "react";
import { RecoilRoot } from "recoil";
import Routers from "./Router/Router";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Routers />
      </RecoilRoot>
    </>
  );
};

export default App;
