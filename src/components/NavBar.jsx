import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const activeLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'underline'
  };
};

const navBarStyle = {
  backgroundColor: 'aliceblue',
};

const NavBar = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <>
      <nav style={navBarStyle}>
        <NavLink style={activeLinkStyle} to="/" end>Home</NavLink>
        <NavLink style={activeLinkStyle} to="/about">About</NavLink>
        <NavLink style={activeLinkStyle} to="/products">Products</NavLink>
        <NavLink style={activeLinkStyle} to="/profile">Profile</NavLink>
        {
          !auth.user 
          ? 
          <NavLink style={activeLinkStyle} to="/login">Login</NavLink>
          :
          <NavLink to="/" onClick={handleLogout}>Log Out</NavLink>
        }
      </nav>
    </>
  );
};

export default NavBar;
