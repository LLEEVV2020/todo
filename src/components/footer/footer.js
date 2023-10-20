import TasksFilter from '../tasks-filter'
import './footer.css'

const Footer = ({ tasksData, filter, onFilterChange, onClearCompleted }) => {
  const uncompletedTasks = tasksData.filter((el) => !el.isCompleted);

  return (
    <footer className="footer">
      <span className="todo-count">{uncompletedTasks.length} items left</span>
      <TasksFilter onFilterChange={onFilterChange} filter={filter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
