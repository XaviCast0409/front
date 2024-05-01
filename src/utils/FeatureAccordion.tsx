import React from "react";
import { AccordionProps, AccordionContent } from "../types/utils";

export function FeatureAccordion(props: AccordionProps): JSX.Element {
  const { heading, content } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          <span>{heading}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`hidden ${isOpen ? "" : "hidden"}`}
        aria-labelledby={`accordion-heading`}
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {content ? (
            <>
              {typeof content === "string" ? (
                <p>{content}</p>
              ) : (content as AccordionContent).reactElement !== undefined ? (
                (content as AccordionContent).reactElement
              ) : (
                <span>null</span>
              )}
            </>
          ) : (
            <span>null</span>
          )}
        </div>
      </div>
    </div>
  );
}
