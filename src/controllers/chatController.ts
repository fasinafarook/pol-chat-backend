import { Request, Response } from 'express';
import ChatMessage from '../models/chatModel';
import { Socket } from 'socket.io';

export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages = await ChatMessage.find({});
        res.json(messages);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching messages' });
      }
};

// Save a new chat message and emit it
export const handleNewMessage = async (socket: Socket, { username, message }: { username: string; message: string }) => {
    try {
      const chatMessage = new ChatMessage({ username, message });
      await chatMessage.save(); // Store message in the database
  
      // Emit the message to all connected clients including the sender
      socket.emit('receiveMessage', {
        username,
        message,
        timestamp: new Date(),
      });
      socket.broadcast.emit('receiveMessage', {
        username,
        message,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  