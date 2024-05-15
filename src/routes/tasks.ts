import { Router } from 'express';
import { createTask, listTasks, updateTask, deleteTask } from '../controllers/taskControllers';
import { validateTaskCreation, validateTaskUpdate } from '../middlewares/validateTask';

const router = Router();

// Create a new task
router.post('/', validateTaskCreation, createTask);

// List all tasks
router.get('/', listTasks);

// Update a task by ID
router.put('/:id', validateTaskUpdate, updateTask);

// Delete a task by ID
router.delete('/:id', deleteTask);

export default router;
