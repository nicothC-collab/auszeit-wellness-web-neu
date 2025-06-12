
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Sparkles, Star } from 'lucide-react';

const ServicesSection = () => {
  const holisticBodyworkServices = [
    {
      title: "Reiki",
      description: "Eine sanfte Energiearbeit, die die natürlichen Selbstheilungskräfte aktiviert und tiefe Entspannung fördert. Wirkt ausgleichend auf körperlicher und seelischer Ebene.",
      price: "60 Min. € 60,-"
    },
    {
      title: "Craniosacrale Entspannung",
      description: "Eine sehr sanfte Behandlungsform, die das craniosacrale System harmonisiert und tiefe Ruhe schenkt. Fördert das harmonische Gleichgewicht zwischen Anspannung und Entspannung. Kann auch bei Kopfschmerzen/Migräne, Schlafproblemen, Stress uvm. lindernd wirken.",
      price: "60 Min. € 60,-"
    },
    {
      title: "Heilsame Berührung - ganzheitliche Energiebehandlung",
      description: "Mit sanften Berührungen an verschiedenen energetischen Punkten des Körpers können Emotionen befreit, Themen gelöst, der Kopf frei und Gedanken wieder klarer werden.",
      price: "60 Min. € 60,-"
    },
    {
      title: "Kiefer R.E.S.E.T",
      description: "Entspannt die Kiefermuskulatur und das Kiefergelenk. Hilfreich bei Zähneknirschen/pressen, Kopfschmerzen, verspannte Schultern/Nacken, uvm.",
      price: "45 Min. € 50,-"
    },
    {
      title: "Tibetische Energiemassage - Streicheleinheit für die Seele",
      description: "Ein \"Wellness-Kurztrip\" mit Langzeitwirkung!",
      price: "60 Min. € 60,-"
    },
    {
      title: "Wirbelsäulenentspannung nach Breuss",
      description: "Eine \"Verjüngungskur für die Bandscheiben\".",
      price: "45 Min. € 50,-"
    }
  ];

  const aromatherapyServices = [
    {
      title: "Aromamassage",
      description: "Alle Massagen gerne auch mit aromatisierten Ölen möglich. Die ätherischen Öle wirken über die Haut und den Geruchssinn auf Körper und Seele.",
      price: "Aufpreis je € 3,-"
    },
    {
      title: "Duftreise",
      description: "Eine entspannende Reise durch verschiedene Düfte, die Körper und Geist in Einklang bringen.",
      price: "30 Min. € 35,-"
    }
  ];

  const wellnessServices = [
    {
      title: "Klassische Rückenmassage",
      description: "Hier kannst du deine Seele baumeln lassen. Löst Verspannungen und fördert die Durchblutung.",
      price: "30 Min. € 35,-"
    },
    {
      title: "\"Kleine Auszeit\" für Kopf, Gesicht & Arme",
      description: "Hier darf dein Kopf \"frei\" und deine Gesichtszüge wieder entspannt werden.",
      price: "30 Min. € 35,-"
    },
    {
      title: "\"Große Auszeit\" - Klassische Ganzkörpermassage",
      description: "90 Minuten Erholung pur für Körper, Geist & Seele.",
      price: "90 Min. € 80,-"
    },
    {
      title: "Lomi Lomi Nui Massage",
      description: "Die Königin der Massagen. Großflächige fließende Bewegungen und viel Öl lassen diese Ganzkörpermassage zu einem \"Fest der Sinne\" werden.",
      price: "90 Min. € 90,-"
    },
    {
      title: "Teilmassage Rücken & Beine",
      description: "In dieser entspannten Massage widmen wir uns ausschließlich deinem Rücken und deinen Beinen.",
      price: "45 Min. € 50,-"
    },
    {
      title: "Fußreflexzonen - Wohlfühlmassage",
      description: "Fördert die Durchblutung, sodass gestaute oder blockierte Lebensenergie wieder fließen kann.",
      price: "45 Min. € 50,-"
    },
    {
      title: "Hormon - Balance - Massage",
      description: "Wirkt entgiftend, entschlackend, den Hormonhaushalt harmonisierend & kann unterstützen bei PMS, Wechseljahresbeschwerden & hormonellen Dysfunktionen.",
      price: "60 Min. € 65,-"
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

        {/* HOLISTIC BODYWORK */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-cormorant text-3xl font-medium text-auszeit-text mb-4">
              HOLISTIC BODYWORK
            </h3>
            <p className="text-auszeit-text/70 max-w-3xl mx-auto leading-relaxed">
              Ganzheitliche Körperarbeit, die Körper, Geist und Seele in Einklang bringt. 
              Diese sanften Methoden aktivieren die natürlichen Selbstheilungskräfte und 
              fördern tiefe Entspannung und innere Balance.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {holisticBodyworkServices.map((service, index) => (
                <AccordionItem key={index} value={`holistic-${index}`} className="border-auszeit-pink/20">
                  <AccordionTrigger className="font-cormorant font-medium text-auszeit-text hover:text-auszeit-pink text-lg">
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

        {/* AROMATHERAPIE */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-cormorant text-3xl font-medium text-auszeit-text mb-4">
              AROMATHERAPIE
            </h3>
            <p className="text-auszeit-text/70 max-w-3xl mx-auto leading-relaxed">
              Die Kraft der ätherischen Öle für Körper und Seele. Aromatherapie wirkt über 
              die Haut und den Geruchssinn und kann tiefe Entspannung und emotionales 
              Wohlbefinden fördern.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {aromatherapyServices.map((service, index) => (
                <AccordionItem key={index} value={`aroma-${index}`} className="border-auszeit-pink/20">
                  <AccordionTrigger className="font-cormorant font-medium text-auszeit-text hover:text-auszeit-pink text-lg">
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

        {/* WELLNESS & ENERGIEMASSAGEN */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-cormorant text-3xl font-medium text-auszeit-text mb-4">
              WELLNESS & ENERGIEMASSAGEN
            </h3>
            <p className="text-auszeit-text/70 max-w-3xl mx-auto leading-relaxed">
              Klassische und energetische Massagen für tiefe Entspannung und Regeneration. 
              Diese Anwendungen lösen Verspannungen, fördern die Durchblutung und 
              harmonisieren den Energiefluss im Körter.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {wellnessServices.map((service, index) => (
                <AccordionItem key={index} value={`wellness-${index}`} className="border-auszeit-pink/20">
                  <AccordionTrigger className="font-cormorant font-medium text-auszeit-text hover:text-auszeit-pink text-lg">
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

        {/* Angebot des Monats */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-auszeit-pink" />
              <h3 className="font-cormorant text-3xl font-medium text-auszeit-text">
                Angebot des Monats
              </h3>
              <Star className="w-6 h-6 text-auszeit-pink" />
            </div>
            <p className="text-auszeit-text/70 max-w-xl mx-auto">
              Jeden Monat stelle ich dir eine besondere Anwendung vor - entdecke neue Wege zu deinem Wohlbefinden.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="/lovable-uploads/695b785a-8182-4619-a74b-d296fc9753ab.png"
                alt="Angebot des Monats - Holistic Pulsing"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
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
