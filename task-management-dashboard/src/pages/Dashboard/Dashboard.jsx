import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { useTasks } from '../../context/TasksContext.jsx';
import './Dashboard.css';

const Dashboard = () => {
  const { projects, tasks, loading, error } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate stats
  const totalProjects = projects.length;
  const totalTasks = tasks.length;
//   const todoTasks = tasks.filter(task => task.status === 'todo').length;
  const inProgressTasks = tasks.filter(task => task.status === 'inprogress').length;
  const doneTasks = tasks.filter(task => task.status === 'done').length;

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner-border spinner-custom" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <div className="error-content">
          <i className="bi bi-exclamation-triangle-fill error-icon"></i>
          <div>
            <h5>Error Loading Data</h5>
            <p>Failed to load projects: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">
            <i className="bi bi-kanban dashboard-icon"></i>
            Projects Dashboard
          </h1>
          <p className="dashboard-subtitle">Manage all your projects and tasks in one place</p>
        </div>
        <Link to="/add-project" className="add-project-btn">
          <i className="bi bi-plus-circle me-2"></i>
          Add New Project
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card stat-total">
          <div className="stat-content">
            <h3>{totalProjects}</h3>
            <p>Total Projects</p>
          </div>
          <i className="bi bi-folder stat-icon"></i>
        </div>
        <div className="stat-card stat-todo">
          <div className="stat-content">
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>
          <i className="bi bi-list-task stat-icon"></i>
        </div>
        <div className="stat-card stat-inprogress">
          <div className="stat-content">
            <h3>{inProgressTasks}</h3>
            <p>In Progress</p>
          </div>
          <i className="bi bi-clock stat-icon"></i>
        </div>
        <div className="stat-card stat-done">
          <div className="stat-content">
            <h3>{doneTasks}</h3>
            <p>Completed</p>
          </div>
          <i className="bi bi-check-circle stat-icon"></i>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-input-group">
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="search-info">
            <span>
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-inboxes empty-state-icon"></i>
          <h4>No projects found</h4>
          <p className="empty-state-text">
            {searchTerm ? 'Try a different search term' : 'Get started by creating your first project'}
          </p>
          <Link to="/add-project" className="empty-state-btn">
            <i className="bi bi-plus-circle me-2"></i>
            Create Project
          </Link>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-grid-item" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;