import Button from "./components/Button"
import Form from "./components/Form"
import { userData } from "./data"

export function Data(props){
  return(
    <div>
      <p>Hello {props.firstName} {props.lastName}</p>
    </div>
  )
}

function App() {
  return (
   <>
   {/* <div>
      <p>Welcome!</p>
      <Data {...userData[0]}/>
   </div>
   <div>
    <Button>Default</Button>
    <Button mode="filled">Filled</Button>
    <Button mode="outline">Outlined</Button>
    <Button disabled>Disabled</Button>
   </div> */}
   <Form />
   </>
  )
}

export default App
