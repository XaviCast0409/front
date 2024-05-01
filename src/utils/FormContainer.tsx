import { FormContainerProps } from "utils";

export const FormContainer: React.FC<FormContainerProps> = ({ onSubmit, children, title }) => {
  return (
    <form className="max-w-md mx-auto md:max-w-lg lg:max-w-xl" onSubmit={onSubmit}>
      <h2 className="h2">{title}</h2>
      {children}
    </form>
  );
};
