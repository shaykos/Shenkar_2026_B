//מייבאים את הפונקציה ליצירת הראוטר
import { Router } from 'express';
import userRouter from './features/users/user.router.ts';
import { isAuth } from './middlewares/auth.ts';

//יוצרים את הראוטר הכללי
const router = Router();

//מקשרים בין המודולים השונים
router.use('/users', userRouter); // URL --> /api/users
router.get('/admin', isAuth, async (req, res) => {
    res.status(200).json("OK");
})

//מייצאים את הראוטר הכללי
export default router;
