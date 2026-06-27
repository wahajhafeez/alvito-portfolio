import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    longDescription: {
      type: String,
      trim: true,
      maxlength: [2000, 'Long description cannot exceed 2000 characters'],
    },
    techStack: {
      type: [String],
      required: [true, 'At least one technology is required'],
      validate: {
        validator: (v) => v.length > 0,
        message: 'Tech stack cannot be empty',
      },
    },
    category: {
      type: String,
      enum: ['fullstack', 'frontend', 'backend', 'mobile', 'other'],
      default: 'fullstack',
    },
    imageUrl: {
      type: String,
      default: null,
    },
    images: {
      type: [String],
      default: [],
    },
    liveUrl: {
      type: String,
      default: null,
    },
    githubUrl: {
      type: String,
      default: null,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['completed', 'in-progress', 'archived'],
      default: 'completed',
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.index({ featured: -1, order: 1, createdAt: -1 });
projectSchema.index({ category: 1 });

export default mongoose.model('Project', projectSchema);
