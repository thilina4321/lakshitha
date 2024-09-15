/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Error Page</title>
      </Head>
      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 h-auto">
        <Image
          src="/error.png"
          alt="Error Illustration"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* Error Message */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-700 text-lg mb-6">
          We couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>

        <div
          onClick={() => router.push("/")}
          className="cursor-pointer inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Back to Home
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
