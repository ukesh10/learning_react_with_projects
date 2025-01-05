import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className='single-nav'>
      <NavLink to='/'>Home</NavLink><span> / {title}</span>
    </div>
  )
}

export default PageNavigation
