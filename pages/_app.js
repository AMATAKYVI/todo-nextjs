import { EventContextProvider } from '@/contexts/EventsContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <EventContextProvider>
        {' '}
        <Component {...pageProps} />
      </EventContextProvider>
    </>
  );
}
