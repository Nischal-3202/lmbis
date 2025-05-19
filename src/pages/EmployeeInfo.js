


import React from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import EmployeeCard from '../components/EmployeeCard';
import '../styles/EmployeeInfo.css';

const EmployeeInfo = () => {
  const employees = [
    { name: 'John Doe', designation: 'Manager', employeeId: 'EMP001', level: 'Senior' },
    { name: 'Jane Smith', designation: 'Accountant', employeeId: 'EMP002', level: 'Mid' },
    { name: 'Alice Johnson', designation: 'Analyst', employeeId: 'EMP003', level: 'Junior' },
    { name: 'Michael Brown', designation: 'Clerk', employeeId: 'EMP004', level: 'Entry' },
  ];

  const handleEdit = (id) => {
    window.location.href = `/office/employee-info/edit/${id}`;
  };

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <h2>Employee Information</h2>
          <button className="back-button" onClick={() => window.location.href = '/office/info'}>
            &larr; Back to Office Info
          </button>
        </header>
        <div className="employee-cards-container">
          {employees.map((emp) => (
            <EmployeeCard
              key={emp.employeeId}
              name={emp.name}
              designation={emp.designation}
              employeeId={emp.employeeId}
              level={emp.level}
              onEdit={() => handleEdit(emp.employeeId)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default EmployeeInfo;