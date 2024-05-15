import { Request, Response, NextFunction } from 'express';

export const validateTaskCreation = (req: Request, res: Response, next: NextFunction) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    next();
};

export const validateTaskUpdate = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, status } = req.body;
    if (!title && !description && !status) {
        return res.status(400).json({ error: 'At least one field (title, description, status) must be provided' });
    }
    next();
};
