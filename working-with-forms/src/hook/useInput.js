import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredData, setEnteredData] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredData);

    function handleInputChange(e) {
        setEnteredData(e.target.value);
        setDidEdit(false);
      }
    
    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredData,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid,
    };
      
}