<?php
require_once __DIR__ . '/config.php';

$currentPage = 'home';
$pageTitle = $config['company_name'] . ' — ' . $config['tagline'];
$pageDesc = 'Full-service digital marketing agency with on-ground teams in Delhi, Mumbai and Chandigarh. SEO, Paid Media, Social, Web & Branding.';

$formError = handleContactForm($config);
$showSuccess = isset($_GET['success']);

include __DIR__ . '/header.php';
?>

<section class="hero">
  <div class="wrap hero-grid">
    <div class="reveal">
      <div class="hero-hello">
        <span>HELLO!</span>
        <svg class="starburst" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2L13.8 8.6L20.4 10.4L13.8 12.2L12 18.8L10.2 12.2L3.6 10.4L10.2 8.6L12 2Z" fill="currentColor"/>
          <path d="M18.5 4.5L16.2 8.2L19.9 10.5L16.2 12.8L18.5 16.5L14.8 14.2L12.5 17.9L10.2 14.2L6.5 16.5L8.8 12.8L5.1 10.5L8.8 8.2L6.5 4.5L10.2 6.8L12.5 3.1L14.8 6.8L18.5 4.5Z" fill="currentColor" opacity="0.35"/>
        </svg>
      </div>
      <h1>
        Digital
        <span class="hero-pill" aria-hidden="true">
          <svg viewBox="0 0 76 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="18" x2="76" y2="18" stroke="#5B6472" stroke-width="1.8"/>
            <ellipse cx="28" cy="18" rx="14" ry="14" fill="#FFFFFF" stroke="#12161C" stroke-width="2.2"/>
            <ellipse cx="48" cy="18" rx="14" ry="14" fill="#1FAE8E" stroke="#12161C" stroke-width="2.2"/>
          </svg>
        </span>
        marketing that gets you <em>results.</em>
      </h1>
      <p class="lead">Digital agency offering tailored growth systems to build a commanding presence, acquire qualified leads, and scale your brand across India.</p>
      <div class="hero-cta-area">
        <div class="hero-ctas">
          <a href="contact.php" class="btn btn-hero-primary">Get Free Proposal</a>
          <a href="<?= htmlspecialchars($waLink) ?>" class="btn btn-outline-light" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
        <div class="hero-doodle-arrow" aria-hidden="true">
          <svg viewBox="0 0 130 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 26 C 28 8, 55 46, 80 20 C 95 6, 110 25, 122 18" stroke="#1FAE8E" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <path d="M106 14 L 123 18 L 114 31" stroke="#1FAE8E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <ellipse cx="42" cy="30" rx="16" ry="10" transform="rotate(-15 42 30)" stroke="#1FAE8E" stroke-width="1.8" stroke-dasharray="2 4" fill="none" opacity="0.4"/>
          </svg>
        </div>
      </div>
      <div class="hero-strip">
        <div><strong>3</strong>Offices, One Team</div>
        <div><strong>360°</strong>Full-Funnel Marketing</div>
        <div><strong>1:1</strong>Dedicated Account Lead</div>
      </div>
    </div>
    <div class="hero-art-wrapper reveal">
      <!-- Layered rotated background cards -->
      <div class="hero-card-bg hero-card-green" aria-hidden="true"></div>
      <div class="hero-card-bg hero-card-yellow" aria-hidden="true">
        <svg class="hero-card-pattern" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="280" cy="50" r="120" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.35" fill="none"/>
          <circle cx="280" cy="50" r="180" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.25" fill="none"/>
          <circle cx="40" cy="240" r="80" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.35" fill="none"/>
          <circle cx="30" cy="120" r="6" fill="#FFFFFF" fill-opacity="0.6"/>
          <circle cx="240" cy="220" r="8" fill="#FFFFFF" fill-opacity="0.6"/>
        </svg>
      </div>
      <!-- Hero Character / Portrait -->
      <img src="./hero-woman.png" alt="Digital Marketing Growth Partner" class="hero-person-img">
      <!-- Floating Badges -->
      <div class="hero-badge badge-top">
        <span>⭐</span> 4.9/5 Rating · 500+ Campaigns
      </div>
      <div class="hero-badge badge-bottom">
        <span>📍</span> Delhi · Mumbai · Chandigarh
      </div>
    </div>
  </div>
</section>

