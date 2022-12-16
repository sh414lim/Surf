import React from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from '../page/login/LoginPage';
import IntroPage from '../page/main/IntroPage';
import Header from '../common/Header';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/main" element={<SubMainPageComponents />} /> */}
      </Routes>
    </>
  );
};

export default Router;
