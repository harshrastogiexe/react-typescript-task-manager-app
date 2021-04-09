import createTask from "../../assets/create-task-logo.png";
import "./CreateTask.scss";

interface Props {
  setVisible: Function;
}

const CreateTask: React.FC<Props> = ({ setVisible }) => {
  return (
    <>
      <div className='create-task' onClick={() => setVisible(true)}>
        <img src={createTask} alt='Create Task' className='create-task-logo' />
        <span>Create Task</span>
      </div>
    </>
  );
};

export default CreateTask;
