// // src/pages/ProjectTasks.jsx - FIXED VERSION
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useTasks } from "../../context/TasksContext.jsx";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
// import TaskCard from '../../components/TaskCard/TaskCard.jsx';

// const ProjectTasks = () => {
//   const { id } = useParams();
//   const { getProjectById, getProjectTasks, deleteTask, moveTask } = useTasks();
  
//   const project = getProjectById(id);
//   const allTasks = getProjectTasks(id);

//   if (!project) {
//     return (
//       <Container className="text-center py-5">
//         <Card className="shadow">
//           <Card.Body>
//             <h3>Project not found</h3>
//             <p>The project you're looking for doesn't exist.</p>
//             <Button as={Link} to="/" variant="primary">
//               ← Back to Dashboard
//             </Button>
//           </Card.Body>
//         </Card>
//       </Container>
//     );
//   }

//   const handleDeleteTask = (taskId) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       deleteTask(taskId);
//     }
//   };

//   const handleMoveTask = (taskId, direction) => {
//     moveTask(taskId, direction);
//   };

//   // Filter tasks by status manually
//   const todoTasks = allTasks.filter(task => task.status === 'To Do');
//   const inProgressTasks = allTasks.filter(task => task.status === 'In Progress');
//   const doneTasks = allTasks.filter(task => task.status === 'Done');

//   return (
//     <Container className="py-4">
//       {/* Project Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h1 className="mb-2">{project.title}</h1>
//           <p className="text-muted mb-0">{project.description}</p>
//           <Badge bg="info" className="mt-2">
//             {allTasks.length} tasks
//           </Badge>
//         </div>
//         <Button as={Link} to="/add-task" variant="primary">
//           + Add Task
//         </Button>
//       </div>

//       {/* Task Columns */}
//       <Row>
//         {/* To Do Column */}
//         <Col md={4} className="mb-4">
//           <Card className="h-100">
//             <Card.Header className="bg-light">
//               <h5 className="mb-0">📝 To Do</h5>
//               <Badge bg="secondary" className="ms-2">
//                 {todoTasks.length}
//               </Badge>
//             </Card.Header>
//             <Card.Body style={{ minHeight: '400px' }}>
//               {todoTasks.length === 0 ? (
//                 <p className="text-muted text-center mt-4">No tasks</p>
//               ) : (
//                 todoTasks.map(task => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onDelete={handleDeleteTask}
//                     onMove={handleMoveTask}
//                   />
//                 ))
//               )}
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* In Progress Column */}
//         <Col md={4} className="mb-4">
//           <Card className="h-100">
//             <Card.Header className="bg-light">
//               <h5 className="mb-0">⚡ In Progress</h5>
//               <Badge bg="warning" className="ms-2">
//                 {inProgressTasks.length}
//               </Badge>
//             </Card.Header>
//             <Card.Body style={{ minHeight: '400px' }}>
//               {inProgressTasks.length === 0 ? (
//                 <p className="text-muted text-center mt-4">No tasks</p>
//               ) : (
//                 inProgressTasks.map(task => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onDelete={handleDeleteTask}
//                     onMove={handleMoveTask}
//                   />
//                 ))
//               )}
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Done Column */}
//         <Col md={4} className="mb-4">
//           <Card className="h-100">
//             <Card.Header className="bg-light">
//               <h5 className="mb-0">✅ Done</h5>
//               <Badge bg="success" className="ms-2">
//                 {doneTasks.length}
//               </Badge>
//             </Card.Header>
//             <Card.Body style={{ minHeight: '400px' }}>
//               {doneTasks.length === 0 ? (
//                 <p className="text-muted text-center mt-4">No tasks</p>
//               ) : (
//                 doneTasks.map(task => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onDelete={handleDeleteTask}
//                     onMove={handleMoveTask}
//                   />
//                 ))
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Back Button */}
//       <div className="text-center mt-4">
//         <Button as={Link} to="/" variant="outline-secondary">
//           ← Back to Dashboard
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default ProjectTasks;




