export interface Branch {
  code: string;
  city: string;
  tag: string;
  description: string;
  focus: string;
}

export const siteConfig = {
  companyName: "Anuj Media",
  tagline: "Pan-India Digital Marketing & Growth Partner",
  description:
    "Full-service digital marketing agency with on-ground teams in Delhi, Mumbai and Chandigarh. SEO, Paid Media, Social, Web & Branding.",
  logo: "/logo.png",
  favicon: "/favicon.png",
  whatsappNumber: "917738137483",
  email: "info@anujmedia.in",
  branches: [
    {
      code: "DEL",
      city: "Delhi",
      tag: "North India Corporate & Tech Hub",
      description:
        "Serving clients across Delhi, Gurugram, Noida, and NCR. Specializing in high-scale performance marketing, enterprise SEO, and brand growth.",
      focus: "Performance Marketing, Enterprise SEO, D2C Growth",
    },
    {
      code: "BOM",
      city: "Mumbai",
      tag: "Western India Creative & Brand Hub",
      description:
        "Driving creative strategy, influencer ecosystems, and paid media for leading lifestyle, BFSI, and e-commerce enterprises across Mumbai and Pune.",
      focus: "Creative Strategy, Social Viral Content, Meta Ads",
    },
    {
      code: "IXC",
      city: "Chandigarh",
      tag: "Tri-City & Overseas Growth Hub",
      description:
        "Empowering high-growth businesses, education, real estate, and export leaders across Chandigarh, Mohali, Panchkula, and Punjab.",
      focus: "Lead Generation, Web Tech, Local Reputation (ORM)",
    },
  ] as Branch[],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Why Us" },
    { href: "/branches", label: "Branches" },
    { href: "/contact", label: "Contact" },
  ],
};

export function getWhatsAppLink(customMessage?: string): string {
  const message =
    customMessage || "Hi, I'd like to talk about digital marketing for my brand.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
