import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600 animate-bounce">
          About Bitlinks
        </h1>
        <p className="text-gray-700 text-center">
          Bitlinks is a powerful URL shortening service that allows you to
          easily manage and track your links. Our mission is to make sharing
          links simple and efficient.
        </p>
        <p className="text-gray-700 text-center mt-4">
          With Bitlinks, you can shorten long URLs, customize your short links,
          and analyze the performance of your links with detailed analytics.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
