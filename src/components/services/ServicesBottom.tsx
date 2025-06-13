
import { Sparkles } from 'lucide-react';

const ServicesBottom = () => {
  return (
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
  );
};

export default ServicesBottom;
