import React from 'react'


const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-white via-gray-50 to-blue-50 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        <span className="text-red-600">G</span>
        <span className="text-green-600">S</span>
        <span className="text-black">D</span>
        <span className="text-black"> AUTOMOTIVE</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">
        Your trusted partner for quality vehicles, expert service, and a seamless car buying experience.
      </p>
      <a
        href="/services"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
      >
        Explore Our Services
      </a>
    </section>
  );
}

export default Hero