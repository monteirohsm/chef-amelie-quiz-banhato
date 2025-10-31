interface ProgressDotsProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressDots({ currentStep, totalSteps }: ProgressDotsProps) {
  return (
    <div className="flex flex-col items-center mb-5 sm:mb-6">
      {/* Progress Counter Text */}
      <div className="text-xs sm:text-sm text-gray-500 font-medium mb-2">
        Étape {currentStep} sur {totalSteps}
      </div>
      
      {/* Progress Dots */}
      <div className="flex justify-center">
        {[...Array(totalSteps)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mx-0.5 sm:mx-1 ${
              i < currentStep ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
