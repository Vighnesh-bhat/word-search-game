import React, { useContext ,useEffect} from 'react'
import appContext from '../context/appContext'
import WordDisplay from './WordDisplay'
import Timer from './Timer'
import Grid from './Grid'
import Score from './Score'
import Report from './Report'
import '../styles/game.css'

const Game = () => {
    
    const context=useContext(appContext);
    const {wordList,currentWordIndex,highlightedCells,timerKey,tempGrid,score,isGameEnded,moveToNextWord,isFound,searchWord}=context;
    useEffect(()=>{
        searchWord(wordList[currentWordIndex])
    },[currentWordIndex]);

    return (
        <>
        {isGameEnded && <Report score={score}/> }
        <div className="game-container">
            <div className='header'>
                <Score score={score}/>
                <WordDisplay word={wordList[currentWordIndex]} />
                <Timer key={timerKey} duration={1} onTimeUp={moveToNextWord} />
            </div>
            <Grid highlightedCells={highlightedCells} tempGrid={tempGrid} isFound={isFound}/>
        </div>
        </>
    )
}

export default Game;