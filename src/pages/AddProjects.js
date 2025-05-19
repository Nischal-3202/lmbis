import React, { useState } from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import '../styles/AddProjects.css';

const AddProjects = () => {
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleAdd = () => {
    console.log('Adding new project:', projectData);
    window.location.href = '/office/expenditure';
  };

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <button className="back-button" onClick={() => window.location.href = '/office/expenditure'}>
            &larr; Back to Expenditure
          </button>
          <h2>Add Projects:</h2>
        </header>
        <div className="add-project-container">
          <h3>Add project:</h3>
          <div className="add-project-form">
            <label>Project Name:
              <input type="text" name="name" value={projectData.name} onChange={handleChange} />
            </label>
            <label>Description:
              <input type="text" name="description" value={projectData.description} onChange={handleChange} />
            </label>
          </div>
          <div className="add-button-section">
            <button className="add-button" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProjects;
