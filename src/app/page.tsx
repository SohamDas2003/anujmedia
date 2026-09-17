import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { siteConfig, getWhatsAppLink } from "@/lib/config";

export default function HomePage() {
  const waLink = getWhatsAppLink();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="reveal">
            <div className="hero-hello">
              <span>HELLO!</span>
              <svg
                className="starburst"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2L13.8 8.6L20.4 10.4L13.8 12.2L12 18.8L10.2 12.2L3.6 10.4L10.2 8.6L12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M18.5 4.5L16.2 8.2L19.9 10.5L16.2 12.8L18.5 16.5L14.8 14.2L12.5 17.9L10.2 14.2L6.5 16.5L8.8 12.8L5.1 10.5L8.8 8.2L6.5 4.5L10.2 6.8L12.5 3.1L14.8 6.8L18.5 4.5Z"
                  fill="currentColor"
                  opacity="0.35"
                />
              </svg>
            </div>

            <h1>
              Digital
              <span className="hero-pill" aria-hidden="true">
                <svg
                  viewBox="0 0 76 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    y1="18"
                    x2="76"
                    y2="18"
                    stroke="#5B6472"
                    strokeWidth="1.8"
                  />
                  <ellipse
                    cx="28"
                    cy="18"
                    rx="14"
                    ry="14"
                    fill="#FFFFFF"
                    stroke="#12161C"
                    strokeWidth="2.2"
                  />
                  <ellipse
                    cx="48"
                    cy="18"
                    rx="14"
                    ry="14"
                    fill="#1FAE8E"
                    stroke="#12161C"
                    strokeWidth="2.2"
                  />
                </svg>
              </span>
              marketing that gets you <em>results.</em>
            </h1>

            <p className="lead">
              Digital agency offering tailored growth systems to build a
              commanding presence, acquire qualified leads, and scale your brand
              across India.
            </p>

            <div className="hero-cta-area">
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-hero-primary">
                  Get Free Proposal
                </Link>
                <a
                  href={waLink}
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="hero-doodle-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 130 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 26 C 28 8, 55 46, 80 20 C 95 6, 110 25, 122 18"
                    stroke="#1FAE8E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M106 14 L 123 18 L 114 31"
                    stroke="#1FAE8E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <ellipse
                    cx="42"
                    cy="30"
                    rx="16"
                    ry="10"
                    transform="rotate(-15 42 30)"
                    stroke="#1FAE8E"
                    strokeWidth="1.8"
                    strokeDasharray="2 4"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>

            <div className="hero-strip">
              <div>
                <strong>3</strong>Offices, One Team
              </div>
              <div>
                <strong>360°</strong>Full-Funnel Marketing
              </div>
              <div>
                <strong>1:1</strong>Dedicated Account Lead
              </div>
            </div>
          </div>

          <div className="hero-art-wrapper reveal">
            {/* Layered rotated background cards */}
            <div className="hero-card-bg hero-card-green" aria-hidden="true" />
            <div className="hero-card-bg hero-card-yellow" aria-hidden="true">
              <svg
                className="hero-card-pattern"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="280"
                  cy="50"
                  r="120"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeOpacity="0.35"
                  fill="none"
                />
                <circle
                  cx="280"
                  cy="50"
                  r="180"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeOpacity="0.25"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="240"
                  r="80"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeOpacity="0.35"
                  fill="none"
                />
                <circle cx="30" cy="120" r="6" fill="#FFFFFF" fillOpacity="0.6" />
                <circle
                  cx="240"
                  cy="220"
                  r="8"
                  fill="#FFFFFF"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            {/* Hero Character / Portrait */}
            <Image
              src="/hero-woman.png"
              alt="Digital Marketing Growth Partner"
              width={380}
              height={460}
              className="hero-person-img"
              priority
            />
            {/* Floating Badges */}
            <div className="hero-badge badge-top">
              <span>⭐</span> 4.9/5 Rating &middot; 500+ Campaigns
            </div>
            <div className="hero-badge badge-bottom">
              <span>📍</span> Delhi &middot; Mumbai &middot; Chandigarh
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section" id="services-preview">
        <div className="wrap">
          <div
            className="section-head reveal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "20px",
              maxWidth: "100%",
            }}
          >
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Every channel that moves a customer from scroll to sale.</h2>
              <p>
                Pick one service or hand us the whole funnel &mdash; our teams work
                as a single unit across all three cities.
              </p>
            </div>
            <Link href="/services" className="btn btn-outline-dark">
              View All Services &rarr;
            </Link>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <div>
                <svg
                  className="icn"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <h3>Search Engine Optimisation</h3>
                <p>
                  On-page, technical and high-authority local SEO engineered to
                  get your brand discovered and dominate search rankings.
                </p>
              </div>
              <Link
                href="/services#seo"
                style={{
                  color: "var(--signal)",
                  fontWeight: 600,
                  marginTop: "18px",
                  display: "inline-block",
                }}
              >
                Learn more &rarr;
              </Link>
            </div>

            <div className="service-card reveal">
              <div>
                <svg
                  className="icn"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <h3>Paid Media &amp; Google Ads</h3>
                <p>
                  Targeted search, display, and social ad campaigns optimized
                  strictly for positive ROI and lower cost-per-lead.
                </p>
              </div>
              <Link
                href="/services#ads"
                style={{
                  color: "var(--signal)",
                  fontWeight: 600,
                  marginTop: "18px",
                  display: "inline-block",
                }}
              >
                Learn more &rarr;
              </Link>
            </div>

            <div className="service-card reveal">
              <div>
                <svg
                  className="icn"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <h3>Social Media Marketing</h3>
                <p>
                  Creative brand positioning, viral content production, and
                  community engagement designed for real customer retention.
                </p>
              </div>
              <Link
                href="/services#social"
                style={{
                  color: "var(--signal)",
                  fontWeight: 600,
                  marginTop: "18px",
                  display: "inline-block",
                }}
              >
                Learn more &rarr;
              </Link>
            </div>

            <div className="service-card reveal">
              <div>
                <svg
                  className="icn"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M4 4h16v12H8l-4 4V4z" />
                </svg>
                <h3>Website Design &amp; Development</h3>
                <p>
                  High-speed, responsive, conversion-focused websites and web
                  apps crafted to turn visitors into paying customers.
                </p>
              </div>
              <Link
                href="/services#web"
                style={{
                  color: "var(--signal)",
                  fontWeight: 600,
                  marginTop: "18px",
                  display: "inline-block",
                }}
              >
                Learn more &rarr;
              </Link>
            </div>

            <div className="service-card reveal">
              <div>
                <svg
                  className="icn"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 3l2.5 5 5.5.7-4 3.8 1 5.5L12 15l-5 3 1-5.5-4-3.8 5.5-.7L12 3z" />
                </svg>
                <h3>Branding &amp; Creative</h3>
                <p>
                  Cohesive brand identities, visual style systems, and compelling
                  copy that make your company instantly memorable.
                </p>
              </div>
              <Link
                href="/services#branding"
                style={{
                  color: "var(--signal)",
                  fontWeight: 600,
                  marginTop: "18px",
                  display: "inline-block",
                }}
              >
                Learn more &rarr;
              </Link>
            </div>

            <div className="service-card reveal">
              <div>
                <svg
                  className="icn"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />
                </svg>
                <h3>Online Reputation Management</h3>
                <p>
                  Proactive review curation, sentiment management, and PR
                  protection to keep your digital brand spotless.
                </p>
              </div>
              <Link
                href="/services#orm"
                style={{
                  color: "var(--signal)",
                  fontWeight: 600,
                  marginTop: "18px",
                  display: "inline-block",
                }}
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section why">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Why This Team</span>
            <h2>
              Three offices means three time zones of market insight, one working
              day apart.
            </h2>
          </div>
          <div className="why-grid">
            <div className="why-item reveal">
              <span className="eyebrow">01</span>
              <h3>On-ground, not outsourced</h3>
              <p>
                Client teams sit in the same city as the markets you&apos;re
                trying to win &mdash; Delhi, Mumbai and Chandigarh.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">02</span>
              <h3>One account, one owner</h3>
              <p>
                A single point of contact runs your account end to end, across
                every channel we touch.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">03</span>
              <h3>Numbers over noise</h3>
              <p>
                Monthly reporting tied to leads and revenue &mdash; not
                impressions dressed up as results.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">04</span>
              <h3>Fast to move</h3>
              <p>
                Small enough to turn a campaign around in days, structured enough
                to scale it nationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Branches Overview */}
      <section className="section branches">
        <div className="wrap">
          <div
            className="section-head reveal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "20px",
              maxWidth: "100%",
            }}
          >
            <div>
              <span className="eyebrow">Our Offices</span>
              <h2>Find us in Delhi, Mumbai and Chandigarh.</h2>
              <p>
                Drop in for a coffee and a strategy chat, or start on WhatsApp &mdash;
                either works.
              </p>
            </div>
            <Link href="/branches" className="btn btn-outline-light">
              Explore Our Branches &rarr;
            </Link>
          </div>
          <div className="branch-grid">
            {siteConfig.branches.map((b) => (
              <div key={b.code} className="branch-card reveal">
                <svg
                  className="pin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span className="branch-code">{b.code}</span>
                <h3>{b.city}</h3>
                <div className="branch-tag">{b.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact / Lead Form */}
      <section className="section" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Get In Touch</span>
            <h2>Tell us about your brand. We&apos;ll tell you how to grow it.</h2>
            <p>
              Share a few details and the team in your closest city will get back
              to you &mdash; usually the same working day.
            </p>
            <div className="info-row">
              <svg
                className="icn"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M4 6l8 7 8-7" />
              </svg>
              <span>{siteConfig.email}</span>
            </div>
            <div className="info-row">
              <svg
                className="icn"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>Delhi &middot; Mumbai &middot; Chandigarh</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
