"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig, getWhatsAppLink } from "@/lib/config";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const waLink = getWhatsAppLink();

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="logo">
            {siteConfig.logo ? (
              <Image
                src={siteConfig.logo}
                alt={siteConfig.companyName}
                width={140}
                height={40}
                className="logo-img"
                priority
              />
            ) : (
              <>
                {siteConfig.companyName}
                <span>.</span>
              </>
            )}
          </Link>

          <nav className="nav-links">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active" : ""}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-cta">
            <a
              href={waLink}
              className="btn btn-outline-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn btn-signal">
              Get Free Proposal
            </Link>
            <button
              className="hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Panel */}
      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`} id="mobilePanel">
        <button
          className="close-x"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {siteConfig.navLinks.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--signal)", marginTop: "12px" }}
          onClick={() => setMobileOpen(false)}
        >
          WhatsApp Us &rarr;
        </a>
      </div>
    </>
  );
}
