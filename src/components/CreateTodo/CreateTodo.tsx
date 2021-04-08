import { useState } from "react";
import { Todo } from "../../structure/todo";
import "./CreateTodo.scss";

interface Props {
  list: Todo[];
  updateList: Function;
  setVisible: Function;
}

const CreateTodo: React.FC<Props> = ({ list, setVisible, updateList, children }) => {
  const [textValue, setTextValue] = useState("");

  // Cancel Button Handler
  const cancelHandler = () => setVisible(false);

  // On Save Handler
  const onSaveHandler = () => {
    if (!textValue) return;

    const newTodo = new Todo(textValue, new Date(), "pending");

    updateList([...list, newTodo]);
    setTextValue("");
  };

  return (
    <section className='todo-form'>
      <section className='todo-wrapper'>
        <h2 className='todo-title'>{children}</h2>
        <textarea
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
          name='todo'
          cols={100}
          rows={9}
          placeholder='Type Text To Insert'
          spellCheck='false'
          autoFocus
        ></textarea>
        <div className='todo-create-action'>
          <button onClick={cancelHandler} data-action='cancel'>
            Cancel
          </button>
          <button onClick={onSaveHandler} data-action='save'>
            Save
          </button>
        </div>
      </section>
    </section>
  );
};

export default CreateTodo;
