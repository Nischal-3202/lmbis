import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import MinistryCard from '../components/MinistryCard';
import '../styles/OfficeManagement.css';
import { useNavigate } from 'react-router-dom';

const OfficeManagement = () => {
  const navigate = useNavigate();

  const ministries = [
    {
      name: 'Ministry of Health',
      description: 'Handles public hospitals and health programs.',
      officeCount: 12,
      budget: 12000000
    },
    {
      name: 'Ministry of Education',
      description: 'Manages schools and educational institutions.',
      officeCount: 15,
      budget: 15000000
    },
    {
      name: 'Ministry of Transport',
      description: 'Oversees transport and infrastructure projects.',
      officeCount: 9,
      budget: 9000000
    },
    {
      name: 'Ministry of Energy',
      description: 'Handles energy production and regulation.',
      officeCount: 6,
      budget: 11000000
    },
    {
      name: 'Ministry of Agriculture',
      description: 'Promotes agricultural development and support.',
      officeCount: 10,
      budget: 10500000
    }
  ];

  const handleViewOffices = (ministry) => {
    navigate('/offices/list', { state: { ministryName: ministry.name } });
  };

  return (
    <div className="office-management-page">
      <AdminSidebar />
      <div className="office-management-content">
        <h2 className="office-management-title">Office Management</h2>
        <div className="back-button-container">
          <button className="back-dashboard-button" onClick={() => window.location.href = '/admin'}>
            ⬅ Back to Dashboard
          </button>
        </div>
        <div className="ministry-cards-scroll-container">
          {ministries.map((ministry, index) => (
            <MinistryCard
              key={index}
              ministry={ministry}
              onViewOffices={() => handleViewOffices(ministry)}
            />
          ))}
        </div>
        <div className="add-offices-container">
          <button className="add-office-button" onClick={() => window.location.href = '/offices/add'}>+ Add Offices</button>
        </div>
      </div>
    </div>
  );
};

export default OfficeManagement;
