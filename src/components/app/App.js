import Header from "../header/header";
import TodoList from "../tasks-list/tasks-list";
import Footer from "../footer/footer";

const Main = () => {
  return <section className="test">hi</section>;
};

function App() {
  const todoData = [
    { label: "Completed task2", isCompleted: true },
    { label: "Editing task", isCompleted: false },
    { label: "Active task", isCompleted: true },
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
