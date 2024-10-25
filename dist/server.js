"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const pollRoutes_1 = __importDefault(require("./routes/pollRoutes"));
const chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
const socket_1 = __importDefault(require("../src/config/socket"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
// API routes
app.use('/api/user', userRoutes_1.default);
app.use('/api/polls', pollRoutes_1.default);
app.use('/api/chat', chatRoutes_1.default);
// Initialize WebSocket handling 
(0, socket_1.default)(server);
server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
