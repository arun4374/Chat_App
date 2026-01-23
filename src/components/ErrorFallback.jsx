import { useEffect, useState } from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  const [countdown, setCountdown] = useState(5);

  // Auto refresh logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    if (countdown === 0) {
      resetErrorBoundary(); // retry automatically
    }

    return () => clearInterval(timer);
  }, [countdown, resetErrorBoundary]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong 😵</h2>

      <p className="text-red-500 bg-red-50 px-4 py-2 rounded-lg border border-red-100 mb-6 max-w-[90%] wrap-break-word shadow-sm">
        {error.message}
      </p>

      <button
        onClick={resetErrorBoundary}
        className="px-6 py-2 bg-[#7A85C1] text-white font-medium rounded-xl shadow-md hover:bg-[#6b76ae] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        Retry Now
      </button>

      <p className="text-sm text-gray-500 mt-6 bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm">
        Auto retry in <b className="text-gray-700">{countdown}</b> seconds...
      </p>
    </div>
  );
}
