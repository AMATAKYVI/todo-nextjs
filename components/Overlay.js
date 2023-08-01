import { EventsContext } from '@/contexts/EventsContext';
import React, { useContext } from 'react';

function Overlay() {
  const context = useContext(EventsContext);
  const handleClickOverlay = () => {
    context.setModalOpen(false);
  };
  return (
    <div
      className="bg-gray-400 mix-blend-multiply fixed z-0 h-full w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      onClick={() => handleClickOverlay()}
    ></div>
  );
}

export default Overlay;
