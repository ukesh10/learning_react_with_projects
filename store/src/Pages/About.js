import React, {useContext} from 'react'
import HeroSection from '../Components/HeroSection'
import { useProductContext } from '../Context/ProductContext'

const About = () => {
  const {myName} = useProductContext();
  const data = {
    name : 'Ukesh Ecommerce'
  }
  return (
    <div>
      {myName}
      <HeroSection myData={data}/>
    </div>
  )
}

export default About
