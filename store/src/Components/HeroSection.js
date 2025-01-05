import React from 'react'
import { NavLink } from 'react-router-dom'
import hero from '../Assets/img/hero.jpg'
import '../Assets/css/HeroSection.css'

const HeroSection = ({ myData }) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col col-lg-6">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1 className='h1-name'> {myData.name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <button className='button-hero'>shop now</button>
            </NavLink>
          </div>
        </div>
        <div class="col col-lg-6">
          <div className="hero-section-image">
            <figure className='figure'>
              <img
                src={hero}
                alt="hero"
                className='hero-img'
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
