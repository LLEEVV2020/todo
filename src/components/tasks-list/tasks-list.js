import Task from "../task/task";
import "./tasks-list.css";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    //return <Task label={item.label} isCompleted={item.isCompleted} />;

    // ЧЕрез рестуризакцию, мы получаем id, А в аргумент itemProps  добавляем все
    // остальные свойства
    const { id, ...itemProps } = item;

    // лучше использовать спред оператор
    return <Task key={id} {...itemProps} />;
  });

  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{todos[0].label}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
      <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{todos[1].label}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" value={todos[1].label} />
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{todos[2].label}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>

      {elements}
    </ul>
  );
};

export default TodoList;
