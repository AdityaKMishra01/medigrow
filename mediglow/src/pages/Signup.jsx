import axios from 'axios'
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'


const Signup = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confpassword,setConfPassword] = useState('')

  const signup = async(e)=>{
    e.preventDefault()
    if(password !== confpassword){
      alert("Password dosen't match")
    }
    else if(password === confpassword){
      alert('Signup successful')
      setName('')
      setEmail('')
      setPassword('')
      setConfPassword('')
    }

    try {
      const response = await axios.post('http://localhost:3000/signup',{name,email,password})
      const {success,message} = response.data;
      if((success)){
        console.log('Signup successful')
      }
      else{
        console.log(message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
     <div className="loginCont">
      <div className="loginImg">hi</div>
      <div className="loginForm">
        <form onSubmit={signup}>
          <h1>Signup</h1>
          <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/>
          <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
          <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
          <input type="password" value={confpassword} onChange={(e)=>setConfPassword(e.target.value)} placeholder='Confirm Password'/>
          <p>Already have Account ? <NavLink to={'/login'}>Click Here</NavLink></p>
          <button className='submitBtn' onClick={signup}>Sign Up</button>
        </form>
      </div>
     </div>
    </>
  )
}

export default Signup