import {Router} from 'express';
import cloudRouter from './features/cloud/cloud.router.ts';
import animalRouter from './features/animals/animals.router.ts';

const router = Router();

router.use('/cloud', cloudRouter);
router.use('/animals', animalRouter);

export default router;