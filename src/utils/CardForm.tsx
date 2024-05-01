import { CardProps } from "utils";

const CardForm: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card_form">
      <h5 className="h5_form">{title}</h5>
      {children || "Error: Children not found"}
    </div>
  );
};

export default CardForm;
