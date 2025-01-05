import React from 'react'

function Button({children, mode="filled", ...props}) {
  let cssClasses = `button ${mode}-button`
  return (
    <button className={cssClasses} {...props}>{children}</button>
  )
}

export default Button
