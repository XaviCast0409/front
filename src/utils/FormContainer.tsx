import { FormContainerProps } from "utils";

export const FormContainer: React.FC<FormContainerProps> = ({ onSubmit, children, title }) => {
  return (
    <form className="max-w-md mx-auto" onSubmit={onSubmit}>
      <h2 className="h2">{title}</h2>
      {children}
    </form>
  );
};
