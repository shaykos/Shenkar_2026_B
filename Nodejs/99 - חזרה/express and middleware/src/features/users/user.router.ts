import { Router } from "express";

import * as ctrl from './user.ctrl.ts';

const userRouter = Router();

userRouter
    .get('/', ctrl.handleGetAllUsers)
    //.get('/:id', ctrl.handleGetSpecificUser)
    .post('/', ctrl.handleCreateUser)
    //.put('/:id', ctrl.handleUpdateUser)
    //.delete('/:id', ctrl.handleDeleteUser)

export default userRouter;