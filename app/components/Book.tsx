'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BookProps {
  title: string;
  author: string;
  color: string;
  href?: string;
  index: number;
  isActive: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
}

export default function Book({ 
  title, 
  author, 
  color, 
  href = "/all",
  index,
  isActive,
  onDragStart,
  onDragEnd
}: BookProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 10, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const bookRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Book dimensions
  const BOOK_THICKNESS = 400;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;

      // Convert mouse movement to rotation angles
      // Limit the rotation to keep the book visible
      const newRotationY = Math.max(-30, Math.min(30, deltaX * 0.5));
      const newRotationX = Math.max(-20, Math.min(30, 10 + deltaY * 0.5));

      setRotation({ x: newRotationX, y: newRotationY });
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
        // Animate back to default rotation
        setRotation({ x: 10, y: 0 });
        onDragEnd();

        // If it was a quick click (less than 200ms), navigate to all books
        const clickDuration = Date.now() - mouseDownTime;
        if (clickDuration < 200 && Math.abs(e.clientX - startPos.x) < 5 && Math.abs(e.clientY - startPos.y) < 5) {
          // Create slug from title
          const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          router.push(`${href}#${slug}`);
        }
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startPos, onDragEnd, mouseDownTime, href, router, title]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isActive) return;
    
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setMouseDownTime(Date.now());
    onDragStart();
  };

  return (
    <div 
      ref={bookRef}
      className={`book-container relative w-[800px] h-[100px] my-12 mx-auto transition-all duration-700 ${
        !isActive ? 'pointer-events-none' : ''
      } ${isDragging ? 'cursor-grabbing' : 'cursor-grab hover:scale-105'}`}
      style={{
        transform: !isActive ? `translateY(${index < 0 ? '-100vh' : '100vh'})` : 'none'
      }}
      onMouseDown={handleMouseDown}
    >
      <div 
        className="book-wrapper absolute w-full h-full transform-style-preserve-3d"
        style={{
          transform: `perspective(2000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformOrigin: 'center center',
          transition: isDragging ? 'none' : 'transform 0.5s ease-out'
        }}
      >
        {/* Book container */}
        <div className="relative w-full h-full transform-style-preserve-3d">
          {/* Front cover */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              transform: `translateZ(${0}px)`,
              backgroundColor: color,
            }}
          >
            <div className="w-full h-full flex items-center justify-between px-8">
              <span className="text-white text-lg font-light opacity-80">{author}</span>
              <span className="text-white text-2xl font-medium tracking-wide opacity-90">{title}</span>
              <div className="opacity-60">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Back cover */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              transform: `translateZ(-${BOOK_THICKNESS/2}px)`,
              backgroundColor: color,
              filter: 'brightness(90%)',
            }}
          />

          {/* Spine */}
          <div 
            className={`absolute right-0 w-[${BOOK_THICKNESS}px] h-full origin-right`}
            style={{ 
              transform: 'rotateY(-90deg)',
              backgroundColor: color,
              filter: 'brightness(85%)',
              width: BOOK_THICKNESS,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-sm font-medium tracking-wide opacity-90 transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                {title}
              </span>
            </div>
          </div>

          {/* Left edge (pages) */}
          <div 
            className={`absolute left-0 w-[${BOOK_THICKNESS}px] h-full origin-left`}
            style={{ 
              transform: 'rotateY(90deg)',
              backgroundColor: '#fff',
              width: BOOK_THICKNESS,
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.05), rgba(0,0,0,0))',
            }}
          >
            {/* Pages effect */}
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)'
            }} />
          </div>

          {/* Top edge */}
          <div 
            className="absolute top-0 w-full h-[60px] origin-top"
            style={{ 
              transform: 'rotateX(-90deg)',
              backgroundColor: color,
              filter: 'brightness(95%)',
              height: BOOK_THICKNESS,
            }}
          />

          {/* Bottom edge */}
          <div 
            className="absolute bottom-0 w-full h-[60px] origin-bottom"
            style={{ 
              transform: 'rotateX(90deg)',
              backgroundColor: color,
              filter: 'brightness(70%)',
              height: BOOK_THICKNESS,
            }}
          />
        </div>
      </div>
    </div>
  );
}