// import { useParams, Link } from 'react-router-dom';
// import { useTasks } from "../../context/TasksContext.jsx";
// import TaskCard from '../../components/TaskCard/TaskCard.jsx';
// import './ProjectTasks.css';

// const ProjectTasks = () => {
//   const { id } = useParams();
//   const { getProjectById, getProjectTasks, deleteTask, moveTask } = useTasks();
  
//   const project = getProjectById(id);
//   const allTasks = getProjectTasks(id);

//   if (!project) {
//     return (
//       <div className="error-message text-center">
//         <h3>Project not found</h3>
//         <p>The project you're looking for doesn't exist.</p>
//         <Link to="/" className="btn btn-primary">
//           ← Back to Dashboard
//         </Link>
//       </div>
//     );
//   }

//   const handleDeleteTask = (taskId) => {
//     deleteTask(taskId);
//   };

//   const handleMoveTask = (taskId, direction) => {
//     console.log(`Moving task ${taskId} ${direction}`);
//     moveTask(taskId, direction);
//   };

//   const handleStatusChange = (taskId, newStatus) => {
//     console.log(`Changing task ${taskId} to ${newStatus}`);
//     // Direct status change - you'll need to implement this in context
//     // For now, we can update it by moving
//     const statusOrder = ['To Do', 'In Progress', 'Done'];
//     const currentIndex = statusOrder.indexOf(allTasks.find(t => t.id === taskId)?.status || 'To Do');
//     const targetIndex = statusOrder.indexOf(newStatus);
    
//     if (currentIndex < targetIndex) {
//       // Move right multiple times
//       for (let i = currentIndex; i < targetIndex; i++) {
//         moveTask(taskId, 'next');
//       }
//     } else if (currentIndex > targetIndex) {
//       // Move left multiple times
//       for (let i = currentIndex; i > targetIndex; i--) {
//         moveTask(taskId, 'prev');
//       }
//     }
//   };

//   // Filter tasks by status
//   const todoTasks = allTasks.filter(task => task.status === 'To Do');
//   const inProgressTasks = allTasks.filter(task => task.status === 'In Progress');
//   const doneTasks = allTasks.filter(task => task.status === 'Done');

//   return (
//     <div className="project-tasks-container fade-in">
//       {/* Project Header */}
//       <div className="project-header">
//         <div className="project-info">
//           <Link to="/" className="back-link">
//             <i className="bi bi-arrow-left me-2"></i>
//             Back to Dashboard
//           </Link>
//           <h1 className="project-title">{project.title}</h1>
//           <p className="project-description">{project.description}</p>
//           <div className="project-stats">
//             <span className="task-count-badge">
//               <i className="bi bi-list-task me-1"></i>
//               {allTasks.length} {allTasks.length === 1 ? 'task' : 'tasks'}
//             </span>
//           </div>
//         </div>
//         <Link 
//           to={`/add-task?projectId=${id}`}
//           className="add-task-btn"
//         >
//           <i className="bi bi-plus-circle me-2"></i>
//           Add Task
//         </Link>
//       </div>

//       {/* Task Columns */}
//       <div className="task-board">
//         {/* To Do Column */}
//         <div className="task-column-wrapper">
//           <div className="task-column column-todo">
//             <div className="column-header">
//               <h5>To Do</h5>
//               <span className="task-count-badge">{todoTasks.length}</span>
//             </div>
//             <div className="column-body">
//               {todoTasks.length === 0 ? (
//                 <div className="empty-column">
//                   <i className="bi bi-inbox empty-icon"></i>
//                   <p>No tasks here yet</p>
//                 </div>
//               ) : (
//                 todoTasks.map(task => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onDelete={handleDeleteTask}
//                     onMove={handleMoveTask}
//                     onStatusChange={handleStatusChange}
//                   />
//                 ))
//               )}
//             </div>
//           </div>
//         </div>

