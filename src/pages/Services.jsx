import React from 'react'


const Services = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold mb-8 text-center">
        <span className="text-red-600">G</span>
        <span className="text-green-600">S</span>
        <span className="text-black">D</span>
        <span className="text-black-600"> AUTOMOTIVE</span> Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <span className="text-4xl mb-4 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v-1a4 4 0 014-4h10a4 4 0 014 4v1M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 010 7.75" /></svg>
          </span>
          <h3 className="text-xl font-bold mb-2">Car Sales</h3>
          <p className="text-gray-700">Wide selection of quality new and pre-owned vehicles to fit every need and budget.</p>
        </div>
        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <span className="text-4xl mb-4 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21m6-4l.75 4M4 17h16M4 17a4 4 0 014-4h8a4 4 0 014 4M4 17v1a4 4 0 004 4h8a4 4 0 004-4v-1" /></svg>
          </span>
          <h3 className="text-xl font-bold mb-2">Auto Repairs</h3>
          <p className="text-gray-700">Expert maintenance and repair services to keep your vehicle running smoothly and safely.</p>
        </div>
        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <span className="text-4xl mb-4 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          <h3 className="text-xl font-bold mb-2">Financing &amp; Insurance</h3>
          <p className="text-gray-700">Flexible financing options and insurance solutions tailored to your needs.</p>
        </div>
      </div>
    </section>
  );
}

export default Services