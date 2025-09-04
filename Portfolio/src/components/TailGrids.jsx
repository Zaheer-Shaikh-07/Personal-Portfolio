import React from "react";

const TailGrids = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/40x40"
            alt="TailGrids logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold">TailGrids</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-700">
            Portfolio
          </a>
        </nav>
        <div className="space-x-4">
          <a href="#" className="text-gray-700">
            Sign In
          </a>
          <a href="#" className="text-gray-700">
            Sign Up
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find a dream job That changes life.
          </h1>
          <p className="text-gray-600">
            With TailGrids, business and students thrive together. Business can
            perfectly match their staffing to changing demand throughout the
            dayed.
          </p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Job Keyword"
              className="border border-gray-300 p-3 rounded-md w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="Job Location"
              className="border border-gray-300 p-3 rounded-md w-full md:w-1/2"
            />
            <button className="bg-blue-600 text-white p-3 rounded-md">
              Search
            </button>
          </div>
          <p className="text-gray-500">
            Try Product Designer, Software Engineer etc.
          </p>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 relative">
          <div className="absolute inset-0 bg-blue-600 rounded-full w-96 h-96 md:w-full md:h-full"></div>
          <img
            src="https://placehold.co/400x400"
            alt="Person smiling"
            className="relative rounded-full w-96 h-96 md:w-full md:h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default TailGrids;
