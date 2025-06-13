
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
          description="Ganzheitliche Körperarbeit, die Körper, Geist und Seele in Einklang bringt. Diese sanften Methoden aktivieren die natürlichen Selbstheilungskräfte und fördern tiefe Entspannung und innere Balance."
          services={holisticBodyworkServices}
          categoryKey="holistic"
          priceInfo="Alle Anwendungen buchbar für 30, 60 oder 90 Minuten • Jede 30 Minuten: € 35,00"
        />

        <ServiceCategory
          title="AROMATHERAPIE"
          description="Die Kraft der ätherischen Öle für Körper und Seele. Aromatherapie wirkt über die Haut und den Geruchssinn und kann tiefe Entspannung und emotionales Wohlbefinden fördern."
          services={aromatherapyServices}
          categoryKey="aroma"
        />

        <ServiceCategory
          title="WELLNESS & ENERGIEMASSAGEN"
          description="Klassische und energetische Massagen für tiefe Entspannung und Regeneration. Diese Anwendungen lösen Verspannungen, fördern die Durchblutung und harmonisieren den Energiefluss im Körter."
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
