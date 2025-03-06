'use client';

import Link from 'next/link';

interface BookLinkProps {
  books: Array<{
    title: string;
    slug: string;
  }>;
}

export default function BookLink({ books }: BookLinkProps) {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {books.map((book) => (
        <Link
          key={book.slug}
          href={`/${book.slug}`}
          className="bg-white bg-opacity-10 text-[#E8C0A0] px-6 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 flex items-center space-x-2"
        >
          <span>{book.title}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transform -rotate-45"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
