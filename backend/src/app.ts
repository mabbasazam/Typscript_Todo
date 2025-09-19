import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.routes';
import { AppDataSource } from './config/db';


dotenv.config();


export const createApp = async () => {
await AppDataSource.initialize();


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/todos', todoRoutes);


app.get('/health', (req, res) => res.json({ status: 'ok' }));


return app;
};