import React from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import OfficeDetailCard from '../components/OfficeDetailCard';
import '../styles/OfficeInfo.css';

const OfficeInfo = () => {
  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <h2>Office Information</h2>
          <button className="back-button" onClick={() => window.location.href = '/office'}>
            &larr; Back to Dashboard
          </button>
        </header>
        <OfficeDetailCard
          ministryName="Ministry of Finance"
          officeName="Budget Planning Office"
          location="Kathmandu, Nepal"
          employeeCount={120}
          projectCount={15}
        />
        <div className="view-employees-section">
          <button className="view-employees-button" onClick={() => window.location.href = '/office/employee-info'}>
            View Complete Employee Records
          </button>
        </div>
      </main>
    </div>
  );
};

export default OfficeInfo;