import { Router } from 'express';
import { upload } from './middlewares/files.ts';
import { buildSuccessResponse } from './utils/response.builder.ts';

const router = Router();

router.post('/upload', upload.single('file'), (req, res) => {
    res.status(201).json(buildSuccessResponse('file uploaded'));
});

export default router;