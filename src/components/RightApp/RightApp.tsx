import TodoCard from "../TodoCard/TodoCard";
import "./RightApp.scss";

const RightApp = () => {
  return (
    <section className='right-wrapper'>
      <h2 className='action-name-title'>Completed</h2>
      <TodoCard>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorum cupiditate vero
        aspernatur tempore veniam, et sed magni nobis amet laboriosam aperiam voluptatibus, nesciunt
        corrupti sint beatae error eaque molestiae.
      </TodoCard>

      <TodoCard>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, corrupti quas laboriosam
        quo cupiditate ipsam provident nemo consequuntur. Libero dolores animi alias culpa aliquam
        iusto ipsum aspernatur ullam neque et!
      </TodoCard>

      <TodoCard>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem pariatur, harum ad in
        repellat quasi id explicabo unde dolorem ratione incidunt voluptatum minus accusamus
        distinctio esse nihil magnam animi?
      </TodoCard>
    </section>
  );
};

export default RightApp;
