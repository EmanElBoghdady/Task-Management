import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { useTasks } from '../../context/TasksContext.jsx';

const ProjectCard = ({ project }) => {
  const { id, title, description} = project;
  const { tasks } = useTasks(); 

   // Calculate actual task count from tasks array
  const actualTaskCount = tasks.filter(task => 
    task.projectId && task.projectId.toString() === id.toString()
  ).length;
  
  const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  const colorIndex = id ? parseInt(id) % colors.length : 0;
  const bgColor = colors[colorIndex];

  return (
    <div className="project-card">
      <div className="project-card-body">
        <div className="project-card-header">
          <div 
            className="project-icon"
            style={{ backgroundColor: bgColor }}
          >
            <i className="bi bi-folder"></i>
          </div>
          <div className="project-card-title">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
        
        <div className="project-card-footer">
          <div className="project-stats">
            <span className="task-count">
              <i className="bi bi-list-task me-1"></i>
              {actualTaskCount} {actualTaskCount === 1 ? 'task' : 'tasks'}
            </span>
          </div>
          
          <Link 
            to={`/project/${id}`}
            className="view-project-btn"
          >
            <i className="bi bi-arrow-right me-1"></i>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;