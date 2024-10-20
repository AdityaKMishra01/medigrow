import React, { useEffect, useState } from "react";
import "../../public/style.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      const { success, message, user } = response.data;
      if (success) {
        localStorage.setItem("user", JSON.stringify({name:user.name,email:user.email}));
        setUser(user)
        console.log('login success', user);
        navigate('/')
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
    setEmail('');
    setPassword('');
  };
  

  return (
    <>
      <div className="loginCont">
        <div className="loginImg">hi</div>
        <div className="loginForm">
          <form onSubmit={submitLogin}>
            <h1>Login</h1>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
            <p>
              Don't have Account ? <NavLink to={"/signup"}>Click Here</NavLink>
            </p>
            <button className="submitBtn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
