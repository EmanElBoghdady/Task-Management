import axios from 'axios';

const API_BASE = "https://693e6d8512c964ee6b6d589a.mockapi.io/api/v1";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor for logging
api.interceptors.request.use(
  config => {
    console.log(`API Request: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  error => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for logging
api.interceptors.response.use(
  response => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  error => {
    console.error('API Response Error:', error.message);
    return Promise.reject(error);
  }
);


export const fetchProjects = async () => {
  try {
    console.log('Fetching projects from:', `${API_BASE}/projects`);
    const response = await api.get('/projects');
    
    if (!response.data || !Array.isArray(response.data)) {
      console.warn('Invalid projects data received:', response.data);
      return [];
    }
    
    console.log(`Successfully fetched ${response.data.length} projects`);
    return response.data.map(project => ({
      id: project.id?.toString() || '',
      title: project.title || 'Untitled Project',
      description: project.description || '',
      tasksCount: Number(project.tasksCount) || 0
    }));
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    
    // Provide fallback data if API fails
    if (error.code === 'ERR_NETWORK') {
      console.log('Network error - using fallback projects data');
      return getFallbackProjects();
    }
    
    throw error;
  }
};

export const fetchAllTasks = async () => {
  try {
    console.log('Fetching all tasks from:', `${API_BASE}/tasks`);
    const response = await api.get('/tasks');
    
    if (!response.data || !Array.isArray(response.data)) {
      console.warn('Invalid tasks data received:', response.data);
      return [];
    }
    
    console.log(`Successfully fetched ${response.data.length} tasks`);
    return response.data.map(task => ({
      id: task.id?.toString() || '',
      title: task.title || 'Untitled Task',
      description: task.description || '',
      status: task.status || 'To Do',
      projectId: task.projectId?.toString() || '1'
    }));
  } catch (error) {
    console.error('Error fetching all tasks:', error.message);
    
    // Provide fallback data if API fails
    if (error.code === 'ERR_NETWORK') {
      console.log('Network error - using fallback tasks data');
      return getFallbackTasks();
    }
    
    throw error;
  }
};

export const fetchTasks = async (projectId) => {
  try {
    const projectIdStr = projectId.toString();
    console.log(`Fetching tasks for project ${projectIdStr} from API`);
    
    // Fetch all tasks and filter by projectId
    const response = await api.get('/tasks');
    
    if (!response.data || !Array.isArray(response.data)) {
      console.warn('Invalid tasks data received:', response.data);
      return [];
    }
    
    const filteredTasks = response.data.filter(task => 
      task.projectId?.toString() === projectIdStr
    );
    
    console.log(`Found ${filteredTasks.length} tasks for project ${projectIdStr}`);
    
    return filteredTasks.map(task => ({
      id: task.id?.toString() || '',
      title: task.title || 'Untitled Task',
      description: task.description || '',
      status: task.status || 'To Do',
      projectId: task.projectId?.toString() || projectIdStr
    }));
  } catch (error) {
    console.error(`Error fetching tasks for project ${projectId}:`, error.message);
    
    // Provide fallback data if API fails
    if (error.code === 'ERR_NETWORK') {
      console.log('Network error - using fallback project tasks data');
      return getFallbackTasks().filter(task => 
        task.projectId === projectId.toString()
      );
    }
    
    throw error;
  }
};

//dealing with api //
export const addTaskToAPI = async (taskData) => {
  try {
    console.log('Adding task to API:', taskData);
    
    const response = await api.post('/tasks', {
      ...taskData,
      projectId: taskData.projectId.toString(),
      status: taskData.status || 'To Do'
    });
    
    console.log('Task added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding task to API:', error.message);
    throw error;
  }
};

export const addProjectToAPI = async (projectData) => {
  try {
    console.log('Adding project to API:', projectData);
    
    const response = await api.post('/projects', {
      ...projectData,
      tasksCount: projectData.tasksCount || 0
    });
    
    console.log('Project added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding project to API:', error.message);
    throw error;
  }
};

export const deleteTaskFromAPI = async (taskId) => {
  try {
    console.log(`Deleting task ${taskId} from API`);
    
    await api.delete(`/tasks/${taskId}`);
    console.log(`Task ${taskId} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting task ${taskId} from API:`, error.message);
    throw error;
  }
};


export const updateTaskStatusInAPI = async (taskId, newStatus) => {
  try {
    console.log(`Updating task ${taskId} status to ${newStatus} in API`);
    
    // First get the current task
    const currentTask = await api.get(`/tasks/${taskId}`);
    
    // Update only the status field
    const response = await api.put(`/tasks/${taskId}`, {
      ...currentTask.data,
      status: newStatus
    });
    
    console.log(`Task ${taskId} updated successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error updating task ${taskId} status:`, error.message);
    throw error;
  }
};
//////////////////////////////////////
const getFallbackProjects = () => [
  { 
    id: "1", 
    title: "Website Redesign", 
    description: "Complete website redesign with modern UI", 
    tasksCount: 3 
  },
  { 
    id: "2", 
    title: "Mobile App Development", 
    description: "Build cross-platform mobile application", 
    tasksCount: 2 
  },
  { 
    id: "3", 
    title: "Marketing Campaign", 
    description: "Q4 marketing strategy and execution", 
    tasksCount: 4 
  },
  { 
    id: "4", 
    title: "Customer Portal", 
    description: "Develop customer self-service portal", 
    tasksCount: 5 
  }
];


const getFallbackTasks = () => [
  { id: "1", title: "Design Homepage", description: "Create wireframes and mockups", status: "In Progress", projectId: "1" },
  { id: "2", title: "API Integration", description: "Connect third-party APIs", status: "To Do", projectId: "1" },
  { id: "3", title: "Responsive Testing", description: "Test on mobile and tablet devices", status: "Done", projectId: "1" },
  { id: "4", title: "UI/UX Design", description: "Design mobile app interface", status: "In Progress", projectId: "2" },
  { id: "5", title: "Backend Setup", description: "Setup server and database", status: "To Do", projectId: "2" },
  { id: "6", title: "Social Media Strategy", description: "Create social media content plan", status: "To Do", projectId: "3" },
  { id: "7", title: "Email Campaign", description: "Design marketing emails", status: "In Progress", projectId: "3" },
  { id: "8", title: "User Authentication", description: "Implement login system", status: "Done", projectId: "4" }
];

export { api };