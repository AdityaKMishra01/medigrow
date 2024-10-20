import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../../public/style.css';

const Navbar = ({user}) => {
  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload()
  };

  return (
    <div className='navbar'>
      <h1 className='w-40 items-center/'>MediGROW</h1>
      <div className="linkContainer">
        <ul className='links'>
          <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'nav')}>Home</NavLink></li>
          <li><NavLink to='/plants' className={({ isActive }) => (isActive ? 'active' : 'nav')}>Plants</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : 'nav')}>Contact</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'nav')}>About</NavLink></li>
          <li><i className="fa-solid fa-bars cursor-pointer hamburger"></i></li>
          {user ? <li>{`Hi,${user.name}`}</li> : <li className='loginbtn'><NavLink to='/login' className='navLog'>login</NavLink></li>}
          {user ? <button onClick={logout} className='logoutBtn'><i className="fa-solid fa-right-from-bracket"></i></button> : ""}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
