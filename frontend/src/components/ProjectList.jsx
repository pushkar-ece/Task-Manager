import React from 'react';

const ProjectList = ({ projects, selectedProject, onSelect }) => {
  if (projects.length === 0) {
    return <div style={{ color: 'var(--text-secondary)' }}>No projects found.</div>;
  }

  return (
    <ul style={{ listStyle: 'none' }}>
      {projects.map(project => (
        <li 
          key={project._id}
          onClick={() => onSelect(project)}
          style={{
            padding: '0.75rem',
            margin: '0.25rem 0',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            backgroundColor: selectedProject?._id === project._id ? 'var(--bg-tertiary)' : 'transparent',
            color: selectedProject?._id === project._id ? 'var(--text-primary)' : 'var(--text-secondary)',
            transition: 'all 0.2s ease'
          }}
        >
          <div style={{ fontWeight: 500 }}>{project.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
