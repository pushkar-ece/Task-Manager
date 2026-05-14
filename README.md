# Team Task Manager

A full-stack Team Task Manager application built with the MERN stack (MongoDB, Express, React, Node.js). This project provides a complete solution for managing projects, assigning tasks to team members, and tracking progress through various statuses.

## Features

- **User Authentication:** Secure signup and login flow using JWT and bcrypt.
- **Role-Based Access Control:** Built-in 'Admin' and 'Member' roles to manage permissions.
- **Project Management:** Create and organize multiple projects.
- **Task Tracking:** Create tasks, assign them to team members, set deadlines, and track statuses (Todo, In Progress, Done, Overdue).
- **Modern UI:** Premium, responsive dark-mode interface built with Vanilla CSS.

## Tech Stack

- **Frontend:** React, Vite, React Router, Axios, Vanilla CSS
- **Backend:** Node.js, Express, Mongoose, JWT, bcrypt
- **Database:** MongoDB

## Folder Structure

- `frontend/` - Contains the React application.
- `backend/` - Contains the Node.js/Express API and database models.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js installed on your local machine.
- MongoDB installed locally OR a MongoDB Atlas cloud account.

### 1. Database Setup (MongoDB)

You need a running MongoDB database for the backend to work. You can choose one of the following methods:

#### Option A: Local MongoDB (Recommended for quick testing)
1. Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community).
2. Start the MongoDB service on your machine. It usually runs on `mongodb://127.0.0.1:27017`.
3. The backend is already pre-configured to use this local URL!

#### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account and cluster.
2. Under "Database Access", create a new database user and password.
3. Under "Network Access", allow your IP address.
4. Click "Connect" on your cluster, choose "Connect your application", and copy the connection string.
5. Open `backend/.env` and replace the `MONGO_URI` value with your connection string (don't forget to replace `<username>` and `<password>`).

### 2. Backend Setup

1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install NPM packages:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   *The server should run on `http://localhost:5000` and log "Connected to MongoDB".*

### 3. Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install NPM packages:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173/`).

## Usage

1. **Sign Up:** Create a new account. Select "Admin" to gain full privileges (creating projects/tasks).
2. **Create a Project:** Click the "+" button in the sidebar to start a new project.
3. **Add Tasks:** Inside a project, click "Add Task" to create assignments.
4. **Update Statuses:** Any user can update a task's status from the dropdown to reflect progress.
