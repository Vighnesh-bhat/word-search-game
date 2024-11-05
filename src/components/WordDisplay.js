import React , { useEffect, useState} from 'react';

const WordDisplay = ({ word }) => {
  const [dword,setdWord]=useState('');
   
  useEffect(() => {
      setdWord(word);
      },[word]);

  return (
    
    <div className="word-display">
      <h1>{dword}</h1> 
    </div>
  );
};

export default WordDisplay;
