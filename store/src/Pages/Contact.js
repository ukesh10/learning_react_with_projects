import React from 'react'
import '../Assets/css/Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h2 className='contact-header'>Feel Free to Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9934504739385!2d77.73156827382952!3d12.97227051486608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1343861ec2b5%3A0x885282bf127b3716!2sCarrymart%20hypermarket!5e0!3m2!1sen!2sin!4v1686721493197!5m2!1sen!2sin" 
      width="100%" 
      height="300" 
      style={{border:"0"}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <form action="https://formspree.io/f/xknadjgn"
        method="POST" className='contact-form'>
        <div class="mb-3">
          <input type="text" required autoComplete='off' name='username' class="form-control" id="exampleFormControlInput1" placeholder="username" />
        </div>
        <div class="mb-3">
          <input type="email" required autoComplete='off' name='email' class="form-control" id="exampleFormControlInput1" placeholder="email" />
        </div>
        <div class="mb-3">
          <textarea class="form-control" required autoComplete='off' name='message' placeholder='Type your message here...' id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="form-button contact-submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
