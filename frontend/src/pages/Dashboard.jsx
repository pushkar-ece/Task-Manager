import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import ProjectList from '../components/ProjectList';
import TaskList from '../components/TaskList';
import CreateProjectModal from '../components/CreateProjectModal';
import CreateTaskModal from '../components/CreateTaskModal';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
      if (res.data.length > 0 && !selectedProject) {
        setSelectedProject(res.data[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="navbar-brand">TaskMaster</div>
          <div className="navbar-nav">
            <span>Welcome, {user.name} ({user.role})</span>
            <button className="btn btn-outline" onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h3>Projects</h3>
            {user.role === 'Admin' && (
              <button className="btn btn-primary" style={{ padding: '0.25rem 0.5rem' }} onClick={() => setIsProjectModalOpen(true)}>+</button>
            )}
          </div>
          <ProjectList 
            projects={projects} 
            selectedProject={selectedProject} 
            onSelect={setSelectedProject} 
          />
        </aside>

        <main className="main-content">
          {selectedProject ? (
            <div>
              <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                <div>
                  <h2>{selectedProject.name}</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.description}</p>
                </div>
                {user.role === 'Admin' && (
                  <button className="btn btn-primary" onClick={() => setIsTaskModalOpen(true)}>Add Task</button>
                )}
              </div>
              <TaskList project={selectedProject} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full" style={{ color: 'var(--text-secondary)' }}>
              Select or create a project to get started.
            </div>
          )}
        </main>
      </div>

      {isProjectModalOpen && (
        <CreateProjectModal 
          onClose={() => setIsProjectModalOpen(false)} 
          onSuccess={() => {
            setIsProjectModalOpen(false);
            fetchProjects();
          }} 
        />
      )}

      {isTaskModalOpen && selectedProject && (
        <CreateTaskModal 
          project={selectedProject}
          onClose={() => setIsTaskModalOpen(false)} 
          onSuccess={() => {
            setIsTaskModalOpen(false);
            setSelectedProject({...selectedProject}); 
          }} 
        />
      )}
    </div>
  );
};

export default Dashboard;
