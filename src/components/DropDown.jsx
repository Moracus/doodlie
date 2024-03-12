import { useEffect, useState } from "react";

function DropdownMenu({ label, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("png");
  const handleClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <label
        htmlFor="select"
        className="p-3 font-serif text-white font-medium text-lg"
      >
        {label}
      </label>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-Seasalt bg-transparent hover:bg-slate-800  transition duration-300 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:bg-transparent dark:hover:border-blue-500
        border-2 border-solid border-white"
        type="button"
        itemID="select"
        onClick={toggleDropdown}
      >
        {selectedOption || "dropdown"}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2 right-2">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((opt, i) => {
              return (
                <>
                  <li key={i}>
                    <button
                      onClick={() => handleClick(opt)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                    >
                      {opt}
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
