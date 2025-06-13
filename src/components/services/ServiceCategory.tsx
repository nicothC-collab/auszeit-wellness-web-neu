
import { ReactNode } from 'react';
import ServiceAccordion from './ServiceAccordion';

interface Service {
  title: string;
  description: string;
  price: string;
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: Service[];
  categoryKey: string;
}

const ServiceCategory = ({ title, description, services, categoryKey }: ServiceCategoryProps) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="font-cormorant text-3xl font-medium text-auszeit-text mb-4">
          {title}
        </h3>
        <p className="text-auszeit-text/70 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <ServiceAccordion services={services} categoryKey={categoryKey} />
      </div>
    </div>
  );
};

export default ServiceCategory;
