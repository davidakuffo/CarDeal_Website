import React from 'react'


const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold mb-6 text-center">
        <span className="text-red-600">G</span>
        <span className="text-green-600">S</span>
        <span className="text-black">D</span>
        <span className="text-blue-600"> AUTOMOTIVE</span> Contact
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Google Map */}
        <div className="w-full h-72 md:h-full rounded-lg overflow-hidden shadow">
          <iframe
            title="GSD Automotive Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Contact Us</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-6 py-2 font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact