

import React, { useState } from 'react';
import '../styles/BudgetCard.css';

const BudgetCard = ({ ministryName, onApprove }) => {
  const [budget, setBudget] = useState('');

  const handleApprove = () => {
    onApprove(ministryName, budget);
    setBudget(''); // Clear after approval
  };

  return (
    <div className="budget-card">
      <h3 className="ministry-title">{ministryName}</h3>
      <label className="budget-label">Set Budget:</label>
      <input
        type="number"
        className="budget-input"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Enter amount"
      />
      <button className="approve-button" onClick={handleApprove}>
        Approve
      </button>
    </div>
  );
};

export default BudgetCard;