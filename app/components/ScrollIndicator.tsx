import { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  totalBooks: number;
  isDragging: boolean;
}

export default function ScrollIndicator({ totalBooks }: ScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.book-section, .film-section, .newsletter-section');
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Find the active section
      let activeSection = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        
        // If section is in view and its top is above the viewport center
        if (sectionTop <= scrollPosition + (viewportHeight / 2)) {
          activeSection = index;
        }
      });
      
      setActiveIndex(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.book-section, .film-section, .newsletter-section');
    const targetSection = sections[index];
    
    if (targetSection) {
      const rect = targetSection.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const targetPosition = rect.top + scrollPosition;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-black pointer-events-none transition-opacity duration-300 z-20 ${
          isHovering ? 'opacity-40' : 'opacity-0'
        }`} 
      />

      {/* Scroll Indicator */}
      <div 
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex flex-col gap-3">
          {/* Book indicators */}
          {Array.from({ length: totalBooks }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`h-1 transition-all duration-300 ${
                index === activeIndex || index === hoveredIndex
                  ? 'w-8 bg-white'
                  : 'w-6 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Scroll to book ${index + 1}`}
            />
          ))}

          {/* Film section indicator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection(totalBooks)}
              onMouseEnter={() => setHoveredIndex(totalBooks)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`h-1 transition-all duration-300 ${
                totalBooks === activeIndex || totalBooks === hoveredIndex
                  ? 'w-8 bg-white'
                  : 'w-6 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label="Scroll to film section"
            />
            <svg className="w-3 h-3 text-white/50" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
          </div>

          {/* Newsletter section indicator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection(totalBooks + 1)}
              onMouseEnter={() => setHoveredIndex(totalBooks + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`h-1 transition-all duration-300 ${
                totalBooks + 1 === activeIndex || totalBooks + 1 === hoveredIndex
                  ? 'w-8 bg-white'
                  : 'w-6 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label="Scroll to newsletter"
            />
            <svg className="w-3 h-3 text-white/50" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="11" y="7" width="2" height="10" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
