
import { Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-auszeit">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-auszeit-text mb-6">
              Über mich
            </h2>
            <div className="w-24 h-0.5 bg-auszeit-pink mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-auszeit-text mb-4">
                Sonja Thalhammer
              </h3>
              
              <p className="text-lg leading-relaxed text-auszeit-text/80">
                Herzlich willkommen! Ich bin Sonja und begleite Menschen auf ihrem Weg zu mehr Wohlbefinden und innerer Balance.
              </p>
              
              <p className="text-base leading-relaxed text-auszeit-text/70">
                Mit großer Leidenschaft und Achtsamkeit biete ich energetische Anwendungen an, die Körper, Geist und Seele in Einklang bringen. Jeder Mensch ist einzigartig, deshalb gestalte ich jede Behandlung individuell und respektvoll.
              </p>
              
              <p className="text-base leading-relaxed text-auszeit-text/70">
                In meiner Praxis schaffe ich einen geschützten Raum, in dem du zur Ruhe kommen und deine natürlichen Selbstheilungskräfte aktivieren kannst. Es ist mir eine Herzensangelegenheit, dich auf deinem Weg zu begleiten.
              </p>

              <div className="flex items-center space-x-2 text-auszeit-pink">
                <Heart className="w-5 h-5" />
                <span className="italic font-medium">Von Herzen für dich da</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-80 h-80 bg-auszeit-pink-light rounded-full mx-auto flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-8 bg-auszeit-pink/20 rounded-full flex items-center justify-center">
                  <span className="text-6xl">🌸</span>
                </div>
              </div>
              <p className="font-cormorant text-xl text-auszeit-brown italic">
                "In der Ruhe liegt die Kraft"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
