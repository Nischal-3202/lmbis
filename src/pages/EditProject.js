import React, { useState } from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import '../styles/EditProject.css';

const EditProject = () => {
  const [projectData, setProjectData] = useState({
    name: 'Road Construction',
    description: 'Building new highways across the region.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSave = () => {
    console.log('Saving project details:', projectData);
    window.location.href = '/office/expenditure';
  };

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <h2>Edit Projects:</h2>
          <button className="back-button" onClick={() => window.location.href = '/office/expenditure'}>
            &larr; Back to Expenditure
          </button>
        </header>
        <div className="edit-project-container">
          <h3>Edit Project:</h3>
          <div className="edit-project-form">
            <label>Project Name:
              <input type="text" name="name" value={projectData.name} onChange={handleChange} />
            </label>
            <label>Description:
              <input type="text" name="description" value={projectData.description} onChange={handleChange} />
            </label>
          </div>
          <div className="save-button-section">
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditProject;