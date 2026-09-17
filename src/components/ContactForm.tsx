"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  defaultCity?: string;
  defaultService?: string;
  buttonLabel?: string;
}

export default function ContactForm({
  defaultCity = "Delhi",
  defaultService = "Not sure yet",
  buttonLabel = "Send & Get Free Proposal",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    website: "",
    name: "",
    phone: "",
    email: "",
    city: defaultCity,
    service: defaultService,
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus({
        type: "error",
        message: "Please share your name and phone number.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending your proposal request..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Thanks — your message is in. Our team will reach out shortly.",
        });
        setFormData({
          website: "",
          name: "",
          phone: "",
          email: "",
          city: defaultCity,
          service: defaultService,
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to submit. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <div className="form-card reveal">
      {status.type === "success" && (
        <div className="form-msg ok">
          <strong>Thank you!</strong> {status.message}
        </div>
      )}

      {status.type === "error" && (
        <div className="form-msg err">{status.message}</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot field for bot suppression */}
        <input
          type="text"
          name="website"
          className="honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
        />

        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Full name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Rahul Sharma"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone / WhatsApp *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. 9876543210"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="rahul@yourcompany.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="city">Nearest branch</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            >
              <option value="Delhi">Delhi (DEL)</option>
              <option value="Mumbai">Mumbai (BOM)</option>
              <option value="Chandigarh">Chandigarh (IXC)</option>
              <option value="Other">Other / Pan-India</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="field full">
            <label htmlFor="service">Service you&apos;re interested in</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              <option value="SEO">Search Engine Optimisation (SEO)</option>
              <option value="Paid Media / Google Ads">
                Paid Media &amp; Google Ads
              </option>
              <option value="Social Media Marketing">
                Social Media Marketing
              </option>
              <option value="Website Design & Development">
                Website Design &amp; Development
              </option>
              <option value="Branding & Creative">
                Branding &amp; Creative Strategy
              </option>
              <option value="Online Reputation Management">
                Online Reputation Management (ORM)
              </option>
              <option value="Full-Funnel Growth (All Services)">
                Full-Funnel Growth (All Services)
              </option>
              <option value="Not sure yet">Not sure yet (Need Guidance)</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="field full">
            <label htmlFor="message">
              Tell us a bit about your brand &amp; growth goals
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="What are your main challenges, target audience, or revenue targets?"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-signal submit-btn"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "Submitting..." : buttonLabel}
        </button>
      </form>
    </div>
  );
}
