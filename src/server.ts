import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes';
import pollRouter from './routes/pollRoutes';
import chatRouter from './routes/chatRoutes';
import initializeSocket from '../src/config/socket';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/user', userRouter);
app.use('/api/polls', pollRouter);
app.use('/api/chat', chatRouter);

// Initialize WebSocket handling 
initializeSocket(server);

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});