import express from 'express';
import {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/task.controller.js';

const router = express.Router();

router.post('/create-task', createTask);
router.get('/get-all-tasks', getAllTask);
router.get('/get-task-by-id/:id', getTaskById);
router.put('/update-task/:id', updateTask);
router.delete('/delete-task/:id', deleteTask);

export default router;
