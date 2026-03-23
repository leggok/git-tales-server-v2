import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/git-tales');

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB error:', error);
    process.exit(1);
  }
};