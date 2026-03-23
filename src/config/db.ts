import mongoose from 'mongoose';
import { DB_NAME } from '../config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB error:', error);
    process.exit(1);
  }
};