import React from 'react';
import '../styles/EmployeeCard.css';

const EmployeeCard = ({ name, designation, employeeId, level, onEdit }) => {
  return (
    <div className="employee-card">
      <div className="employee-card-content">
        <h4>{name}</h4>
        <p><strong>Designation:</strong> {designation}</p>
        <p><strong>Employee ID:</strong> {employeeId}</p>
        <p><strong>Level:</strong> {level}</p>
      </div>
      <button
        className="edit-button"
        onClick={() => window.location.href = `/office/employee-info/edit/${employeeId}`}
      >
        Edit Employee Details
      </button>
    </div>
  );
};

export default EmployeeCard;
