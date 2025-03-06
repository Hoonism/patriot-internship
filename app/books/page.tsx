import Image from 'next/image';
import Link from 'next/link';

const books = [
  {
    title: 'The Big Score',
    author: 'Michael S. Malone',
    description: 'While Silicon Valley is synonymous with software, its beginnings were driven by a need for a better class of hardware.',
    longDescription: `The Big Score is a panoramic history of Silicon Valley's founding days—written as they were still playing out in 1985. One of the first reporters on the tech industry beat, Malone recounts the feverish efforts of technologists and entrepreneurs to build something that would change the world. Starting with the birth of the semiconductor in the 1930s, he illustrates how decades of technological innovation laid the foundation for the meteoric rise of the Valley in the 1970s. Malone punctuates this history with profiles of tech's early builders, capturing the high-agency spirit that shaped the electronics revolution. A decades-long story with individual sacrifice and ingenuity at its core, The Big Score recounts the history of today's most dynamic sector through its upstart beginnings.`,
    praise: [
      {
        quote: "Mike Malone's epic depiction of Silicon Valley was a calling card for me and countless other young entrepreneurs with a background in tech. Malone's stories captured the essence of Valley culture and the many outsized personalities who helped create this mecca of tech. Years later, this book is still relevant, and offers insights into the Valley and its ongoing place in the world.",
        author: "Jeff Skoll",
        title: "first president of eBay"
      },
      {
        quote: "Mike Malone is the gold standard for telling Silicon Valley's history. He has witnessed the evolution of the Valley from fruit orchards to office parks, and has catalogued the world's dependency on the Valley's innovative technology. Experience the growth of Silicon Valley through the eyes of a pioneer, friend, reporter, and mentor to so many of us early Valley entrepreneurs.",
        author: "Sandy Kurtzig",
        title: "founder, CEO, and chairman of ASK Group"
      },
      {
        quote: "From the Valley's deep roots in the semiconductor industry to the rise of startups and venture capital, and the emergence of new models of management, The Big Score documents the beginnings of a technological transformation. When the book was first published, the microprocessor was kick-starting the computer industry. Today, our greatest innovators continue to build on the work of these early pioneers.",
        author: "John Hennessy",
        title: "president emeritus of Stanford University and chairman, Alphabet Inc."
      }
    ],
    specs: {
      format: 'Hardcover',
      pages: '384',
      dimensions: '6.0" x 9.0"',
      isbn: '978-1-953953-01-2',
      publicationDate: 'September 2023'
    },
    color: '#8B4B62'
  },
  {
    title: 'BOOM',
    author: 'Hobart and Huber',
    description: 'A deep exploration of how energy has shaped the history of civilization, from agriculture to artificial intelligence.',
    longDescription: `In BOOM, Hobart and Huber trace humanity's relationship with energy through history. From the mastery of fire to the exploitation of fossil fuels, they explore how each energy transition fundamentally transformed society. The authors argue that our current energy challenges can only be understood through this historical lens, offering crucial insights for navigating our sustainable energy future.`,
    praise: [
      {
        quote: "A masterful synthesis of how energy has shaped human civilization. BOOM offers a compelling framework for understanding our past and future energy challenges.",
        author: "Vaclav Smil",
        title: "Distinguished Professor Emeritus, University of Manitoba"
      },
      {
        quote: "BOOM provides a fascinating perspective on the role of energy in human development. Essential reading for anyone interested in the future of civilization.",
        author: "Steven Pinker",
        title: "Professor of Psychology, Harvard University"
      },
      {
        quote: "A brilliant analysis of energy's central role in shaping human society. The authors offer vital insights for addressing our current energy and climate challenges.",
        author: "Ernest Moniz",
        title: "Former U.S. Secretary of Energy"
      }
    ],
    specs: {
      format: 'Hardcover',
      pages: '432',
      dimensions: '6.0" x 9.0"',
      isbn: '978-1-953953-02-9',
      publicationDate: 'January 2024'
    },
    color: '#C6A856'
  },
  {
    title: 'Scaling People',
    author: 'Claire Hughes Johnson',
    description: 'A practical guide to building and scaling high-performing organizations.',
    longDescription: `Drawing from her experience as COO of Stripe and VP at Google, Claire Hughes Johnson provides a comprehensive framework for scaling organizations effectively. She addresses the key challenges leaders face: maintaining culture during rapid growth, building efficient processes without bureaucracy, and developing leaders at all levels. This book offers practical tools and frameworks for anyone responsible for growing teams and organizations.`,
    praise: [
      {
        quote: "The definitive guide to scaling organizations. Claire's insights are invaluable for any leader navigating rapid growth.",
        author: "Patrick Collison",
        title: "CEO and co-founder of Stripe"
      },
      {
        quote: "A masterclass in organizational development. Essential reading for leaders at all stages of company growth.",
        author: "Sheryl Sandberg",
        title: "Former COO of Meta"
      },
      {
        quote: "Practical, actionable advice for building and scaling teams. This book should be required reading for every startup founder.",
        author: "Reid Hoffman",
        title: "Co-founder of LinkedIn"
      }
    ],
    specs: {
      format: 'Hardcover',
      pages: '368',
      dimensions: '6.0" x 9.0"',
      isbn: '978-1-953953-03-6',
      publicationDate: 'March 2024'
    },
    color: '#A67C52'
  },
  {
    title: 'Pieces of the Action',
    author: 'Vannevar Bush',
    description: 'A personal account of the birth of modern American science policy.',
    longDescription: `In this memoir, Vannevar Bush—who mobilized American science during World War II and pioneered the relationship between government, science, and industry—reflects on the challenges and triumphs of his remarkable career. Bush's account offers timeless insights into innovation, organization, and the relationship between science and society.`,
    praise: [
      {
        quote: "A fascinating glimpse into the mind of one of America's greatest scientific administrators and visionaries.",
        author: "Walter Isaacson",
        title: "Author of 'The Code Breaker'"
      },
      {
        quote: "Bush's memoir remains startlingly relevant to contemporary debates about science, government, and innovation.",
        author: "Jennifer Doudna",
        title: "Nobel Laureate in Chemistry"
      },
      {
        quote: "An invaluable historical document that illuminates the origins of America's scientific and technological leadership.",
        author: "Ash Carter",
        title: "Former U.S. Secretary of Defense"
      }
    ],
    specs: {
      format: 'Hardcover',
      pages: '452',
      dimensions: '6.0" x 9.0"',
      isbn: '978-1-953953-04-3',
      publicationDate: 'October 2023'
    },
    color: '#2F4F4F'
  }
];

