import flagOutlined from "../../assets/flag-outlined.png";
import dustbin from "../../assets/dusbin.png";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Todo } from "../../structure/todo";
import "./TodoCard.scss";

interface Props {
  id: number;
  children: string;
  updateList: Function;
}

const TodoCard: React.FC<Props> = ({ id, updateList, children }) => {
  const [active, setActive] = useState(false);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive(!active);
  };

  return (
    <div className='todo-card' data-id={id} onClick={onClickHandler}>
      <p className='todo-message'>{children}</p>
      {active && <ActiveTodoRendredTSX active={active} id={id} updateList={updateList} />}
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////

interface ActiveTodoRendredTSXProps {
  active: boolean;
  id: number;
  updateList: Function;
}

const ActiveTodoRendredTSX: React.FC<ActiveTodoRendredTSXProps> = ({ active, id, updateList }) => {
  const [todoArray] = useLocalStorage<Todo[]>("all", []);

  const onDeleteHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();

    const array = todoArray.filter((value) => value.id !== id);
    updateList(array);
  };

  const stateClassname = "todo-" + active ? "expand" : "collapse";

  return (
    <div className={stateClassname}>
      <hr />
      <div className='todo-actions'>
        <span className='todo-action' data-action='completed'>
          <img src={flagOutlined} alt='Mark As Done' title='Mark As Done' />
        </span>
        <span className='todo-action' data-action='delete' onClick={onDeleteHandler}>
          <img src={dustbin} alt='Delete' title='Delete' />
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
