
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-auszeit-text mb-6">
            Kontakt
          </h2>
          <div className="w-24 h-0.5 bg-auszeit-pink mx-auto mb-6"></div>
          <p className="text-lg text-auszeit-text/70 max-w-2xl mx-auto">
            Ich freue mich auf deine Nachricht und beantworte gerne alle deine Fragen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-auszeit-pink/20 bg-auszeit-pink-light/30">
              <CardContent className="p-8">
                <h3 className="font-cormorant text-2xl font-medium text-auszeit-text mb-6">
                  Sonja Thalhammer
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-medium text-auszeit-text mb-2">Telefon</h4>
                    <p className="text-auszeit-text/70">Bitte per E-Mail kontaktieren</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-auszeit-text mb-2">E-Mail</h4>
                    <p className="text-auszeit-text/70">info@auszeit-sonja.at</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-auszeit-text mb-2">Termine</h4>
                    <p className="text-auszeit-text/70">Nach Vereinbarung</p>
                  </div>
                </div>

                <div className="bg-auszeit-pink-light/50 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Heart className="w-5 h-5 text-auszeit-pink" />
                    <h4 className="font-medium text-auszeit-text">Hinweis</h4>
                  </div>
                  <p className="text-sm text-auszeit-text/70 leading-relaxed">
                    Energetische Anwendungen dienen der Aktivierung der Selbstheilungskräfte und stellen keinen Ersatz für medizinische Behandlungen dar.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-auszeit-pink/20 bg-auszeit-pink-light/30">
                <CardContent className="p-8">
                  <h3 className="font-cormorant text-xl font-medium text-auszeit-text mb-4">
                    Termin vereinbaren
                  </h3>
                  <p className="text-auszeit-text/70 mb-6 leading-relaxed">
                    Ich nehme mir gerne Zeit für ein persönliches Gespräch, um die für dich passende Anwendung zu finden.
                  </p>
                  <Button className="w-full bg-auszeit-pink hover:bg-auszeit-pink/90 text-white">
                    E-Mail schreiben
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-auszeit-pink/20 bg-auszeit-pink-light/30">
                <CardContent className="p-8">
                  <h3 className="font-cormorant text-xl font-medium text-auszeit-text mb-4">
                    Anwendungsbereich
                  </h3>
                  <div className="space-y-3 text-sm text-auszeit-text/70">
                    <div className="flex items-center space-x-2">
                      <span>🌸</span>
                      <span>Stressabbau & Entspannung</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🌿</span>
                      <span>Energetische Blockaden lösen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>✨</span>
                      <span>Innere Balance finden</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🧘‍♀️</span>
                      <span>Achtsamkeit & Selbstwahrnehmung</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
