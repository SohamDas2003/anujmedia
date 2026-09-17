<?php
require_once __DIR__ . '/config.php';

$currentPage = 'branches';
$pageTitle = 'Our Offices — Delhi, Mumbai & Chandigarh — ' . $config['company_name'];
$pageDesc = 'Visit Anuj Media branch offices across Delhi, Mumbai and Chandigarh. Connect with our on-ground digital marketing teams.';

include __DIR__ . '/header.php';
?>

<section class="page-hero">
  <div class="wrap">
    <div class="reveal">
      <span class="eyebrow">Our Locations</span>
      <h1>Strategic Presence Across Delhi, Mumbai &amp; Chandigarh.</h1>
      <p>Local market insights, rapid on-ground coordination, and national execution power. Choose your closest hub to get started.</p>
    </div>
  </div>
</section>

<!-- Regional Branches Grid -->
<section class="section">
  <div class="wrap">
    <div class="branch-grid">
      
      <!-- Delhi -->
      <div class="branch-card reveal" style="display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <svg class="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <span class="branch-code">DEL</span>
          <h3>Delhi</h3>
          <div class="branch-tag">North India Corporate &amp; Tech Hub</div>
          <div class="branch-details">
            <p>Serving clients across Delhi, Gurugram, Noida, and the wider NCR. Specializing in high-scale performance marketing, enterprise SEO, and brand growth.</p>
            <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;font-size:.86rem;color:var(--text-inverse);">
              <div>⚡ <strong>Focus:</strong> Performance Marketing, Enterprise SEO, D2C Growth</div>
              <div>📞 <strong>Phone:</strong> <?= htmlspecialchars($config['whatsapp']) ?></div>
              <div>✉️ <strong>Email:</strong> <?= htmlspecialchars($config['email']) ?></div>
            </div>
          </div>
        </div>
        <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap;">
          <a href="contact.php?city=Delhi" class="btn btn-signal" style="flex:1;justify-content:center;">Contact Delhi →</a>
          <a href="https://wa.me/<?= htmlspecialchars($config['whatsapp']) ?>?text=<?= rawurlencode('Hi, I\'d like to connect with the Delhi team.') ?>" class="btn btn-outline-light" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>

      <!-- Mumbai -->
      <div class="branch-card reveal" style="display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <svg class="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <span class="branch-code">BOM</span>
          <h3>Mumbai</h3>
          <div class="branch-tag">Western India Creative &amp; Brand Hub</div>
          <div class="branch-details">
            <p>Driving creative strategy, influencer ecosystems, and paid media for leading lifestyle, BFSI, and e-commerce enterprises across Mumbai and Pune.</p>
            <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;font-size:.86rem;color:var(--text-inverse);">
              <div>⚡ <strong>Focus:</strong> Creative Strategy, Social Viral Content, Meta Ads</div>
              <div>📞 <strong>Phone:</strong> <?= htmlspecialchars($config['whatsapp']) ?></div>
              <div>✉️ <strong>Email:</strong> <?= htmlspecialchars($config['email']) ?></div>
            </div>
          </div>
        </div>
        <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap;">
          <a href="contact.php?city=Mumbai" class="btn btn-signal" style="flex:1;justify-content:center;">Contact Mumbai →</a>
          <a href="https://wa.me/<?= htmlspecialchars($config['whatsapp']) ?>?text=<?= rawurlencode('Hi, I\'d like to connect with the Mumbai team.') ?>" class="btn btn-outline-light" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>

      <!-- Chandigarh -->
      <div class="branch-card reveal" style="display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <svg class="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <span class="branch-code">IXC</span>
          <h3>Chandigarh</h3>
          <div class="branch-tag">Tri-City &amp; Overseas Growth Hub</div>
          <div class="branch-details">
            <p>Empowering high-growth businesses, education, real estate, and export leaders across Chandigarh, Mohali, Panchkula, and Punjab.</p>
            <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;font-size:.86rem;color:var(--text-inverse);">
              <div>⚡ <strong>Focus:</strong> Lead Generation, Web Tech, Local Reputation (ORM)</div>
              <div>📞 <strong>Phone:</strong> <?= htmlspecialchars($config['whatsapp']) ?></div>
              <div>✉️ <strong>Email:</strong> <?= htmlspecialchars($config['email']) ?></div>
            </div>
          </div>
        </div>
        <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap;">
          <a href="contact.php?city=Chandigarh" class="btn btn-signal" style="flex:1;justify-content:center;">Contact Chandigarh →</a>
          <a href="https://wa.me/<?= htmlspecialchars($config['whatsapp']) ?>?text=<?= rawurlencode('Hi, I\'d like to connect with the Chandigarh team.') ?>" class="btn btn-outline-light" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Operations Model Section -->
<section class="section why">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">How We Collaborate</span>
      <h2>Three cities operating as a synchronized unit.</h2>
      <p>You don't just hire a single office — you get access to the collective brainpower, specialized creatives, and media buyers across our entire network.</p>
    </div>
    <div class="why-grid">
      <div class="why-item reveal">
        <span class="eyebrow">01</span>
        <h3>Single Point Accountability</h3>
        <p>No matter which city is closest to you, you receive a dedicated account manager who coordinates all teams seamlessly.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">02</span>
        <h3>Cross-City Resource Pooling</h3>
        <p>Your campaigns leverage our best video editors in Mumbai, tech developers in Chandigarh, and SEO strategists in Delhi.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">03</span>
        <h3>Instant Communication</h3>
        <p>Direct WhatsApp/Slack groups ensure same-hour responses and zero communication bottlenecks.</p>
      </div>
      <div class="why-item reveal">
        <span class="eyebrow">04</span>
        <h3>Physical Presence</h3>
        <p>Drop in anytime to our regional locations for in-person quarterly reviews and strategy whiteboard sessions.</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Banner -->
<section class="cta-banner">
  <div class="wrap">
    <div class="cta-box reveal">
      <h2>Let's connect in your city.</h2>
      <p>Our regional team is ready to analyze your brand and deliver a step-by-step digital roadmap.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="contact.php" class="btn btn-hero-primary">Start Strategy Conversation</a>
        <a href="<?= htmlspecialchars($waLink) ?>" class="btn btn-outline-light" target="_blank" rel="noopener">Chat on WhatsApp</a>
      </div>
    </div>
  </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
