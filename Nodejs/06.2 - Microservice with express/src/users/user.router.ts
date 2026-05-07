import { Router } from 'express';
import { registerUser, allUsers, findUser } from './user.ctrl.ts';

//מייצרים את הראוטר
const userRouter = Router();

// להחזיר את כל המשתמשים
userRouter.get('/', allUsers);

//להחזיר משתמש ספציפי
userRouter.get('/:id', findUser);

//מגדירים איזו פונקציה להפעיל כאשר 
//post ושיטה תהיה register  יהיה url ה 
userRouter.post('/register', registerUser); // url -> /api/user/register, method: POST

//מייצאים את הראוטר
export default userRouter;