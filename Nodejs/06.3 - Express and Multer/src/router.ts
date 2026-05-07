import { Router } from 'express';
import cloudRouter from './cloud/cloud.router.ts';

const router = Router();

router.use('/upload', cloudRouter);

export default router;