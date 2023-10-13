import Header from "../header/header";
import TodoList from "../tasks-list/tasks-list";
import Footer from "../footer/footer";

const Main = () => {
  return <section className="test">hi</section>;
};

function App() {
  const todoData = [
    { label: "Completed task4", isCompleted: true },
    { label: "Editing task2", isCompleted: false },
    { label: "Active task3", isCompleted: true },
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
