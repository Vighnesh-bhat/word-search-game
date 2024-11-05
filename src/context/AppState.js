import appContext from "./appContext";
import { useState } from "react";


const AppState = (props) => {

    const wordList = ["BLOCKCHAIN", "VIRTUALIZATION","CONTAINERIZATION", "ENCRYPTION"];
    // 
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [timerKey, setTimerKey] = useState(0); 
    const [highlightedCells, setHighlightedCells] = useState([]);
    const [wordCells, setWordCells] = useState([])
    const [score,setScore]=useState(0);
    const [isGameEnded,setIsGameEnded]=useState(false);

    const tempGrid = [
        ['C', 'V', 'Z', 'D', 'C', 'A', 'W', 'V', 'T', 'S'],
        ['O', 'X', 'B', 'V', 'L', 'O', 'Y', 'U', 'E', 'R'],
        ['N', 'T', 'A', 'I', 'R', 'V', 'I', 'Q', 'N', 'B'],
        ['A', 'P', 'I', 'C', 'T', 'P', 'Y', 'R', 'C', 'L'],
        ['G', 'E', 'N', 'K', 'U', 'T', 'Z', 'P', 'G', 'O'],
        ['O', 'R', 'I', 'M', 'A', 'I', 'R', 'L', 'M', 'C'],
        ['R', 'L', 'Z', 'I', 'L', 'O', 'N', 'H', 'C', 'K'],
        ['O', 'I', 'A', 'I', 'H', 'A', 'U', 'A', 'O', 'N'],
        ['N', 'T', 'T', 'Z', 'L', 'M', 'T', 'I', 'H', 'N'],
        ['A', 'T', 'I', 'O', 'N', 'L', 'M', 'N', 'K', 'O']
    ];


    const dfs = (i, j, ind, m, n, board, word, vis, ret) => {
        ret.push([i, j]);
        if (ind === word.length - 1) return true;
        vis[i][j] = 1;
        const r = [-1, 0, 1, 0];
        const c = [0, 1, 0, -1];
        for (let k = 0; k < 4; k++) {
            const dr = i + r[k];
            const dc = j + c[k];
            if (dr >= 0 && dr < m && dc >= 0 && dc < n && vis[dr][dc] === 0 && board[dr][dc] === word[ind + 1]) {
                if (dfs(dr, dc, ind + 1, m, n, board, word, vis, ret)) {
                    return true;
                }
            }
        }
        vis[i][j] = 0;
        ret.pop();
        return false;
    };

    const searchWord = (word) => {
        const m = tempGrid.length;
        const n = tempGrid[0].length;
        const ret = [];
        const vis = Array.from({ length: m }, () => Array(n).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (tempGrid[i][j] === word[0]) {
                    if (dfs(i, j, 0, m, n, tempGrid, word, vis, ret)) {
                        setWordCells(ret);
                        return;
                    }
                }
            }
        }

    };


    const moveToNextWord = () => {
        setScore(prev=>prev-100)
        setHighlightedCells(wordCells);
        setTimeout(() => {
            setHighlightedCells([]);
            if(currentWordIndex===wordList.length-1){
                setIsGameEnded(true);
            }
            else{
            setCurrentWordIndex(prevIndex => (prevIndex + 1) % wordList.length); 
            setTimerKey(prevKey => prevKey + 1); 
            }
        }, 5000);

    };


    const sortArrays = (arr) => {
        return arr.slice().sort();
    };

    const areArraysEqual = (state1, state2) => {
        const sortedState1 = sortArrays(state1);
        const sortedState2 = sortArrays(state2);
        return JSON.stringify(sortedState1) === JSON.stringify(sortedState2);
    };


    const isFound = (rowIndex, charIndex) => {
     
        const isCellHighlighted = highlightedCells.some(
            (cell) => cell[0] === rowIndex && cell[1] === charIndex
        );
    
        let updatedCells;
    
      
        if (isCellHighlighted) {
          
            updatedCells = highlightedCells.filter(
                (p) => !(p[0] === rowIndex && p[1] === charIndex)
            );
        } else {
           
            updatedCells = [...highlightedCells, [rowIndex, charIndex]];
        }
    
       
        setHighlightedCells(updatedCells);
    
        
        if (areArraysEqual(updatedCells, wordCells)) {
            setScore(prev=>prev+100)
            setHighlightedCells([])
            if(currentWordIndex===wordList.length-1){
                setIsGameEnded(true);
            }
            else{
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordList.length);
            setTimerKey((prevKey) => prevKey + 1);
            }
        }
    };
    

    return (
        <appContext.Provider value={{ wordList, currentWordIndex, highlightedCells, timerKey, tempGrid, score,isGameEnded, moveToNextWord, isFound, searchWord ,setIsGameEnded,setCurrentWordIndex,setTimerKey,setWordCells,setScore}}>
            {props.children}
        </appContext.Provider>
    )
}

export default AppState;