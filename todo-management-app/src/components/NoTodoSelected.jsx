import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import Button from './Button'

export default function NoTodoSelected({onStartAddTodo}) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={noProjectImage} alt="An empty task list" className='w-16 h-16 object-contain mx-auto' />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        No Todo Selected
     </h2>
      <p className='text-stone-400 mb-4'>
        Select a todo or get started with a new one
        </p>
      <p className='mt-8'>
        <Button onClick={onStartAddTodo}>
          Create new todo
        </Button>
      </p>
    </div>
  )
}
