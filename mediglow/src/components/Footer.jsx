import React from 'react';
import '../../public/style.css';

const Footer = () => {
    let date = new Date().getFullYear();


  return (
    <>
     <div class="footer">&copy;<span id="year">{date} </span><span> MediGrow. All rights reserved.</span></div>
    </>
  )
}

export default Footer