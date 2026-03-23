import app from './app.js';
import { connectDB } from './config/db.js';
import { PORT } from './config.js';

const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

start();