import Task from '../task';
import './tasks-list.css';

const TaskList = ({ tasks, onDeleted, onTaskStatusToggle, onTaskStatusChange }) => {
  const elements = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        onDeleted={() => onDeleted(task.id)}
        onTaskStatusToggle={() => onTaskStatusToggle(task.id)}
        onTextChange={onTaskStatusChange}
      />
    );
  })

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
