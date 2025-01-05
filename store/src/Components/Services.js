import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import '../Assets/css/Services.css'

const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-1'>
                <TbTruckDelivery size={25} className="services-icon" />
                <h3>Super Fast and Free Delivery</h3>
            </div>

            <div class="services-2">
                <div className='services-row-1'>
                    <MdSecurity size={25} className="services-icon"/>
                    <h3>Non-contact Shipping</h3>
                </div>
                <div className='services-row-2'>
                    <GiReceiveMoney size={25} className="services-icon"/>
                    <h3>Money-back Guaranteed</h3>
                </div>
            </div>

            <div className='services-3'>
                <RiSecurePaymentLine size={25} className="services-icon"/>
                <h3>Super Secure Payment System</h3>
            </div>
        </div>
    )
}

export default Services
