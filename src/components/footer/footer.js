import TasksFilter from "../tasks-filter";
import "./footer.css";

const Footer = ({ todoData, filter }) => {
  const uncompletedTasks = todoData.filter((el) => !el.isCompleted);

  return (
    <footer className="footer">
      <span className="todo-count">{uncompletedTasks.length} items left</span>
      <TasksFilter filter={filter} />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
