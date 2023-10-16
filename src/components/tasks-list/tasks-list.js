import Task from "../task";
import "./tasks-list.css";

const TaskList = ({ todos, onDeleted, onTaskStatusToggle }) => {
  const elements = todos.map((item) => {
    //return <Task label={item.label} isCompleted={item.isCompleted} />;

    // ЧЕрез рестуризакцию, мы получаем id, А в аргумент itemProps  добавляем все
    // остальные свойства
    //const { id, ...itemProps } = item;

    // лучше использовать спред оператор
    //return <Task key={id} {...itemProps} />;

    const { ...itemProps } = item;
    return (
      <Task
        key={item.id}
        {...itemProps}
        onDeleted={() => onDeleted(item.id)}
        onTaskStatusToggle={() => onTaskStatusToggle(item.id)}
      />
    );
  });

  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">первый</span>
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
            <span className="description">второй</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" value="второй" />
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">третий</span>
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

export default TaskList;
