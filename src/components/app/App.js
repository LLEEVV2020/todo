import Header from "../header/header";
import TodoList from "../tasks-list/tasks-list";
import Footer from "../footer/footer";

const Main = () => {
  return <section className="test">hi</section>;
};

function App() {
  const todoData = [
    { id: 0, label: "Completed task5", isCompleted: true },
    { id: 1, label: "Editing task2", isCompleted: false },
    { id: 2, label: "Active task3", isCompleted: true },
  ];

  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TodoList todos={todoData} />
        <Footer />
      </section>

      <Main items={["test1", "tesr2"]} />
    </section>
  );
}

export default App;
