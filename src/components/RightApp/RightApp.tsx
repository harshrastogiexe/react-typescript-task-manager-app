import { Todo } from "../../structure/todo";
import TodoCard from "../TodoCard/TodoCard";
import "./RightApp.scss";

interface Props {
  list: Todo[];
  updateList: Function;
}

const RightApp: React.FC<Props> = ({ list, updateList }) => {
  const rendredJSX: JSX.Element = (function () {
    if (list.length === 0) return <h2 className='empty-list'>Nothing To Show</h2>;

    return (
      <section className='right-wrapper'>
        <h2 className='action-name-title'>All</h2>
        {list.map((value) => (
          <TodoCard key={value.id} id={value.id} updateList={updateList}>
            {value.message}
          </TodoCard>
        ))}
      </section>
    );
  })();

  return rendredJSX;
};

export default RightApp;
