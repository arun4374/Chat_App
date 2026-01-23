import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export default function WithErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        console.log("Retrying...");
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
