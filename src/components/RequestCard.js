import React from 'react';
import '../styles/RequestCard.css';

const RequestCard = ({ data, onApprove, onReject }) => {
  const { title, office, amount, purpose, fiscalYear } = data;

  return (
    <div className="request-card">
      <h3 className="request-title">{title}</h3>
      <div className="request-detail"><strong>Office:</strong> {office}</div>
      <div className="request-detail"><strong>Amount:</strong> {amount}</div>
      <div className="request-detail"><strong>Purpose:</strong> {purpose}</div>
      <div className="request-detail"><strong>Fiscal Year:</strong> {fiscalYear}</div>
      <div className="request-actions">
        <button className="approve-button" onClick={onApprove}>Approve</button>
        <button className="reject-button" onClick={onReject}>Reject</button>
      </div>
    </div>
  );
};

export default RequestCard;
