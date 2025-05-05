import { Router } from 'express';
import {
  search
} from '../controllers/restaurant.controller';

const router = Router();

router.post('/search', search);

export default router;