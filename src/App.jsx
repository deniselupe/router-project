import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './utils/UserContext';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Profile from './components/Profile';
import OrderSummary from './components/OrderSummary';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Login from './components/Login'
import NoMatchPage from './components/NoMatchPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="users" element={<UserProvider><Users /></UserProvider>} />
        <Route path="users/:userId" element={<UserProvider><UserDetails /></UserProvider>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>
  );
};

export default App;
