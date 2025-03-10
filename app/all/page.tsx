'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// Function to convert hex to RGB
function hexToRGB(hex: string): { r: number; g: number; b: number } {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Function to create a pastel version of a color
function createPastelColor(hex: string): string {
  const rgb = hexToRGB(hex);
  // Mix with white to create pastel
  const pastel = {
    r: Math.floor((rgb.r + 255 * 2) / 3),
    g: Math.floor((rgb.g + 255 * 2) / 3),
    b: Math.floor((rgb.b + 255 * 2) / 3)
  };
  return `rgb(${pastel.r}, ${pastel.g}, ${pastel.b})`;
}

interface Praise {
  quote: string;
  author: string;
  title: string;
}

interface BookAuthor {
  name: string;
  bio: string;
}

interface Book {
  title: string;
  author: string;
  color: string;
  description: string;
  longDescription: string;
  price: string;
  authors: BookAuthor[];
  praise: Praise[];
}

const books: Book[] = [
  {
    title: "BOOM",
    author: "Hobart and Huber",
    color: "#8B4B62",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "$24",
    authors: [
      {
        name: "Author One",
        bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        name: "Author Two",
        bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    praise: [
      {
        quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
        author: "Reviewer Name",
        title: "Position at Company"
      },
      {
        quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        author: "Another Reviewer",
        title: "Title at Organization"
      }
    ]
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Peter D. Kaufman",
    color: "#C6A856",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    longDescription: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: "$30",
    authors: [
      {
        name: "Main Author",
        bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
      }
    ],
    praise: [
      {
        quote: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
        author: "Industry Expert",
        title: "Role at Company"
      }
    ]
  },
  {
    title: "Scaling People",
    author: "Claire Hughes Johnson",
    color: "#A67C52",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque.",
    longDescription: "Nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    price: "$24",
    authors: [
      {
        name: "Featured Author",
        bio: "Et harum quidem rerum facilis est et expedita distinctio."
      }
    ],
    praise: [
      {
        quote: "Itaque earum rerum hic tenetur a sapiente delectus.",
        author: "Business Leader",
        title: "Executive Position"
      }
    ]
  },
  {
    title: "Pieces of the Action",
    author: "Vannevar Bush",
    color: "#2F4F4F",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "$24",
    authors: [
      {
        name: "Author One",
        bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }
    ],
    praise: []
  },
  {
    title: "Where Is My Flying Car?",
    author: "J. Storrs Hall",
    color: "#556B2F",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    longDescription: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: "$24",
    authors: [
      {
        name: "Main Author",
        bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
      }
    ],
    praise: []
  },
  {
    title: "The Big Score",
    author: "Michael S. Malone",
    color: "#483D8B",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque.",
    longDescription: "Nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    price: "$24",
    authors: [
      {
        name: "Featured Author",
        bio: "Et harum quidem rerum facilis est et expedita distinctio."
      }
    ],
    praise: []
  },
  {
    title: "Scientific Freedom",
    author: "Donald W. Braben",
    color: "#800000",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio.",
    longDescription: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.",
    price: "$24",
    authors: [
      {
        name: "Research Leader",
        bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
      }
    ],
    praise: [
      {
        quote: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        author: "Science Authority",
        title: "Research Center"
      }
    ]
  },
  {
    title: "Working in Public",
    author: "Nadia Eghbal",
    color: "#4B0082",
    description: "Temporibus autem quibusdam et aut officiis debitis.",
    longDescription: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi optio.",
    price: "$24",
    authors: [
      {
        name: "Digital Scholar",
        bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit."
      }
    ],
    praise: [
      {
        quote: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
        author: "Open Source Leader",
        title: "Foundation Name"
      }
    ]
  },
  {
    title: "The Art of Doing Science",
    author: "Richard W. Hamming",
    color: "#191970",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
    longDescription: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: "$24",
    authors: [
      {
        name: "Scientific Mind",
        bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
      }
    ],
    praise: [
      {
        quote: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
        author: "Academic Leader",
        title: "University Position"
      }
    ]
  },
  {
    title: "The Making of Prince of Persia",
    author: "Jordan Mechner",
    color: "#006400",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "$24",
    authors: [
      {
        name: "Author One",
        bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }
    ],
    praise: []
  },
  {
    title: "Get Together",
    author: "Bailey Richardson et al.",
    color: "#8B008B",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    longDescription: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: "$24",
    authors: [
      {
        name: "Main Author",
        bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
      }
    ],
    praise: []
  },
  {
    title: "An Elegant Puzzle",
    author: "Will Larson",
    color: "#8B0000",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque.",
    longDescription: "Nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    price: "$24",
    authors: [
      {
        name: "Featured Author",
        bio: "Et harum quidem rerum facilis est et expedita distinctio."
      }
    ],
    praise: []
  },
  {
    title: "The Revolt of the Public",
    author: "Martin Gurri",
    color: "#2F4F4F",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    longDescription: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "$24",
    authors: [
      {
        name: "Cultural Analyst",
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
      }
    ],
    praise: [
      {
        quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        author: "Media Expert",
        title: "Think Tank"
      }
    ]
  },
  {
    title: "Stubborn Attachments",
    author: "Tyler Cowen",
    color: "#4A4A4A",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    longDescription: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "$24",
    authors: [
      {
        name: "Economic Thinker",
        bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit."
      }
    ],
    praise: [
      {
        quote: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        author: "Policy Expert",
        title: "Economics Institute"
      }
    ]
  },
  {
    title: "The Dream Machine",
    author: "M. Mitchell Waldrop",
    color: "#3C1414",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio.",
    longDescription: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
    price: "$24",
    authors: [
      {
        name: "Tech Historian",
        bio: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore."
      }
    ],
    praise: [
      {
        quote: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.",
        author: "Computing Pioneer",
        title: "Research Lab"
      }
    ]
  },
  {
    title: "High Growth Handbook",
    author: "Elad Gil",
    color: "#1A472A",
    description: "Temporibus autem quibusdam et aut officiis debitis.",
    longDescription: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi optio.",
    price: "$24",
    authors: [
      {
        name: "Startup Veteran",
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
      }
    ],
    praise: [
      {
        quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        author: "Venture Capitalist",
        title: "Investment Firm"
      }
    ]
  }
];

import Newsletter from '../components/Newsletter';

export default function AllBooks() {
  useEffect(() => {
    // Handle scroll to book section on load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const bookSlug = hash.slice(1);
        // Find the matching book title
        const matchingBook = books.find(book => 
          book.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === bookSlug
        );
        
        if (matchingBook) {
          // Find the section element
          const section = document.querySelector(`section[data-book="${bookSlug}"]`);
          if (section) {
            // Add a small delay to ensure the page is fully loaded
            setTimeout(() => {
              section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      <header className="fixed top-8 left-8 z-50">
        <Link href="/" className="flex items-center group">
          <Image
            src="/stripe-logo.svg"
            alt="Stripe Press Logo"
            width={32}
            height={32}
            className="mr-4 opacity-90"
          />
          <span className="text-[#2C1810] opacity-90 group-hover:opacity-100">Press</span>
        </Link>
      </header>

      <div>
        <h1 className="text-5xl font-bold mb-16 max-w-6xl mx-auto px-6 pt-32">{/* Title stays at content width */}
          Stripe Press Books
        </h1>
        
        <div>
          {books.map((book) => {
            const pastelBg = createPastelColor(book.color);
            const bookSlug = book.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <section 
                key={book.title} 
                className="py-24"
                data-book={bookSlug}
                style={{ 
                  backgroundColor: pastelBg,
                }}
              >
                <div className="max-w-6xl mx-auto px-6 space-y-24">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div 
                      className="relative aspect-[3/4] rounded-lg overflow-hidden flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-xl"
                      style={{ backgroundColor: book.color }}
                    >
                      <div className="text-4xl font-bold text-white text-center px-8">
                        {book.title}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h2 className="text-4xl font-bold mb-2 text-[#2C1810]">{book.title}</h2>
                        <p className="text-xl text-[#2C1810]/80">{book.author}</p>
                      </div>

                      <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-[#2C1810]">{book.description}</p>
                        <p className="text-lg leading-relaxed text-[#2C1810]/80">{book.longDescription}</p>
                      </div>

                      <div className="space-y-4">
                        <button className="w-full bg-[#2C1810] text-[#E8C0A0] py-4 px-8 rounded hover:bg-[#2C1810]/80 transition-colors text-left flex justify-between items-center">
                          <span>Purchase on Stripe</span>
                          <span>{book.price}</span>
                        </button>
                        <button className="w-full bg-[#2C1810] text-[#E8C0A0] py-4 px-8 rounded hover:bg-[#2C1810]/80 transition-colors text-left flex justify-between items-center">
                          <span>Purchase on Bookshop</span>
                          <span>{book.price}</span>
                        </button>
                        <button className="w-full bg-[#2C1810] text-[#E8C0A0] py-4 px-8 rounded hover:bg-[#2C1810]/80 transition-colors text-left flex justify-between items-center">
                          <span>Purchase on Barnes & Noble</span>
                          <span>{book.price}</span>
                        </button>
                        <button className="w-full bg-[#2C1810] text-[#E8C0A0] py-4 px-8 rounded hover:bg-[#2C1810]/80 transition-colors text-left flex justify-between items-center">
                          <span>Purchase on Amazon</span>
                          <span>{book.price}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                      <h3 className="text-2xl font-semibold italic text-[#2C1810]">Authors</h3>
                      <div className="space-y-6">
                        {book.authors.map((author, index) => (
                          <div key={index} className="space-y-2">
                            <p className="font-semibold text-[#2C1810]">{author.name}</p>
                            <p className="text-[#2C1810]/80">{author.bio}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-semibold italic text-[#2C1810]">Praise</h3>
                      <div className="space-y-12">
                        {book.praise.map((item, index) => (
                          <div key={index} className="space-y-4">
                            <p className="text-xl leading-relaxed text-[#2C1810]">&quot;{item.quote}&quot;</p>
                            <div>
                              <p className="font-semibold text-[#2C1810]">{item.author}</p>
                              <p className="text-[#2C1810]/80">{item.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Film Section */}
        <section className="bg-[#1C1C1C] text-white py-16">
          {/* Starry background with dots */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          {/* Main Content */}
          <div className="relative">
            {/* Title Section */}
            <div className="pt-32 pb-16 text-center">
              <h2 className="text-[80px] font-serif text-[#FFD700]">We Are As Gods</h2>
              <div className="flex items-center justify-center gap-4 text-lg">
                <span className="text-[#FFD700]">A film about</span>
                <span className="text-[#FFD700]">Stewart Brand</span>
                <button className="ml-4 border border-[#FFD700] rounded-full px-6 py-1 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1C1C1C] transition-colors">
                  ▶ Play
                </button>
              </div>
            </div>

            {/* Synopsis and Reviews */}
            <div className="max-w-6xl mx-auto px-6 pb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Left Column - Synopsis */}
                <div className="space-y-8">
                  <h3 className="text-3xl font-serif text-[#FFD700]">Synopsis</h3>
                  <div className="relative rounded-full overflow-hidden">
                    <div className="aspect-[4/3] bg-gray-800 rounded-full flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full border-2 border-[#FFD700] flex items-center justify-center">
                        <span className="text-[#FFD700] text-2xl">▶</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&quot;
                  </p>
                </div>

                {/* Right Column - Reviews */}
                <div className="space-y-12">
                  <h3 className="text-3xl font-serif text-[#FFD700]">Reviews</h3>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <p className="text-gray-300 italic">
                      &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.&quot;
                      </p>
                      <p className="text-[#FFD700]">Consectetur Magazine</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-300 italic">
                        &quot;Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.&quot;
                      </p>
                      <p className="text-[#FFD700]">Adipiscing Review</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-300 italic">
                        &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.&quot;
                      </p>
                      <p className="text-[#FFD700]">Tempor Times</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soundtrack Section */}
              <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-3xl font-serif text-[#FFD700] mb-8">Select tracks</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Lorem Ipsum Dolor", duration: "50.33s" },
                      { title: "Sit Amet Consectetur", duration: "127.58s" },
                      { title: "Adipiscing Elit", duration: "36.21s" },
                      { title: "Sed Do Eiusmod", duration: "101.67s" },
                      { title: "Tempor Incididunt", duration: "57.38s" },
                    ].map((track, index) => (
                      <div key={index} className="flex justify-between text-gray-300 hover:text-[#FFD700] cursor-pointer">
                        <span>◉ &quot;{track.title}&quot;</span>
                        <span>{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-[#FFD700] mb-8">Original score by Lorem Ipsum</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                    nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea 
                    voluptate velit esse quam nihil molestiae consequatur.
                  </p>
                </div>
              </div>
            </div>

            {/* Credits Banner */}
            <div className="border-t border-b border-[#FFD700]/30 py-4 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-[#FFD700]/70 mx-4">★ Apply to host a screening ★</span>
                <span className="text-[#FFD700]/70 mx-4">★ Apply to host a screening ★</span>
                <span className="text-[#FFD700]/70 mx-4">★ Apply to host a screening ★</span>
                <span className="text-[#FFD700]/70 mx-4">★ Apply to host a screening ★</span>
                <span className="text-[#FFD700]/70 mx-4">★ Apply to host a screening ★</span>
                <span className="text-[#FFD700]/70 mx-4">★ Apply to host a screening ★</span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="bg-[#1C1C1C] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="relative h-[80vh] lg:h-screen bg-[#151515] flex items-center justify-center">
              <div className="w-[80%] max-w-[500px] aspect-square relative">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#252525] to-[#151515] flex items-center justify-center">
                  <div className="text-6xl font-bold text-center leading-tight">
                    <div>BENEATH</div>
                    <div className="text-[#FF6B6B]">THE</div>
                    <div>SURFACE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="px-8 lg:px-16 py-32">
              <div className="max-w-xl">
                <h2 className="text-5xl font-serif mb-4">Beneath the Surface</h2>
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
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      className="w-full bg-transparent hover:bg-[#252525] p-6 rounded-lg transition-colors border border-gray-800 text-left group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium group-hover:text-white">
                          Episode {String(num).padStart(2, '0')}
                        </h3>
                        <span className="text-sm text-gray-400">32:15</span>
                      </div>
                      <p className="text-gray-400 group-hover:text-gray-300">
                        Exploring the foundations of modern infrastructure
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter section */}
        <div className="mt-0">
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
