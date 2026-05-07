import { Router } from 'express';
import { userRouter } from './users.router.ts';

export const router = Router();

router.use('/users', userRouter); // url -> /api/users


