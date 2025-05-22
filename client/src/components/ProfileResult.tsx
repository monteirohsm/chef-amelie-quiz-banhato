import { motion } from "framer-motion";

interface ProfileResultProps {
  onViewSuggestions: () => void;
}

export default function ProfileResult({ onViewSuggestions }: ProfileResultProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="profile-result max-w-md mx-auto my-16 px-6"
    >
      <h2 className="text-2xl font-bold mb-2 text-primary">Votre profil gourmand :</h2>
      <h3 className="text-3xl font-normal text-[#333333] mb-10">La Curieuse Épicurienne</h3>

      <div className="space-y-10 text-[#333333] text-left">
        <p className="text-lg leading-relaxed">
          Vous êtes du genre à explorer de nouvelles saveurs, à tester des recettes inattendues et à faire plaisir sans culpabilité.
        </p>
        
        <p className="text-lg leading-relaxed">
          Votre palais recherche l'équilibre entre le plaisir et le bien-être — sans sacrifier la gourmandise.
        </p>
        
        <p className="text-lg leading-relaxed">
          Ce que la Chef Amélie a préparé pour vous est exactement ça : un univers de recettes qui allient textures, arômes et nutrition intelligente.
        </p>
      </div>

      <div className="mt-12">
        <button 
          className="btn-primary btn-pulse w-full py-4 px-8 rounded-full text-lg font-normal"
          onClick={onViewSuggestions}
          style={{ 
            background: "linear-gradient(90deg, #E78D7B 0%, #E07260 100%)",
            boxShadow: "0 4px 15px rgba(224, 114, 96, 0.3)"
          }}
        >
          Voir les suggestions de la Chef 🍽️
        </button>
      </div>
    </motion.div>
  );
}
