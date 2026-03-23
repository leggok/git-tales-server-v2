import express from 'express';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
];

app.use(cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow: boolean) => void  | undefined) => {
      if (!origin) return callback(null, true);
  
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed'), false);
      }
    },
    credentials: true,
  }));

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;