import React from 'react';
import { NotificationManager } from 'react-notifications';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    NotificationManager.error(error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    return (
      !hasError
        ? children
        : <h1>Something went wrong.</h1>
    );
  }
}