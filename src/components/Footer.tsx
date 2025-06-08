
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-auszeit-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/f462e444-c0ab-480f-91a6-18b3a3c500f5.png" 
              alt="Auszeit Logo" 
              className="h-16 w-auto mx-auto filter brightness-0 invert opacity-80"
            />
          </div>
          
          <h3 className="font-cormorant text-2xl font-light mb-4">Auszeit</h3>
          <p className="text-white/70 mb-6">für Körper, Geist & Seele</p>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="w-4 h-4 text-auszeit-pink" />
            <span className="text-sm text-white/60">Sonja Thalhammer</span>
            <Heart className="w-4 h-4 text-auszeit-pink" />
          </div>
          
          <div className="text-xs text-white/50 space-y-2">
            <p>&copy; 2024 Auszeit - Alle Rechte vorbehalten</p>
            <p>Energetische Anwendungen ersetzen keine medizinischen Behandlungen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
