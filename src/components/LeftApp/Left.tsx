import ActionCard from "../ActionCard/ActionCard";
import CreateTask from "../CreateTask/CreateTask";
import "./Left.scss";

const Left: React.FC<{ setVisible: Function }> = ({ setVisible }) => {
  return (
    <>
      <section className='task-wrapper'>
        <CreateTask setVisible={setVisible} />

        <section>
          <ActionCard>All</ActionCard>
          <ActionCard>Completed</ActionCard>
          <ActionCard>Pending</ActionCard>
        </section>
      </section>
    </>
  );
};

export default Left;
