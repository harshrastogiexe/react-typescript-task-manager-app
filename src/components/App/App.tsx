import { useState } from "react";
import CreateTodo from "../CreateTodo/CreateTodo";
import Header from "../Header/Header";
import Left from "../LeftApp/Left";
import RightApp from "../RightApp/RightApp";
import "./App.scss";

const App = () => {
  const [visiblityCreateTodo, setVisiblityCreateTodo] = useState(false);

  return (
    <>
      {visiblityCreateTodo && <CreateTodo setVisible={setVisiblityCreateTodo} />}
      <Header />
      <section className='wrapper'>
        <Left setVisible={setVisiblityCreateTodo} />
        <RightApp />
      </section>
    </>
  );
};

export default App;
