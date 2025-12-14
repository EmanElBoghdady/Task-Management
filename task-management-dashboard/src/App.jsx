// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TasksContext.jsx';
import Layout from './components/Layout/Layout/Layout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ProjectTasks from './pages/ProjectTasks/ProjectTasks.jsx';
import AddTask from './pages/AddTask/AddTask.jsx';
import AddProject from './pages/AddProject/AddProject.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <TaskProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project/:id" element={<ProjectTasks />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/add-project" element={<AddProject />} />
          </Routes>
        </Layout>
      </TaskProvider>
    </Router>
  );
}

export default App;