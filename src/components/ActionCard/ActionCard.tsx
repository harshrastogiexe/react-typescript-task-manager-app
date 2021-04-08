import "./ActionCard.scss";

const ActionCard: React.FC = ({ children }) => {
  return (
    <div className='action-card'>
      <span>{children}</span>
    </div>
  );
};

export default ActionCard;
