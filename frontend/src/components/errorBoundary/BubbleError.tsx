import { useRouteError } from "react-router-dom";

/** This component catches error from react-router and bubbles it up to our Error Boundary */
const BubbleError = () => {
  const error = useRouteError();

  throw error;
};

export default BubbleError;
