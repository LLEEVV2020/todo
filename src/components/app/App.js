import Header from "../header";
import TaskList from "../tasks-list";
import Footer from "../footer";
import "./app.css";

const Main = () => {
  return <section className="test"></section>;
};

function App() {
  const todoData = [
    { id: 0, label: "Completed task3", isCompleted: false },
    { id: 1, label: "Editing task2", isCompleted: false },
    { id: 2, label: "Active task3", isCompleted: true },
  ];

  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TaskList todos={todoData} />
        <Footer />
      </section>

      <Main items={["test1", "tesr2"]} />
    </section>
  );
}

export default App;
