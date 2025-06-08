
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-auszeit-pink/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f462e444-c0ab-480f-91a6-18b3a3c500f5.png" 
              alt="Auszeit Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium"
            >
              Anwendungen
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-auszeit-text transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-auszeit-text transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-auszeit-text transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-auszeit-pink/20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium text-left"
              >
                Anwendungen
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium text-left"
              >
                Über mich
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-auszeit-text hover:text-auszeit-pink transition-colors duration-300 font-medium text-left"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
