import "./index.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("");

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({ name: newTodo, priority: priority });
    setTodos(copyTodos);
    setNewTodo("");
  };

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value);
  };

  const setHigh = () => {
    setPriority("high");
  };
  const setLow = () => {
    setPriority("low");
  };
  const todosList = todos.map((todo, index) => {
    return (
      <li key={index}>
        {todo.name}
        {todo.priority === "high" ? (
          <span className="high">{todo.priority}</span>
        ) : (
          <span className="low">{todo.priority}</span>
        )}
      </li>
    );
  });

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={saveNewTodo}>
        <input type="text" value={newTodo} onChange={handleTodoInput} />
        <label htmlFor="high">High</label>
        <input type="radio" name="priority" onChange={setHigh} />
        <label htmlFor="low">Low</label>
        <input type="radio" name="priority" onChange={setLow} />
        <input type="submit" value="Save Item" />
        <ul>{todosList}</ul>
      </form>
    </div>
  );
}

export default App;
