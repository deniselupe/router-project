import React from 'react';
import { NavLink } from 'react-router-dom';

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
  return (
    <>
      <nav style={navBarStyle}>
        <NavLink style={activeLinkStyle} to="/" end>Home</NavLink>
        <NavLink style={activeLinkStyle} to="/about">About</NavLink>
        <NavLink style={activeLinkStyle} to="/products">Products</NavLink>
        <NavLink style={activeLinkStyle} to="/profile">Profile</NavLink>
      </nav>
    </>
  );
};

export default NavBar;
