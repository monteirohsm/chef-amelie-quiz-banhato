import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FacebookPixel } from "../../lib/fbPixel";

// Componente de botão pulsante coral
const CoralPulseButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return (
    <div className="relative inline-block w-full mb-3 sm:mb-4">
      <div className="absolute inset-0 rounded-full opacity-30" 
        style={{
          background: "linear-gradient(90deg, #E78D7B 0%, #E07260 100%)",
          animation: "ping 3s cubic-bezier(0.66, 0, 0, 1) infinite"
        }}
      ></div>
      <button 
        onClick={onClick}
        className="relative w-full py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg font-normal text-white"
        style={{ 
          background: "linear-gradient(90deg, #E78D7B 0%, #E07260 100%)",
          boxShadow: "0 4px 15px rgba(224, 114, 96, 0.3)"
        }}
      >
        {children}
      </button>
    </div>
  );
};

interface ProfileResultProps {
  onViewSuggestions: () => void;
}

export default function ProfileResult({ onViewSuggestions }: ProfileResultProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="profile-result max-w-md mx-auto my-5 sm:my-8 md:my-12 px-3 sm:px-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-primary">Votre profil gourmand</h2>
      <h3 className="text-2xl sm:text-3xl font-normal text-[#333333] mb-6 sm:mb-8 md:mb-10">La Curieuse Épicurienne</h3>

      <div className="space-y-5 sm:space-y-8 md:space-y-10 text-[#333333] text-left">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Vous ne supportez pas une cuisine sans âme. Vous voulez du goût, de la texture, du plaisir, mais aussi de la légèreté, de la santé et du bien-être.
        </p>
        
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Vous savez apprécier ce qui est bon…
        </p>
        
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Mais vous avez compris que le véritable luxe, c'est de manger sans s'enflammer, sans s'épuiser, sans se culpabiliser.
        </p>
        
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Ce qu'elle a préparé pour vous est clair: Des recettes sans sucre, sans gluten, sans lactose, mais avec la texture d'une pâtisserie, le parfum d'une cuisine de grand-mère et une nutrition pensée dans les moindres détails.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12">
        <CoralPulseButton onClick={onViewSuggestions}>
          Voir les suggestions de la Chef 🍽️
        </CoralPulseButton>
      </div>
    </motion.div>
  );
}
