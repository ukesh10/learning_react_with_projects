import React, { useRef } from 'react'

export default function Workout({title, description, time, onComplete}) {
  const timer = useRef();
  function handleStart(){
    timer.current = setTimeout(handleStop, time)
  }
  function handleStop(){
    clearTimeout(timer.current)
    onComplete();
  }
  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </p>
    </article>
  )
}
