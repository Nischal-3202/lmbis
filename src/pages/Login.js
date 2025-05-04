import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/logo.png';
import loginbg from '../assets/loginbg.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'office_koshi', password: 'koshi123', role: 'office' },
    { username: 'office_gandaki', password: 'gandaki123', role: 'office' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/office');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${loginbg})` }}>
      <img src={logo} alt="LMBIS Logo" className="login-logo" />
      <div className="login-card">
        <h2 className="login-title">Welcome to LMBIS System</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot-password">Forgot Password?</div>
          {error && <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>}
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;