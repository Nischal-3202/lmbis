

import React from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import OfficeBudgetCard from '../components/OfficeBudgetCard';
import '../styles/OfficeBudget.css';

const OfficeBudget = () => {
  const budgets = [
    { title: 'Project 1', budget: 50000 },
    { title: 'Project 2', budget: 75000 },
    { title: 'Project 3', budget: 60000 },
    { title: 'Project 4', budget: 82000 },
    { title: 'Project 5', budget: 45000 },
    { title: 'Project 6', budget: 91000 },
  ];

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <h2>Budget Overview</h2>
          <button className="back-button" onClick={() => window.location.href = '/office'}>
            &larr; Back to Dashboard
          </button>
        </header>
        <div className="office-budget-tiles">
          {budgets.map((budget, index) => (
            <OfficeBudgetCard key={index} title={budget.title} budget={budget.budget} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default OfficeBudget;