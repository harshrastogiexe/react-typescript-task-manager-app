import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./CreateTodo.scss";

const CreateTodo: React.FC<{ setVisible: Function }> = ({ setVisible }) => {
  const cancelHandler = () => {
    setVisible(false);
  };

  const a = useLocalStorage("hek", { hwllo: "Hey" });

  const dimension: [number, number] = [100, 9];
  return (
    <section className='todo-form'>
      <section className='todo-wrapper'>
        <h2 className='todo-title'>Create</h2>
        <textarea
          name='todo'
          cols={dimension[0]}
          rows={dimension[1]}
          placeholder='Type Text To Insert'
          spellCheck='false'
          autoFocus
        ></textarea>
        <div className='todo-create-action'>
          <button onClick={cancelHandler} data-action='cancel'>
            Cancel
          </button>
          <button data-action='save'>Save</button>
        </div>
      </section>
    </section>
  );
};

export default CreateTodo;
