import { Suspense } from "react";
import type { Metadata } from "next";
import ContactFormContainer from "./ContactFormContainer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us & Get Free Proposal",
  description:
    "Get in touch with Anuj Media. Contact our Delhi, Mumbai, and Chandigarh teams for a free audit and tailored digital marketing proposal.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Contact Us</span>
            <h1>Let&apos;s Build Something Exceptional Together.</h1>
            <p>
              Fill out the form below for a free digital audit and growth
              proposal, or reach out to our team instantly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Direct Channels</span>
            <h2>We&apos;re ready when you are.</h2>
            <p>
              Share a few details about your objectives, and our strategists
              will get back to you with actionable insights within 24 business
              hours.
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
              <div>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    fontWeight: 600,
                  }}
                >
                  Email Us
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  style={{ fontWeight: 600, color: "var(--ink)" }}
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="info-row">
              <svg
                className="icn"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    fontWeight: 600,
                  }}
                >
                  WhatsApp / Phone
                </div>
                {/* WhatsApp temporarily disabled. */}
              </div>
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
              <div>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    fontWeight: 600,
                  }}
                >
                  Regional Hubs
                </div>
                <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Delhi (DEL) &middot; Mumbai (BOM) &middot; Chandigarh (IXC)
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: "36px",
                padding: "22px",
                background: "#fff",
                borderRadius: "10px",
                border: "1px solid var(--border)",
              }}
            >
              <h4
                style={{
                  fontSize: ".96rem",
                  marginBottom: "8px",
                  color: "var(--ink)",
                }}
              >
                What happens next?
              </h4>
              <ol
                style={{
                  marginLeft: "18px",
                  fontSize: ".88rem",
                  color: "var(--muted)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <li>1. Our regional strategist reviews your website and channels.</li>
                <li>2. We prepare a tailored competitor benchmark and audit.</li>
                <li>
                  3. We host a 30-minute discovery call with actionable
                  recommendations.
                </li>
              </ol>
            </div>
          </div>

          <Suspense fallback={<div className="form-card">Loading form...</div>}>
            <ContactFormContainer />
          </Suspense>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section why">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Got questions? We&apos;ve got clear answers.</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item reveal">
              <h4>How quickly can we start?</h4>
              <p>
                Following our initial discovery and proposal approval, onboarding
                takes 3&ndash;5 working days to set up tracking, access, and launch
                initial sprints.
              </p>
            </div>
            <div className="faq-item reveal">
              <h4>Do you work with startups as well as established brands?</h4>
              <p>
                Yes. We tailor our engagement models &mdash; offering high-velocity
                growth setups for funded startups and comprehensive enterprise
                marketing frameworks for established firms.
              </p>
            </div>
            <div className="faq-item reveal">
              <h4>How is campaign reporting structured?</h4>
              <p>
                You get a 24/7 real-time dashboard, bi-weekly performance updates
                via WhatsApp/video call, and a comprehensive end-of-month ROI
                review.
              </p>
            </div>
            <div className="faq-item reveal">
              <h4>Can I visit your office in person?</h4>
              <p>
                Absolutely! We have teams in Delhi, Mumbai, and Chandigarh. Let us
                know your preferred time and we&apos;ll have the coffee ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
