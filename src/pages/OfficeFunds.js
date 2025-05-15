import React, { useState } from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import '../styles/OfficeFunds.css';

const OfficeFunds = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    project: '',
    amount: '',
    fiscalYear: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <h2>Request Funds</h2>
          <button className="back-button" onClick={() => window.location.href = '/office'}>
            &larr; Back to Dashboard
          </button>
        </header>
        <div className="request-funds-form">
          <h2>Request Funds:</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title of expenditure:
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </label>
            <label>
              Project:
              <input type="text" name="project" value={formData.project} onChange={handleChange} required />
            </label>
            <label>
              Amount Requested:
              <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
            </label>
            <label>
              Fiscal Year:
              <select name="fiscalYear" value={formData.fiscalYear} onChange={handleChange} required>
                <option value="">Select Year</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default OfficeFunds;