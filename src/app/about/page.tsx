import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Why Choose Us & About",
  description:
    "Learn how Anuj Media combines on-ground market insight across Delhi, Mumbai, and Chandigarh with full-funnel digital marketing expertise.",
};

export default function AboutPage() {
  const waLink = getWhatsAppLink();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">About {siteConfig.companyName}</span>
            <h1>Built on Results. Powered by On-Ground Market Intelligence.</h1>
            <p>
              We are a performance-first digital marketing and growth agency. With
              dedicated teams in Delhi, Mumbai, and Chandigarh, we combine local
              consumer nuance with national execution power.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview / Story */}
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Our Philosophy</span>
              <h2>
                Bridging the gap between agency creativity and business revenue.
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: "16px",
                  lineHeight: 1.7,
                }}
              >
                Traditional marketing agencies often focus on vanity metrics
                &mdash; likes, impressions, and superficial buzz. At{" "}
                {siteConfig.companyName}, we view marketing as an investment
                engine designed to generate measurable revenue, pipeline leads,
                and compounding brand equity.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: "14px",
                  lineHeight: 1.7,
                }}
              >
                By placing physical teams in India&apos;s key economic centers
                &mdash; North India (Delhi &amp; Chandigarh) and Western India
                (Mumbai) &mdash; we understand regional customer psychology,
                regional ad costs, and real-time market opportunities that remote
                agencies simply miss.
              </p>
            </div>

            <div
              className="form-card reveal"
              style={{
                background: "var(--surface-dark)",
                color: "var(--text-inverse)",
                borderColor: "var(--border-inverse)",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", marginBottom: "16px" }}>
                The Anuj Media Advantage
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: ".95rem",
                  color: "var(--muted-inverse)",
                }}
              >
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "var(--signal)",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <strong style={{ color: "var(--text-inverse)" }}>
                      Direct Access to Strategists:
                    </strong>{" "}
                    No junior middlemen. You work directly with experienced growth
                    leaders.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "var(--signal)",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <strong style={{ color: "var(--text-inverse)" }}>
                      Integrated Multi-Channel Stack:
                    </strong>{" "}
                    SEO, performance ads, social creative, and conversion tech
                    working in sync.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "var(--signal)",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <strong style={{ color: "var(--text-inverse)" }}>
                      Full Data Transparency:
                    </strong>{" "}
                    Real-time dashboards with direct attribution to leads and ROI.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid reveal">
            <div className="stat-box">
              <div className="stat-num">500+</div>
              <div className="stat-lbl">Campaigns Delivered</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">3</div>
              <div className="stat-lbl">Regional Hubs (DEL, BOM, IXC)</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">&#8377;50Cr+</div>
              <div className="stat-lbl">Ad Spend Managed</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">98%</div>
              <div className="stat-lbl">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="section why">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Our Core Pillars</span>
            <h2>Why high-growth brands choose to scale with us.</h2>
            <p>
              We built our operational model to eliminate the friction, delays,
              and opacity of traditional agency setups.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-item reveal">
              <span className="eyebrow">01</span>
              <h3>On-Ground Insight</h3>
              <p>
                Our localized teams understand regional nuances, buying
                behaviors, and hyper-local audience triggers across key Indian
                cities.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">02</span>
              <h3>Single Point of Contact</h3>
              <p>
                One dedicated account director orchestrates your strategy,
                creatives, ad spend, and reporting end-to-end.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">03</span>
              <h3>Revenue-First Metric</h3>
              <p>
                We gauge success by qualified customer leads, booked
                appointments, and return on ad spend (ROAS) rather than empty
                impressions.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">04</span>
              <h3>Speed &amp; Adaptation</h3>
              <p>
                Our agile sprint system allows campaign pivots and creative
                updates to be deployed in hours, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <div className="wrap">
          <div className="cta-box reveal">
            <h2>Let&apos;s discuss how we can scale your business.</h2>
            <p>
              Schedule a 1-on-1 strategy session with our senior marketing team
              today.
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
                Book Strategy Call
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
