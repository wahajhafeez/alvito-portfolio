import express from 'express';
import projectRoutes from './projectRoutes.js';
import contactRoutes from './contactRoutes.js';

const router = express.Router();

router.use('/projects', projectRoutes);
router.use('/contact', contactRoutes);

export default router;
