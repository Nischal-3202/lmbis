

import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import ReportCard from '../components/ReportCard';
import '../styles/ReportsPage.css';

const ReportsPage = () => {
  const handleGenerateReport = (type) => {
    console.log(`Generating report for: ${type}`);
  };

  return (
    <div className="reports-page">
      <AdminSidebar />
      <div className="reports-content">
        <h2 className="reports-title">Reports</h2>
        <div className="report-cards-container">
          <ReportCard
            title="Fund Transfer"
            icon="📊"
            onClick={() => handleGenerateReport('Fund Transfer')}
          />
          <ReportCard
            title="Office Activity"
            icon="💰"
            onClick={() => handleGenerateReport('Office Activity')}
          />
          <ReportCard
            title="Ministry Budget"
            icon="📋"
            onClick={() => handleGenerateReport('Ministry Budget')}
          />
        </div>

        <div className="filters-section">
          <select>
            <option>Fiscal Year</option>
            <option>2023/24</option>
            <option>2022/23</option>
            <option>2021/22</option>
          </select>
          <select>
            <option>Office</option>
            <option>Transport Department</option>
            <option>Health Ministry</option>
          </select>
          <select>
            <option>Ministry</option>
            <option>Ministry of Finance</option>
            <option>Ministry of Education</option>
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

export default ReportsPage;