import React from 'react';
import '../styles/FundTransfers.css';
import AdminSidebar from '../components/AdminSidebar';
import TransferCard from '../components/TransferCard';

const FundTransfers = () => {
  const mockTransfers = [
    {
      id: 'FT-001',
      officeName: 'Education Office',
      amount: 250000,
      date: '2025-04-20',
      heading: 'Textbook Purchase'
    },
    {
      id: 'FT-002',
      officeName: 'Health Office',
      amount: 480000,
      date: '2025-04-22',
      heading: 'Vaccine Supply'
    },
    {
      id: 'FT-003',
      officeName: 'Transport Office',
      amount: 150000,
      date: '2025-04-25',
      heading: 'Road Repair'
    }
  ];

  const totalTransfers = mockTransfers.length;
  const totalAmount = mockTransfers.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="fund-transfers-page">
      <AdminSidebar />
      <div className="fund-transfers-content">
        <button className="back-dashboard-button" onClick={() => window.location.href = '/admin'}>
          ⬅ Back to Dashboard
        </button>
        <h2 className="fund-transfers-title">Fund Transfers</h2>
        <div className="transfer-list">
          {mockTransfers.map((transfer) => (
            <TransferCard key={transfer.id} transfer={transfer} />
          ))}
        </div>
        <div className="fund-transfers-summary">
          <div className="summary-box">Total no. of Transfers: {totalTransfers}</div>
          <div className="summary-box">Total amount transferred: ₹{totalAmount.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default FundTransfers;
