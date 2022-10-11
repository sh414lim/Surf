import React from "react";
import { Route, Routes } from "react-router";
import IntroPage from "../page/main/IntroPage";

const Router = () =>{
    return(
        <Routes>
            <Route path = "/" element={<IntroPage/>}/>
            <Route path = "/1" element={<IntroPage/>}/>
        </Routes>
    )
}

export default Router