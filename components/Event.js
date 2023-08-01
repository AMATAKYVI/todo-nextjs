import React from 'react';

function Event({ event, index }) {
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-lg
     px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
      <div>
        <span className=" items-center justify-center text-white font-semibold p-3 bg-indigo-500 rounded-md shadow-lg">
          {index + 1}
        </span>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        {`${event.title}`}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {event.description}
      </p>
    </div>
  );
}

export default Event;