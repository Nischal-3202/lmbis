import React, { useEffect, useState } from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import OfficeDetailCard from '../components/OfficeDetailCard';
import '../styles/OfficeInfo.css';

const OfficeInfo = () => {
  const [officeData, setOfficeData] = useState(null);

  useEffect(() => {
    const fetchOfficeInfo = async () => {
      try {
        const response = await fetch('http://localhost:2000/offices/name/Budget%20Health%20Office');
        const data = await response.json();
        setOfficeData(data);
      } catch (error) {
        console.error('Error fetching office info:', error);
      }
    };

    fetchOfficeInfo();
  }, []);

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
        {officeData && (
          <OfficeDetailCard
            ministryName={officeData.ministryName}
            officeName={officeData.officeName}
            location={officeData.location}
            employeeCount={officeData.employees}
            projectCount={officeData.projects}
          />
        )}
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