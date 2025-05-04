import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import OfficeCard from '../components/OfficeCard';
import '../styles/OfficeList.css';

const OfficeList = () => {
  const location = useLocation();
  const ministryName = location.state?.ministryName || 'Selected Ministry';
  console.log('Received router state:', location.state);

  const offices = [
    {
      name: 'Central Health Office',
      location: 'Kathmandu',
      employees: 45
    },
    {
      name: 'District Education Office',
      location: 'Lalitpur',
      employees: 32
    },
    {
      name: 'Transport Department',
      location: 'Pokhara',
      employees: 21
    },
    {
      name: 'Energy Research Center',
      location: 'Butwal',
      employees: 18
    },
    {
      name: 'Agricultural Supply Depot',
      location: 'Biratnagar',
      employees: 27
    }
  ];

  return (
    <div className="office-list-page">
      <AdminSidebar />
      <div className="office-list-content">
        <h2 className="office-list-title">Offices under {ministryName}</h2>
        <div className="back-button-container">
          <button
            className="back-dashboard-button"
            onClick={() => window.history.back()}
          >
            ⬅ Back to Ministries
          </button>
        </div>
        <div className="office-cards-scroll-container">
          {offices.map((office, index) => (
            <OfficeCard key={index} office={office} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeList;