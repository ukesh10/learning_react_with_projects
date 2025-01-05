import React from 'react'

function TabButton({children, isSelected, ...props}) {
  return (
    <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
  )
}

export default TabButton
