import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SongsCatalog from "./SongsCatalog";

export const metadata: Metadata = {
  title: "Music Distribution & Song Promotion — Official Roster",
  description:
    "Anuj Media is the digital distribution and promotional partner for leading music labels, artists, and studios. Discover the chart-topping songs we distribute and market across India and worldwide.",
};

export default function OurSongsPage() {
  return (
    <>
      {/* Subpage Hero Banner */}
      <section className="page-hero songs-page-hero">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Digital Music Distribution &amp; Promotion</span>
            <h1>Songs &amp; Record Labels We Distribute &amp; Promote.</h1>
            <p>
              We are the digital distribution powerhouse and promotional growth
              partner behind India&apos;s premier music labels, independent recording
              studios, and breakthrough artists. From seamless 150+ DSP delivery
              to viral Instagram Reels seeding and YouTube ad blitzes, we turn
              audio masters into multi-million streaming movements.
            </p>

            {/* Quick Stats Strip */}
            <div className="songs-hero-stats">
              <div className="song-stat-card">
                <span className="stat-num">500M+</span>
                <span className="stat-label">Promoted Views &amp; Streams</span>
              </div>
              <div className="song-stat-card">
                <span className="stat-num">10+</span>
                <span className="stat-label">Partner Labels &amp; Catalogs</span>
              </div>
              <div className="song-stat-card">
                <span className="stat-num">65+</span>
                <span className="stat-label">Distributed Releases</span>
              </div>
              <div className="song-stat-card">
                <span className="stat-num">150+</span>
                <span className="stat-label">Global Streaming Stores (DSPs)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog & Logos Showcase */}
      <section className="section" style={{ background: "var(--paper-alt)" }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Distribution &amp; Promotion Roster</span>
            <h2>Music Brands &amp; Production Houses in Our Distribution Network</h2>
            <p>
              Each label and artist below trusts Anuj Media for their worldwide
              digital distribution, Spotify &amp; Apple Music playlist pitching,
              YouTube SEO optimization, and viral social media campaigns. Click any
              card to inspect our distribution scope and promotional milestones.
            </p>
          </div>

          <SongsCatalog />
        </div>
      </section>

      {/* Featured Releases Spotlight */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Promotional Milestones</span>
            <h2>Top Trending Releases Distributed &amp; Promoted by Us</h2>
            <p>
              Explore standout campaigns where our digital distribution network and
              viral promotional strategies fueled chart-topping success on Spotify
              India, YouTube, and Instagram Reels.
            </p>
          </div>

          <div className="spotlight-grid">
            {/* Track 1 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#01</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/9.jpeg"
                  alt="Sandeep Surila"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">Mega Viral Sensation</span>
                <h4>Ke Legi Muh Dikhawan Ka</h4>
                <p className="spotlight-meta">Sandeep Surila &bull; Artist Promotion</p>
                <div className="spotlight-stats">
                  <span>85M+ Views</span>
                  <span>&bull;</span>
                  <span>2.2M Reels</span>
                </div>
              </div>
            </div>

            {/* Track 2 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#02</div>
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
                <span className="spotlight-tag">Distributed &amp; Promoted</span>
                <h4>Royal Hustle</h4>
                <p className="spotlight-meta">Amanpreet Singh &bull; AS Muzik Empire</p>
                <div className="spotlight-stats">
                  <span>62.4M Promoted Streams</span>
                  <span>&bull;</span>
                  <span>1.4M Reels</span>
                </div>
              </div>
            </div>

            {/* Track 3 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#03</div>
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
                <span className="spotlight-tag">Viral Reel Campaign</span>
                <h4>Camra Flow</h4>
                <p className="spotlight-meta">Sunny Camra &bull; Artist Promotion</p>
                <div className="spotlight-stats">
                  <span>48.6M Views</span>
                  <span>&bull;</span>
                  <span>Trending #1</span>
                </div>
              </div>
            </div>

            {/* Track 4 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#04</div>
              <div className="spotlight-logo-wrap">
                <Image
                  src="/logos/10.jpeg"
                  alt="Daaku Records"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">Drill &amp; Outlaw Folk</span>
                <h4>Daaku Kaafila</h4>
                <p className="spotlight-meta">Daaku Records Crew &bull; Label Push</p>
                <div className="spotlight-stats">
                  <span>18.4M Views</span>
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
                  src="/logos/5.jpeg"
                  alt="ME - Music Empire"
                  width={64}
                  height={64}
                  className="spotlight-logo"
                />
              </div>
              <div className="spotlight-content">
                <span className="spotlight-tag">OTT Sync &amp; Distribution</span>
                <h4>Empire Groove</h4>
                <p className="spotlight-meta">Sameer Sen &bull; Music Empire</p>
                <div className="spotlight-stats">
                  <span>31.2M Streams</span>
                  <span>&bull;</span>
                  <span>Webseries OST</span>
                </div>
              </div>
            </div>

            {/* Track 6 */}
            <div className="spotlight-card reveal">
              <div className="spotlight-rank">#06</div>
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
                <span className="spotlight-tag">Club Video Marketing</span>
                <h4>Sher-E-Punjab</h4>
                <p className="spotlight-meta">Harkirat Sandhu &bull; Leotech Media 89</p>
                <div className="spotlight-stats">
                  <span>26.4M YouTube Views</span>
                  <span>&bull;</span>
                  <span>Club Push</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Anuj Media Powers Music Distribution & Promotion */}
      <section className="section music-growth-section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: "720px" }}>
            <span className="eyebrow">Our Distribution &amp; Marketing Engine</span>
            <h2>How Anuj Media Distributes &amp; Promotes Hit Songs</h2>
            <p>
              We provide end-to-end release management. We don&apos;t just deliver
              audio files to DSPs—we engineer multi-platform promotional campaigns
              that ignite social virality, maximize streaming royalties, and build
              lasting fanbases across India and worldwide.
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
              <h3>150+ Store Digital Distribution</h3>
              <p>
                Rapid, high-priority delivery to Spotify, Apple Music, YouTube
                Music, Amazon, JioSaavn, Wynk, and international streaming stores
                with verified artist profiles and ISRC/UPC generation.
              </p>
              <ul className="cap-list">
                <li>Instant delivery to 150+ worldwide DSPs</li>
                <li>Lossless audio &amp; Dolby Atmos mastering support</li>
                <li>Transparent royalty reporting &amp; automated splits</li>
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
              <h3>Viral Social Seeding &amp; Reels Promotion</h3>
              <p>
                We seed your song hooks into top creator networks across Instagram
                Reels, YouTube Shorts, and Moj, sparking dance trends, lip-syncs,
                and millions of user-generated videos.
              </p>
              <ul className="cap-list">
                <li>Tier-1 lifestyle, dance &amp; comedy creator seeding</li>
                <li>Hook-point audio clipping &amp; viral trend planning</li>
                <li>Audio-link click funnels driving Spotify saves</li>
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
              <h3>Editorial Playlisting &amp; PR Blasts</h3>
              <p>
                Direct pitch representation to Spotify, Apple Music, and JioSaavn
                editorial curators, complemented by national press releases, music
                blog features, and regional radio interviews.
              </p>
              <ul className="cap-list">
                <li>Curator pitching for New Music Friday &amp; regional hubs</li>
                <li>Interviews across Delhi, Mumbai &amp; Punjab radio stations</li>
                <li>Digital press in top Indian music magazines &amp; portals</li>
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
              <h3>YouTube SEO &amp; Sync Licensing</h3>
              <p>
                We run high-converting YouTube discovery ads, manage Content ID
                claiming, and pitch songs for synchronization in OTT series on
                Netflix, Prime Video, and commercial TV advertisements.
              </p>
              <ul className="cap-list">
                <li>Targeted YouTube video discovery &amp; bumper ads</li>
                <li>Full Content ID monetization &amp; piracy protection</li>
                <li>OTT web-series &amp; brand commercial synchronization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Music Distribution Network Marquee */}
      <section className="music-marquee-bar">
        <div className="wrap">
          <p className="marquee-title">
            Distributing &amp; Pitching Your Music Across 150+ Global DSPs &amp; Outlets
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
            <span className="eyebrow">Ready for Your Next Release?</span>
            <h2 style={{ color: "#fff", marginTop: "12px" }}>
              Looking for Digital Distribution &amp; Viral Music Promotion?
            </h2>
            <p style={{ color: "var(--muted-inverse)", margin: "16px auto 28px", fontSize: "1.08rem" }}>
              Partner with Anuj Media. We handle worldwide store delivery, playlist
              pitching, YouTube ad campaigns, and creator Reels seeding to guarantee
              your tracks reach millions of high-intent listeners.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact?service=Music%20Distribution%20%26%20Promotion"
                className="btn btn-hero-primary"
              >
                Distribute &amp; Promote Your Song &rarr;
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
