import {Router} from 'express';
import cloudRouter from './features/cloud/cloud.router.js';
import animalRouter from './features/animals/animals.router.js';

const router = Router();

router.use('/cloud', cloudRouter);
router.use('/animals', animalRouter);

export default router;