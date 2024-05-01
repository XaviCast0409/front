

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  text?: React.ReactNode;
  handleClick?: () => void;
  icon?: JSX.Element;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean
}
export interface SessionExpiredProps { }

export interface InputProps {
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  color?: string;
  title?: string;
  stateValue?: { nameInput: string};
  handleChange: (e, name) => void;
  nameInput: string,
  className?: string
}

export interface ContainerFormProps {
  title: string;
  content: string;
  img: string;
  bgColor?: string;
}

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export interface CheckboxProps {
  id: string;
  labelText: string;
  isChecked?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface AccordionProps {
  heading: string;
  content: React.ReactNode;
}

export interface AccordionContent {
  text?: string;
  reactElement?: React.ReactNode;
}

interface DropdownAccordionOption {
  label: string;
  value: string;
  content?: React.ReactNode;
}

interface DropdownAccordionProps {
  options: DropdownOption[];
}

export interface FormContainerProps {
  onSubmit?: () => void
  children: ReactNode,
  title?: string
}

export interface MessageProps {
  type: 'success' | 'error';
  message: string;
  additionalText?: string;
}

export interface PropsProfileConstructoraComponent {
  CompanyId: object;
}