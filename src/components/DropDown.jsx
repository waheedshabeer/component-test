import React, { useState } from "react";

export default function DropDown({ message }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div class="relative inline-block max-w-[150px] text-left">
      <div>
        <button
          type="button"
          onClick={() => setShowModal(!showModal)}
          class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[#6D6D6D] text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6D6D6D]"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {message}
          <svg
            class="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="white"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showModal && (
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right
     rounded-md text-white bg-[#6D6D6D] shadow-lg ring-1 ring-black
      ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <a
              href="#"
              class="text-white block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Set Time
            </a>
            <a
              href="#"
              class="text-white block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              May 16, 2023
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
