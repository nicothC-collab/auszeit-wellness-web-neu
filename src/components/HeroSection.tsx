
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-auszeit pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/12322054-f3ec-46ee-b8ab-67fa4fb38381.png" 
              alt="Auszeit Logo" 
              className="h-32 w-auto mx-auto mb-6 animate-float"
            />
          </div>
          
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-auszeit-text mb-6 animate-fade-in">
            Auszeit
          </h1>
          
          <p className="font-cormorant text-xl md:text-2xl text-auszeit-brown-dark mb-8 animate-fade-in">
            für Körper, Geist & Seele
          </p>
          
          <div className="max-w-3xl mx-auto mb-10 animate-fade-in">
            <p className="text-lg leading-relaxed text-auszeit-text/80 mb-6">
              Energetische Anwendungen zur Förderung des Wohlbefindens und zur Entspannung sowie Yin Yoga Kurse und Workshops.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-auszeit-pink mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-medium">REIKI</span>
              <Heart className="w-5 h-5" />
              <span className="font-medium">ENERGIEMASSAGEN</span>
              <Heart className="w-5 h-5" />
              <span className="font-medium">CRANIOSACRALE ENTSPANNUNG</span>
              <Heart className="w-5 h-5" />
            </div>
            
            <p className="text-base text-auszeit-text/70 italic">
              "Ich begleite dich von Herzen gerne ganzheitlich, respektvoll, achtsam und individuell auf deinem Weg zu mehr Kraft und Klarheit."
            </p>
          </div>
          
          <div className="animate-fade-in">
            <Button 
              onClick={scrollToContact}
              className="bg-auszeit-pink hover:bg-auszeit-pink/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Termin vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
