import React from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData, json } from 'react-router-dom';
function EventsPage() {
  // preloaded data with loader
  // useLoaderData auto extract data from response object
  const events = useLoaderData();
  console.log(events.map((item) => item));
  return <>{/* <EventsList events={events} /> */}</>;
}

export default EventsPage;

export async function loader() {
  // 3.87.28.255
  // correct fetch
  // https://react-http-ddacd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json
  // const response = await fetch(
  //   'https://react-http-ddacd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  // );

  // custom server
  const response = await fetch(
    'https://react-http-ddacd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );

  // throw error here
  // try {
  //   const response = await fetch(
  //     'https://react-http-ddacd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  //   );
  // } catch (error) {
  //   console.log(error.message);
  // }

  // incorrect
  // const response = await fetch(
  //   'https://react-http-dacd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  // );

  // console.log(response);
  if (!response.ok) {
    // throw { isError: true, message: 'An Error Occured' };

    // data, status  property are default

    // throw new Response(JSON.stringify({ message: 'An Error Occurred!' }), {
    //   status: 500,
    // });

    throw json({ message: 'Could not fetch events' }, { status: 500 });
  } else {
    return response;
    // Response object is new to modern languages
    // {'data', {status: 201}}
  }
}
