// src/pages/AddTask.jsx - COMPLETE FIXED VERSION
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTasks } from '../../context/TasksContext.jsx';
import './AddTask.css';

const AddTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultProjectId = queryParams.get('projectId');
  
  const { projects, addTask } = useTasks();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    projectId: defaultProjectId || (projects[0]?.id || ''),
    status: 'To Do', // Fixed: Changed from 'todo' to 'To Do'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.projectId) newErrors.projectId = 'Please select a project';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    console.log('🎯 Submitting task form data:', formData);
    
    // Simulate API call delay
    setTimeout(() => {
      console.log('📤 Calling addTask function with:', formData);
      
      // Call addTask
      const addedTask = addTask(formData);
      
      console.log('✅ Task added successfully:', addedTask);
      console.log('🔀 Redirecting to project:', formData.projectId);
      
      setIsSubmitting(false);
      navigate(`/project/${formData.projectId}`);
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="add-task-container fade-in">
      <div className="form-card">
        <div className="form-header">
          <h2 className="form-title">
            <span className="form-title-icon">➕</span>
            Add New Task
          </h2>
          <p className="form-subtitle">Fill in the details to create a new task</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Task Title *
            </label>
            <input
              type="text"
              className={`form-control ${errors.title ? 'error' : ''}`}
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              disabled={isSubmitting}
            />
            {errors.title && (
              <div className="error-message">{errors.title}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description *
            </label>
            <textarea
              className={`form-control ${errors.description ? 'error' : ''}`}
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the task..."
              disabled={isSubmitting}
            />
            {errors.description && (
              <div className="error-message">{errors.description}</div>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="projectId" className="form-label">
                Project *
              </label>
              <select
                className={`form-control ${errors.projectId ? 'error' : ''}`}
                id="projectId"
                name="projectId"
                value={formData.projectId}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">Select a project</option>
                {projects.map(project => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
              {errors.projectId && (
                <div className="error-message">{errors.projectId}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-control"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="To Do">📝 To Do</option>
                <option value="In Progress">⚡ In Progress</option>
                <option value="Done">✅ Done</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate(-1)}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Adding...
                </>
              ) : (
                'Add Task'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;