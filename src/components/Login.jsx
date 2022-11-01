import React from 'react';

const Login = () => {
  return (
    <div>
      <br />
      <label for="username"> Username: 
        <input type="text" id="username" placeholder="Enter Username..." />
      </label>
      <button type="button">Log In</button>
    </div>
  );
};

export default Login;
