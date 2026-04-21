import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1120] text-white px-4 text-center">

      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-blue-500 mb-4">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Oops! Page not found
      </h2>

      {/* Message */}
      <p className="text-gray-400 mb-6 max-w-md">
        {error?.statusText || error?.message || "The page you are looking for doesn’t exist or has been moved."}
      </p>

      {/* Buttons */}
      <div className="flex gap-4">

        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>

      </div>

    </div>
  );
};

export default Error;