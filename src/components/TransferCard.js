

import React from 'react';
import '../styles/TransferCard.css';

const TransferCard = ({ transfer }) => {
  const { purpose, id, office, amount, timestamp } = transfer;
  const formattedDate =
    timestamp?.seconds || timestamp?._seconds
      ? new Date((timestamp.seconds || timestamp._seconds) * 1000).toLocaleString()
      : '-';

  return (
    <div className="transfer-card">
      <h3 className="transfer-heading">{purpose}</h3>
      <div className="transfer-detail"><strong>Transfer ID:</strong> {id}</div>
      <div className="transfer-detail"><strong>Office Name:</strong> {office}</div>
      <div className="transfer-detail"><strong>Amount:</strong> ₹{amount.toLocaleString()}</div>
      <div className="transfer-detail"><strong>Transfer Date:</strong> {formattedDate}</div>
    </div>
  );
};

export default TransferCard;