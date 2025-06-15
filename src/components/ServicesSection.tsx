
import ServicesIntro from './services/ServicesIntro';
import ServiceCategory from './services/ServiceCategory';
import MonthlyOffer from './services/MonthlyOffer';
import ServicesBottom from './services/ServicesBottom';
import { holisticBodyworkServices, aromatherapyServices, wellnessServices } from './services/servicesData';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ServicesIntro />

        <ServiceCategory
          title="HOLISTIC BODYWORK"
          description="Der Mensch als Ganzes. Ganzheitliche Energiearbeit bedeutet, Körper, Geist & Seele gleichermaßen zu begegnen. Ziel ist die Harmonisierung und das Wohlbefinden des Menschen auf allen Ebenen, also körperlich, seelisch und emotional, wiederherzustellen. Mit sanften Berührungen an verschiedenen energetischen Punkten des Körpers können Emotionen befreit, Themen gelöst, der Kopf frei und Gedanken wieder klarer werden."
          services={holisticBodyworkServices}
          categoryKey="holistic"
          priceInfo="Alle Anwendungen buchbar für 30, 60 oder 90 Minuten • Jede 30 Minuten: € 35,00"
        />

        <ServiceCategory
          title="AROMATHERAPIE"
          description="Dufte Entspannung. Ätherische Öle enthalten die gebündelte Lebenskraft der ganzen Pflanze. Sie wirken unmittelbar auf das Gehirn und können auf diese Weise sowohl physische, als auch psychische Prozesse im Körper des Menschen positiv beeinflussen."
          services={aromatherapyServices}
          categoryKey="aroma"
        />

        <ServiceCategory
          title="WELLNESS & ENERGIEMASSAGEN"
          description="Klassische und energetische Massagen für tiefe Entspannung und Regeneration. Diese Anwendungen lösen Verspannungen, fördern die Durchblutung und harmonisieren den Energiefluss im Körper."
          services={wellnessServices}
          categoryKey="wellness"
          priceInfo="Alle Anwendungen buchbar für 30, 60 oder 90 Minuten • Jede 30 Minuten: € 35,00"
        />

        <MonthlyOffer />

        <ServicesBottom />
      </div>
    </section>
  );
};

export default ServicesSection;
