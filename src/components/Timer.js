import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();  // Call the function when the timer reaches 0
    } else {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);  // Countdown by 1 second
      }, 1000);
      return () => clearTimeout(timerId);  // Clear timeout when component unmounts
    }
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(duration);  // Reset timer when new word is shown
  }, [duration]);

  return (
    <div className="timer">
    <div>Time Left</div>
    <div>{timeLeft}s</div> {/* Display time below "Time Left:" */}
  </div>
  
  );
};

export default Timer;
