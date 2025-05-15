

import React from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import TransferCard from '../components/TransferCard';
import '../styles/OfficeTransfers.css';

const OfficeTransfers = () => {
  const sampleTransfers = [
    {
      heading: 'Expenditure Transfer',
      id: 'TXN123',
      officeName: 'Finance Office',
      amount: 50000,
      date: '2024-05-15',
    },
    {
      heading: 'Approved Request Transfer',
      id: 'TXN124',
      officeName: 'Education Office',
      amount: 75000,
      date: '2024-05-16',
    },
    {
      heading: 'Infrastructure Fund',
      id: 'TXN125',
      officeName: 'Construction Office',
      amount: 60000,
      date: '2024-05-17',
    },
  ];

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <h2>Fund Transfers</h2>
          <button className="back-button" onClick={() => window.location.href = '/office'}>
            &larr; Back to Dashboard
          </button>
        </header>
        <div className="transfers-container">
          {sampleTransfers.map((transfer, index) => (
            <TransferCard key={index} transfer={transfer} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default OfficeTransfers;