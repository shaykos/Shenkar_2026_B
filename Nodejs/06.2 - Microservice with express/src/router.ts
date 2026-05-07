import { Router } from 'express';
import userRouter from './users/user.router.ts';

const router = Router();

// פה נקשר את כל הראוטרים של המודולים השונים
router.use('/user', userRouter); // url -> /api/user


export default router;