import React from 'react';
import EventForm from '../components/EventForm';
import { json } from 'react-router-dom';
function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  console.log(eventData);

  try {
    const response = fetch(
      'https://react-http-ddacd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }
    );

    if (!response.ok) {
      throw json({ message: 'Could not save event.' }, { status: 500 });
    }
  } catch (error) {
    console.log(error.message);
  }

  return redirect('/events');
}
