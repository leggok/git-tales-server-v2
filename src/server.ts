import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = 3000;

const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

start();