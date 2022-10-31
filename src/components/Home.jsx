import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
  const navigate = useNavigate();
  useDocumentTitle('Home Page');

  return (
    <div>
      <h2>Home Page</h2>
      <button type="button" onClick={() => navigate('/users')}>Visit Users</button><br />
      <button type="button" onClick={() => navigate('/order-summary')}>Order Summary</button>
    </div>
  );
};

export default Home;
