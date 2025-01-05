import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/css/Footer.css'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer>
        <div className="footer-flex">
          <div className="footer-about">
            <h3>Ukesh Store</h3>
            <p>Lorem ipsum dolor,<br /> sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <div class="mb-3 footer-input">
                <input type="email" className='footer-input' required autoComplete='off' name='email' class="form-control" id="exampleFormControlInput1" placeholder="Enter your email here..." />
              </div>

              <button type="submit" class="footer-button">Subscribe</button>
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord size={25} className="icons" />
              </div>
              <div>
                <FaInstagram size={25} className="icons" />
              </div>
              <div>
                <FaYoutube size={25} className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <div className="container grid grid-two-column ">
            <hr className='line' />
            <p>
              &copy; {new Date().getFullYear()} UkeshStore. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