export default function BooksPage() {
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

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-5xl font-bold mb-16">Stripe Press Books</h1>
        
        <div className="space-y-32">
          {books.map((book) => (
            <section key={book.title} className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left Column - Book Cover */}
              <div 
                className="relative aspect-[3/4] rounded-lg overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: book.color }}
              >
                <div className="text-4xl font-bold text-white text-center px-8">
                  {book.title}
                </div>
              </div>

              {/* Right Column - Book Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-2">{book.title}</h2>
                  <p className="text-xl opacity-80">{book.author}</p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">{book.description}</p>
                  <p className="text-lg leading-relaxed opacity-80">{book.longDescription}</p>
                </div>

                <div className="border-t border-[#3D261C] pt-8">
                  <h3 className="text-2xl font-semibold mb-8">Praise</h3>
                  <div className="space-y-8">
                    {book.praise.map((item, i) => (
                      <div key={i} className="space-y-4">
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
                  <h3 className="text-lg font-semibold mb-4">Book Details</h3>
                  <dl className="grid grid-cols-2 gap-4">
                    {Object.entries(book.specs).map(([key, value]) => (
                      <div key={key}>
                        <dt className="opacity-80 mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="space-y-4">
                  {['Bookshop', 'Barnes & Noble', 'Amazon'].map((store) => (
                    <button
                      key={store}
                      className="w-full bg-[#E8C0A0] text-[#2C1810] py-4 px-8 rounded hover:bg-[#F0D0B0] transition-colors text-left flex justify-between items-center"
                    >
                      <span>Purchase on {store}</span>
                      <span>$24</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
