
import { motion } from "framer-motion";

const LearnAboutDoping: React.FC = () => {
    const cards = [
        {
          title: "What is Doping?",
          description: "Doping refers to the use of banned substances by athletes to enhance performance.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Health Risks",
          description: "Doping can lead to serious health issues including heart problems, hormonal imbalances, and organ failure.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Testing & Regulations",
          description: "Anti-doping agencies conduct strict tests to ensure fair play in sports.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Banned Substances",
          description: "Various substances like steroids, stimulants, and blood boosters are strictly prohibited in professional sports.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Fair Play & Integrity",
          description: "Doping undermines sportsmanship and the true spirit of competition, affecting fair play.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Sanctions & Penalties",
          description: "Athletes caught doping face bans, disqualifications, and severe reputational damage.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Ethical Responsibilities",
          description: "Athletes, coaches, and medical staff are responsible for maintaining ethical sports practices.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Educational Programs",
          description: "Anti-doping organizations provide awareness programs to educate athletes about the dangers of doping.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Biological Passport",
          description: "A long-term monitoring system that tracks athletes' biological variables to detect doping over time.",
          image: "https://via.placeholder.com/400"
        },
        {
          title: "Whistleblower Protection",
          description: "Anti-doping bodies protect whistleblowers who expose doping violations and unethical practices.",
          image: "https://via.placeholder.com/400"
        }
      ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Anti-Doping Awareness</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-300"
          >
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LearnAboutDoping;
