import { createContext, useState } from 'react';

export const EventsContext = createContext({});

export const EventContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState([]);
  const value = {
    modalOpen: modalOpen,
    setModalOpen: setModalOpen,
    event: newEvent,
    setEvent: setNewEvent,
  };
  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};
