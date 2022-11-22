import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './utils/UserContext';
import { AuthProvider } from './utils/AuthContext';

import NavBar from './components/NavBar';
import RequireAuth from './components/RequireAuth';
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
    <AuthProvider>
      <NavBar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="about" element={<RequireAuth><About /></RequireAuth>} />
          <Route path="products" element={<RequireAuth><Products /></RequireAuth>}>
            <Route index element={<RequireAuth><FeaturedProducts /></RequireAuth>} />
            <Route path="featured" element={<RequireAuth><FeaturedProducts /></RequireAuth>} />
            <Route path="new" element={<RequireAuth><NewProducts /></RequireAuth>} />
          </Route>
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="order-summary" element={<RequireAuth><OrderSummary /></RequireAuth>} />
          <Route path="users" element={<UserProvider><Users /></UserProvider>} />
          <Route path="users/:userId" element={<RequireAuth><UserProvider><UserDetails /></UserProvider></RequireAuth>} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
    </AuthProvider>
  );
};

export default App;