//         {/* In Progress Column */}
//         <div className="task-column-wrapper">
//           <div className="task-column column-inprogress">
//             <div className="column-header">
//               <h5>In Progress</h5>
//               <span className="task-count-badge">{inProgressTasks.length}</span>
//             </div>
//             <div className="column-body">
//               {inProgressTasks.length === 0 ? (
//                 <div className="empty-column">
//                   <i className="bi bi-inbox empty-icon"></i>
//                   <p>No tasks here yet</p>
//                 </div>
//               ) : (
//                 inProgressTasks.map(task => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onDelete={handleDeleteTask}
//                     onMove={handleMoveTask}
//                     onStatusChange={handleStatusChange}
//                   />
//                 ))
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Done Column */}
//         <div className="task-column-wrapper">
//           <div className="task-column column-done">
//             <div className="column-header">
//               <h5>Done</h5>
//               <span className="task-count-badge">{doneTasks.length}</span>
//             </div>
//             <div className="column-body">
//               {doneTasks.length === 0 ? (
//                 <div className="empty-column">
//                   <i className="bi bi-inbox empty-icon"></i>
//                   <p>No tasks here yet</p>
//                 </div>
//               ) : (
//                 doneTasks.map(task => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onDelete={handleDeleteTask}
//                     onMove={handleMoveTask}
//                     onStatusChange={handleStatusChange}
//                   />
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectTasks;



// import { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useTasks } from "../../context/TasksContext.jsx";
// import TaskCard from '../../components/TaskCard/TaskCard.jsx';
// import './ProjectTasks.css';

// const ProjectTasks = () => {
//   const { id } = useParams();
//   const { getProjectById, getProjectTasks, deleteTask, moveTask } = useTasks();
//   const [dragOver, setDragOver] = useState(null);
  
//   const project = getProjectById(id);
//   const allTasks = getProjectTasks(id);

//   if (!project) {
//     return (
//       <div className="project-not-found">
//         <div className="error-card">
//           <i className="bi bi-exclamation-triangle error-icon"></i>
//           <h3>Project Not Found</h3>
//           <p>The project you're looking for doesn't exist or has been removed.</p>
//           <Link to="/" className="btn-back-dashboard">
//             <i className="bi bi-arrow-left me-2"></i>
//             Back to Dashboard
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const handleDeleteTask = (taskId) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       deleteTask(taskId);
//     }
//   };

//   const handleMoveTask = (taskId, direction) => {
//     moveTask(taskId, direction);
//   };

//   const handleStatusChange = (taskId, newStatus) => {
//     // Map to move direction
//     const statusOrder = ['To Do', 'In Progress', 'Done'];
//     const currentTask = allTasks.find(t => t.id === taskId);
//     if (!currentTask) return;
    
//     const currentIndex = statusOrder.indexOf(currentTask.status);
//     const targetIndex = statusOrder.indexOf(newStatus);
    
//     if (currentIndex < targetIndex) {
//       for (let i = currentIndex; i < targetIndex; i++) {
//         moveTask(taskId, 'next');
//       }
//     } else if (currentIndex > targetIndex) {
//       for (let i = currentIndex; i > targetIndex; i--) {
//         moveTask(taskId, 'prev');
//       }
//     }
//   };

//   // Filter tasks by status
//   const todoTasks = allTasks.filter(task => task.status === 'To Do');
//   const inProgressTasks = allTasks.filter(task => task.status === 'In Progress');
//   const doneTasks = allTasks.filter(task => task.status === 'Done');

//   // Drag and drop handlers
//   const handleDragStart = (e, taskId) => {
//     e.dataTransfer.setData('taskId', taskId);
//   };

//   const handleDragOver = (e, columnType) => {
//     e.preventDefault();
//     setDragOver(columnType);
//   };

//   const handleDrop = (e, targetStatus) => {
//     e.preventDefault();
//     const taskId = e.dataTransfer.getData('taskId');
//     handleStatusChange(taskId, targetStatus);
//     setDragOver(null);
//   };

