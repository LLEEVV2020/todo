import "./task.css";
import { formatDistanceToNow } from "date-fns";

const Task = ({ label, isCompleted }) => {
  // через деструлизацию в параметрах, достаём свойство
  // свойство можно передавать любые, строки, буллевые, мыссивы, объекты

  const classLi = isCompleted ? "completed" : "";

  return (
    <li className={classLi}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
          <span className="created">
            created 17 seconds ago {formatDistanceToNow(new Date(2014, 6, 2))}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default Task;
