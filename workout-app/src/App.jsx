import './App.css'
import {workouts} from './data'
import Workout from './components/Workout'
import { useState } from 'react'

function App() {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  function handleWorkoutComplete(workoutTitle){
    setCompletedWorkouts((prevCompletedWorkouts)=>[
      ...prevCompletedWorkouts,
      workoutTitle
    ])
  }
  return (
   <main>
    <section>
      <h2>Choose a workout</h2>
      <ul>
      {workouts.map((workout) => (
            <li key={workout.title}>
              <Workout
                {...workout}
                onComplete={() => handleWorkoutComplete(workout.title)}
              />
            </li>
          ))}
      </ul>
    </section>
    <section>
      <h2>Completed workouts</h2>
      <ul>
        {completedWorkouts.map((workoutTitle, index)=>(
          <li key={index}>{workoutTitle}</li>
        ))}
      </ul>
    </section>
   </main>
  )
}

export default App
