import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1920&h=820&fit=crop&crop=center',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=820&fit=crop&crop=center',
  },
  {
    image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=1920&h=820&fit=crop&crop=center',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Автопрокрутка
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-slate-900/10" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Centered vertically */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-slate-900/40 backdrop-blur-sm text-white hover:bg-indigo-600 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-slate-900/40 backdrop-blur-sm text-white hover:bg-indigo-600 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 shadow-lg",
              index === currentSlide 
                ? "w-10 bg-white" 
                : "w-2.5 bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
