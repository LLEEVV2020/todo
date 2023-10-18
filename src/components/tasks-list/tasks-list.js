import Task from "../task";
import "./tasks-list.css";

const TaskList = ({
  tasks,
  onDeleted,
  onTaskStatusToggle,
  onTaskStatusChange,
}) => {
  const elements = tasks.map((task) => {
    //return <Task label={item.label} isCompleted={item.isCompleted} />;

    // ЧЕрез рестуризакцию, мы получаем id, А в аргумент itemProps  добавляем все
    // остальные свойства
    //const { id, ...itemProps } = item;

    // лучше использовать спред оператор
    //return <Task key={id} {...itemProps} />;

    //const { ...itemProps } = task;
    return (
      <Task
        key={task.id}
        // {...itemProps}
        task={task}
        onDeleted={() => onDeleted(task.id)}
        onTaskStatusToggle={() => onTaskStatusToggle(task.id)}
        onTextChange={onTaskStatusChange}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

/*
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

      */
