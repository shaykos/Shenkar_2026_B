import { Router } from 'express';
import { getAllUsers } from '../controllers/users.ctrl.ts';

export const userRouter = Router();

userRouter.get('/', getAllUsers); // url -> /api/users/