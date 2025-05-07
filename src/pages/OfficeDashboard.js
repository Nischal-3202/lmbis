

import React from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import DashboardTile from '../components/DashboardTile';
import '../styles/OfficeDashboard.css';
import requestIcon from '../assets/pending.png';
import transferIcon from '../assets/fund-transfers.png';
import budgetIcon from '../assets/budget.png';
import expenditureIcon from '../assets/ministries.png';
import reportIcon from '../assets/reports.png';
import infoIcon from '../assets/offices.png';

const OfficeDashboard = () => {
  return (
    <div className="dashboard-container">
      <OfficeSidebar />
      <div className="dashboard-content">
        <h2 className="dashboard-title">OFFICE DASHBOARD</h2>
        <div className="dashboard-tiles">
          <DashboardTile title="Request Funds" image={requestIcon} buttonText="Send Request" link="/request-funds" />
          <DashboardTile title="Fund Transfers" image={transferIcon} buttonText="See Transfers" link="/fund-transfers-office" />
          <DashboardTile title="Budget Overview" image={budgetIcon} buttonText="See Budgets" link="/budget-overview" />
          <DashboardTile title="Track Expenditures" image={expenditureIcon} buttonText="Track Spending" link="/expenditure-tracker" />
          <DashboardTile title="Reports" image={reportIcon} buttonText="View Reports" link="/reports-office" />
          <DashboardTile title="Office Info" image={infoIcon} buttonText="See Info" link="/office-info" />
        </div>
      </div>
    </div>
  );
};

export default OfficeDashboard;