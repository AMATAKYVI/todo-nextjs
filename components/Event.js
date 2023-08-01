import React from 'react';

function Event({ event, index, handleClickEvent, handleDelete }) {
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-lg
     px-6 py-8 ring-1 ring-slate-900/5 shadow-xl  transform transition duration-200 "
      onClick={() => handleClickEvent(event)}
    >
      <div className="flex justify-between items-center">
        <span className=" items-center justify-center text-white font-semibold p-3 bg-indigo-500 rounded-md shadow-lg">
          {index + 1}
        </span>
        <div className="" onClick={() => handleDelete(event)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hover:bg-blue-400 hover:text-white transition duration-200 rounded-md"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        {`${event.title}`}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {`${event.description}`}
      </p>
    </div>
  );
}

export default Event;
