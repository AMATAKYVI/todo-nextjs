import { EventsContext } from '@/contexts/EventsContext';
import React, { useContext } from 'react';

function Navbar() {
  const context = useContext(EventsContext);
  const handleAddNewEvent = () => {
    context.setModalOpen(true);
  };
  const handleCheckAllEvents = () => {
    console.log('check');
  };
  return (
    <div className="flex rounded shadow-sm shadow-gray-200 sticky top-0  bg-gray-50  p-4 hover:shadow-gray-300 items-center">
      <div className=" flex-1 text-center">
        <p className="text-2xl font-semibold leading-relaxed text-gray-900">
          Amatak Yvi
        </p>
      </div>
      <div className="flex flex-1 justify-around ">
        <div className="">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            onClick={() => handleAddNewEvent()}
          >
            Add New Event
          </button>
        </div>
        <div>
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br active:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => handleCheckAllEvents()}
          >
            Add New Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
