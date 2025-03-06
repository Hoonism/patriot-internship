'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
  };

  return (
    <div className="w-full min-w-screen bg-white">
      <div className="max-w-5xl mx-auto px-24 py-12">
        <div className="space-y-8">
          <p className="text-xl text-[#1a1a1a] font-serif leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris.
          </p>

          <p className="text-xl text-[#1a1a1a] font-serif leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          <p className="text-base text-[#1a1a1a] font-serif">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-4 py-2 bg-[#f6f8fa] border border-[#e1e4e8] rounded-md text-[#1a1a1a] placeholder-[#6a737d] focus:outline-none focus:border-[#1a1a1a] font-serif"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#1a1a1a] text-white rounded-md hover:bg-black transition-colors font-serif"
            >
              Submit
            </button>
          </form>

          <p className="text-sm text-[#6a737d]">
            Sed ut perspiciatis unde omnis. Read our{' '}
            <Link href="#" className="underline hover:text-[#1a1a1a] transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="mt-16 space-y-4 text-sm text-[#6a737d]">
          <p>
            Nemo enim ipsam voluptatem. Please read our{' '}
            <Link href="#" className="underline hover:text-[#1a1a1a] transition-colors">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="#" className="underline hover:text-[#1a1a1a] transition-colors">
              Cookie Settings
            </Link>
            .
          </p>
          <p>&copy; 2025 Lorem Ipsum, Inc.</p>
          <p>
            354 Lorem Ipsum Boulevard<br />
            South San Francisco,<br />
            California, 94080
          </p>
          <p>
            <Link
              href="#"
              className="text-[#1a1a1a] flex items-center justify-center gap-1 hover:underline"
            >
              View All Books
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-180"
              >
                <path
                  d="M8 12L3 7L4 6L8 10L12 6L13 7L8 12Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
