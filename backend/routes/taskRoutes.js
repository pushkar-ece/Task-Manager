const express = require('express');
const router = express.Router();
const { createTask, getTasksByProject, updateTaskStatus } = require('../controllers/taskController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, adminMiddleware, createTask);
router.get('/project/:projectId', authMiddleware, getTasksByProject);
router.patch('/:id/status', authMiddleware, updateTaskStatus);

module.exports = router;
