import { validationResult } from 'express-validator';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../services/emailService.js';
import ApiError from '../utils/ApiError.js';

export const submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ApiError(400, 'Validation failed', errors.array());
    }

    const { name, email, subject, message } = req.body;
    const ipAddress = req.ip || req.connection?.remoteAddress;

    const contact = await Contact.create({ name, email, subject, message, ipAddress });

    const emailResult = await sendContactEmail({ name, email, subject, message });
    if (!emailResult.success) {
      console.error('Email delivery issue:', emailResult.error);
    }

    res.status(201).json({
      success: true,
      message: "Message sent! I'll get back to you within 24–48 hours.",
      data: { id: contact._id },
    });
  } catch (error) {
    next(error);
  }
};
