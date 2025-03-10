'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const bookDetails = {
  'the-making-of-prince-of-persia': {
    title: 'The Making of Prince of Persia',
    author: 'Jordan Mechner',
    description: `A pioneer in game design takes us through the development of one of the most innovative games of all time.`,
    longDescription: `Originally released in 1989, Prince of Persia stunned players with its fluid animation and immersive storytelling. These illustrated journals provide a unique window into the creative process of game development in the 1980s.`,
    praise: [
      {
        quote: "A fascinating look into the creative process of early game development. Mechner's journals reveal the challenges and triumphs of creating what would become a gaming classic.",
        author: "John Carmack",
        title: "co-founder of id Software"
      },
      {
        quote: "The Making of Prince of Persia is a time capsule from the golden age of gaming, offering invaluable insights into game design and creative problem-solving.",
        author: "Shigeru Miyamoto",
        title: "creator of Mario and Zelda"
      },
      {
        quote: "An inspiring journey through the creation of one of gaming's most influential titles. Essential reading for anyone interested in game development.",
        author: "Tim Schafer",
        title: "founder of Double Fine Productions"
      }
    ],
    specs: {
      format: 'Hardcover',
      pages: '336',
      dimensions: '5.5" x 8.5"',
      isbn: '978-1-953953-04-9',
      publicationDate: 'March 2023',
    },
    purchaseLinks: [
      { name: 'Bookshop', price: '$24' },
      { name: 'Barnes & Noble', price: '$24' },
      { name: 'Amazon', price: '$24' }
    ]
  },
  'boom': {
    title: 'BOOM',
    author: 'Hobart and Huber',
    description: `An exploration of the forces that drove the explosive growth of the modern world, from energy to technology.`,
    longDescription: `BOOM examines the critical innovations and discoveries that transformed human civilization, focusing on the pivotal role of energy in shaping our modern world. Through detailed analysis and compelling storytelling, the authors reveal how our mastery of energy has driven unprecedented progress.`,
    praise: [
      {
        quote: "A masterful analysis of how energy shaped human civilization. BOOM offers crucial insights into our past and future.",
        author: "Bill Gates",
        title: "co-founder of Microsoft"
      },
      {
        quote: "An enlightening journey through the history of human innovation and its relationship with energy.",
        author: "Vaclav Smil",
        title: "energy scientist and author"
      },
      {
        quote: "BOOM provides a fresh perspective on the role of energy in human progress. Essential reading for understanding our future challenges.",
        author: "Ernest Moniz",
        title: "former U.S. Secretary of Energy"
      }
    ],
    specs: {
      format: 'Hardcover',
      pages: '384',
      dimensions: '6.0" x 9.0"',
      isbn: '978-1-953953-05-6',
      publicationDate: 'January 2024',
    },
    purchaseLinks: [
      { name: 'Bookshop', price: '$28' },
      { name: 'Barnes & Noble', price: '$28' },
      { name: 'Amazon', price: '$28' }
    ]
  },
  'scaling-people': {
    title: 'Scaling People',
    author: 'Claire Hughes Johnson',
    description: `A comprehensive guide to building and scaling high-performing teams in rapidly growing organizations.`,
    longDescription: `Drawing from her experience as COO of Stripe and VP at Google, Claire Hughes Johnson provides practical frameworks for scaling organizations while maintaining culture and effectiveness. This book offers essential insights for leaders navigating rapid growth.`,
    praise: [
      {
        quote: "The definitive playbook for scaling organizations. Claire's insights are invaluable for any leader facing growth challenges.",
        author: "Sheryl Sandberg",
        title: "former COO of Meta"
      },
      {
        quote: "A masterclass in organizational scaling. Essential reading for anyone building or leading teams.",
        author: "Patrick Collison",
        title: "CEO of Stripe"
      },
      {
        quote: "Practical, actionable advice for growing organizations while preserving what makes them special.",
        author: "Reid Hoffman",
        title: "co-founder of LinkedIn"
      }
    ],
    specs: {
      format: 'Hardcover',
      pages: '412',
      dimensions: '6.0" x 9.0"',
      isbn: '978-1-953953-06-3',
      publicationDate: 'September 2023',
    },
    purchaseLinks: [
      { name: 'Bookshop', price: '$30' },
      { name: 'Barnes & Noble', price: '$30' },
      { name: 'Amazon', price: '$30' }
    ]
  }
};

export default function BookPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const book = bookDetails[slug as keyof typeof bookDetails];

  if (!book) return null;

  return (
    <main className="min-h-screen bg-[#2C1810] text-[#E8C0A0]">
      <header className="fixed top-8 left-8 z-50">
        <Link href="/" className="flex items-center group">
          <Image
            src="/stripe-logo.svg"
            alt="Stripe Press Logo"
            width={32}
            height={32}
            className="mr-4 opacity-90"
          />
          <span className="text-[#E8C0A0] opacity-90 group-hover:opacity-100">Press</span>
        </Link>
      </header>

      <div className="max-w-6xl mx-auto px-6 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Book Cover */}
          <div className="relative aspect-[3/4] bg-[#3D261C] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
              {book.title}
            </div>
          </div>

          {/* Right Column - Book Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl opacity-80">{book.author}</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">{book.description}</p>
              <p className="text-lg leading-relaxed opacity-80">{book.longDescription}</p>
            </div>

            <div className="space-y-4">
              {book.purchaseLinks.map((link) => (
                <button
                  key={link.name}
                  className="w-full bg-[#E8C0A0] text-[#2C1810] py-4 px-8 rounded hover:bg-[#F0D0B0] transition-colors text-left flex justify-between items-center"
                >
                  <span>Purchase on {link.name}</span>
                  <span>{link.price}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-[#3D261C] pt-8">
              <h2 className="text-2xl font-semibold mb-8">Praise</h2>
              <div className="space-y-8">
                {book.praise.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <p className="text-lg italic">&quot;{item.quote}&quot;</p>
                    <div>
                      <p className="font-semibold">{item.author}</p>
                      <p className="opacity-80">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#3D261C] pt-8">
              <h2 className="text-lg font-semibold mb-4">Book Details</h2>
              <dl className="grid grid-cols-2 gap-4">
                {Object.entries(book.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="opacity-80 mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
