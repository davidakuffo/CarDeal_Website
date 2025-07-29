import React from 'react'


const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-extrabold mb-4">
        <span className="text-red-600">G</span>
        <span className="text-green-600">S</span>
        <span className="text-black">D</span>
        <span className="text-blue-600"> AUTOMOTIVE</span>
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to GSD AUTOMOTIVE! With years of experience in the automotive industry, we are dedicated to providing top-quality vehicles, exceptional customer service, and expert automotive solutions. Our team is passionate about helping you find the perfect car and ensuring your ownership experience is smooth and enjoyable.
      </p>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-blue-600">Our Mission</h3>
        <p className="text-gray-700">
          To deliver reliable vehicles and outstanding service, building lasting relationships with our customers through trust, transparency, and excellence.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 text-blue-600">Our Values</h3>
        <ul className="text-gray-700 list-disc list-inside text-left inline-block">
          <li>Integrity &amp; Transparency</li>
          <li>Customer Satisfaction</li>
          <li>Quality &amp; Reliability</li>
          <li>Innovation &amp; Growth</li>
        </ul>
      </div>
    </section>
  );
}

export default About