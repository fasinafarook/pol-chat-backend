// socket.ts
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import { handleNewMessage } from '../controllers/chatController'; // Import controller function

const initializeSocket = (server: http.Server) => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: 'poll-app-wheat-five.vercel.app',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle real-time vote updates
    socket.on('vote', (pollId) => {
      console.log('Vote received for poll:', pollId);  
      io.emit('pollUpdated', pollId); 
    });

    // Handle real-time chat messages using the controller
    socket.on('sendMessage', (data) => {
      handleNewMessage(socket, data); // Call the controller to save and broadcast the message
    });

    // Handle typing notifications
    socket.on('typing', (username) => {
      socket.broadcast.emit('userTyping', username);
    });

    socket.on('stopTyping', () => {
      socket.broadcast.emit('userStopTyping');
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

export default initializeSocket;