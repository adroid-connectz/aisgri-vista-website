
import React from 'react';
import { Check } from 'lucide-react';

const Objectives: React.FC = () => {
  const objectivesList = [
    "To highlight cutting-edge research on explainable, ethical, and trustworthy AI",
    "To explore AI's applications in domains of social impact: health, education, climate, and media",
    "To discuss emerging AI governance models, regulatory challenges, and digital trust frameworks",
    "To encourage cross-sectoral collaborations and public engagement in AI literacy and fairness",
    "To amplify voices from underrepresented communities in the development of inclusive AI systems"
  ];

  return (
    <section id="objectives" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text text-center mb-8 border-b-4 border-goldsmiths-blue pb-2 inline-block mx-auto">
          Objectives
        </h2>
        
        <div className="max-w-3xl mx-auto bg-goldsmiths-beige shadow-lg rounded-lg p-6 border border-gray-200">
          {objectivesList.map((objective, index) => (
            <div key={index} className="flex items-start mb-4 last:mb-0">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-goldsmiths-blue" />
              </div>
              <p className="ml-4 font-publico text-lg text-goldsmiths-text">{objective}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