//   const handleDragEnd = () => {
//     setDragOver(null);
//   };

//   return (
//     <div className="project-tasks-container fade-in">
//       {/* Project Header with Gradient */}
//       <div className="project-header">
//         <div className="project-info">
//           <Link to="/" className="back-link">
//             <i className="bi bi-arrow-left me-2"></i>
//             Back to Dashboard
//           </Link>
//           <h1 className="project-title">{project.title}</h1>
//           <p className="project-description">{project.description}</p>
//           <div className="project-stats">
//             <span className="task-count-badge">
//               <i className="bi bi-list-task me-1"></i>
//               {allTasks.length} {allTasks.length === 1 ? 'task' : 'tasks'}
//             </span>
//             <span className="task-count-badge">
//               <i className="bi bi-check-circle me-1"></i>
//               {doneTasks.length} completed
//             </span>
//             <span className="task-count-badge">
//               <i className="bi bi-clock me-1"></i>
//               {inProgressTasks.length} in progress
//             </span>
//           </div>
//         </div>
//         <Link 
//           to={`/add-task?projectId=${id}`}
//           className="add-task-btn"
//         >
//           <i className="bi bi-plus-circle me-2"></i>
//           Add New Task
//         </Link>
//       </div>

//       {/* Task Board with Drag & Drop */}
//       <div className="task-board">
//         {/* To Do Column */}
//         <div className="task-column-wrapper">
//           <div 
//             className={`task-column column-todo ${dragOver === 'todo' ? 'drag-over' : ''}`}
//             onDragOver={(e) => handleDragOver(e, 'todo')}
//             onDrop={(e) => handleDrop(e, 'To Do')}
//             onDragLeave={() => setDragOver(null)}
//           >
//             <div className="column-header">
//               <h5>To Do</h5>
//               <span className="task-count-badge">{todoTasks.length}</span>
//             </div>
//             <div className="column-body">
//               {todoTasks.length === 0 ? (
//                 <div className="empty-column">
//                   <div className="empty-state">
//                     <i className="bi bi-inbox empty-icon"></i>
//                     <p>No tasks here yet</p>
//                     <small className="text-muted">Drag tasks here or add new ones</small>
//                   </div>
//                 </div>
//               ) : (
//                 todoTasks.map(task => (
//                   <div
//                     key={task.id}
//                     draggable
//                     onDragStart={(e) => handleDragStart(e, task.id)}
//                     onDragEnd={handleDragEnd}
//                   >
//                     <TaskCard
//                       task={task}
//                       onDelete={handleDeleteTask}
//                       onMove={handleMoveTask}
//                       onStatusChange={handleStatusChange}
//                     />
//                   </div>
//                 ))
//               )}
//             </div>
//             {dragOver === 'todo' && (
//               <div className="drop-indicator">
//                 Drop here to move to To Do
//               </div>
//             )}
//           </div>
//         </div>

