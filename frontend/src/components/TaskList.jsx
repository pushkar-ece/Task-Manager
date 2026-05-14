import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/tasks/project/${project._id}`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (project) {
      fetchTasks();
    }
  }, [project]);

  const handleStatusUpdate = async (taskId, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${taskId}/status`, { status: newStatus });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading tasks...</div>;

  if (tasks.length === 0) {
    return <div className="card" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No tasks in this project yet.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onStatusUpdate={handleStatusUpdate} />
      ))}
    </div>
  );
};

export default TaskList;
