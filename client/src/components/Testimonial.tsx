import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@/assets/icons";

interface TestimonialData {
  message: string;
  time: string;
  image?: string;
  imageAlt?: string;
}

interface TestimonialProps {
  testimonials: TestimonialData[];
  onComplete: () => void;
}

export default function Testimonial({ testimonials, onComplete }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Configuração mínima de deslize para mudar o depoimento
  const minSwipeDistance = 50;

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (currentIndex === testimonials.length - 1) {
      // If we're on the last testimonial, call onComplete to proceed to the next step
      onComplete();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Handlers de toque para deslizar na tela
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Auto-avança o carrossel a cada 5 segundos (desativado se o usuário interagir)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < testimonials.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div className="testimonial-wrapper max-w-md mx-auto">
      <div className="mb-4 text-center text-primary font-medium">
        Faites glisser ➤ pour voir ce qu'elles disent.
      </div>
      
      <div className="h-[500px] overflow-hidden mb-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="testimonial h-full w-full"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="testimonial-content p-5 bg-white rounded-2xl shadow-lg h-full flex flex-col"
                 style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
              <p 
                className="mb-4 text-[#333333] text-sm md:text-base leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: current.message }} 
              />
              
              {current.image && (
                <div className="flex-grow flex items-center justify-center">
                  <div className="image-container w-full h-[280px] flex items-center justify-center">
                    <div className="relative w-full h-full" style={{ aspectRatio: '1.5/1' }}>
                      <img 
                        src={current.image} 
                        alt={current.imageAlt || "Témoignage"} 
                        className="rounded-xl shadow-sm"
                        style={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          display: 'block'
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {current.time && (
                <div className="text-right mt-3">
                  <span className="text-xs text-gray-500">{current.time}</span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center gap-2 my-4 px-2">
        <button 
          onClick={handlePrev}
          className="bg-black hover:bg-gray-800 transition-colors text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft />
        </button>
        
        <div className="flex gap-1.5 items-center">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          className={`${currentIndex === testimonials.length - 1 ? 'bg-primary hover:bg-primary/90' : 'bg-black hover:bg-gray-800'} transition-colors text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md`}
          aria-label={currentIndex === testimonials.length - 1 ? "Voir mon profil" : "Témoignage suivant"}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="text-center mt-8">
        <button 
          className="btn-primary btn-pulse w-full md:w-auto py-4 px-10 font-medium text-base rounded-full"
          onClick={onComplete}
        >
          🔍 DÉCOUVRIR MON PROFIL
        </button>
      </div>
    </div>
  );
}
