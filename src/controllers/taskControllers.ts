import { Request, Response } from 'express';
import { Task } from '../types/task';
import { generateId } from '../utils/generateId';

let tasks: Task[] = [];

// Create a new task
export const createTask = (req: Request, res: Response) => {
    const { title, description }: { title: string; description: string } = req.body;
    const id: string = generateId();
    const status: string = 'pending';

    const newTask: Task = { id, title, description, status };
    tasks.push(newTask);

    res.status(201).json(newTask);
};

// List all tasks
export const listTasks = (req: Request, res: Response) => {
    res.json(tasks);
};

// Update a task by ID
export const updateTask = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, status }: { title: string; description: string; status: string } = req.body;

    const taskIndex: number = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], title, description, status };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

// Delete a task by ID
export const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;

    tasks = tasks.filter((task) => task.id !== id);

    res.sendStatus(204);
};
