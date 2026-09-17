<?php
require_once __DIR__ . '/config.php';

$currentPage = 'about';
$pageTitle = 'Why Choose Us & About — ' . $config['company_name'];
$pageDesc = 'Learn how Anuj Media combines on-ground market insight across Delhi, Mumbai, and Chandigarh with full-funnel digital marketing expertise.';

include __DIR__ . '/header.php';
?>

<section class="page-hero">
  <div class="wrap">
    <div class="reveal">
      <span class="eyebrow">About Anuj Media</span>
      <h1>Built on Results. Powered by On-Ground Market Intelligence.</h1>
      <p>We are a performance-first digital marketing and growth agency. With dedicated teams in Delhi, Mumbai, and Chandigarh, we combine local consumer nuance with national execution power.</p>
    </div>
  </div>
</section>

<!-- Company Overview / Story -->
<section class="section">
  <div class="wrap">
    <div class="contact-grid">
      <div class="reveal">
        <span class="eyebrow">Our Philosophy</span>
        <h2>Bridging the gap between agency creativity and business revenue.</h2>
        <p style="color:var(--muted);margin-top:16px;line-height:1.7;">Traditional marketing agencies often focus on vanity metrics — likes, impressions, and superficial buzz. At <?= htmlspecialchars($config['company_name']) ?>, we view marketing as an investment engine designed to generate measurable revenue, pipeline leads, and compounding brand equity.</p>
        <p style="color:var(--muted);margin-top:14px;line-height:1.7;">By placing physical teams in India's key economic centers — North India (Delhi &amp; Chandigarh) and Western India (Mumbai) — we understand regional customer psychology, regional ad costs, and real-time market opportunities that remote agencies simply miss.</p>
      </div>

      <div class="form-card reveal" style="background:var(--surface-dark);color:var(--text-inverse);border-color:var(--border-inverse);">
        <h3 style="font-size:1.4rem;margin-bottom:16px;">The Anuj Media Advantage</h3>
        <ul style="display:flex;flex-direction:column;gap:16px;font-size:.95rem;color:var(--muted-inverse);">
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--signal);font-weight:700;font-size:1.2rem;line-height:1;">✓</span>
            <div><strong style="color:var(--text-inverse);">Direct Access to Strategists:</strong> No junior middlemen. You work directly with experienced growth leaders.</div>
          </li>
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--signal);font-weight:700;font-size:1.2rem;line-height:1;">✓</span>
            <div><strong style="color:var(--text-inverse);">Integrated Multi-Channel Stack:</strong> SEO, performance ads, social creative, and conversion tech working in sync.</div>
          </li>
          <li style="display:flex;gap:12px;align-items:flex-start;">
            <span style="color:var(--signal);font-weight:700;font-size:1.2rem;line-height:1;">✓</span>
            <div><strong style="color:var(--text-inverse);">Full Data Transparency:</strong> Real-time dashboards with direct attribution to leads and ROI.</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid reveal">
      <div class="stat-box">
        <div class="stat-num">500+</div>
        <div class="stat-lbl">Campaigns Delivered</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">3</div>
        <div class="stat-lbl">Regional Hubs (DEL, BOM, IXC)</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">₹50Cr+</div>
        <div class="stat-lbl">Ad Spend Managed</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">98%</div>
        <div class="stat-lbl">Client Retention Rate</div>
      </div>
    </div>
  </div>
</section>

<!-- 4 Core Pillars -->
<section class="section why">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Our Core Pillars</span>
      <h2>Why high-growth brands choose to scale with us.</h2>
      <p>We built our operational model to eliminate the friction, delays, and opacity of traditional agency setups.</p>
    </div>
    <div class="why-grid">
      <div class="why-item reveal">
        <span class="eyebrow">01</span>
        <h3>On-Ground Insight</h3>
        <p>Our localized teams understand regional nuances, buying behaviors, and hyper-local audience triggers across key Indian cities.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">02</span>
        <h3>Single Point of Contact</h3>
        <p>One dedicated account director orchestrates your strategy, creatives, ad spend, and reporting end-to-end.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">03</span>
        <h3>Revenue-First Metric</h3>
        <p>We gauge success by qualified customer leads, booked appointments, and return on ad spend (ROAS) rather than empty impressions.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">04</span>
        <h3>Speed &amp; Adaptation</h3>
        <p>Our agile sprint system allows campaign pivots and creative updates to be deployed in hours, not weeks.</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Banner -->
<section class="cta-banner">
  <div class="wrap">
    <div class="cta-box reveal">
      <h2>Let's discuss how we can scale your business.</h2>
      <p>Schedule a 1-on-1 strategy session with our senior marketing team today.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="contact.php" class="btn btn-hero-primary">Book Strategy Call</a>
        <a href="<?= htmlspecialchars($waLink) ?>" class="btn btn-outline-light" target="_blank" rel="noopener">Chat on WhatsApp</a>
      </div>
    </div>
  </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
