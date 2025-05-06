import express from 'express';
import path from 'path';
import cors from 'cors';
import config from './config';

import restaurantRoutes from './routes/restaurant';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(
  cors({
    origin: config.clientUrl
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));

// Routes
app.use('/api/restaurants', restaurantRoutes);
app.get('/{*splat}', (_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public/') });
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;