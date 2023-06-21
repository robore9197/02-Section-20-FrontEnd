import { useRouteLoaderData } from 'react-router-dom';
import React from 'react';
import EventItem from '../components/EventItem';
function EventDetailPage() {
  const event = useRouteLoaderData('event-detail');
  if (event.status === 500) {
    return (
      <>
        <p>Error...</p>
      </>
    );
  }

  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch(
    'https://react-http-ddacd-default-rtdb.asia-southeast1.firebasedatabase.app/' +
      id +
      '.json'
  );

  if (!response.ok) {
    throw json({ message: 'Fetch Detail Page Error' }, { status: 500 });
  }

  return response;
}
