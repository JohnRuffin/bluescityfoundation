"use client";

import Image from "next/image";
import "./globals.css";

export default function App() {
  const boardMembers = [
    {
      name: "Vice President",
      image: "/executiveboard/_DSC9264.JPEG",
      title: "Vice President",
    },
    {
      name: "Treasurer",
      image: "/executiveboard/_DSC9266.JPEG",
      title: "Treasurer",
    },
    {
      name: "Secretary",
      image: "/executiveboard/_DSC9270.JPEG",
      title: "Secretary",
    },
    {
      name: "Board Legal Counsel",
      image: "/executiveboard/_DSC9256.JPEG",
      title: "Board Legal Counsel",
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white overflow-auto">
      {/* Hero Section */}
      <header className="text-center py-16 px-4">
        <Image
          src="/crossroadsLogo.png"
          alt="Blues City Foundation logo"
          width={180}
          height={180}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
          Blues City Foundation
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white">
          A local nonprofit focused on improving the quality of life for
          citizens in our community and surrounding areas. We work with local,
          state, and regional stakeholders to create meaningful opportunities.
        </p>
        <div className="text-lg">
          <p
            className="text-yellow-400 font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Clarksdale, Mississippi • Where Blues Meets Brotherhood
          </p>
        </div>
      </header>

      {/* Mission Statement Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-800/40 to-blue-800/40 mx-4 rounded-2xl mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-5xl font-black text-center mb-16 text-yellow-400 tracking-tight">
            Our Mission
          </h2>
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/50">
            <p className="text-lg md:text-xl leading-relaxed text-center text-gray-100 mb-6">
              The mission of the Blues City Foundation is centered in its PACS
              philosophy, which is to promote Pride and Self-Worth, Academic
              Excellence, Community Health for all citizens, and focus on
              S.T.E.A.M. To foster a better quality of life.
            </p>
            <p className="text-center text-yellow-400 font-semibold">
              Join us for our featured fundraising event: Blues City Derby
              Party
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-5xl font-black text-center mb-16 text-yellow-400 tracking-tight">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-600/20 to-blue-600/20 p-6 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                  <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index < 2}
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    {member.title}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Derby Event Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-800/20 to-purple-800/20 mx-4 rounded-2xl mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Image
              src="/crossroadsLogo.png"
              alt="Blues City Foundation logo"
              width={140}
              height={140}
              className="mx-auto mb-6"
            />
            <h2 className="font-playfair text-5xl font-black mb-4 text-yellow-400 tracking-tight">
              Blues City Derby Party
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Presented by Blues City Foundation on Saturday, May 2, 2026 in
              Clarksdale, Mississippi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] overflow-hidden rounded-xl mb-6 border border-purple-500/30">
                <Image
                  src="/DerbyFlyer2026.png"
                  alt="Blues City Derby Party event flyer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Event Details
              </h3>
              <div className="space-y-2 text-gray-200 text-lg">
                <p>
                  <span className="text-yellow-400 font-semibold">Date:</span>{" "}
                  Saturday, May 2, 2026
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">Time:</span>{" "}
                  2:00 PM - 7:00 PM (Post Time Approx. 5:45 PM CT)
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">Location:</span>{" "}
                  Cutrer Mansion, 109 Clark St, Clarksdale, MS 38614
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">
                    Admission:
                  </span>{" "}
                  $50 (Table Package: $500)
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">Contact:</span>{" "}
                  Anthony Skipper, (601) 918-9589
                </p>
              </div>
            </article>

            <article className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] overflow-hidden rounded-xl mb-6 border border-blue-500/30">
                <Image
                  src="/DerbySponsorshipFlyer2026.png"
                  alt="Blues City Derby Party sponsorship guide flyer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Sponsorship Levels
              </h3>
              <div className="space-y-2 text-gray-200 text-lg">
                <p>Gold Level: $1,000</p>
                <p>Purple Level: $500</p>
                <p>Kelly Green Level: $250</p>
                <p>Pewter Gray Level: $100</p>
                <p className="pt-2">
                  Live Derby Viewing, Southern Cuisine, Cash Bar, Cigar Vendor,
                  Live Music, Best Hat Contest, and Silent Auction
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">Sponsor Contact:</span>{" "}
                  Anthony Skipper, (601) 918-9589
                </p>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 inline-block">
              <p className="text-lg text-blue-200">
                <span className="text-yellow-400 font-semibold">Tickets & Sponsorships:</span>{" "}
                info@bluescityfoundation.org
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-black mb-8 text-yellow-400 tracking-tight">
            Contact Us
          </h2>
          <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-2xl p-8 border border-purple-500/30">
            <p className="text-lg text-gray-200 mb-6">
              Get in touch with the Blues City Foundation to learn more about
              our mission, upcoming events, or how you can support our community
              initiatives.
            </p>
            <a
              href="mailto:info@bluescityfoundation.org"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50 border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2026 Blues City Foundation</p>
          <p className="text-sm text-gray-500">
            Clarksdale, Mississippi, The Legandary Crossroads
          </p>
        </div>
      </footer>
    </div>
  );
}
