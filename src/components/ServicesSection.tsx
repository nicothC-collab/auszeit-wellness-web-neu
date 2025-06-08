
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      title: "Reiki",
      shortDesc: "Wirkt ausgleichend auf körperlicher und seelischer Ebene.",
      description: "Eine sanfte Energiearbeit, die die natürlichen Selbstheilungskräfte aktiviert und tiefe Entspannung fördert.",
      icon: "🌸",
      price: "Auf Anfrage"
    },
    {
      title: "Craniosacrale Entspannung",
      shortDesc: "Fördert das harmonische Gleichgewicht zwischen Anspannung und Entspannung.",
      description: "Eine sehr sanfte Behandlungsform, die das craniosacrale System harmonisiert und tiefe Ruhe schenkt. Kann auch bei Kopfschmerzen/Migräne, Schlafproblemen, Stress uvm. lindernd wirken.",
      icon: "✨",
      price: "Auf Anfrage"
    },
    {
      title: "Heilsame Berührung - ganzheitliche Energiebehandlung",
      shortDesc: "Mit sanften Berührungen an verschiedenen energetischen Punkten des Körpers.",
      description: "Können Emotionen befreit, Themen gelöst der Kopf frei und Gedanken wieder klarer werden.",
      icon: "🌿",
      price: "Auf Anfrage"
    },
    {
      title: "Kiefer R.E.S.E.T",
      shortDesc: "Entspannt die Kiefermuskulatur und das Kiefergelenk.",
      description: "Hilfreich bei Zähneknirschen/pressen, Kopfschmerzen verspannte Schultern/Nacken, uvm.",
      icon: "🦋",
      price: "Auf Anfrage"
    }
  ];

  const massageServices = [
    {
      title: "Klassische Rückenmassage",
      description: "Hier kannst du deine Seele baumeln lassen.",
      price: "Auf Anfrage"
    },
    {
      title: "\"Kleine Auszeit\" für Kopf, Gesicht & Arme",
      description: "Hier darf dein Kopf \"frei\" und deine Gesichtszüge wieder entspannt werden.",
      price: "Auf Anfrage"
    },
    {
      title: "\"Große Auszeit\" - Klassische Ganzkörpermassage",
      description: "90 Minuten Erholung pur für Körper, Geist & Seele.",
      price: "Auf Anfrage"
    },
    {
      title: "Lomi Lomi Nui Massage",
      description: "Die Königin der Massagen. Großflächige fließende Bewegungen und viel Öl lassen diese Ganzkörpermassage zu einem \"Fest der Sinne\" werden.",
      price: "Auf Anfrage"
    },
    {
      title: "Teilmassage Rücken & Beine",
      description: "In dieser entspannten Massage widmen wir uns ausschließlich deinem Rücken und deinen Beinen.",
      price: "Auf Anfrage"
    },
    {
      title: "Aromamassage",
      description: "Alle Massagen gerne auch mit aromatisiertem Ölen möglich.",
      price: "Aufpreis je 3 €"
    },
    {
      title: "Fußreflexzonen - Wohlfühlmassage",
      description: "Fördert die Durchblutung, sodass gestaute oder blockierte Lebensenergie wieder fließen kann.",
      price: "Auf Anfrage"
    }
  ];

  const specialServices = [
    {
      title: "Hormon - Balance - Massage",
      description: "Wirkt entgiftend, entschlackend, den Hormonhaushalt harmonisierend & kann unterstützen bei PMS, Wechseljahresbeschwerden & hormonellen Dysfunktionen.",
      price: "Auf Anfrage"
    },
    {
      title: "Tibetische Energiemassage - Streicheleinheit für die Seele",
      description: "Ein \"Wellness-Kurztrip\" mit Langzeitwirkung!",
      price: "Auf Anfrage"
    },
    {
      title: "Wirbelsäulenentspannung nach Breuss",
      description: "Eine \"Verjüngungskur für die Bandscheiben\".",
      price: "Auf Anfrage"
    },
    {
      title: "Yin Yoga Kurse & Workshops",
      description: "Ruhige, meditative Yoga-Praxis mit längeren Haltungen für tiefe Entspannung und innere Ruhe.",
      price: "Auf Anfrage"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-auszeit-text mb-6">
            Das sind meine Leistungen für dich
          </h2>
          <div className="w-24 h-0.5 bg-auszeit-pink mx-auto mb-6"></div>
          <p className="text-lg text-auszeit-text/70 max-w-2xl mx-auto">
            Ich biete dir einen geschützten Raum, in dem Heilung geschehen darf. Durch sanfte Berührungen und Impulse werden die Selbstheilungskräfte aktiviert.
          </p>
        </div>

        {/* Main Energy Services */}
        <div className="mb-16">
          <h3 className="font-cormorant text-3xl font-medium text-auszeit-text mb-8 text-center">
            Energetische Anwendungen
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-auszeit-pink/20 hover:border-auszeit-pink/40 transition-all duration-300 hover:scale-105 bg-auszeit-pink-light/30">
                <CardContent className="p-8">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="font-cormorant text-xl font-medium text-auszeit-text mb-2">
                      {service.title}
                    </h4>
                    <p className="text-auszeit-pink font-medium text-sm mb-3">{service.price}</p>
                  </div>
                  <p className="text-auszeit-text/80 leading-relaxed mb-3 font-medium">
                    {service.shortDesc}
                  </p>
                  <p className="text-auszeit-text/70 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Massage Services Accordion */}
        <div className="mb-16">
          <h3 className="font-cormorant text-3xl font-medium text-auszeit-text mb-8 text-center">
            Klassische Massagen
          </h3>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {massageServices.map((service, index) => (
                <AccordionItem key={index} value={`massage-${index}`} className="border-auszeit-pink/20">
                  <AccordionTrigger className="font-cormorant text-lg font-medium text-auszeit-text hover:text-auszeit-pink">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>{service.title}</span>
                      <span className="text-auszeit-pink text-sm font-normal">{service.price}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-auszeit-text/70 leading-relaxed">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Special Services Accordion */}
        <div className="mb-16">
          <h3 className="font-cormorant text-3xl font-medium text-auszeit-text mb-8 text-center">
            Spezielle Anwendungen
          </h3>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {specialServices.map((service, index) => (
                <AccordionItem key={index} value={`special-${index}`} className="border-auszeit-pink/20">
                  <AccordionTrigger className="font-cormorant text-lg font-medium text-auszeit-text hover:text-auszeit-pink">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>{service.title}</span>
                      <span className="text-auszeit-pink text-sm font-normal">{service.price}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-auszeit-text/70 leading-relaxed">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-auszeit-pink-light/50 rounded-2xl p-8 md:p-12 text-center">
          <Sparkles className="w-12 h-12 text-auszeit-pink mx-auto mb-6" />
          <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-auszeit-text mb-6">
            Gerne passe ich die Anwendungen individuell auf deine Bedürfnisse an
          </h3>
          <p className="text-lg leading-relaxed text-auszeit-text/80 max-w-3xl mx-auto mb-6">
            Der Intimbereich wird jedoch nicht mit einbezogen. Durch die entstehende tiefe Entspannung kann die gestaute Energie wieder fließen und du kannst dich selbst und deine Bedürfnisse wieder wahrnehmen.
          </p>
          <div className="text-sm text-auszeit-text/60 italic">
            Meine Massagen sind Wellnessanwendungen und dienen der Gesunderhaltung. Sie ersetzen nicht die Behandlung beim Arzt / Heilpraktiker, können aber eine sinnvolle Ergänzung zu bereits bestehenden Therapieformen sein.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
