import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-red-600">G</span>
          <span className="text-green-600">S</span>
          <span className="text-black">D</span>
          <span className="text-blue-600"> AUTOMOTIVE</span>
        </div>
        {/* Contact Info */}
        <div className="text-gray-700 text-center md:text-right">
          <div>Email: <a href="mailto:info@gsdautomotive.com" className="text-blue-600 hover:underline">info@gsdautomotive.com</a></div>
          <div>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a></div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4 bg-gray-50 border-t border-gray-200">
        &copy; {new Date().getFullYear()} GSD AUTOMOTIVE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer