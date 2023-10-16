import NewTaskForm from "../new-task-form";
import "./header.css";

const Header = ({ onTaskAdd }) => {
  // null - в реакте не ощибка, а просто пусто
  //  null, true, false, undefined отображаться в реакт не будут
  const isNull = false;
  // РЕАКТ ЭЛЕМЕНТ,
  const head = <h1>todos</h1>;

  return (
    <header className="header">
      {isNull ? null : head}

      <NewTaskForm onTaskAdd={onTaskAdd} />
    </header>
  );
};

export default Header;
