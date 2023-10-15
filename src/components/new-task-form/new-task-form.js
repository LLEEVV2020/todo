import "./new-task-form.css";

const NewTaskForm = () => {
  const searchPanel = "What needs to be done?";
  const searchStyle = {
    fontSize: "24px",
  };

  return (
    <input
      className="new-todo"
      placeholder={searchPanel}
      style={searchStyle}
      autoFocus // autoFocus = {true}  - по умолчанию
    />
  );
};

export default NewTaskForm;
