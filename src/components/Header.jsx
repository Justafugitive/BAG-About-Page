import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id="main">
        <Navbar />
        <div className='name'>
            <h1><span>Welcome to BAG</span> <br/>Where the Future Meets Opportunity</h1>
            <p className='details'>
                At BAG, we are passionate about bridging the gap between education and the workforce. 
                We believe that every student should have the opportunity to gain practical, real-world experience while preparing for their dream career. 
                Our mission is to design innovative work experience programs that not only equip students with the skills they need but also help employers find top talent.
            </p>
        </div>
    </div>
  )
}

export default Header