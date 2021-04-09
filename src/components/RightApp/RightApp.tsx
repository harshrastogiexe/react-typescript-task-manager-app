import { useState } from "react";
import { Todo } from "../../structure/todo";
import { activeTabType } from "../../type/typeDecleration";
import TodoCard from "../TodoCard/TodoCard";
import "./RightApp.scss";

interface Props {
  activeTab: activeTabType;
  list: Todo[];
  updateList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface Card {
  isOpen: boolean;
  value: Todo;
}

const getActiveString = (activeTab: activeTabType) => {
  let selectedTabText: string;

  switch (activeTab) {
    case "all":
      selectedTabText = "All";
      break;
    case "completed":
      selectedTabText = "Completed";
      break;
    case "pending":
      selectedTabText = "Pending";
      break;
  }

  return selectedTabText;
};

const rendredList = (
  cardList: Card[],
  updateCardList: React.Dispatch<React.SetStateAction<Card[]>>,
  setList: React.Dispatch<React.SetStateAction<Todo[]>>,
  todoList: Todo[]
) => {
  return cardList.map(({ value, isOpen }) => {
    return (
      <TodoCard
        key={value.id}
        open={isOpen}
        list={cardList}
        updateList={updateCardList}
        item={{ value, isOpen }}
        setList={setList}
        todoList={todoList}
      >
        {value.message}
      </TodoCard>
    );
  });
};

const createList = (state: activeTabType, list: Todo[]): Card[] => {
  const todoList: Card[] = list.map((value) => {
    return {
      isOpen: false,
      value,
    };
  });

  switch (state) {
    case "all":
      return todoList;
    case "completed":
      return todoList.filter((value) => value.value.type === "complete");
    case "pending":
      return todoList.filter((value) => value.value.type === "pending");
  }
};

const RightApp: React.FC<Props> = ({ list, updateList, activeTab }) => {
  console.log(createList(activeTab, list));
  const [todoCardList, setTodoCardList] = useState(createList(activeTab, list));

  const render =
    todoCardList.length === 0 ? (
      <h2 className='empty-list'>Nothing To Show</h2>
    ) : (
      rendredList(todoCardList, setTodoCardList, updateList, list)
    );

  // console.log({ activeTab, todoCardList });

  return (
    <section className='right-wrapper'>
      <h2 className='action-name-title'>{getActiveString(activeTab)}</h2>
      {render}
    </section>
  );
};

export default RightApp;
