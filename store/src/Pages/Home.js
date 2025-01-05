import React from 'react'
import FeatureProduct from '../Components/FeatureProduct'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import Trusted from '../Components/Trusted'

const Home = () => {
  const data = {
    name : 'Ukesh Store'
  }
  return (
    <div>
      <HeroSection myData={data}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default Home
