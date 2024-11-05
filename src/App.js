import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppState from './context/AppState';
import Home from './components/Home';
import Game from './components/Game';



const App = () => {

  return (
    <>
     <AppState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/game" element={<Game/>}></Route>
        </Routes>
      </Router>
     </AppState>
    </>
  );
};

export default App;
