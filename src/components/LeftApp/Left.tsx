import { activeTabType } from "../../type/typeDecleration";
import ActionCard from "../ActionCard/ActionCard";
import CreateTask from "../CreateTask/CreateTask";
import "./Left.scss";

const Left: React.FC<{ setVisible: Function; setActiveTab: Function }> = ({
  setVisible,
  setActiveTab,
}) => {
  const actions: [activeTabType, activeTabType, activeTabType] = ["all", "completed", "pending"];

  return (
    <>
      <section className='task-wrapper'>
        <CreateTask setVisible={setVisible} />

        <section>
          {actions.map((action, i) => (
            <ActionCard setActiveTab={setActiveTab} actionTabType={action} key={i}>
              {action}
            </ActionCard>
          ))}
        </section>
      </section>
    </>
  );
};

export default Left;
