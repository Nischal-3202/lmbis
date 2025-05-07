

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminSidebar.css';

const OfficeSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Office</h2>
      <ul className="sidebar-links">
        <li onClick={() => navigate('/request-funds')}>Request Funds</li>
        <li onClick={() => navigate('/fund-transfers-office')}>Fund Transfers</li>
        <li onClick={() => navigate('/budget-overview')}>Budget Overview</li>
        <li onClick={() => navigate('/expenditure-tracker')}>Track Expenditures</li>
        <li onClick={() => navigate('/reports-office')}>Reports</li>
        <li onClick={() => navigate('/office-info')}>Office Information</li>
      </ul>
      <button className="logout-button" onClick={() => navigate('/')}>LOGOUT</button>
    </div>
  );
};

export default OfficeSidebar;