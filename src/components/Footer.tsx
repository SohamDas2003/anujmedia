import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              {siteConfig.logo ? (
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.companyName}
                  width={140}
                  height={40}
                  className="logo-img"
                />
              ) : (
                <>
                  <span style={{ color: "#fff" }}>{siteConfig.companyName}</span>
                  <span style={{ color: "var(--signal)" }}>.</span>
                </>
              )}
            </Link>
            <p>{siteConfig.tagline}</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">Why Us</Link>
              <Link href="/branches">Our Offices</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4>Offices</h4>
            <div className="footer-branch-list">
              {siteConfig.branches.map((b) => (
                <div key={b.code} className="footer-branch-item">
                  <span className="branch-code">{b.code}</span>
                  <span>{b.city}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>Get In Touch</h4>
            <div className="footer-links">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              {/* WhatsApp temporarily disabled. */}
              <Link
                href="/contact"
                style={{ color: "var(--text-inverse)", marginTop: "6px" }}
              >
                Request Proposal &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </span>
          <span>{siteConfig.email}</span>
        </div>
      </div>
    </footer>
  );
}
