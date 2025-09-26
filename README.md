# Todo List Application - PNPM Monorepo

A full-stack TypeScript todo list application with React frontend and Node.js/Express backend using PostgreSQL, organized as a pnpm workspace monorepo.

## Prerequisites

- Node.js (v18 or higher)
- pnpm (install with `npm install -g pnpm`)
- PostgreSQL database

## Quick Start

### 1. Install all dependencies

```bash
pnpm install
```

This installs dependencies for both backend and frontend packages in one command.

### 2. Database Setup

Create a PostgreSQL database named `todolist` or set your `DATABASE_URL` in the backend `.env` file:

```bash
cp backend/.env backend/.env.local
# Edit backend/.env.local with your database credentials
```

### 3. Start development servers

```bash
# Start both frontend and backend in parallel
pnpm dev

# Or start them individually
pnpm backend:dev    # Backend only
pnpm frontend:dev   # Frontend only
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Available Scripts

### Root Commands
- `pnpm install` - Install all dependencies
- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build both packages
- `pnpm backend:dev` - Start only backend development server
- `pnpm frontend:dev` - Start only frontend development server
- `pnpm backend:build` - Build only backend
- `pnpm frontend:build` - Build only frontend

### Package-specific Commands
```bash
# Run commands in specific packages
pnpm --filter @todolist/backend <command>
pnpm --filter @todolist/frontend <command>
```

## Project Structure

```
todolist/
├── package.json          # Root workspace configuration
├── pnpm-workspace.yaml   # PNPM workspace definition
├── backend/              # Express.js API server
│   ├── src/
│   ├── package.json
│   └── .env
└── frontend/             # React application
    ├── src/
    ├── package.json
    └── public/
```

## Features

- Add new todos
- Mark todos as completed/uncompleted
- Delete todos
- Responsive design
- Real-time error handling
- TypeScript for type safety

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update todo completion status
- `DELETE /api/todos/:id` - Delete a todo

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://username:password@localhost:5432/todolist
PORT=3001
```

### Frontend (.env) - Optional
```
REACT_APP_API_URL=http://localhost:3001/api
```
