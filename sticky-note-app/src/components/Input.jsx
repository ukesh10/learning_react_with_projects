import React, {forwardRef} from 'react'

const Input = forwardRef(function Input({label, ...props}, ref){
    return (
        <>
        <label>{label}</label>
        <input ref={ref} {...props} />
        </>
    )
})

export default Input