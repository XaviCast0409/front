import { InputProps } from "utils";

export const InputForm: React.FC<InputProps> = ({
  color,
  type,
  id,
  title,
  stateValue,
  handleChange,
  nameInput,
  placeholder,
  className,
}) => {
  return (
    <div className={`relative ${className || "w-full"} mb-5 group`}>
      <input
        type={type}
        name={nameInput}
        id={id}
        className="block w-full py-2.5 px-3 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={stateValue.nameInput}
        onChange={(e) => handleChange(e, nameInput)}
        style={{ color }}
        required
      />
      <label
        htmlFor={id}
        className="absolute top-3 left-3 text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 -translate-y-6 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
      >
        {title}
      </label>
    </div>
  );
};

