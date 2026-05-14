//מייבאים את הפונקציה ליצירת הראוטר
import {Router} from 'express';
import userRouter from './features/users/user.router.ts';

//יוצרים את הראוטר הכללי
const router = Router();

//מקשרים בין המודולים השונים
router.use('/users', userRouter); // URL --> /api/users

//מייצאים את הראוטר הכללי
export default router;
