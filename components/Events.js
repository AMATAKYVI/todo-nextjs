import React, { useContext } from 'react';
import Event from './Event';
import { EventsContext } from '@/contexts/EventsContext';
// const dataEvents = [
//   {
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
  return (
    <div className="grid grid-cols-2 gap-5 m-5">
      {context.event
        .map((ev, i) => {
          return <Event event={ev} key={ev.event} index={i} />;
        })
        .reverse()}
    </div>
  );
}

export default Events;
