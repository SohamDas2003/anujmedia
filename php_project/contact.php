<?php
require_once __DIR__ . '/config.php';

$currentPage = 'contact';
$pageTitle = 'Contact Us & Get Free Proposal — ' . $config['company_name'];
$pageDesc = 'Get in touch with Anuj Media. Contact our Delhi, Mumbai, and Chandigarh teams for a free audit and tailored digital marketing proposal.';

$formError = handleContactForm($config);
$showSuccess = isset($_GET['success']);

$selectedCity = $_GET['city'] ?? '';
$selectedService = $_GET['service'] ?? '';

include __DIR__ . '/header.php';
?>

<section class="page-hero">
  <div class="wrap">
    <div class="reveal">
      <span class="eyebrow">Contact Us</span>
      <h1>Let's Build Something Exceptional Together.</h1>
      <p>Fill out the form below for a free digital audit and growth proposal, or reach out to our team instantly on WhatsApp.</p>
    </div>
  </div>
</section>

<!-- Contact Form Section -->
<section class="section" id="contact">
  <div class="wrap contact-grid">
    
    <div class="contact-info reveal">
      <span class="eyebrow">Direct Channels</span>
      <h2>We're ready when you are.</h2>
      <p>Share a few details about your objectives, and our strategists will get back to you with actionable insights within 24 business hours.</p>
      
      <div class="info-row">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/></svg>
        <div>
          <div style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;font-weight:600;">Email Us</div>
          <a href="mailto:<?= htmlspecialchars($config['email']) ?>" style="font-weight:600;color:var(--ink);"><?= htmlspecialchars($config['email']) ?></a>
        </div>
      </div>

      <div class="info-row">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        <div>
          <div style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;font-weight:600;">WhatsApp / Phone</div>
          <a href="<?= htmlspecialchars($waLink) ?>" target="_blank" rel="noopener" style="font-weight:600;color:var(--signal);">+91 7738137483 (Instant Chat)</a>
        </div>
      </div>

      <div class="info-row">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
        <div>
          <div style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;font-weight:600;">Regional Hubs</div>
          <span style="font-weight:600;color:var(--ink);">Delhi (DEL) · Mumbai (BOM) · Chandigarh (IXC)</span>
        </div>
      </div>

      <div style="margin-top:36px;padding:22px;background:#fff;border-radius:10px;border:1px solid var(--border);">
        <h4 style="font-size:.96rem;margin-bottom:8px;color:var(--ink);">What happens next?</h4>
        <ol style="margin-left:18px;font-size:.88rem;color:var(--muted);display:flex;flex-direction:column;gap:6px;">
          <li>1. Our regional strategist reviews your website and channels.</li>
          <li>2. We prepare a tailored competitor benchmark and audit.</li>
          <li>3. We host a 30-minute discovery call with actionable recommendations.</li>
        </ol>
      </div>
    </div>

    <!-- Form Card -->
    <div class="form-card reveal">
      <?php if ($showSuccess): ?>
        <div class="form-msg ok">
          <strong>Thank you!</strong> Your message has been received. Our regional team will contact you shortly with your customized proposal.
        </div>
      <?php elseif ($formError): ?>
        <div class="form-msg err"><?= htmlspecialchars($formError) ?></div>
      <?php endif; ?>

      <form method="POST" action="contact.php#contact" novalidate>
        <input type="text" name="website" class="honeypot" tabindex="-1" autocomplete="off">
        
        <div class="form-row">
          <div class="field">
            <label for="name">Full name *</label>
            <input type="text" id="name" name="name" placeholder="e.g. Rahul Sharma" required>
          </div>
          <div class="field">
            <label for="phone">Phone / WhatsApp *</label>
            <input type="tel" id="phone" name="phone" placeholder="e.g. 9876543210" required>
          </div>
        </div>

        <div class="form-row">
          <div class="field">
            <label for="email">Work Email</label>
            <input type="email" id="email" name="email" placeholder="rahul@yourcompany.com">
          </div>
          <div class="field">
            <label for="city">Nearest Branch</label>
            <select id="city" name="city">
              <option value="Delhi" <?= ($selectedCity === 'Delhi') ? 'selected' : '' ?>>Delhi (DEL)</option>
              <option value="Mumbai" <?= ($selectedCity === 'Mumbai') ? 'selected' : '' ?>>Mumbai (BOM)</option>
              <option value="Chandigarh" <?= ($selectedCity === 'Chandigarh') ? 'selected' : '' ?>>Chandigarh (IXC)</option>
              <option value="Other" <?= ($selectedCity === 'Other') ? 'selected' : '' ?>>Other / Pan-India</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="field full">
            <label for="service">Primary Service Interested In</label>
            <select id="service" name="service">
              <option value="SEO" <?= (stripos($selectedService, 'SEO') !== false) ? 'selected' : '' ?>>Search Engine Optimisation (SEO)</option>
              <option value="Paid Media / Google Ads" <?= (stripos($selectedService, 'Paid') !== false) ? 'selected' : '' ?>>Paid Media &amp; Google Ads</option>
              <option value="Social Media Marketing" <?= (stripos($selectedService, 'Social') !== false) ? 'selected' : '' ?>>Social Media Marketing</option>
              <option value="Website Design & Development" <?= (stripos($selectedService, 'Web') !== false) ? 'selected' : '' ?>>Website Design &amp; Development</option>
              <option value="Branding & Creative" <?= (stripos($selectedService, 'Brand') !== false) ? 'selected' : '' ?>>Branding &amp; Creative Strategy</option>
              <option value="Online Reputation Management" <?= (stripos($selectedService, 'ORM') !== false) ? 'selected' : '' ?>>Online Reputation Management (ORM)</option>
              <option value="Full-Funnel Growth (All Services)" <?= ($selectedService === 'All') ? 'selected' : '' ?>>Full-Funnel Growth (All Services)</option>
              <option value="Not sure yet" <?= ($selectedService === 'Not sure yet') ? 'selected' : '' ?>>Not sure yet (Need Guidance)</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="field full">
            <label for="message">Tell us about your brand and growth goals</label>
            <textarea id="message" name="message" placeholder="What are your main challenges, target audience, or revenue targets?"></textarea>
          </div>
        </div>

        <button type="submit" class="btn btn-signal submit-btn">Submit &amp; Request Free Proposal</button>
      </form>
    </div>

  </div>
</section>

<!-- FAQs Section -->
<section class="section why">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Frequently Asked Questions</span>
      <h2>Got questions? We've got clear answers.</h2>
    </div>
    <div class="faq-grid">
      <div class="faq-item reveal">
        <h4>How quickly can we start?</h4>
        <p>Following our initial discovery and proposal approval, onboarding takes 3–5 working days to set up tracking, access, and launch initial sprints.</p>
      </div>
      <div class="faq-item reveal">
        <h4>Do you work with startups as well as established brands?</h4>
        <p>Yes. We tailor our engagement models — offering high-velocity growth setups for funded startups and comprehensive enterprise marketing frameworks for established firms.</p>
      </div>
      <div class="faq-item reveal">
        <h4>How is campaign reporting structured?</h4>
        <p>You get a 24/7 real-time dashboard, bi-weekly performance updates via WhatsApp/video call, and a comprehensive end-of-month ROI review.</p>
      </div>
      <div class="faq-item reveal">
        <h4>Can I visit your office in person?</h4>
        <p>Absolutely! We have teams in Delhi, Mumbai, and Chandigarh. Let us know your preferred time and we'll have the coffee ready.</p>
      </div>
    </div>
  </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
