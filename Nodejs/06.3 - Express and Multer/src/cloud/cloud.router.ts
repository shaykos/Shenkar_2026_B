import { Router } from 'express';
import { saveFileLocally, uploadToCloudinary } from './cloud.ctrl.ts';
import { saveToMemory, saveToStorage } from '../middlewares/files.ts';

//מייצרים את הראוטר
const cloudRouter = Router();

cloudRouter.post('/local', saveToStorage.single('file'), saveFileLocally);

cloudRouter.post('/cloud', saveToMemory.single('file'), uploadToCloudinary);

//מייצאים את הראוטר
export default cloudRouter;