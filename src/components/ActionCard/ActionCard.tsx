import "./ActionCard.scss";

const ActionCard: React.FC<{ setActiveTab: Function; actionTabType: string }> = ({
  children,
  setActiveTab,
  actionTabType,
}) => {
  return (
    <div className='action-card' onClick={() => setActiveTab(actionTabType)}>
      <span>{children}</span>
    </div>
  );
};

export default ActionCard;
