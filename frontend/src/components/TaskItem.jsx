import React from 'react';

const TaskItem = ({ task, onStatusUpdate }) => {
  const statuses = ['todo', 'in progress', 'done', 'overdue'];

  return (
    <div className="card">
      <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
        <h3 style={{ margin: 0 }}>{task.title}</h3>
        <span className={`badge badge-${task.status.replace(' ', '-')}`}>
          {task.status}
        </span>
      </div>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.875rem' }}>
        {task.description}
      </p>
      
      <div className="flex justify-between items-center" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        <div>
          <strong>Assigned to:</strong> {task.assignedTo ? task.assignedTo.name : 'Unassigned'}
        </div>
        {task.deadline && (
          <div>
            <strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}
          </div>
        )}
      </div>

      <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
        <label style={{ fontSize: '0.75rem', marginRight: '0.5rem' }}>Change Status:</label>
        <select 
          className="form-select" 
          style={{ width: 'auto', display: 'inline-block', padding: '0.25rem 0.5rem' }}
          value={task.status}
          onChange={(e) => onStatusUpdate(task._id, e.target.value)}
        >
          {statuses.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TaskItem;
