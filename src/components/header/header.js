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

export default Header;
