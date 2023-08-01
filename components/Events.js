import React, { useContext } from 'react';
import Event from './Event';
import { EventsContext } from '@/contexts/EventsContext';
//     event: 1,
//     title: 'Dog Under the Bush',
//     description:
//       'There was a dog under the bush, hiding, and peeking to someone',
//   },
//   {
//     event: 2,
//     title: 'Stranger Become Friend',
//     description:
//       'Stranger start talking until they became familiar with themself, once for all they formed close relationship',
//   },
//   {
//     event: 3,
//     title: 'Big O Otopus Boy',
//     description:
//       'Stranger start talking until they became familiar with themself, once for all they formed close relationship',
//   },
// ];
function Events() {
  const context = useContext(EventsContext);
  const handleClickEvent = (event) => {};
  const handleDelete = (event) => {
    // could double check if the user want to delete the event
    const filterEvent = context.event.filter(
      (item) => item.title !== event.title
    );
    context.setEvent(filterEvent);
  };
  return (
    <div className="grid grid-cols-2 gap-5 m-5">
      {context.event
        .map((ev, i) => {
          return (
            <Event
              event={ev}
              key={ev.event}
              index={i}
              handleClickEvent={handleClickEvent}
              handleDelete={handleDelete}
            />
          );
        })
        .reverse()}
    </div>
  );
}

export default Events;
