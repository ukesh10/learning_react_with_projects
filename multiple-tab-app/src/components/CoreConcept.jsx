import React from 'react'

export default function CoreConcept({title, description}) {
  return (
    <li className='item'>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
