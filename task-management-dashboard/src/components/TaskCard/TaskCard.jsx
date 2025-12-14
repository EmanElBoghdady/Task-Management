// // import './TaskCard.css';

// // const TaskCard = ({ task, onDelete, onStatusChange }) => {
// //   const { id, title, description, status } = task;

// //   const statusConfig = {
// //     todo: { label: 'To Do', icon: 'bi-circle', color: 'status-todo' },
// //     inprogress: { label: 'In Progress', icon: 'bi-clock', color: 'status-inprogress' },
// //     done: { label: 'Done', icon: 'bi-check-circle', color: 'status-done' },
// //   };

// //   const config = statusConfig[status] || statusConfig.todo;

// //   const handleStatusChange = (newStatus) => {
// //     if (onStatusChange && status !== newStatus) {
// //       onStatusChange(id, newStatus);
// //     }
// //   };

// //   return (
// //     <div className={`task-card ${config.color}`}>
// //       <div className="task-card-header">
// //         <div className="task-title-section">
// //           <h6>{title}</h6>
// //           <span className={`task-status-badge ${config.color}`}>
// //             <i className={`bi ${config.icon} me-1`}></i>
// //             {config.label}
// //           </span>
// //         </div>
// //         <button
// //           className="task-delete-btn"
// //           onClick={() => onDelete && onDelete(id)}
// //           title="Delete Task"
// //         >
// //           <i className="bi bi-trash"></i>
// //         </button>
// //       </div>
      
// //       <div className="task-card-body">
// //         <p>{description}</p>
// //       </div>
      
// //       <div className="task-card-footer">
// //         <div className="status-buttons">
// //           {Object.entries(statusConfig).map(([value, config]) => (
// //             <button
// //               key={value}
// //               className={`status-btn ${status === value ? 'active' : ''}`}
// //               onClick={() => handleStatusChange(value)}
// //               disabled={status === value}
// //               title={config.label}
// //             >
// //               <i className={`bi ${config.icon}`}></i>
// //             </button>
// //           ))}
// //         </div>
        
// //         <div className="task-meta">
// //           <small>
// //             <i className="bi bi-clock me-1"></i>
// //             Just now
// //           </small>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskCard;




// import './TaskCard.css';

// const TaskCard = ({ task, onDelete, onStatusChange }) => {
//   const { id, title, description, status } = task;

//   const statusConfig = {
//     todo: { 
//       label: 'To Do', 
//       icon: 'bi-circle', 
//       color: 'status-todo',
//       bgColor: 'rgba(108, 117, 125, 0.1)'
//     },
//     inprogress: { 
//       label: 'In Progress', 
//       icon: 'bi-clock', 
//       color: 'status-inprogress',
//       bgColor: 'rgba(255, 193, 7, 0.1)'
//     },
//     done: { 
//       label: 'Done', 
//       icon: 'bi-check-circle', 
//       color: 'status-done',
//       bgColor: 'rgba(25, 135, 84, 0.1)'
//     },
//   };

//   const config = statusConfig[status] || statusConfig.todo;

//   const handleStatusChange = (newStatus) => {
//     if (onStatusChange && status !== newStatus) {
//       onStatusChange(id, newStatus);
//     }
//   };

//   return (
//     <div className={`task-card ${config.color}`}>
//       <div className="task-card-header">
//         <div className="task-title-section">
//           <h6>
//             {status === 'todo' && (
//               <input 
//                 type="checkbox" 
//                 className="task-checkbox"
//                 onChange={() => handleStatusChange('done')}
//               />
//             )}
//             {title}
//             <span className={`task-status ${config.color}`}>
//               <span className="status-indicator"></span>
//               {config.label}
//             </span>
//           </h6>
//         </div>
//         <button
//           className="task-delete-btn"
//           onClick={() => onDelete && onDelete(id)}
//           title="Delete Task"
//         >
//           <i className="bi bi-trash"></i>
//         </button>
//       </div>
      
//       <div className="task-card-body">
//         <p>{description}</p>
//       </div>
      
