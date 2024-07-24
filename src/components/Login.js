// src/components/Login.js
import React from 'react';

const Login = () => {
  const REDIRECT_URI = 'http://localhost:3000/callback';
  const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  return (
    <div>
      <h1>Se connecter avec GitHub</h1>
      <a href={AUTH_URL}>Se connecter</a>
    </div>
  );
};

export default Login;
