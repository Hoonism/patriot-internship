'use client';

import { useState, useEffect, useRef } from 'react';

export default function WrinkledFlyer() {
  // Number of folds (panels)
  const numPanels = 7;
  // Total unfolded height in pixels (adjust as needed)
  const totalHeight = 1000;
  // Height for each panel
  const panelHeight = totalHeight / numPanels;
  // Factor to speed up the unfolding progress
  const unfoldSpeedFactor = 3;

  const containerRef = useRef<HTMLDivElement>(null);
  // Progress goes from 0 (fully folded) to 1 (fully unfolded)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate a progress value based on the container's position
      let newProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      // Apply the unfold speed factor and clamp the value between 0 and 1
      newProgress = Math.max(0, Math.min(1, newProgress * unfoldSpeedFactor));
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    // Call it once so that progress is set on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on progress
  // Start at 1 (full width) and scale down to 0.85 as progress increases
  const scale = 1 - (progress * 0.15);

  // Build an array of panels.
  // The top (panel 0) remains flat.
  // For the others, we alternate the initial rotation:
  // odd-index panels start folded upward (rotateX: -90, origin at top)
  // even-index panels start folded downward (rotateX: 90, origin at bottom)
  const panels = Array.from({ length: numPanels }, (_, i) => {
    let initialRotation = 0;
    let transformOrigin = 'center';

    if (i > 0) {
      if (i % 2 === 1) {
        initialRotation = -90;
        transformOrigin = 'top';
      } else {
        initialRotation = 90;
        transformOrigin = 'bottom';
      }
    }
    // Interpolate the rotation from initial value (when progress = 0) to 0 (when progress = 1)
    const currentRotation = initialRotation * (1 - progress);
    // Each panel moves from 0 (folded) to its final vertical position (i * panelHeight)
    const currentTranslateY = panelHeight * i * progress;

    return (
      <div
        key={i}
        className="panel absolute left-0 right-0 overflow-hidden"
        style={{
          height: `${panelHeight}px`,
          top: 0,
          transform: `translateY(${currentTranslateY}px) rotateX(${currentRotation}deg)`,
          transformOrigin,
          transition: 'transform 0.1s linear',
          // Higher panels stack on top
          zIndex: numPanels - i,
        }}
      >
        {/* Each panel shows a portion of the image.
            The background image is sized to the total unfolded height,
            and the backgroundPosition shifts upward for each panel */}
        <div
          className="panel-content w-full h-full"
          style={{
            backgroundImage: 'url(/hand.png)',
            backgroundSize: `100% ${totalHeight}px`,
            backgroundPosition: `center -${i * panelHeight}px`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      className="wrinkled-flyer relative mx-auto"
      style={{ 
        width: '800px', // Match book width from Book.tsx
        height: `${totalHeight}px`, 
        marginTop: '20vh',
        transform: `scale(${scale})`,
        transformOrigin: 'center top',
        transition: 'transform 0.1s linear'
      }}
    >
      {panels}
    </div>
  );
}
