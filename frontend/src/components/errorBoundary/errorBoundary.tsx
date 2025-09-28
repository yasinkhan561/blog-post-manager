import React, { Component } from "react";
import ErrorPage from "@/components/errorBoundary/errorPage/errorPage";

interface State {
  hasError: boolean;
  errorTitle: string;
  errorMessageId: string;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      errorTitle: "",
      errorMessageId: "",
    };
  }

  static getDerivedStateFromError(error: Error) {
    // use to render a fallback UI after an error occurred
    return {
      hasError: true,
      errorMessageId: error.message,
    };
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      errorMessageId: "",
    });
  };



  handleGoBack = () => {
    this.handleReset();
    window.history.back();
  };

  render() {
    const { state, props } = this;

    if (state.hasError) {
      return (
        <ErrorPage
          errorTitle={state.errorTitle}
          errorMessage={state.errorMessageId}
          handleGoBack={this.handleGoBack}
        />
      );
    }
    return props.children;
  }
}

export default ErrorBoundary;
