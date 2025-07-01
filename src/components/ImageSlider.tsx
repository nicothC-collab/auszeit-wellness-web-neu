
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import type { CarouselApi } from '@/components/ui/carousel';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const images = [
    {
      src: '/lovable-uploads/12322054-f3ec-46ee-b8ab-67fa4fb38381.png',
      alt: 'Auszeit - Sonja Thalhammer Logo',
      title: 'Auszeit',
      subtitle: 'für Körper, Geist & Seele'
    },
    {
      src: '/lovable-uploads/fb02c27f-2396-4d72-a7de-1c7a727d965c.png',
      alt: 'Praxisraum mit Auszeit Kissen',
      title: 'Entspannung und Wohlbefinden',
      subtitle: 'In ruhiger und gemütlicher Atmosphäre'
    },
    {
      src: '/lovable-uploads/b59cdb88-a5c3-4c63-9cd3-8fd794b8b38e.png',
      alt: 'Behandlungsraum mit natürlichen Elementen',
      title: 'Natürliche Heilung',
      subtitle: 'Aktiviere deine inneren Kräfte'
    }
  ];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-gradient-to-b from-auszeit-pink-light to-white">
      <Carousel 
        className="w-full h-full" 
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                
                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="text-center text-auszeit-text px-4 max-w-4xl">
                    <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light mb-4 animate-fade-in drop-shadow-lg">
                      {image.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90 animate-fade-in drop-shadow-md">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-auszeit-text backdrop-blur-sm transition-all duration-300" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-auszeit-text backdrop-blur-sm transition-all duration-300" />
      </Carousel>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-auszeit-pink scale-110" 
                : "bg-auszeit-pink/50 hover:bg-auszeit-pink/70"
            )}
            onClick={() => {
              if (api) {
                api.scrollTo(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