//         {/* In Progress Column */}
//         <div className="task-column-wrapper">
//           <div 
//             className={`task-column column-inprogress ${dragOver === 'inprogress' ? 'drag-over' : ''}`}
//             onDragOver={(e) => handleDragOver(e, 'inprogress')}
//             onDrop={(e) => handleDrop(e, 'In Progress')}
//             onDragLeave={() => setDragOver(null)}
//           >
//             <div className="column-header">
//               <h5>In Progress</h5>
//               <span className="task-count-badge">{inProgressTasks.length}</span>
//             </div>
//             <div className="column-body">
//               {inProgressTasks.length === 0 ? (
//                 <div className="empty-column">
//                   <div className="empty-state">
//                     <i className="bi bi-clock empty-icon"></i>
//                     <p>No active tasks</p>
//                     <small className="text-muted">Tasks being worked on appear here</small>
//                   </div>
//                 </div>
//               ) : (
//                 inProgressTasks.map(task => (
//                   <div
//                     key={task.id}
//                     draggable
//                     onDragStart={(e) => handleDragStart(e, task.id)}
//                     onDragEnd={handleDragEnd}
//                   >
//                     <TaskCard
//                       task={task}
//                       onDelete={handleDeleteTask}
//                       onMove={handleMoveTask}
//                       onStatusChange={handleStatusChange}
//                     />
//                   </div>
//                 ))
//               )}
//             </div>
//             {dragOver === 'inprogress' && (
//               <div className="drop-indicator">
//                 Drop here to move to In Progress
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Done Column */}
//         <div className="task-column-wrapper">
//           <div 
//             className={`task-column column-done ${dragOver === 'done' ? 'drag-over' : ''}`}
//             onDragOver={(e) => handleDragOver(e, 'done')}
//             onDrop={(e) => handleDrop(e, 'Done')}
//             onDragLeave={() => setDragOver(null)}
//           >
//             <div className="column-header">
//               <h5>Done</h5>
//               <span className="task-count-badge">{doneTasks.length}</span>
//             </div>
//             <div className="column-body">
//               {doneTasks.length === 0 ? (
//                 <div className="empty-column">
//                   <div className="empty-state">
//                     <i className="bi bi-check-circle empty-icon"></i>
//                     <p>No completed tasks</p>
//                     <small className="text-muted">Completed tasks will appear here</small>
//                   </div>
//                 </div>
//               ) : (
//                 doneTasks.map(task => (
//                   <div
//                     key={task.id}
//                     draggable
//                     onDragStart={(e) => handleDragStart(e, task.id)}
//                     onDragEnd={handleDragEnd}
//                   >
//                     <TaskCard
//                       task={task}
//                       onDelete={handleDeleteTask}
//                       onMove={handleMoveTask}
//                       onStatusChange={handleStatusChange}
//                     />
//                   </div>
//                 ))
//               )}
//             </div>
//             {dragOver === 'done' && (
//               <div className="drop-indicator">
//                 Drop here to mark as Done
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Quick Stats Footer */}
//       <div className="quick-stats-footer">
//         <div className="stat-item">
//           <span className="stat-number">{todoTasks.length}</span>
//           <span className="stat-label">To Do</span>
//         </div>
//         <div className="stat-divider">•</div>
//         <div className="stat-item">
//           <span className="stat-number">{inProgressTasks.length}</span>
//           <span className="stat-label">In Progress</span>
//         </div>
//         <div className="stat-divider">•</div>
//         <div className="stat-item">
//           <span className="stat-number">{doneTasks.length}</span>
//           <span className="stat-label">Done</span>
//         </div>
//         <div className="stat-divider">•</div>
//         <div className="stat-item">
//           <span className="stat-number">{allTasks.length}</span>
//           <span className="stat-label">Total</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectTasks;



import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTasks } from "../../context/TasksContext.jsx";
import TaskCard from '../../components/TaskCard/TaskCard.jsx';
import './ProjectTasks.css';

const ProjectTasks = () => {
  const { id } = useParams();
  const { getProjectById, getProjectTasks, deleteTask, moveTask } = useTasks();
  const [dragOver, setDragOver] = useState(null);
  
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

      {/* Quick Stats Footer */}
      <div className="quick-stats-footer">
        <div className="stat-item">
          <span className="stat-number">{todoTasks.length}</span>
          <span className="stat-label">To Do</span>
        </div>
        <div className="stat-divider">•</div>
        <div className="stat-item">
          <span className="stat-number">{inProgressTasks.length}</span>
          <span className="stat-label">In Progress</span>
        </div>
        <div className="stat-divider">•</div>
        <div className="stat-item">
          <span className="stat-number">{doneTasks.length}</span>
          <span className="stat-label">Done</span>
        </div>
        <div className="stat-divider">•</div>
        <div className="stat-item">
          <span className="stat-number">{totalTasks}</span>
          <span className="stat-label">Total</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectTasks;