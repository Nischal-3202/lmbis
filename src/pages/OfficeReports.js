import React from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import ReportCard from '../components/ReportCard';
import '../styles/OfficeReports.css';

const OfficeReports = () => {
  const handleGenerateReport = (type) => {
    console.log(`Generating report for: ${type}`);
  };

  return (
    <div className="reports-page">
      <OfficeSidebar />
      <div className="reports-content">
        <button
          className="back-dashboard-button"
          onClick={() => window.location.href = '/office'}
        >
          ⬅ Back to Dashboard
        </button>
        <h2 className="reports-title">Reports</h2>
        <div className="report-cards-container">
          <ReportCard
            title="Expenditures"
            icon="📊"
            onClick={() => handleGenerateReport('Expenditures')}
          />
          <ReportCard
            title="Office Activity"
            icon="💰"
            onClick={() => handleGenerateReport('Office Activity')}
          />
          <ReportCard
            title="Office Budget"
            icon="📋"
            onClick={() => handleGenerateReport('Office Budget')}
          />
        </div>

        <div className="filters-section">
          <select>
            <option>Fiscal Year</option>
            <option>2023/24</option>
            <option>2024/25</option>
          </select>
          <select>
            <option>Date Range</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OfficeReports;