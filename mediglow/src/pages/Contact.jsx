import React, { useState } from 'react'
import '../../public/style.css'
import Footer from '../components/Footer';


const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [msg,setMsg] = useState('')

  const submit = (e)=>{
    e.preventDefault();
    if(email === ''){
      alert('Enter your email')
    }
    else{
      alert(`${name.toUpperCase()} your message sent sucessfully.`)
    }

    
  }
  return (
    <>
      <div className="contact">
        <div className="contactImg"></div>
        <div className="contactForm">
          <form onSubmit={submit}>
            <h1>Contact Us</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
            <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Phone Number' />
            <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Message' className='msg'/>
          <button className='subBtn'onClick={submit}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
      
    </>
    
  )
}

export default Contact