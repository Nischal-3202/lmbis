

import React from 'react';
import '../styles/TransferCard.css';

const TransferCard = ({ transfer }) => {
  const { heading, id, officeName, amount, date } = transfer;

  return (
    <div className="transfer-card">
      <h3 className="transfer-heading">{heading}</h3>
      <div className="transfer-detail"><strong>Transfer ID:</strong> {id}</div>
      <div className="transfer-detail"><strong>Office Name:</strong> {officeName}</div>
      <div className="transfer-detail"><strong>Amount:</strong> ₹{amount.toLocaleString()}</div>
      <div className="transfer-detail"><strong>Transfer Date:</strong> {date}</div>
    </div>
  );
};

export default TransferCard;