import { NotificationContainer } from 'react-notifications';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import React, { Fragment } from 'react';
import MainPage from './MainPage';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Fragment>
      <ErrorBoundary>
        <Layout>
          <MainPage />
        </Layout>
      </ErrorBoundary>
      <NotificationContainer />
    </Fragment>
  );
}

export default App;
