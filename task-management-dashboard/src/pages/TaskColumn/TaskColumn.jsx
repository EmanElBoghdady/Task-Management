import TaskCard from '../../components/TaskCard/TaskCard.jsx';
import './TaskColumn.css';

const TaskColumn = ({ 
  title, 
  tasks, 
  status,
  onDeleteTask,
  onStatusChange,
  projectId 
}) => {
  const columnColors = {
    todo: 'column-todo',
    inprogress: 'column-inprogress',
    done: 'column-done',
  };

  return (
    <div className="task-column-wrapper">
      <div className={`task-column ${columnColors[status] || ''}`}>
        <div className="column-header">
          <h5>{title}</h5>
          <span className="task-count-badge">
            {tasks.length}
          </span>
        </div>
        
        <div className="column-body">
          {tasks.length === 0 ? (
            <div className="empty-column">
              <i className="bi bi-inbox empty-icon"></i>
              <p>No tasks here yet</p>
            </div>
          ) : (
            tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={() => onDeleteTask(task.id, projectId)}
                onStatusChange={onStatusChange}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;