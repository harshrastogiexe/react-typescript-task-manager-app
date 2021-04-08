import { useEffect, useRef, useState } from "react";
import flagOutlined from "../../assets/flag-outlined.png";
import dustbin from "../../assets/dusbin.png";
import "./TodoCard.scss";

const ActiveTodoRendredTSX: React.FC<{ active: boolean }> = ({ active }) => {
  const completeRef = useRef<null | HTMLSpanElement>(null);
  const deleteRef = useRef(null);

  useEffect(() => {
    if (completeRef.current) {
      completeRef.current.addEventListener("click", (e) => e.stopPropagation());
    }
    return () => {};
  }, []);

  const stateClassname = "todo-" + active ? "expand" : "collapse";

  return (
    <div className={stateClassname}>
      <hr />
      <div className='todo-actions'>
        <span className='todo-action' data-action='completed' ref={completeRef}>
          <img src={flagOutlined} alt='Mark As Done' title='Mark As Done' />
        </span>
        <span className='todo-action' data-action='delete' ref={deleteRef}>
          <img src={dustbin} alt='Delete' title='Delete' />
        </span>
      </div>
    </div>
  );
};

const TodoCard: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive(!active);
  };

  return (
    <div className='todo-card' onClick={onClickHandler}>
      <p className='todo-message'>{children}</p>
      {active && <ActiveTodoRendredTSX active={active} />}
    </div>
  );
};

export default TodoCard;
