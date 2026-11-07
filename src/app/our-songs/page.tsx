import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SongsCatalog from "./SongsCatalog";

export const metadata: Metadata = {
  title: "Our Songs & Record Labels Roster",
  description:
    "Explore chart-topping music releases, powerhouse record labels, recording studios, and featured artists distributed and marketed by Anuj Media across India and globally.",
};

export default function OurSongsPage() {
  return (
    <>
      {/* Subpage Hero Banner */}
      <section className="page-hero songs-page-hero">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Music &amp; Entertainment Roster</span>
            <h1>Our Songs, Premier Labels &amp; Chart-Topping Hits.</h1>
            <p>
              From underground sensations to multi-platinum anthems. Discover the
              record labels, sound engineering studios, and featured artists
              powered by Anuj Media&apos;s pan-India digital distribution and viral
              marketing engine.
            </p>

            {/* Quick Stats Strip */}
            <div className="songs-hero-stats">
              <div className="song-stat-card">
                <span className="stat-num">350M+</span>
                <span className="stat-label">Total Streaming Views</span>
              </div>
              <div className="song-stat-card">
                <span className="stat-num">8+</span>
                <span className="stat-label">Partner Labels &amp; Artists</span>
              </div>
              <div className="song-stat-card">
                <span className="stat-num">50+</span>
                <span className="stat-label">Trending Releases</span>
              </div>
              <div className="song-stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-label">Pan-India Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog & Logos Showcase */}
      <section className="section" style={{ background: "var(--paper-alt)" }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Label Showcase</span>
            <h2>Official Music Brands &amp; Production Partners</h2>
            <p>
              Each label brings a distinct sound identity—from high-energy Punjabi
              dancefloor bangers to acoustic melodies and futuristic neo-classical
              fusion. Click any label to inspect their full discography dossier.
            </p>
          </div>

          <SongsCatalog />
        </div>
      </section>

      {/* Featured Releases Spotlight */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Chart Highlights</span>
            <h2>Top Trending Hits From Our Network</h2>
            <p>
              Catch the biggest anthems currently dominating Spotify India Viral
              50, Apple Music charts, and Instagram Reels trends.
            </p>
          </div>

          <div className="spotlight-grid">
            {/* Track 1 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#01</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/8.jpeg"
                  alt="AS Muzik Empire"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">Platinum Chartbuster</span>
                <h4>Royal Hustle</h4>
                <p className="spotlight-meta">Amanpreet Singh &bull; AS Muzik Empire</p>
                <div className="spotlight-stats">
                  <span>62.4M Streams</span>
                  <span>&bull;</span>
                  <span>1.4M Reels</span>
                </div>
              </div>
            </div>

            {/* Track 2 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#02</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/6.jpeg"
                  alt="Sunny Camra"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">Viral Sensation</span>
                <h4>Camra Flow</h4>
                <p className="spotlight-meta">Sunny Camra &bull; Solo Sensation</p>
                <div className="spotlight-stats">
                  <span>48.6M Streams</span>
                  <span>&bull;</span>
                  <span>Trending #1</span>
                </div>
              </div>
            </div>

            {/* Track 3 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#03</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/5.jpeg"
                  alt="ME - Music Empire"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">OTT Soundscape</span>
                <h4>Empire Groove</h4>
                <p className="spotlight-meta">Sameer Sen &bull; Music Empire</p>
                <div className="spotlight-stats">
                  <span>31.2M Streams</span>
                  <span>&bull;</span>
                  <span>Webseries OST</span>
                </div>
              </div>
            </div>

            {/* Track 4 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#04</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/2.jpeg"
                  alt="Leotech Media 89"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">Folk Trap Anthem</span>
                <h4>Sher-E-Punjab</h4>
                <p className="spotlight-meta">Harkirat Sandhu &bull; Leotech Media 89</p>
                <div className="spotlight-stats">
                  <span>26.4M Streams</span>
                  <span>&bull;</span>
                  <span>Club Favorite</span>
                </div>
              </div>
            </div>

            {/* Track 5 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#05</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/4.jpeg"
                  alt="Positive Studios"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">Radio Top 10</span>
                <h4>Positive Vibe Only</h4>
                <p className="spotlight-meta">Dev Chauhan &bull; Positive Studios</p>
                <div className="spotlight-stats">
                  <span>19.3M Streams</span>
                  <span>&bull;</span>
                  <span>National Airplay</span>
                </div>
              </div>
            </div>

            {/* Track 6 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#06</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/1.jpeg"
                  alt="All Good Music"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">Acoustic Pop</span>
                <h4>Rhythm of Gold</h4>
                <p className="spotlight-meta">Aarav &amp; Simran &bull; All Good Music</p>
                <div className="spotlight-stats">
                  <span>14.8M Streams</span>
                  <span>&bull;</span>
                  <span>Spotify Viral</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Anuj Media Powers Music Success */}
      <section className="section music-growth-section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: "720px" }}>
            <span className="eyebrow">The Growth Engine</span>
            <h2>How Anuj Media Accelerates Music Brands &amp; Hit Records</h2>
            <p>
              We don&apos;t just release songs—we build multi-platform growth
              funnels that turn audio tracks into cultural movements across Delhi,
              Mumbai, Punjab, and beyond.
            </p>
          </div>

          <div className="music-capabilities-grid">
            <div className="music-capability-card reveal">
              <div className="cap-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="cap-icon"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l8-5v10z" />
                </svg>
              </div>
              <h3>Worldwide Digital Distribution</h3>
              <p>
                Seamless ingestion and metadata optimization across 150+ streaming
                platforms including Spotify, Apple Music, YouTube, Amazon Music,
                JioSaavn, and Wynk.
              </p>
              <ul className="cap-list">
                <li>Pre-save &amp; smart link funnels</li>
                <li>Dolby Atmos &amp; Hi-Res audio delivery</li>
                <li>Automated royalty reporting &amp; split tracking</li>
              </ul>
            </div>

            <div className="music-capability-card reveal">
              <div className="cap-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="cap-icon"
                >
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <h3>Viral Social Seeding &amp; Reels</h3>
              <p>
                We ignite song hooks on Instagram Reels, YouTube Shorts, and
                creator networks. Our campaigns have seeded audio into millions of
                user videos.
              </p>
              <ul className="cap-list">
                <li>Top lifestyle &amp; dance creator tie-ups</li>
                <li>Choreography &amp; hook-point identification</li>
                <li>Algorithmic trending trigger strategies</li>
              </ul>
            </div>

            <div className="music-capability-card reveal">
              <div className="cap-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="cap-icon"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Editorial Playlisting &amp; PR</h3>
              <p>
                Direct pitch representation to regional and global music editors.
                Get featured on New Music Friday India, Punjabi 101, Bollywood
                Butter, and Indie India.
              </p>
              <ul className="cap-list">
                <li>Curator relationship management</li>
                <li>Press releases in Rolling Stone India &amp; music blogs</li>
                <li>Radio interviews across Delhi, Mumbai &amp; Chandigarh</li>
              </ul>
            </div>

            <div className="music-capability-card reveal">
              <div className="cap-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="cap-icon"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Sync Licensing &amp; OTT Placement</h3>
              <p>
                Monetize your masters beyond streaming. We pitch your songs for
                feature films, web series on Netflix and Prime Video, and high-budget
                commercial television ads.
              </p>
              <ul className="cap-list">
                <li>Sync clearance &amp; master rights protection</li>
                <li>Brand collaboration &amp; product placement</li>
                <li>Original score &amp; title track pitching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Music Distribution Network Marquee */}
      <section className="music-marquee-bar">
        <div className="wrap">
          <p className="marquee-title">
            Distributing &amp; Pitching Across Global Music Ecosystems
          </p>
          <div className="marquee-pills">
            <span>Spotify</span>
            <span>&bull;</span>
            <span>Apple Music</span>
            <span>&bull;</span>
            <span>YouTube Music</span>
            <span>&bull;</span>
            <span>JioSaavn</span>
            <span>&bull;</span>
            <span>Amazon Prime Music</span>
            <span>&bull;</span>
            <span>Wynk</span>
            <span>&bull;</span>
            <span>Instagram Audio</span>
            <span>&bull;</span>
            <span>Snapchat Sounds</span>
            <span>&bull;</span>
            <span>Dolby Atmos</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section" style={{ background: "var(--surface-dark)", color: "var(--text-inverse)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: "680px", margin: "0 auto" }}>
            <span className="eyebrow">Launch Your Next Single</span>
            <h2 style={{ color: "#fff", marginTop: "12px" }}>
              Are You an Artist, Producer, or Record Label?
            </h2>
            <p style={{ color: "var(--muted-inverse)", margin: "16px auto 28px", fontSize: "1.08rem" }}>
              Scale your tracks to millions of listeners with tailored performance
              marketing, Spotify playlist pitching, and viral social seeding.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact?service=Music%20Marketing"
                className="btn btn-hero-primary"
              >
                Launch Music Campaign &rarr;
              </Link>
              <Link
                href="/services"
                className="btn btn-outline-light"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
