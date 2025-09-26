import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-wildrift-dark shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-wildrift-gold rounded-lg flex items-center justify-center">
              <span className="text-wildrift-dark font-bold text-xl">WR</span>
            </div>
            <span className="text-white text-2xl font-bold">WildRiftian</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-wildrift-gold transition-colors">Home</a>
            <a href="#champions" className="text-white hover:text-wildrift-gold transition-colors">Champions</a>
            <a href="#news" className="text-white hover:text-wildrift-gold transition-colors">News</a>
            <a href="#guides" className="text-white hover:text-wildrift-gold transition-colors">Guides</a>
            <a href="#about" className="text-white hover:text-wildrift-gold transition-colors">About</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-wildrift-gold transition-colors">Home</a>
              <a href="#champions" className="text-white hover:text-wildrift-gold transition-colors">Champions</a>
              <a href="#news" className="text-white hover:text-wildrift-gold transition-colors">News</a>
              <a href="#guides" className="text-white hover:text-wildrift-gold transition-colors">Guides</a>
              <a href="#about" className="text-white hover:text-wildrift-gold transition-colors">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;