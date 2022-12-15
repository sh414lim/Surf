import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './common/GlobalCss';
import Routers from './Router/Router';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Routers />
        <GlobalStyle />
      </RecoilRoot>
    </>
  );
};

export default App;
