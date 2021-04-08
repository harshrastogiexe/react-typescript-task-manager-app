import createTask from "../../assets/create-task-logo.png";
import "./CreateTask.scss";

const CreateTask: React.FC<{ setVisible: Function,  }> = ({ setVisible }) => {
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
