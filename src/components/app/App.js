const Header = () => {
  // null - в реакте не ощибка, а просто пусто
  //  null, true, false, undefined отображаться в реакт не будут
  const isNull = false;
  // РЕАКТ ЭЛЕМЕНТ,
  const head = <h1>todos</h1>;
  const searchPanel = "What needs to be done?";
  const searchStyle = {
    fontSize: "24px",
  };

  return (
    <header className="header">
      {isNull ? null : head}

      <input
        className="new-todo"
        placeholder={searchPanel}
        style={searchStyle}
        autoFocus // autoFocus = {true}  - по умолчанию
      />
    </header>
  );
};

const TodoList = () => {
  const items = ["Completed task", "Editing task", "Active task"];
  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{items[0]}</span>
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
            <span className="description">{items[1]}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" value="Editing task" />
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{items[2]}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

const Main = () => {
  return <section className="test">hi</section>;
};

function App() {
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TodoList />
        <Footer />
      </section>

      <Main items={["test1", "tesr2"]} />
    </section>
  );
}

export default App;
