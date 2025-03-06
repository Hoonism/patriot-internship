'use client';

import { useState, useMemo } from 'react';
import Image from "next/image";
import Link from "next/link";
import Book from "./components/Book";
import ScrollIndicator from "./components/ScrollIndicator";
import Newsletter from "./components/Newsletter";
import WrinkledFlyer from "./components/WrinkledFlyer";
import BeneathTheSurface from "./components/BeneathTheSurface";

const books = [
  { title: 'BOOM', author: "Hobart and Huber", color: "#8B4B62" },
  { title: "Poor Charlie's Almanack", author: "Peter D. Kaufman", color: "#C6A856" },
  { title: "Scaling People", author: "Claire Hughes Johnson", color: "#A67C52" },
  { title: "Pieces of the Action", author: "Vannevar Bush", color: "#2F4F4F" },
  { title: "Where Is My Flying Car?", author: "J. Storrs Hall", color: "#556B2F" },
  { title: "The Big Score", author: "Michael S. Malone", color: "#483D8B" },
  { title: "Scientific Freedom", author: "Donald W. Braben", color: "#800000" },
  { title: "Working in Public", author: "Nadia Eghbal", color: "#4B0082" },
  { title: "The Art of Doing Science", author: "Richard W. Hamming", color: "#191970" },
  { title: "The Making of Prince of Persia", author: "Jordan Mechner", color: "#006400" },
  { title: "Get Together", author: "Bailey Richardson et al.", color: "#8B008B" },
  { title: "An Elegant Puzzle", author: "Will Larson", color: "#8B0000" },
  { title: "The Revolt of the Public", author: "Martin Gurri", color: "#2F4F4F" },
  { title: "Stubborn Attachments", author: "Tyler Cowen", color: "#4A4A4A" },
  { title: "The Dream Machine", author: "M. Mitchell Waldrop", color: "#3C1414" },
  { title: "High Growth Handbook", author: "Elad Gil", color: "#1A472A" }
];

export default function Home() {
  const [activeBookIndex, setActiveBookIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;
    
    const query = searchQuery.toLowerCase();
    return books.filter(book => 
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const getBackgroundColor = () => {
    if (activeBookIndex === null) return '#1a1a1a';
    const book = filteredBooks[activeBookIndex];
    if (!book) return '#1a1a1a';
    
    const color = book.color;
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 0.15)`;
  };

  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundColor: getBackgroundColor(),
        transition: 'background-color 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-900/30 to-zinc-900/30 pointer-events-none" />

      {/* Logo */}
      <header className="fixed top-8 left-8 z-50">
        <Link href="/" className="flex items-center group">
          <Image
            src="/stripe-logo-white.svg"
            alt="Stripe Press Logo"
            width={32}
            height={32}
            className="mr-4 opacity-90"
          />
          <span className="text-white opacity-90 group-hover:opacity-100">Press</span>
        </Link>
      </header>

      {/* Search Bar */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-xl pointer-events-auto">
        <div className="mx-4">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 bg-black/30 backdrop-blur-md text-white placeholder-white/50 rounded-full 
                      border border-white/20 focus:border-white/40 focus:outline-none transition-colors
                      hover:bg-black/40"
          />
        </div>
      </div>

      <div className="px-24 py-12">
        <div className="max-w-5xl mx-auto space-y-32">
          {filteredBooks.map((book, index) => (
            <div key={book.title} className="book-section">
              <Book
                {...book}
                index={activeBookIndex !== null ? index - activeBookIndex : 0}
                isActive={activeBookIndex === null || activeBookIndex === index}
                onDragStart={() => {
                  setActiveBookIndex(index);
                  setIsDragging(true);
                }}
                onDragEnd={() => {
                  setIsDragging(false);
                  setTimeout(() => {
                    setActiveBookIndex(null);
                  }, 500);
                }}
              />
            </div>
          ))}
          
          {/* Add the wrinkled flyer at the end */}
          <WrinkledFlyer />

          {/* Film section */}
          <section className="film-section bg-[#1C1C1C] text-white py-24">
          </section>
        </div>
      </div>

      {/* Beneath the Surface section */}
      <BeneathTheSurface />

      {/* Newsletter section */}
      <div className="newsletter-section mt-0">
        <Newsletter />
      </div>

      <ScrollIndicator totalBooks={books.length} isDragging={isDragging} />
    </main>
  );
}
