import { FormContainerProps } from "utils";

export const FormContainer: React.FC<FormContainerProps> = ({ onSubmit, children, title }) => {
  return (
    <form className="max-w-md mx-auto md:max-w-lg lg:max-w-xl flex flex-col justify-center items-center" onSubmit={onSubmit}>
      <h2 className="h1 text-center  my-10">{title}</h2>
      {children}
    </form>
  );
};
