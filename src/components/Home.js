import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
    let navigate = useNavigate();
    
    return (
        <div className="start-screen">
            <button className="start-button" onClick={() => navigate("/game")}>
                Start Game
            </button>
        </div>
    );
};

export default Home;
