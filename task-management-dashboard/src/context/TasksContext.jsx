/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchProjects, fetchAllTasks } from '../services/api';

const TasksContext = createContext();


export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial data from API on component mount
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        console.log('Loading initial data from API...');
        
        // Fetch both projects and tasks in parallel
        const [projectsData, tasksData] = await Promise.all([
          fetchProjects(),
          fetchAllTasks()
        ]);
        
        console.log('Projects loaded:', projectsData);
        console.log('Tasks loaded:', tasksData);
        
        setProjects(projectsData);
        setTasks(tasksData);
        setError(null);
      } catch (err) {
        console.error('Error loading initial data:', err);
        setError(err.message || 'Failed to load data from API');
        
        // Fallback to local data if API fails
        const fallbackProjects = [
          { 
            id: "1", 
            title: "Website Redesign", 
            description: "Redesign company website", 
            tasksCount: 3 
          },
          { 
            id: "2", 
            title: "Mobile App", 
            description: "Build mobile application", 
            tasksCount: 4 
          },
          { 
            id: "3", 
            title: "Marketing Campaign", 
            description: "Plan marketing strategy", 
            tasksCount: 2 
          },
          { 
            id: "4", 
            title: "Customer Portal", 
            description: "Develop customer portal", 
            tasksCount: 5 
          }
        ];
        
        const fallbackTasks = [
          { id: "1", title: "Design Homepage", description: "Create wireframes", status: "In Progress", projectId: "1" },
          { id: "2", title: "API Integration", description: "Connect APIs", status: "To Do", projectId: "1" },
          { id: "3", title: "Responsive Testing", description: "Test on devices", status: "Done", projectId: "1" },
          { id: "4", title: "UI Design", description: "Design app UI", status: "In Progress", projectId: "2" },
          { id: "5", title: "Backend Setup", description: "Setup server", status: "To Do", projectId: "2" }
        ];
        
        setProjects(fallbackProjects);
        setTasks(fallbackTasks);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // ADD TASK FUNCTION with API call
 // ADD TASK FUNCTION - FIXED VERSION
const addTask = (newTask) => {
  const taskWithId = {
    ...newTask,
    id: Date.now().toString(),
    projectId: newTask.projectId.toString()
  };
  
  console.log('Adding new task:', taskWithId);
  console.log('Current projects before update:', projects);
  
  // Update tasks state FIRST
  const updatedTasks = [...tasks, taskWithId];
  setTasks(updatedTasks);
  
  // Then update project task count - FIXED LOGIC
  setProjects(prevProjects => {
    console.log('Previous projects in setProjects:', prevProjects);
    
    const updatedProjects = prevProjects.map(project => {
      console.log(`Checking project ${project.id} against ${newTask.projectId}`);
      
      if (project.id.toString() === newTask.projectId.toString()) {
        // Count how many tasks actually belong to this project
        const tasksForThisProject = updatedTasks.filter(
          task => task.projectId.toString() === project.id.toString()
        );
        
        console.log(`Project ${project.id} now has ${tasksForThisProject.length} tasks`);
        
        return {
          ...project,
          tasksCount: tasksForThisProject.length
        };
      }
      return project;
    });
    
    console.log('Updated projects:', updatedProjects);
  
    
    return updatedProjects;
  });
  
  return taskWithId;
};

  // ADD PROJECT FUNCTION - IMPROVED VERSION
const addProject = (newProject) => {
  const projectWithId = {
    ...newProject,
    id: Date.now().toString(),
    tasksCount: 0 // Initialize with 0 tasks
  };
  
  console.log('Adding new project:', projectWithId);
  
  setProjects(prevProjects => {
    const updatedProjects = [...prevProjects, projectWithId];

    console.log('Updated projects after addition:', updatedProjects);
    return updatedProjects;
  });
  
  return projectWithId;
};

  // DELETE TASK FUNCTION
  const deleteTask = (taskId) => {
    try {
      console.log('Deleting task:', taskId);
      
      // Find the task to get its projectId
      const taskToDelete = tasks.find(task => task.id === taskId.toString());
      
      // Remove task from tasks
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId.toString()));
      
      // Update project task count if task was found
      if (taskToDelete) {
        setProjects(prevProjects => 
          prevProjects.map(project => 
            project.id === taskToDelete.projectId
              ? { ...project, tasksCount: Math.max(0, (project.tasksCount || 0) - 1) }
              : project
          )
        );
      }
      
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  };

  // MOVE TASK FUNCTION
  const moveTask = (taskId, direction) => {
    try {
      const statusOrder = ['To Do', 'In Progress', 'Done'];
      
      setTasks(prevTasks => 
        prevTasks.map(task => {
          if (task.id === taskId.toString()) {
            const currentIndex = statusOrder.indexOf(task.status);
            let newIndex;
            
            if (direction === 'next' && currentIndex < statusOrder.length - 1) {
              newIndex = currentIndex + 1;
            } else if (direction === 'prev' && currentIndex > 0) {
              newIndex = currentIndex - 1;
            } else {
              return task;
            }
            
            console.log(`Moving task ${taskId} from ${task.status} to ${statusOrder[newIndex]}`);
            return { ...task, status: statusOrder[newIndex] };
          }
          return task;
        })
      );
    } catch (error) {
      console.error('Error moving task:', error);
      throw error;
    }
  };

  // UPDATE TASK STATUS (Direct)
  const updateTaskStatus = (taskId, newStatus) => {
    try {
      console.log(`Updating task ${taskId} to ${newStatus}`);
      
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId.toString()
            ? { ...task, status: newStatus }
            : task
        )
      );
      
      console.log('Task status updated successfully');
    } catch (error) {
      console.error('Error updating task status:', error);
      throw error;
    }
  };

  // GET PROJECT BY ID
  const getProjectById = (id) => {
    return projects.find(project => project.id === id.toString());
  };

  // GET TASKS FOR PROJECT
  const getProjectTasks = (projectId) => {
    return tasks.filter(task => task.projectId === projectId.toString());
  };

  // Function to recalculate all task counts
const recalculateTaskCounts = () => {
  console.log('Recalculating task counts for all projects...');
  
  setProjects(prevProjects => {
    const updatedProjects = prevProjects.map(project => {
      const projectTasks = tasks.filter(task => 
        task.projectId && task.projectId.toString() === project.id.toString()
      );
      
      return {
        ...project,
        tasksCount: projectTasks.length
      };
    });
    
  
    return updatedProjects;
  });
};

  // REFRESH DATA
  const refreshData = async () => {
    try {
      setLoading(true);
      console.log('Refreshing data...');
      
      const [projectsData, tasksData] = await Promise.all([
        fetchProjects(),
        fetchAllTasks()
      ]);
      
      setProjects(projectsData);
      setTasks(tasksData);
      setError(null);
      console.log('Data refreshed successfully');
    } catch (err) {
      console.error('Error refreshing data:', err);
      setError(err.message || 'Failed to refresh data');
    } finally {
      setLoading(false);
    }


    
  };

  return (
    <TasksContext.Provider value={{
      projects,
      tasks,
      loading,
      error,
      addTask,
      addProject,
      deleteTask,
      moveTask,
      updateTaskStatus,
      getProjectById,
      getProjectTasks,
      recalculateTaskCounts,
      refreshData
    }}>
      {children}
    </TasksContext.Provider>
  );
};