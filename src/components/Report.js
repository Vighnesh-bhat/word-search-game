import { React, useContext } from 'react'
import '../styles/report.css'
import appContext from '../context/appContext'
import { useNavigate } from 'react-router-dom';
const Report = ({ score }) => {
    const context = useContext(appContext);
    const { setCurrentWordIndex,setTimerKey,setWordCells,setScore,setIsGameEnded } = context;
    let navigate = useNavigate();
    const handleExit = () => {
        setCurrentWordIndex(0)
        setTimerKey(0);
        setWordCells([])
        setScore(0);
        setIsGameEnded(false);
        navigate('/');
    }
    return (
        <div className='report'>
            <div className='card'>
                <h1>Report</h1>
                <p>Score: {score}</p>
                <button onClick={handleExit}>Exit</button>
            </div>
        </div>
    )
}

export default Report