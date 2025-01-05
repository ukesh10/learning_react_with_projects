import { useState } from "react"
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});
const isInputValid = userInput.duration >= 1;
function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
}
  return (
    <>
      <Header  />
      <UserInput userInput={userInput} onChange={handleChange} />
      {isInputValid ? <Results userInput={userInput} /> : <p className="center">Duration must be greater than 0.</p>}
    </>
  )
}

export default App
