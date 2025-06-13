
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Service {
  title: string;
  description: string;
  price: string;
}

interface ServiceAccordionProps {
  services: Service[];
  categoryKey: string;
}

const ServiceAccordion = ({ services, categoryKey }: ServiceAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {services.map((service, index) => (
        <AccordionItem key={index} value={`${categoryKey}-${index}`} className="border-auszeit-pink/20">
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
  );
};

export default ServiceAccordion;
