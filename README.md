## 📚 Blog Post Manager

This project is a full-stack application for managing blog posts, built with a decoupled frontend and backend architecture. The entire system is containerized using Docker for simplified local development.

# ⚙️ Architecture & Tech Stack

The application is split into two main components:

Component Technologies Purpose
Frontend (/frontend) React, TypeScript, Redux Toolkit, Styled-Components, Vite Client-side application for user interaction and state management.
Backend (/backend) Laravel, PHP 8.4, Laravel Sail, MySQL 8.0 RESTful API and data persistence layer.

# 🚀 Getting Started

To run the entire application locally, you must have Docker Desktop installed and running.

1. Start the Backend API (Docker)
   Navigate to the backend directory, start the Docker containers using Laravel Sail, and run migrations to set up the database:

Bash

# Navigate to the backend folder

cd backend

# Build and start the containers in detached mode

./vendor/bin/sail up -d

# Run database migrations and seeders

./vendor/bin/sail artisan migrate --seed 2. Start the Frontend Application
The frontend requires the Node dependencies to be installed before running the development server:

Bash

# Navigate to the frontend folder

cd frontend

# Install Node packages

npm install

# Start the React development server

npm run dev
The frontend application will typically be available at http://localhost:3000

💻 Detailed Documentation
For specific instructions, development workflows, and deep dives into each part of the stack, please refer to the dedicated README files:

Frontend Documentation: See the frontend/README.md file for details on Redux state management, custom notifications, and React component usage.

Backend Documentation: See the backend/README.md file for details on Laravel Sail commands, API endpoints, and database setup.

# 🗺️ Future Development & Roadmap

While the core CRUD functionality is complete, the following items are planned to finalize the application's readiness and testing:

1. Finalize Custom Message Banner Implementation: The reusable message banner component has been created, but the global state management (whether via Redux or Context) needs final integration across all success/error flows for a cohesive user experience.

2. Cypress End-to-End Testing: Implementation of Cypress to establish a robust suite of end-to-end tests for the React frontend. This will ensure critical user paths (e.g., Post Creation, Editing, Deletion) are stable and free of regressions.

3. Authentication Implementation (Laravel Sanctum): For production readiness, the API routes currently configured as public will be secured using Laravel Sanctum. This will require implementing a token-based authentication system on the backend and updating the frontend API service to handle token storage and transmission (e.g., via Authorization headers).
