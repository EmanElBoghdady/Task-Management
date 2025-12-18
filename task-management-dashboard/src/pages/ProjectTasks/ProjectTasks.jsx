import { useParams, Link } from 'react-router-dom';
import { useTasks } from "../../context/TasksContext.jsx";
import TaskCard from '../../components/TaskCard/TaskCard.jsx';
import './ProjectTasks.css';

const ProjectTasks = () => {
  const { id } = useParams();
  const { getProjectById, getProjectTasks, deleteTask, moveTask } = useTasks();
  
  const project = getProjectById(id);
  const allTasks = getProjectTasks(id);

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="error-card">
          <i className="bi bi-exclamation-triangle error-icon"></i>
          <h3>Project Not Found</h3>
          <p>The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn-back-dashboard">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  const handleMoveTask = (taskId, direction) => {
    console.log(`Moving task ${taskId} ${direction}`);
    moveTask(taskId, direction);
  };

  const handleStatusChange = (taskId, newStatus) => {
    const statusOrder = ['To Do', 'In Progress', 'Done'];
    const currentTask = allTasks.find(t => t.id === taskId);
    if (!currentTask) return;
    
    const currentIndex = statusOrder.indexOf(currentTask.status);
    const targetIndex = statusOrder.indexOf(newStatus);
    
    if (currentIndex < targetIndex) {
      for (let i = currentIndex; i < targetIndex; i++) {
        moveTask(taskId, 'next');
      }
    } else if (currentIndex > targetIndex) {
      for (let i = currentIndex; i > targetIndex; i--) {
        moveTask(taskId, 'prev');
      }
    }
  };

  // Filter tasks by status
  const todoTasks = allTasks.filter(task => task.status === 'To Do');
  const inProgressTasks = allTasks.filter(task => task.status === 'In Progress');
  const doneTasks = allTasks.filter(task => task.status === 'Done');

  // Calculate progress
  const totalTasks = allTasks.length;
  const completedTasks = doneTasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="project-tasks-container fade-in">
      {/* Project Header with Gradient */}
      <div className="project-header">
        <div className="project-info">
          <Link to="/" className="back-link">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Dashboard
          </Link>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
          
          {/* Project Stats */}
          <div className="project-stats">
            <span className="stats-badge">
              <i className="bi bi-list-task"></i>
              {totalTasks} tasks total
            </span>
            <span className="stats-badge">
              <i className="bi bi-check-circle"></i>
              {completedTasks} completed
            </span>
            <span className="stats-badge">
              <i className="bi bi-clock"></i>
              {inProgressTasks.length} in progress
            </span>
          </div>

          {/* Progress Bar */}
          <div className="progress-container mt-3">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <small className="text-white opacity-75 mt-1 d-block">
              {progress.toFixed(0)}% complete
            </small>
          </div>
        </div>
        
        {/* Add Task Button */}
        <Link 
          to={`/add-task?projectId=${id}`}
          className="add-task-btn"
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add New Task
        </Link>
      </div>

      {/* Task Board */}
      <div className="task-board">
        {/* To Do Column */}
        <div className="task-column column-todo">
          <div className="column-header">
            <h5>To Do</h5>
            <span className="column-count-badge">{todoTasks.length}</span>
          </div>
          <div className="column-body">
            {todoTasks.length === 0 ? (
              <div className="empty-column">
                <i className="bi bi-inbox empty-icon"></i>
                <p>No tasks here yet</p>
                <small>Drag tasks here or add new ones</small>
              </div>
            ) : (
              todoTasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onMove={handleMoveTask}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="task-column column-inprogress">
          <div className="column-header">
            <h5>In Progress</h5>
            <span className="column-count-badge">{inProgressTasks.length}</span>
          </div>
          <div className="column-body">
            {inProgressTasks.length === 0 ? (
              <div className="empty-column">
                <i className="bi bi-clock empty-icon"></i>
                <p>No active tasks</p>
                <small>Tasks being worked on appear here</small>
              </div>
            ) : (
              inProgressTasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onMove={handleMoveTask}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </div>
        </div>

        {/* Done Column */}
        <div className="task-column column-done">
          <div className="column-header">
            <h5>Done</h5>
            <span className="column-count-badge">{doneTasks.length}</span>
          </div>
          <div className="column-body">
            {doneTasks.length === 0 ? (
              <div className="empty-column">
                <i className="bi bi-check-circle empty-icon"></i>
                <p>No completed tasks</p>
                <small>Completed tasks will appear here</small>
              </div>
            ) : (
              doneTasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onMove={handleMoveTask}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ProjectTasks;