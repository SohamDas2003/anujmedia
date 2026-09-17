<?php
require_once __DIR__ . '/config.php';

$currentPage = 'services';
$pageTitle = 'Digital Marketing Services — ' . $config['company_name'];
$pageDesc = 'Comprehensive digital marketing services: SEO, Performance Ads, Social Media, Web Development, Branding and ORM from Delhi, Mumbai & Chandigarh teams.';

include __DIR__ . '/header.php';
?>

<section class="page-hero">
  <div class="wrap">
    <div class="reveal">
      <span class="eyebrow">Services Catalog</span>
      <h1>Full-Funnel Digital Services Engineered to Deliver Results.</h1>
      <p>Whether you need a dedicated search strategy, high-ROI performance advertising, or a brand makeover, our pan-India teams execute with speed and precision.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="services-grid">
      
      <!-- SEO -->
      <div class="service-card reveal" id="seo">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          <h3>Search Engine Optimisation (SEO)</h3>
          <p>Get found by high-intent customers when they search for your products or services. We engineer sustainable organic traffic that converts.</p>
          <ul class="service-features">
            <li>Technical SEO &amp; Core Web Vitals audit</li>
            <li>In-depth keyword &amp; competitor gap analysis</li>
            <li>Local SEO optimization for multi-city hubs</li>
            <li>High-authority link acquisition &amp; content strategy</li>
          </ul>
        </div>
        <a href="contact.php?service=SEO" class="btn btn-signal" style="margin-top:20px;text-align:center;justify-content:center;">Get SEO Audit →</a>
      </div>

      <!-- Paid Ads -->
      <div class="service-card reveal" id="ads">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg>
          <h3>Paid Media &amp; Google Ads (PPC)</h3>
          <p>Maximize your return on ad spend with precision-targeted search, display, and performance media campaigns managed by certified experts.</p>
          <ul class="service-features">
            <li>Google Search, Shopping &amp; Performance Max</li>
            <li>Meta (Facebook &amp; Instagram) ads &amp; Retargeting</li>
            <li>B2B LinkedIn lead generation campaigns</li>
            <li>Continuous A/B copy and creative testing</li>
          </ul>
        </div>
        <a href="contact.php?service=Paid+Media" class="btn btn-signal" style="margin-top:20px;text-align:center;justify-content:center;">Scale Your Ads →</a>
      </div>

      <!-- Social Media -->
      <div class="service-card reveal" id="social">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <h3>Social Media Marketing</h3>
          <p>Build an active community of loyal brand advocates. We handle creative concepting, production, publishing, and community management.</p>
          <ul class="service-features">
            <li>Monthly content calendar &amp; strategic themes</li>
            <li>Short-form video, Reels &amp; carousel creation</li>
            <li>Community engagement &amp; direct response</li>
            <li>Influencer seeding &amp; brand partnerships</li>
          </ul>
        </div>
        <a href="contact.php?service=Social+Media" class="btn btn-signal" style="margin-top:20px;text-align:center;justify-content:center;">Boost Social Presence →</a>
      </div>

      <!-- Web Design & Dev -->
      <div class="service-card reveal" id="web">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v12H8l-4 4V4z"/></svg>
          <h3>Website Design &amp; Development</h3>
          <p>Fast, mobile-first websites and landing pages custom-built to maximize conversion rates and provide frictionless user experiences.</p>
          <ul class="service-features">
            <li>Custom responsive UI/UX design in Figma</li>
            <li>Lightning-fast speed &amp; lightweight clean code</li>
            <li>High-converting landing pages for paid ads</li>
            <li>CRM, WhatsApp &amp; analytics integrations</li>
          </ul>
        </div>
        <a href="contact.php?service=Web+Design" class="btn btn-signal" style="margin-top:20px;text-align:center;justify-content:center;">Build Your Website →</a>
      </div>

      <!-- Branding & Creative -->
      <div class="service-card reveal" id="branding">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.5 5 5.5.7-4 3.8 1 5.5L12 15l-5 3 1-5.5-4-3.8 5.5-.7L12 3z"/></svg>
          <h3>Branding &amp; Creative Strategy</h3>
          <p>Elevate how the market perceives your company with a distinctive visual identity, messaging guidelines, and memorable design systems.</p>
          <ul class="service-features">
            <li>Logo design, typography &amp; brand palette</li>
            <li>Brand voice, core narrative &amp; copywriting</li>
            <li>Packaging, collateral &amp; presentation design</li>
            <li>Multi-channel digital brand style guide</li>
          </ul>
        </div>
        <a href="contact.php?service=Branding" class="btn btn-signal" style="margin-top:20px;text-align:center;justify-content:center;">Transform Brand →</a>
      </div>

      <!-- ORM -->
      <div class="service-card reveal" id="orm">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z"/></svg>
          <h3>Online Reputation Management</h3>
          <p>Protect and strengthen your company's digital reputation. We proactively monitor sentiment, manage reviews, and handle crisis PR.</p>
          <ul class="service-features">
            <li>24/7 brand sentiment &amp; mention monitoring</li>
            <li>Google Business Profile &amp; review curation</li>
            <li>Suppression of misleading negative search links</li>
            <li>Executive reputation &amp; corporate PR defense</li>
          </ul>
        </div>
        <a href="contact.php?service=ORM" class="btn btn-signal" style="margin-top:20px;text-align:center;justify-content:center;">Protect Reputation →</a>
      </div>

    </div>
  </div>
</section>

<!-- Methodology / Process Section -->
<section class="section why">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Our Methodology</span>
      <h2>How we turn your marketing investment into measurable growth.</h2>
      <p>A proven 4-step framework used across 500+ client campaigns to drive predictable returns.</p>
    </div>
    <div class="why-grid">
      <div class="why-item reveal">
        <span class="eyebrow">Step 01</span>
        <h3>Deep-Dive Audit</h3>
        <p>We analyze your historical ad data, SEO health, conversion rates, and competitor positioning to uncover untapped opportunities.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">Step 02</span>
        <h3>Custom Roadmap</h3>
        <p>You get an actionable roadmap with clear revenue targets, channel budgets, and timelines tailored to your industry.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">Step 03</span>
        <h3>Agile Execution</h3>
        <p>Our Delhi, Mumbai, and Chandigarh teams launch creatives, optimize campaigns, and build landing pages rapidly.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">Step 04</span>
        <h3>Weekly Optimization</h3>
        <p>Transparent weekly dashboards, direct Slack/WhatsApp communication, and continuous iteration for compounding growth.</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Banner -->
<section class="cta-banner">
  <div class="wrap">
    <div class="cta-box reveal">
      <h2>Ready to dominate your industry's digital space?</h2>
      <p>Get in touch with our strategists for a free audit and customized proposal for your brand.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="contact.php" class="btn btn-hero-primary">Request Free Proposal</a>
        <a href="<?= htmlspecialchars($waLink) ?>" class="btn btn-outline-light" target="_blank" rel="noopener">Chat on WhatsApp</a>
      </div>
    </div>
  </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
