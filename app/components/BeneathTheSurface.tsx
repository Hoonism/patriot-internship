'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BeneathTheSurface() {
  return (
    <section className="beneath-the-surface-section relative overflow-hidden bg-black py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-[#E8C0A0] text-sm tracking-wider mb-4">A STRIPE PRESS PODCAST</p>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          {/* Title with globe */}
          <div className="relative mb-8">
            <h2 className="text-6xl font-bold text-white tracking-wider">
              BENEATH THE SURFACE
            </h2>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-32">
                <Image
                  src="/globe.svg"
                  alt="Globe"
                  width={128}
                  height={128}
                  className="animate-spin-slow"
                />
              </div>
            </div>
          </div>

          {/* Audio wave visualization */}
          <div className="w-full max-w-lg mx-auto mb-8">
            <div className="flex items-center justify-center space-x-1 h-12">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#E8C0A0] opacity-50"
                  style={{
                    height: `${(Math.sin(i * 0.2) * 20 + 30).toFixed(3)}%`,
                  }}
                />
              ))}
            </div>
          </div>

          <p className="text-[#E8C0A0] text-lg tracking-wider mb-12">
            A SERIES ABOUT INFRASTRUCTURE
          </p>

          <Link 
            href="/beneath-the-surface"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#E8C0A0] text-black rounded-full hover:bg-white transition-colors duration-300"
          >
            Listen Now
          </Link>
        </div>
      </div>
    </section>
  );
}
