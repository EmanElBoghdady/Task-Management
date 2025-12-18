import './TaskCard.css';

const TaskCard = ({ task, onDelete, onMove, onStatusChange }) => {
  const { id, title, description, status } = task;

  const statusConfig = {
    'To Do': { 
      label: 'To Do', 
      icon: 'bi-circle', 
      color: 'status-todo',
      btnClass: 'btn-todo'
    },
    'In Progress': { 
      label: 'In Progress', 
      icon: 'bi-clock', 
      color: 'status-inprogress',
      btnClass: 'btn-inprogress'
    },
    'Done': { 
      label: 'Done', 
      icon: 'bi-check-circle', 
      color: 'status-done',
      btnClass: 'btn-done'
    },
  };

  const config = statusConfig[status] || statusConfig['To Do'];

  const handleMove = (direction) => {
    if (onMove) {
      onMove(id, direction);
    }
  };

  const handleStatusChange = (newStatus) => {
    if (onStatusChange && status !== newStatus) {
      onStatusChange(id, newStatus);
    }
  };

  return (
    <div className={`task-card ${config.color}`}>
      <div className="task-card-header">
        <div className="task-title-section">
          <h6 className="mb-1">
            {title}
          </h6>
          <span className={`task-status-badge ${config.color}`}>
            <i className={`bi ${config.icon} me-1`}></i>
            {config.label}
          </span>
        </div>
        <button
          className="task-delete-btn"
          onClick={() => onDelete && onDelete(id)}
          title="Delete Task"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
      
      <div className="task-card-body">
        <p className="mb-2">{description}</p>
      </div>
      
      <div className="task-card-footer">
        <div className="d-flex justify-content-between align-items-center">
          {/* Move buttons (prev/next) */}
          <div className="move-buttons">
            <button
              className="btn btn-sm"
              onClick={() => handleMove('prev')}
              disabled={status === 'To Do'}
              title="Move left"
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              className="btn btn-sm"
              onClick={() => handleMove('next')}
              disabled={status === 'Done'}
              title="Move right"
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          
          {/* Quick status buttons */}
          <div className="status-quick-buttons">
            {Object.entries(statusConfig).map(([statusKey, btnConfig]) => (
              <button
                key={statusKey}
                className={`btn btn-sm ${btnConfig.btnClass} ${status === statusKey ? 'active' : ''}`}
                onClick={() => handleStatusChange(statusKey)}
                disabled={status === statusKey}
                title={`Set to ${btnConfig.label}`}
              >
                <i className={`bi ${btnConfig.icon}`}></i>
              </button>
            ))}
          </div>
        </div>
        
        <div className="task-meta">
          <i className="bi bi-clock me-1"></i>
          <small>Just now</small>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;