import React from 'react';

export default function Heading() {
  return (
    <div className="max-w-screen-xl px-4 py-4 mx-auto lg:py-8 lg:px-6">
      <div className="max-w-screen-md mx-auto mb-4 text-center lg:mb-6">
        <h2 className="mb-2 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Pricing Plans</h2>
        <p className="text-base text-gray-500 dark:text-gray-400">Get 2 months for free by subscribing yearly!</p>
      </div>
    </div>
  );
}
