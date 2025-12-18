# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Features

Dashboard View: Display all projects with stats and search functionality

Project Tasks Board: Kanban-style board with three columns (To Do, In Progress, Done)

Add/Edit Tasks: Create and manage tasks with status updates

Add/Edit Projects: Create and manage projects

Drag & Drop: Move tasks between columns with visual feedback

API Integration: Fetches data from MockAPI.io with fallback support


Project Structure
src/
├── components/
│   ├── Layout/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.css
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   ├── ProjectCard/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectCard.css
│   ├── TaskCard/
│   │   ├── TaskCard.jsx
│   │   └── TaskCard.css
│   └── TaskColumn/
│       ├── TaskColumn.jsx
│       └── TaskColumn.css
├── pages/
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   ├── ProjectTasks/
│   │   ├── ProjectTasks.jsx
│   │   └── ProjectTasks.css
│   ├── AddTask/
│   │   ├── AddTask.jsx
│   │   └── AddTask.css
│   └── AddProject/
│       ├── AddProject.jsx
│       └── AddProject.css
├── context/
│   ├── TasksContext.jsx
│   └── ThemeContext.jsx
├── services/
│   └── api.js
├── styles/
│   ├── index.css
│   ├── common.css
│   └── theme.css
├── App.jsx
├── App.css
└── main.jsx



Team Roles (4 Members)
Member 1: Routing & Layout
Responsibilities:

 Set up React Router with all routes

 Created Navbar component with theme toggle

 Implemented main Layout structure

 Added navigation between pages

 Created responsive layout with Bootstrap


Features Implemented:

/ - Dashboard route

/project/:id - Project tasks route

/add-task - Add task form route

/add-project - Add project form route

Theme toggle in navbar

Responsive navigation


Member 2: UI Components
Responsibilities:

 Designed and implemented ProjectCard component

 Created TaskCard component with status indicators

 Built TaskColumn component for kanban board

 Implemented responsive grid layouts

 Added hover effects and animations

 Styled components for both light/dark themes

Features Implemented:

ProjectCard with gradient icons

TaskCard with status badges and action buttons

TaskColumn with drag & drop support

Empty state components

Smooth animations and transitions

Consistent styling across themes


Member 3: API & State Logic
Responsibilities:

✅ Created TasksContext for state management

✅ Integrated with MockAPI.io endpoints

✅ Implemented data fetching with fallback

✅ Created CRUD operations for tasks/projects

✅ Added loading and error states

✅ Implemented drag & drop functionality

Features Implemented:

Real API integration with MockAPI.io

Fallback data when API fails

Loading states and error handling

Task status updates and moving

Project task count synchronization

Refresh data functionality

Member 4: Forms
Responsibilities:

✅ Built AddTask form with validation

✅ Created AddProject form

✅ Implemented form submission logic

✅ Added form styling for both themes

✅ Integrated forms with context API

✅ Added form validation and error messages

Features Implemented:

AddTask form with project selection

AddProject form with required fields

Form validation with error messages

Auto-redirect after submission

Consistent form styling

Integration with state management

🔧 Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run lint - Run ESLint

🌐 API Integration
The app uses MockAPI.io for data storage:

Endpoints:
GET /projects - Fetch all projects

GET /tasks - Fetch all tasks

POST /projects - Create new project

POST /tasks - Create new task

PUT /tasks/:id - Update task status

DELETE /tasks/:id - Delete task

Fallback System:
If the API fails, the app uses local fallback data to ensure the application remains functional.



Responsive Design
The application is fully responsive and works on:

Desktop: Full feature set with large cards

Tablet: Adjusted layouts with touch-friendly elements

Mobile: Stacked columns and optimized touch targets

 Key Components
1. Dashboard
Project cards with stats

Search functionality

Task statistics overview

Add project button

2. Project Tasks Board
Three-column kanban layout

Task filtering by status

Progress tracking

3. Task Card
Status indicators

Quick action buttons

Delete functionality

Status change buttons

4. Forms
Client-side validation

Required field indicators

Error message display




