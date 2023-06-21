import React from 'react';
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
function ErrorPage() {
  const error = useRouteError();
  let title = 'Info Error';
  let message = 'Something went wrong!!!';
  // console.log(error);
  if (error.status === 500) {
    message = error.data.message;
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default ErrorPage;
