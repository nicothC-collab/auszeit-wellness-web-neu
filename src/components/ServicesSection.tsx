
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Reiki",
      description: "Eine sanfte Energiearbeit, die die natürlichen Selbstheilungskräfte aktiviert und tiefe Entspannung fördert.",
      icon: "🌸"
    },
    {
      title: "Energiemassagen",
      description: "Liebevolle Berührungen, die Blockaden lösen und die Energie wieder zum Fließen bringen.",
      icon: "🌿"
    },
    {
      title: "Craniosacrale Entspannung",
      description: "Eine sehr sanfte Behandlungsform, die das craniosacrale System harmonisiert und tiefe Ruhe schenkt.",
      icon: "✨"
    },
    {
      title: "Yin Yoga",
      description: "Ruhige, meditative Yoga-Praxis mit längeren Haltungen für tiefe Entspannung und innere Ruhe.",
      icon: "🧘‍♀️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-auszeit-text mb-6">
            Meine Anwendungen
          </h2>
          <div className="w-24 h-0.5 bg-auszeit-pink mx-auto mb-6"></div>
          <p className="text-lg text-auszeit-text/70 max-w-2xl mx-auto">
            Ich biete dir einen geschützten Raum, in dem Heilung geschehen darf. Durch sanfte Berührungen und Impulse werden die Selbstheilungskräfte aktiviert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-auszeit-pink/20 hover:border-auszeit-pink/40 transition-all duration-300 hover:scale-105 bg-auszeit-pink-light/30">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-cormorant text-xl font-medium text-auszeit-text mb-4">
                  {service.title}
                </h3>
                <p className="text-auszeit-text/70 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-auszeit-pink-light/50 rounded-2xl p-8 md:p-12 text-center">
          <Heart className="w-12 h-12 text-auszeit-pink mx-auto mb-6" />
          <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-auszeit-text mb-6">
            Dein Weg zu mehr Kraft und Klarheit
          </h3>
          <p className="text-lg leading-relaxed text-auszeit-text/80 max-w-3xl mx-auto mb-6">
            Durch die entstehende tiefe Entspannung kann die gestaute Energie wieder fließen und du kannst dich selbst und deine Bedürfnisse wieder wahrnehmen. Du kannst dankbar annehmen, was sich zeigen will und darfst dann liebevoll gehen lassen, was nicht (mehr) zu dir gehört.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
