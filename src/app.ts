import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Task routes
app.use('/tasks', taskRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
