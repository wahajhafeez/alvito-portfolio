import Project from '../models/Project.js';
import ApiError from '../utils/ApiError.js';
import config from '../config/env.js';

export const getProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const filter = {};
    if (category && category !== 'all') filter.category = category;
    if (featured === 'true') filter.featured = true;

    const projects = await Project.find(filter)
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .lean();

    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== config.ADMIN_SECRET) throw new ApiError(403, 'Unauthorized');

    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== config.ADMIN_SECRET) throw new ApiError(403, 'Unauthorized');

    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) throw new ApiError(404, 'Project not found');

    res.status(200).json({ success: true, message: 'Project deleted' });
  } catch (error) {
    next(error);
  }
};
