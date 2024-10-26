# poll-chat-backend


```markdown
# Poll App

A real-time polling and chat application using Node.js with TypeScript, Express, MongoDB, and Socket.io. This application allows users to create polls, vote, and chat in real-time, with the backend hosted on Render and the frontend on Vercel.

### Project Links
- **Live Application**: [https://poll-app-wheat-five.vercel.app/](https://poll-app-wheat-five.vercel.app/)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)

## Features
- User registration and login with JWT-based authentication
- Poll creation, voting, and viewing
- Real-time chat with Socket.io
- Real-time voting updates using WebSockets
- MongoDB integration for data persistence

## Tech Stack
- **Frontend**: React with TypeScript (Hosted on Vercel)
- **Backend**: Node.js, Express, and TypeScript (Hosted on Render)
- **Database**: MongoDB
- **Real-time Updates**: Socket.io for chat and voting updates

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fasinafarook/pol-chat-backend.git
   cd poll-app
   ```

2. **Install Dependencies**
   ```bash
   # Navigate to the backend folder
   npm install
   ```

3. **Build the Backend**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root of your backend directory and add the following:

```dotenv
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Running the Application

### Backend
1. **Start in Development Mode** (with live reload)
   ```bash
   npm run dev
   ```

2. **Start in Production Mode**
   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000` or the configured `PORT`.

### Frontend
To access the frontend, navigate to the deployed Vercel link: [https://poll-app-wheat-five.vercel.app/](https://poll-app-wheat-five.vercel.app/).

### Deploying the Backend
The backend is hosted on Render. For Render deployment:
1. Link your repository on Render and configure the `Build Command` as `npm run build` and `Start Command` as `npm start`.
2. Ensure Render’s environment variables match those in your `.env`.

## API Documentation

### User Routes
- **`POST /api/user/register`**: Register a new user.
- **`POST /api/user/login`**: User login with JWT token generation.

### Poll Routes
- **`GET /api/polls`**: Fetch all polls.
- **`POST /api/polls`**: Create a new poll.
- **`POST /api/polls/:id/vote`**: Vote on a specific poll option.

### Chat Routes
- **`GET /api/chat/messages`**: Fetch all chat messages.
- **`POST /api/chat/sendMessage`**: Send a chat message (real-time with Socket.io).

### WebSocket Events
- **`connection`**: Triggered when a user connects to the server.
- **`vote`**: Real-time vote update for a poll.
- **`sendMessage`**: Real-time message sending for chat.
- **`typing`** and **`stopTyping`**: Typing indicators in chat.

## Folder Structure
```
src
├── config          # Configuration files (e.g., socket.io)
├── controllers     # Controllers for handling API requests
├── models          # MongoDB models
├── routes          # API routes
├── server.ts       # Application entry point
└── middleware      # Middleware (e.g., auth)
```

## License
This project is licensed under the MIT License.
```

This `README.md` provides a clear setup and deployment guide for your application. Let me know if you'd like more customization in any section!




   
