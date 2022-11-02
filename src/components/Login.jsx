import React, { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectURL = location.state?.path || '/';
  const auth = useAuth();
  const [user, setUser] = useState('');

  useDocumentTitle('Login Page');

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectURL, {replace: true});
  };

  if (auth.user) {
    return <Navigate to="/" replace />
  }

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
