import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Offices — Delhi, Mumbai & Chandigarh",
  description:
    "Visit Anuj Media branch offices across Delhi, Mumbai and Chandigarh. Connect with our on-ground digital marketing teams.",
};

export default function BranchesPage() {
  const waLink = getWhatsAppLink();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Our Locations</span>
            <h1>Strategic Presence Across Delhi, Mumbai &amp; Chandigarh.</h1>
            <p>
              Local market insights, rapid on-ground coordination, and national
              execution power. Choose your closest hub to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Branches Grid */}
      <section className="section">
        <div className="wrap">
          <div className="branch-grid">
            {/* Delhi */}
            <div
              className="branch-card reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
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
                <span className="branch-code">DEL</span>
                <h3>Delhi</h3>
                <div className="branch-tag">
                  North India Corporate &amp; Tech Hub
                </div>
                <div className="branch-details">
                  <p>
                    Serving clients across Delhi, Gurugram, Noida, and NCR.
                    Specializing in high-scale performance marketing, enterprise
                    SEO, and brand growth.
                  </p>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      fontSize: ".86rem",
                      color: "var(--text-inverse)",
                    }}
                  >
                    <div>
                      ⚡ <strong>Focus:</strong> Performance Marketing,
                      Enterprise SEO, D2C Growth
                    </div>
                    <div>
                      📞 <strong>Phone:</strong> +91 7738137483
                    </div>
                    <div>
                      ✉️ <strong>Email:</strong> {siteConfig.email}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact?city=Delhi"
                  className="btn btn-signal"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Contact Delhi &rarr;
                </Link>
                <a
                  href={getWhatsAppLink(
                    "Hi, I'd like to connect with the Delhi team."
                  )}
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Mumbai */}
            <div
              className="branch-card reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
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
                <span className="branch-code">BOM</span>
                <h3>Mumbai</h3>
                <div className="branch-tag">
                  Western India Creative &amp; Brand Hub
                </div>
                <div className="branch-details">
                  <p>
                    Driving creative strategy, influencer ecosystems, and paid
                    media for leading lifestyle, BFSI, and e-commerce enterprises
                    across Mumbai and Pune.
                  </p>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      fontSize: ".86rem",
                      color: "var(--text-inverse)",
                    }}
                  >
                    <div>
                      ⚡ <strong>Focus:</strong> Creative Strategy, Social Viral
                      Content, Meta Ads
                    </div>
                    <div>
                      📞 <strong>Phone:</strong> +91 7738137483
                    </div>
                    <div>
                      ✉️ <strong>Email:</strong> {siteConfig.email}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact?city=Mumbai"
                  className="btn btn-signal"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Contact Mumbai &rarr;
                </Link>
                <a
                  href={getWhatsAppLink(
                    "Hi, I'd like to connect with the Mumbai team."
                  )}
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Chandigarh */}
            <div
              className="branch-card reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
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
                <span className="branch-code">IXC</span>
                <h3>Chandigarh</h3>
                <div className="branch-tag">
                  Tri-City &amp; Overseas Growth Hub
                </div>
                <div className="branch-details">
                  <p>
                    Empowering high-growth businesses, education, real estate,
                    and export leaders across Chandigarh, Mohali, Panchkula, and
                    Punjab.
                  </p>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      fontSize: ".86rem",
                      color: "var(--text-inverse)",
                    }}
                  >
                    <div>
                      ⚡ <strong>Focus:</strong> Lead Generation, Web Tech, Local
                      Reputation (ORM)
                    </div>
                    <div>
                      📞 <strong>Phone:</strong> +91 7738137483
                    </div>
                    <div>
                      ✉️ <strong>Email:</strong> {siteConfig.email}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact?city=Chandigarh"
                  className="btn btn-signal"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Contact Chandigarh &rarr;
                </Link>
                <a
                  href={getWhatsAppLink(
                    "Hi, I'd like to connect with the Chandigarh team."
                  )}
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Model Section */}
      <section className="section why">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">How We Collaborate</span>
            <h2>Three cities operating as a synchronized unit.</h2>
            <p>
              You don&apos;t just hire a single office &mdash; you get access to the
              collective brainpower, specialized creatives, and media buyers
              across our entire network.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-item reveal">
              <span className="eyebrow">01</span>
              <h3>Single Point Accountability</h3>
              <p>
                No matter which city is closest to you, you receive a dedicated
                account manager who coordinates all teams seamlessly.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">02</span>
              <h3>Cross-City Resource Pooling</h3>
              <p>
                Your campaigns leverage our best video editors in Mumbai, tech
                developers in Chandigarh, and SEO strategists in Delhi.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">03</span>
              <h3>Instant Communication</h3>
              <p>
                Direct WhatsApp/Slack groups ensure same-hour responses and zero
                communication bottlenecks.
              </p>
            </div>
            <div className="why-item reveal">
              <span className="eyebrow">04</span>
              <h3>Physical Presence</h3>
              <p>
                Drop in anytime to our regional locations for in-person quarterly
                reviews and strategy whiteboard sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <div className="wrap">
          <div className="cta-box reveal">
            <h2>Let&apos;s connect in your city.</h2>
            <p>
              Our regional team is ready to analyze your brand and deliver a
              step-by-step digital roadmap.
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
                Start Strategy Conversation
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
