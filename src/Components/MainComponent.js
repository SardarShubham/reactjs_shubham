import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import QuestionDetails from './QuestionDetails';
import Home from './Home';
import Result from './Result';




function MainComponent(){
    return(
        <div>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route exact path="/questions" element={<QuestionDetails/>}></Route>
            <Route exact path="/result" element={<Result/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default MainComponent;