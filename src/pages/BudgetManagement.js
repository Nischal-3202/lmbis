import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import BudgetCard from '../components/BudgetCard';
import '../styles/BudgetManagement.css';

const ministries = [
  'Ministry of Health',
  'Ministry of Education',
  'Ministry of Finance',
  'Ministry of Transport',
  'Ministry of Agriculture',
  'Ministry of Environment'
];

const BudgetManagement = () => {
  const handleApprove = (ministryName, amount) => {
    alert(`Budget of ₹${amount} approved for ${ministryName}`);
  };

  return (
    <div className="budget-management-page">
      <AdminSidebar />
      <div className="budget-management-content">
        <button className="back-dashboard-button" onClick={() => window.location.href = '/admin'}>
          ⬅ Back to Dashboard
        </button>
        <h2 className="budget-management-title">Budget Management</h2>
        <div className="budget-grid">
          {ministries.map((name, index) => (
            <BudgetCard key={index} ministryName={name} onApprove={handleApprove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetManagement;
