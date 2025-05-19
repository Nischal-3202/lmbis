

import React from 'react';
import OfficeSidebar from '../components/OfficeSidebar';
import ProjectCard from '../components/ProjectCard';
import '../styles/ExpenditureTracker.css';

const ExpenditureTracker = () => {
  const projects = [
    { name: 'Road Construction', description: 'Building new highways across the region.', budgetAllocated: '$500,000', remainingFunds: '$120,000' },
    { name: 'School Renovation', description: 'Upgrading classrooms and facilities.', budgetAllocated: '$300,000', remainingFunds: '$75,000' },
    { name: 'Healthcare Expansion', description: 'New clinics in rural areas.', budgetAllocated: '$700,000', remainingFunds: '$250,000' },
  ];

  const handleEditProject = (projectName) => {
    console.log(`Editing project: ${projectName}`);
  };

  return (
    <div className="office-dashboard">
      <OfficeSidebar />
      <main className="office-main">
        <header className="office-header">
          <h2>Expenditure Tracker</h2>
          <button className="back-button" onClick={() => window.location.href = '/office'}>
            &larr; Back to Dashboard
          </button>
        </header>
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              budgetAllocated={project.budgetAllocated}
              remainingFunds={project.remainingFunds}
              onEdit={() => handleEditProject(project.name)}
            />
          ))}
        </div>
        <div className="add-project-section">
          <button className="add-project-button" onClick={() => window.location.href = '/office/expenditure/add'}>
            + Add Projects
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExpenditureTracker;