import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [user, setUser] = useState('');

  const handleLogin = () => {
    auth.login(user);
    navigate('/', {replace: true})
  };

  return (
    <div>
      <br />
      <label for="username"> Username: 
        <input 
          type="text"
          id="username" 
          placeholder="Enter Username..." 
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
