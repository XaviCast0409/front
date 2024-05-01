import { useState } from "react";

export default function MatchingFeatured() {
  const [reportsOpen1, setReportsOpen1] = useState(false);
  const [reportsOpen2, setReportsOpen2] = useState(false);
  const [reportsOpen3, setReportsOpen3] = useState(false);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 m-2">
      <div className="flex flex-col p-2 lg:flex-row lg:space-x-4">
        {/* Primer acordeón */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div
            onClick={() => setReportsOpen1(!reportsOpen1)}
            className="flex items-center text-gray-600 border-b cursor-pointer"
          >
            <div
              className={`w-10 border-r px-2 transform ${reportsOpen1 ? "rotate-90" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 transition-transform duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="px-2 py-3">
              <button className="hover:underline">
                This is where you click to open
              </button>
            </div>
          </div>
          <div className={`p-5 ${reportsOpen1 ? "" : "hidden"}`}>
            This is a very simple dropdown/accordion/collapse (whatever you call
            it) using Tailwind, Alpine.js, and the Alpine.js plugin "Collapse"
            to enable smoother open/collapse transitions than what comes out of
            the box with Alpine.js
          </div>
        </div>
        {/* Segundo acordeón */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div
            onClick={() => setReportsOpen2(!reportsOpen2)}
            className="flex items-center text-gray-600 border-b cursor-pointer"
          >
            <div
              className={`w-10 border-r px-2 transform ${reportsOpen2 ? "rotate-90" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 transition-transform duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="px-2 py-3">
              <button className="hover:underline">
                This is where you click to open
              </button>
            </div>
          </div>
          <div className={`p-5 ${reportsOpen2 ? "" : "hidden"}`}>
            This is a very simple dropdown/accordion/collapse (whatever you call
            it) using Tailwind, Alpine.js, and the Alpine.js plugin "Collapse"
            to enable smoother open/collapse transitions than what comes out of
            the box with Alpine.js
          </div>
        </div>
        {/* Tercer acordeón */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div
            onClick={() => setReportsOpen3(!reportsOpen3)}
            className="flex items-center text-gray-600 border-b cursor-pointer"
          >
            <div
              className={`w-10 border-r px-2 transform ${reportsOpen3 ? "rotate-90" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 transition-transform duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="px-2 py-3">
              <button className="hover:underline">
                This is where you click to open
              </button>
            </div>
          </div>
          <div className={`p-5 ${reportsOpen3 ? "" : "hidden"}`}>
            This is a very simple dropdown/accordion/collapse (whatever you call
            it) using Tailwind, Alpine.js, and the Alpine.js plugin "Collapse"
            to enable smoother open/collapse transitions than what comes out of
            the box with Alpine.js
          </div>
        </div>
      </div>
    </div>
  );
}
