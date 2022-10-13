import React from "react";
import { Route, Routes } from "react-router";
import IntroPage from "../page/main/IntroPage";
import SubMainPageComponents from "../page/subMain/SubMainPageComponents";

const Router = () =>{
    return(
        <Routes>
            <Route path = "/" element={<IntroPage/>}/>
            <Route path = "/main" element={<SubMainPageComponents/>}/>
        </Routes>
    )
}

export default Router