<!-- Services Overview -->
<section class="section" id="services-preview">
  <div class="wrap">
    <div class="section-head reveal" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;max-width:100%;">
      <div>
        <span class="eyebrow">What We Do</span>
        <h2>Every channel that moves a customer from scroll to sale.</h2>
        <p>Pick one service or hand us the whole funnel — our teams work as a single unit across all three cities.</p>
      </div>
      <a href="services.php" class="btn btn-outline-dark">View All Services →</a>
    </div>
    <div class="services-grid">
      <div class="service-card reveal">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          <h3>Search Engine Optimisation</h3>
          <p>On-page, technical and high-authority local SEO engineered to get your brand discovered and dominate search rankings.</p>
        </div>
        <a href="services.php#seo" style="color:var(--signal);font-weight:600;margin-top:18px;display:inline-block;">Learn more →</a>
      </div>
      <div class="service-card reveal">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg>
          <h3>Paid Media &amp; Google Ads</h3>
          <p>Targeted search, display, and social ad campaigns optimized strictly for positive ROI and lower cost-per-lead.</p>
        </div>
        <a href="services.php#ads" style="color:var(--signal);font-weight:600;margin-top:18px;display:inline-block;">Learn more →</a>
      </div>
      <div class="service-card reveal">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <h3>Social Media Marketing</h3>
          <p>Creative brand positioning, viral content production, and community engagement designed for real customer retention.</p>
        </div>
        <a href="services.php#social" style="color:var(--signal);font-weight:600;margin-top:18px;display:inline-block;">Learn more →</a>
      </div>
      <div class="service-card reveal">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v12H8l-4 4V4z"/></svg>
          <h3>Website Design &amp; Development</h3>
          <p>High-speed, responsive, conversion-focused websites and web apps crafted to turn visitors into paying customers.</p>
        </div>
        <a href="services.php#web" style="color:var(--signal);font-weight:600;margin-top:18px;display:inline-block;">Learn more →</a>
      </div>
      <div class="service-card reveal">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.5 5 5.5.7-4 3.8 1 5.5L12 15l-5 3 1-5.5-4-3.8 5.5-.7L12 3z"/></svg>
          <h3>Branding &amp; Creative</h3>
          <p>Cohesive brand identities, visual style systems, and compelling copy that make your company instantly memorable.</p>
        </div>
        <a href="services.php#branding" style="color:var(--signal);font-weight:600;margin-top:18px;display:inline-block;">Learn more →</a>
      </div>
      <div class="service-card reveal">
        <div>
          <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z"/></svg>
          <h3>Online Reputation Management</h3>
          <p>Proactive review curation, sentiment management, and PR protection to keep your digital brand spotless.</p>
        </div>
        <a href="services.php#orm" style="color:var(--signal);font-weight:600;margin-top:18px;display:inline-block;">Learn more →</a>
      </div>
    </div>
  </div>
</section>

<!-- Why Us Section -->
<section class="section why">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Why This Team</span>
      <h2>Three offices means three time zones of market insight, one working day apart.</h2>
    </div>
    <div class="why-grid">
      <div class="why-item reveal">
        <span class="eyebrow">01</span>
        <h3>On-ground, not outsourced</h3>
        <p>Client teams sit in the same city as the markets you're trying to win — Delhi, Mumbai and Chandigarh.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">02</span>
        <h3>One account, one owner</h3>
        <p>A single point of contact runs your account end to end, across every channel we touch.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">03</span>
        <h3>Numbers over noise</h3>
        <p>Monthly reporting tied to leads and revenue — not impressions dressed up as results.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">04</span>
        <h3>Fast to move</h3>
        <p>Small enough to turn a campaign around in days, structured enough to scale it nationally.</p>
      </div>
    </div>
  </div>
</section>

<!-- Regional Branches Overview -->
<section class="section branches">
  <div class="wrap">
    <div class="section-head reveal" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;max-width:100%;">
      <div>
        <span class="eyebrow">Our Offices</span>
        <h2>Find us in Delhi, Mumbai and Chandigarh.</h2>
        <p>Drop in for a coffee and a strategy chat, or start on WhatsApp — either works.</p>
      </div>
      <a href="branches.php" class="btn btn-outline-light">Explore Our Branches →</a>
    </div>
    <div class="branch-grid">
      <?php foreach ($config['branches'] as $b): ?>
      <div class="branch-card reveal">
        <svg class="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
        <span class="branch-code"><?= htmlspecialchars($b['code']) ?></span>
        <h3><?= htmlspecialchars($b['city']) ?></h3>
        <div class="branch-tag">Regional Team &amp; Operations</div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Quick Contact / Lead Form -->
<section class="section" id="contact">
  <div class="wrap contact-grid">
    <div class="contact-info reveal">
      <span class="eyebrow">Get In Touch</span>
      <h2>Tell us about your brand. We'll tell you how to grow it.</h2>
      <p>Share a few details and the team in your closest city will get back to you — usually the same working day.</p>
      <div class="info-row">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/></svg>
        <span><?= htmlspecialchars($config['email']) ?></span>
      </div>
      <div class="info-row">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
        <span>Delhi · Mumbai · Chandigarh</span>
      </div>
    </div>

    <div class="form-card reveal">
      <?php if ($showSuccess): ?>
        <div class="form-msg ok">Thanks — your message is in. Our team will reach out shortly.</div>
      <?php elseif ($formError): ?>
        <div class="form-msg err"><?= htmlspecialchars($formError) ?></div>
      <?php endif; ?>

      <form method="POST" action="index.php#contact" novalidate>
        <input type="text" name="website" class="honeypot" tabindex="-1" autocomplete="off">
        <div class="form-row">
          <div class="field">
            <label for="name">Full name *</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="field">
            <label for="phone">Phone *</label>
            <input type="tel" id="phone" name="phone" required>
          </div>
        </div>
        <div class="form-row">
          <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
          </div>
          <div class="field">
            <label for="city">Nearest branch</label>
            <select id="city" name="city">
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="field full">
            <label for="service">Service you're interested in</label>
            <select id="service" name="service">
              <option value="SEO">SEO</option>
              <option value="Paid Media / Google Ads">Paid Media / Google Ads</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Website Design & Development">Website Design &amp; Development</option>
              <option value="Branding & Creative">Branding &amp; Creative</option>
              <option value="Online Reputation Management">Online Reputation Management</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="field full">
            <label for="message">Tell us a bit about your brand</label>
            <textarea id="message" name="message"></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-signal submit-btn">Send &amp; Get Free Proposal</button>
      </form>
    </div>
  </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
