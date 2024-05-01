import { ButtonProps } from "utils"; // Assuming ButtonProps is an interface or type

const Button: React.FC<ButtonProps> = ({
  text,
  handleClick,
  icon,
  className,
  type,
  disabled
}) => {
  return (
    <button className={className} onClick={handleClick} type={type} disabled={disabled}>
      <div className={className}>
        {text}
        {icon}
      </div>
    </button>
  );
};

export default Button;
