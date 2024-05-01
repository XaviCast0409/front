import { useState } from "react";
import { DropdownAccordionProps, DropdownAccordionOption } from "utils";

export default function DropdownAccordion(props: DropdownAccordionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownAccordionOption | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownAccordionOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-accordion">
      <button
        className="dropdown-accordion-trigger"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        {selectedOption ? selectedOption.label : "Select an option"} {/* Mostrar "Seleccionar una opción" si no hay ninguna opción seleccionada */}
      </button>
      {isOpen && (
        <ul className="dropdown-accordion-content">
          {props.options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              <a href="#">{option.label}</a>
              {option.content && (
                <div className="card">{option.content}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
