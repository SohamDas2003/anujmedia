import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Comprehensive digital marketing services: SEO, Performance Ads, Social Media, Web Development, Branding and ORM from Delhi, Mumbai & Chandigarh teams.",
};

export default function ServicesPage() {
  const waLink = getWhatsAppLink();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Services Catalog</span>
            <h1>Full-Funnel Digital Services Engineered to Deliver Results.</h1>
            <p>
              Whether you need a dedicated search strategy, high-ROI performance
              advertising, or a brand makeover, our pan-India teams execute with
              speed and precision.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="services-grid">
            {/* SEO */}
            <div className="service-card reveal" id="seo">
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
                <h3>Search Engine Optimisation (SEO)</h3>
                <p>
                  Get found by high-intent customers when they search for your
                  products or services. We engineer sustainable organic traffic
                  that converts.
                </p>
                <ul className="service-features">
                  <li>Technical SEO &amp; Core Web Vitals audit</li>
                  <li>In-depth keyword &amp; competitor gap analysis</li>
                  <li>Local SEO optimization for multi-city hubs</li>
                  <li>High-authority link acquisition &amp; content strategy</li>
                </ul>
              </div>
              <Link
                href="/contact?service=SEO"
                className="btn btn-signal"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Get SEO Audit &rarr;
              </Link>
            </div>

            {/* Paid Ads */}
            <div className="service-card reveal" id="ads">
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
                <h3>Paid Media &amp; Google Ads (PPC)</h3>
                <p>
                  Maximize your return on ad spend with precision-targeted
                  search, display, and performance media campaigns managed by
                  certified experts.
                </p>
                <ul className="service-features">
                  <li>Google Search, Shopping &amp; Performance Max</li>
                  <li>Meta (Facebook &amp; Instagram) ads &amp; Retargeting</li>
                  <li>B2B LinkedIn lead generation campaigns</li>
                  <li>Continuous A/B copy and creative testing</li>
                </ul>
              </div>
              <Link
                href="/contact?service=Paid Media / Google Ads"
                className="btn btn-signal"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Scale Your Ads &rarr;
              </Link>
            </div>

            {/* Social Media */}
            <div className="service-card reveal" id="social">
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
                  Build an active community of loyal brand advocates. We handle
                  creative concepting, production, publishing, and community
                  management.
                </p>
                <ul className="service-features">
                  <li>Monthly content calendar &amp; strategic themes</li>
                  <li>Short-form video, Reels &amp; carousel creation</li>
                  <li>Community engagement &amp; direct response</li>
                  <li>Influencer seeding &amp; brand partnerships</li>
                </ul>
              </div>
              <Link
                href="/contact?service=Social Media Marketing"
                className="btn btn-signal"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Boost Social Presence &rarr;
              </Link>
            </div>

            {/* Web Design & Dev */}
            <div className="service-card reveal" id="web">
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
                  Fast, mobile-first websites and landing pages custom-built to
                  maximize conversion rates and provide frictionless user
                  experiences.
                </p>
                <ul className="service-features">
                  <li>Custom responsive UI/UX design in Figma</li>
                  <li>Lightning-fast speed &amp; lightweight clean code</li>
                  <li>High-converting landing pages for paid ads</li>
                  <li>CRM, WhatsApp &amp; analytics integrations</li>
                </ul>
              </div>
              <Link
                href="/contact?service=Website Design & Development"
                className="btn btn-signal"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Build Your Website &rarr;
              </Link>
            </div>

            {/* Branding & Creative */}
            <div className="service-card reveal" id="branding">
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
                <h3>Branding &amp; Creative Strategy</h3>
                <p>
                  Elevate how the market perceives your company with a
                  distinctive visual identity, messaging guidelines, and
                  memorable design systems.
                </p>
                <ul className="service-features">
                  <li>Logo design, typography &amp; brand palette</li>
                  <li>Brand voice, core narrative &amp; copywriting</li>
                  <li>Packaging, collateral &amp; presentation design</li>
                  <li>Multi-channel digital brand style guide</li>
                </ul>
              </div>
              <Link
                href="/contact?service=Branding & Creative"
                className="btn btn-signal"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Transform Brand &rarr;
              </Link>
            </div>

            {/* ORM */}
            <div className="service-card reveal" id="orm">
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
                  Protect and strengthen your company&apos;s digital reputation. We
                  proactively monitor sentiment, manage reviews, and handle
                  crisis PR.
                </p>
                <ul className="service-features">
                  <li>24/7 brand sentiment &amp; mention monitoring</li>
                  <li>Google Business Profile &amp; review curation</li>
                  <li>Suppression of misleading negative search links</li>
                  <li>Executive reputation &amp; corporate PR defense</li>
                </ul>
              </div>
              <Link
                href="/contact?service=Online Reputation Management"
                className="btn btn-signal"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Protect Reputation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / Process Section */}
      <section className="section why">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Our Methodology</span>
            <h2>
              How we turn your marketing investment into measurable growth.
            </h2>
            <p>
              A proven 4-step framework used across 500+ client campaigns to
              drive predictable returns.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-item reveal">
              <span className="eyebrow">Step 01</span>
              <h3>Deep-Dive Audit</h3>
              <p>
                We analyze your historical ad data, SEO health, conversion rates,
                and competitor positioning to uncover untapped opportunities.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">Step 02</span>
              <h3>Custom Roadmap</h3>
              <p>
                You get an actionable roadmap with clear revenue targets, channel
                budgets, and timelines tailored to your industry.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">Step 03</span>
              <h3>Agile Execution</h3>
              <p>
                Our Delhi, Mumbai, and Chandigarh teams launch creatives,
                optimize campaigns, and build landing pages rapidly.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">Step 04</span>
              <h3>Weekly Optimization</h3>
              <p>
                Transparent weekly dashboards, direct Slack/WhatsApp
                communication, and continuous iteration for compounding growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <div className="wrap">
          <div className="cta-box reveal">
            <h2>Ready to dominate your industry&apos;s digital space?</h2>
            <p>
              Get in touch with our strategists for a free audit and customized
              proposal for your brand.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="btn btn-hero-primary">
                Request Free Proposal
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
          </div>
        </div>
      </section>
    </>
  );
}
