import flagOutlined from "../../assets/flag-outlined.png";
import dustbin from "../../assets/dusbin.png";
import flagFilled from "../../assets/flag-filled.png";
import { useState } from "react";
import { Todo } from "../../structure/todo";
import "./TodoCard.scss";

interface Card {
  isOpen: boolean;
  value: Todo;
}

interface Props<T> {
  open: boolean;
  item: T;
  list: T[];
  updateList: React.Dispatch<React.SetStateAction<T[]>>;
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoList: Todo[];
}

const TodoCard: React.FC<Props<Card>> = (props) => {
  const { open, item, children, list, updateList, setList, todoList } = props;

  const [active, setActive] = useState(open);

  const onClickHandler = () => {
    setActive(!active);

    updateList(
      (() => {
        return list.map((value) => {
          if (value.value.id === item.value.id) {
            value.isOpen = !open;
          }

          return value;
        });
      })()
    );
  };

  return (
    <div className='todo-card' data-id={item.value.id} onClick={onClickHandler}>
      <p className='todo-message'>{children}</p>
      {active && <ActiveTodoRendredTSX item={item} setList={setList} todoList={todoList} />}
    </div>
  );
};

////////////////////////////////////////////////// //////////////////////////

interface ActiveTodoRendredTSXProps {
  item: Card;
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoList: Todo[];
  // updateList: React.Dispatch<React.SetStateAction<Card[]>>;
}

const ActiveTodoRendredTSX: React.FC<ActiveTodoRendredTSXProps> = (props) => {
  const { item, setList, todoList } = props;
  const markFlag = item.value.type === "complete" ? flagFilled : flagOutlined;

  const onMarkFlagClickHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();

    setList(
      todoList.map((value) => {
        if (item.value.id === value.id) {
          value.type = value.type === "complete" ? "pending" : "complete";
        }
        return value;
      })
    );
  };

  const onDeleteHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    console.log("clicked");
    setList(todoList.filter((value) => value.id !== item.value.id));
  };

  return (
    <div>
      <hr />
      <div className='todo-actions'>
        <span className='todo-action' data-action='completed' onClick={onMarkFlagClickHandler}>
          <img src={markFlag} alt='Mark As Done' title='Mark As Done' />
        </span>
        <span className='todo-action' data-action='delete' onClick={onDeleteHandler}>
          <img src={dustbin} alt='Delete' title='Delete' />
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
