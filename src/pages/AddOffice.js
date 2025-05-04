import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import '../styles/AddOffice.css';

const ministries = ['Ministry of Health', 'Ministry of Education', 'Ministry of Finance']; // Placeholder ministries

function AddOffice() {
  const [officeName, setOfficeName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Office Details:', { officeName, location, selectedMinistry });
    // Future: Send to backend or update state
    setOfficeName('');
    setLocation('');
    setSelectedMinistry('');
  };

  return (
    <div className="add-office-page">
      <AdminSidebar />
      <div className="add-office-container">
        <div className="back-button-container">
          <button
            className="back-dashboard-button"
            onClick={() => window.location.href = '/offices'}
          >
            ⬅ Back to Ministries
          </button>
        </div>
        <h2 className="add-office-title">Add Office:</h2>
        <form className="add-office-form" onSubmit={handleSubmit}>
          <label>
            Office Name:
            <input
              type="text"
              value={officeName}
              onChange={(e) => setOfficeName(e.target.value)}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
            Select Ministry:
            <select
              value={selectedMinistry}
              onChange={(e) => setSelectedMinistry(e.target.value)}
              required
            >
              <option value="" disabled>Select a Ministry</option>
              {ministries.map((ministry, index) => (
                <option key={index} value={ministry}>
                  {ministry}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="add-office-button">Add</button>
          <button
            type="button"
            className="cancel-office-button"
            onClick={() => window.location.href = '/admin'}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddOffice;