interface TransactionItemProps {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  amount: string;
  time: string;
  amountColor?: "red" | "green";
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  icon,
  color,
  title,
  subtitle,
  amount,
  time,
  amountColor = "red",
}) => {
  return (
    <div className="transaction-item">
      <div className="icon-box" style={{ backgroundColor: color }}>
        <img src={icon} alt={title} />
      </div>
      <div className="transaction-text">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="transaction-meta">
        <div className={`amount ${amountColor === "green" ? "green" : "red"}`}>
          {amount}
        </div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default TransactionItem;
