
import { Star } from 'lucide-react';

const MonthlyOffer = () => {
  return (
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
  );
};

export default MonthlyOffer;
