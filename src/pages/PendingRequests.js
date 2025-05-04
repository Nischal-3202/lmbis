import AdminSidebar from '../components/AdminSidebar';
import React, { useState } from 'react';
import '../styles/PendingRequests.css';
import RequestCard from '../components/RequestCard';

const PendingRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: 'Infrastructure Upgrade',
      office: 'Office Bagmati',
      amount: 'NPR 12,00,000',
      purpose: 'Renovation and maintenance',
      fiscalYear: '2080/81',
    },
    {
      id: 2,
      title: 'Education Grant',
      office: 'Office Gandaki',
      amount: 'NPR 8,50,000',
      purpose: 'School material distribution',
      fiscalYear: '2080/81',
    },
    {
      id: 3,
      title: 'Healthcare Equipment',
      office: 'Office Lumbini',
      amount: 'NPR 15,00,000',
      purpose: 'Purchase of X-ray machines',
      fiscalYear: '2080/81',
    },
    {
      id: 4,
      title: 'Flood Relief',
      office: 'Office Koshi',
      amount: 'NPR 10,00,000',
      purpose: 'Emergency response kits',
      fiscalYear: '2080/81',
    },
  ]);

  const handleApprove = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const handleReject = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const handleApproveAll = () => {
    setRequests([]);
  };

  return (
    <div className="pending-requests-page">
      <AdminSidebar />
      <div className="pending-requests-container">
        <div className="back-button-container">
          <button className="back-dashboard-button" onClick={() => window.location.href = '/admin'}>
            ⬅ Back to Dashboard
          </button>
        </div>
        <h2 className="pending-requests-title">Pending Requests</h2>
        <div className="requests-scroll-wrapper">
          {requests.map((req) => (
            <RequestCard
              key={req.id}
              data={req}
              onApprove={() => handleApprove(req.id)}
              onReject={() => handleReject(req.id)}
            />
          ))}
        </div>
        <button className="approve-all-button" onClick={handleApproveAll}>Approve All</button>
      </div>
    </div>
  );
};

export default PendingRequests;