import { CheckboxProps } from "utils";

const CheckBox: React.FC<CheckboxProps> = ({
  id,
  labelText,
  isChecked = false, // Set default isChecked value
  handleChange,
  className,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        value=""
        checked={isChecked}
        onChange={handleChange}
        className="checkbox"
      />
      <label
        htmlFor={id}
        className="checkbox-label"
      >
        {labelText}
      </label>
    </div>
  );
};

export default CheckBox;
