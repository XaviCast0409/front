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
        className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 "
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800"
      >
        {labelText}
      </label>
    </div>
  );
};

export default CheckBox;
