import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";

export default function App() {
  const [todo, setTodo] = useState([

  ]);

//LocalStorage

  useEffect(() => {
    const saveUsers = localStorage.getItem("todos");
    if (saveUsers) {
      setTodo(JSON.parse(saveUsers));
    }
  }, []);
 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);


  return (
    <div>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />

    </div>
  );
}
