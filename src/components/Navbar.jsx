import React, { useState } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 justify-center ">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-red-600">G</span>
            <span className="text-green-600">S</span>
            <span className="text-black">D</span>
            <span className="text-black"> AUTOMOTIVE</span>
          </span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <li><a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a></li>
          <li><a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a></li>
          <li><a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a></li>
          <li><a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Open Menu"
          onClick={handleMenuToggle}
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Mobile Nav */}
        <ul
          className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-50 flex flex-col gap-8 pt-24 px-8 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Close button for mobile menu */}
          <button
            className="absolute top-6 right-6 text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Close Menu"
            onClick={handleCloseMenu}
            style={{ display: menuOpen ? 'block' : 'none' }}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <li><a href="/" onClick={handleCloseMenu} className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a></li>
          <li><a href="/about" onClick={handleCloseMenu} className="text-gray-700 hover:text-blue-600 font-medium transition">About</a></li>
          <li><a href="/services" onClick={handleCloseMenu} className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a></li>
          <li><a href="/contact" onClick={handleCloseMenu} className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar