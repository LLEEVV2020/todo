import NewTaskForm from "../new-task-form";
import "./header.css";

const Header = ({ onTaskAdd }) => {
  const head = <h1>tasks</h1>;

  return (
    <header className="header">
      {head}

      <NewTaskForm onTaskAdd={onTaskAdd} />
    </header>
  );
};

export default Header;