//       <div className="task-card-footer">
//         <div className="status-buttons">
//           {Object.entries(statusConfig).map(([value, btnConfig]) => (
//             <button
//               key={value}
//               className={`status-btn ${status === value ? 'active' : ''}`}
//               onClick={() => handleStatusChange(value)}
//               disabled={status === value}
//               title={btnConfig.label}
//               style={status === value ? {
//                 backgroundColor: btnConfig.color === 'status-todo' ? 'var(--todo-color)' :
//                                 btnConfig.color === 'status-inprogress' ? 'var(--inprogress-color)' :
//                                 'var(--done-color)',
//                 borderColor: btnConfig.color === 'status-todo' ? 'var(--todo-color)' :
//                              btnConfig.color === 'status-inprogress' ? 'var(--inprogress-color)' :
//                              'var(--done-color)'
//               } : {}}
//             >
//               <i className={`bi ${btnConfig.icon}`}></i>
//             </button>
//           ))}
//         </div>
        
//         <div className="task-meta">
//           <i className="bi bi-clock me-1"></i>
//           <small>Just now</small>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;




// import './TaskCard.css';

// const TaskCard = ({ task, onDelete, onStatusChange }) => {
//   const { id, title, description, status } = task;

//   // Match the status values from your TaskContext
//   const statusConfig = {
//     'To Do': { 
//       label: 'To Do', 
//       icon: 'bi-circle', 
//       color: 'status-todo',
//       bgColor: 'rgba(108, 117, 125, 0.1)',
//       textColor: 'var(--todo-color)'
//     },
//     'In Progress': { 
//       label: 'In Progress', 
//       icon: 'bi-clock', 
//       color: 'status-inprogress',
//       bgColor: 'rgba(255, 193, 7, 0.1)',
//       textColor: 'var(--inprogress-color)'
//     },
//     'Done': { 
//       label: 'Done', 
//       icon: 'bi-check-circle', 
//       color: 'status-done',
//       bgColor: 'rgba(25, 135, 84, 0.1)',
//       textColor: 'var(--done-color)'
//     },
//   };

//   const config = statusConfig[status] || statusConfig['To Do'];

//   const handleStatusChange = (newStatus) => {
//     if (onStatusChange && status !== newStatus) {
//       console.log(`Changing task ${id} status from "${status}" to "${newStatus}"`);
//       onStatusChange(id, newStatus);
//     }
//   };

//   // Map lowercase status to proper status for buttons
//   const getStatusFromKey = (key) => {
//     const statusMap = {
//       'todo': 'To Do',
//       'inprogress': 'In Progress',
//       'done': 'Done'
//     };
//     return statusMap[key] || key;
//   };

//   return (
//     <div className={`task-card ${config.color}`}>
//       <div className="task-card-header">
//         <div className="task-title-section">
//           <h6>
//             {status === 'To Do' && (
//               <input 
//                 type="checkbox" 
//                 className="task-checkbox me-2"
//                 onChange={() => handleStatusChange('Done')}
//               />
//             )}
//             {title}
//             <span className={`task-status ${config.color}`}>
//               <span className="status-indicator"></span>
//               {config.label}
//             </span>
//           </h6>
//         </div>
//         <button
//           className="task-delete-btn"
//           onClick={() => onDelete && onDelete(id)}
//           title="Delete Task"
//         >
//           <i className="bi bi-trash"></i>
//         </button>
//       </div>
      
//       <div className="task-card-body">
//         <p>{description}</p>
//       </div>
      
//       <div className="task-card-footer">
//         <div className="status-buttons">
//           {Object.entries({
//             'todo': statusConfig['To Do'],
//             'inprogress': statusConfig['In Progress'],
//             'done': statusConfig['Done']
//           }).map(([key, btnConfig]) => (
//             <button
//               key={key}
//               className={`status-btn ${status === getStatusFromKey(key) ? 'active' : ''}`}
//               onClick={() => handleStatusChange(getStatusFromKey(key))}
//               disabled={status === getStatusFromKey(key)}
//               title={btnConfig.label}
//             >
//               <i className={`bi ${btnConfig.icon}`}></i>
//             </button>
//           ))}
//         </div>
        
//         <div className="task-meta">
//           <i className="bi bi-clock me-1"></i>
//           <small>Just now</small>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

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