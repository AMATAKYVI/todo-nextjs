import { EventsContext } from '@/contexts/EventsContext';
import React, { useContext, useRef } from 'react';

function ModalForm() {
  const context = useContext(EventsContext);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const handleSubmit = () => {
    context.setEvent((prev) => [
      ...prev,
      {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      },
    ]);
    context.setModalOpen(false);
  };
  const handleCancelEvent = () => {
    context.setModalOpen(false);
  };
  console.log(context);
  return (
    <div className="bg-blue-100 h-[500px] w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed rounded z-10">
      <div className="flex justify-between px-5 py-2">
        <p>New Event</p>
        <div onClick={() => handleCancelEvent()}>
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
      <div className="px-10 py-5 ">
        <div className="flex justify-between mb-5">
          <label htmlFor="title" className="font-semibold">
            Title:
          </label>
          <input
            ref={titleRef}
            type="text"
            className=" px-5 outline-none py-2"
            placeholder="What is it about..."
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="description" className="font-semibold">
            Description:
          </label>
          <textarea
            ref={descriptionRef}
            className="resize-none p-5 outline-none h-auto "
            name="description"
            id="description"
            cols="25"
            rows="7"
            placeholder="Write your story here...."
          ></textarea>
        </div>
        <div>
          <button
            className="bg-blue-600 px-5 py-3 absolute right-10 bottom-10 hover:bg-blue-400 transition duration-200 rounded font-semibold text-white"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
