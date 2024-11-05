import React from 'react'

const Score = ({score}) => {
  return (
    <div className="score">
    <div>Score</div>
    <div>{score}</div> {/* Display time below "Time Left:" */}
  </div>
  )
}

export default Score