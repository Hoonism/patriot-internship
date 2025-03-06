import Image from 'next/image';
import Link from 'next/link';

interface Episode {
  number: string;
  title: string;
  description: string;
  duration: string;
}

const episodes: Episode[] = [
  {
    number: "01",
    title: "Building Tomorrow's Infrastructure",
    description: "Exploring the foundations of modern civic development",
    duration: "32:15"
  },
  {
    number: "02",
    title: "The Future of Urban Transit",
    description: "Reimagining transportation in growing cities",
    duration: "28:45"
  },
  {
    number: "03",
    title: "Sustainable Infrastructure",
    description: "Green solutions for lasting impact",
    duration: "35:20"
  },
  {
    number: "04",
    title: "Digital Infrastructure",
    description: "The backbone of modern society",
    duration: "30:10"
  },
  {
    number: "05",
    title: "Infrastructure Innovation",
    description: "Breaking ground on new solutions",
    duration: "33:45"
  }
];

export default function BeneathTheSurface() {
  return (
    <main className="min-h-screen bg-[#1C1C1C] text-white">
      <header className="fixed top-8 left-8 z-50">
        <Link href="/" className="flex items-center group">
          <Image
            src="/stripe-logo.svg"
            alt="Stripe Press Logo"
            width={32}
            height={32}
            className="mr-4 opacity-90"
          />
          <span className="text-white opacity-90 group-hover:opacity-100">Press</span>
        </Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Image */}
        <div className="relative h-screen lg:sticky lg:top-0 bg-[#151515] flex items-center justify-center">
          <div className="w-[80%] max-w-[500px] aspect-square relative">
            <Image
              src="/beneath-the-surface.png"
              alt="Beneath the Surface Podcast"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="px-8 lg:px-16 py-32 bg-[#1C1C1C]">
          <div className="max-w-xl">
            <h1 className="text-5xl font-serif mb-4">Beneath the Surface</h1>
            <p className="text-xl italic text-gray-400 mb-12">
              A Stripe Press podcast about infrastructure
            </p>

            <div className="space-y-8 mb-16">
              <p className="text-lg text-gray-300">
                Infrastructure is—finally—having its moment. From transit systems
                to supply chains, policymakers, entrepreneurs, and others are
                evaluating whether our civic infrastructure is up to the task of
                supporting a growing—and warming—globe.
              </p>

              <p className="text-lg text-gray-300">
                In each episode of <span className="italic">Beneath the Surface</span>, we explore some of the most
                complicated challenges facing our world and talk to the people who
                are rolling up their sleeves to build solutions.
              </p>
            </div>

            {/* Audio Player */}
            <div className="bg-[#252525] p-6 rounded-lg mb-16">
              <div className="text-center text-gray-400 mb-4">[click to play]</div>
              <div className="flex items-center space-x-4">
                <button className="p-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </button>
                <div className="flex-1 h-1 bg-gray-700 rounded-full">
                  <div className="w-0 h-full bg-white rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">0:00 / 2:08</span>
              </div>
            </div>

            {/* Episodes */}
            <div className="space-y-4">
              {episodes.map((episode) => (
                <button
                  key={episode.number}
                  className="w-full bg-transparent hover:bg-[#252525] p-6 rounded-lg transition-colors border border-gray-800 text-left group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium group-hover:text-white">
                      Episode {episode.number}
                    </h3>
                    <span className="text-sm text-gray-400">{episode.duration}</span>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300">
                    {episode.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
