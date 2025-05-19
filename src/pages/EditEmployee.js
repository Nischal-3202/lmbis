import React, { useState } from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import '../styles/EditEmployee.css';

const EditEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: 'John Doe',
    designation: 'Manager',
    level: 'Senior',
    contact: 'john.doe@example.com',
    dob: '1990-01-01',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSave = () => {
    console.log('Saving employee details:', employeeData);
    window.location.href = '/office/employee-info';
  };

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <button className="back-button" onClick={() => window.location.href = '/office/employee-info'}>
            &larr; Back to Employee Info
          </button>
          <h2>Employee Information</h2>
        </header>
        <div className="edit-employee-container">
          <h3>Edit Employee details:</h3>
          <div className="edit-employee-form">
            <label>Employee Name:
              <input type="text" name="name" value={employeeData.name} onChange={handleChange} />
            </label>
            <label>Designation:
              <input type="text" name="designation" value={employeeData.designation} onChange={handleChange} />
            </label>
            <label>Level:
              <input type="text" name="level" value={employeeData.level} onChange={handleChange} />
            </label>
            <label>Contact Details:
              <input type="text" name="contact" value={employeeData.contact} onChange={handleChange} />
            </label>
            <label>Date of birth:
              <input type="date" name="dob" value={employeeData.dob} onChange={handleChange} />
            </label>
          </div>
          <div className="save-button-section">
            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditEmployee;
