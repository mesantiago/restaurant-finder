import express from 'express';
import restaurantRoutes from './routes/restaurant';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/restaurants', restaurantRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;