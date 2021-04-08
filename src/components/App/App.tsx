import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Todo } from "../../structure/todo";
import CreateTodo from "../CreateTodo/CreateTodo";
import Header from "../Header/Header";
import Left from "../LeftApp/Left";
import RightApp from "../RightApp/RightApp";
import "./App.scss";

export const STORAGE_KEY_NAME = "all";

const App = () => {
  const [visiblityCreateTodo, setVisiblityCreateTodo] = useState(false);
  const [todoList, setTodoList] = useLocalStorage<Todo[]>(STORAGE_KEY_NAME, []);

  const rendredJSX = visiblityCreateTodo ? (
    <CreateTodo list={todoList} updateList={setTodoList} setVisible={setVisiblityCreateTodo}>
      Create
    </CreateTodo>
  ) : null;

  return (
    <>
      {rendredJSX}
      <Header />
      <section className='wrapper'>
        <Left setVisible={setVisiblityCreateTodo} />
        <RightApp list={todoList} updateList={setTodoList} />
      </section>
    </>
  );
};

export default App;
