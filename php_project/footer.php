</main>

<footer>
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.php" class="logo">
          <?php if (!empty($config['logo'])): ?>
            <img src="<?= htmlspecialchars($config['logo']) ?>" alt="<?= htmlspecialchars($config['company_name']) ?>" class="logo-img">
          <?php else: ?>
            <span style="color:#fff;"><?= htmlspecialchars($config['company_name']) ?></span><span style="color:var(--signal)">.</span>
          <?php endif; ?>
        </a>
        <p><?= htmlspecialchars($config['tagline']) ?></p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="index.php">Home</a>
          <a href="services.php">Services</a>
          <a href="about.php">Why Us</a>
          <a href="branches.php">Our Offices</a>
          <a href="contact.php">Contact Us</a>
        </div>
      </div>
      <div>
        <h4>Offices</h4>
        <div class="footer-branch-list">
          <?php foreach ($config['branches'] as $b): ?>
          <div class="footer-branch-item">
            <span class="branch-code"><?= htmlspecialchars($b['code']) ?></span>
            <span><?= htmlspecialchars($b['city']) ?></span>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <div class="footer-links">
          <a href="mailto:<?= htmlspecialchars($config['email']) ?>"><?= htmlspecialchars($config['email']) ?></a>
          <a href="<?= htmlspecialchars($waLink) ?>" target="_blank" rel="noopener" style="color:var(--signal);font-weight:600;">Chat on WhatsApp →</a>
          <a href="contact.php" style="color:var(--text-inverse);margin-top:6px;">Request Proposal →</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <?= date('Y') ?> <?= htmlspecialchars($config['company_name']) ?>. All rights reserved.</span>
      <span><?= htmlspecialchars($config['email']) ?></span>
    </div>
  </div>
</footer>

<a href="<?= htmlspecialchars($waLink) ?>" class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2z"/></svg>
</a>

<script>
// Mobile navigation drawer toggle
const hb = document.getElementById('hamburgerBtn');
const panel = document.getElementById('mobilePanel');
const cx = document.getElementById('closePanelBtn');
if (hb && panel && cx) {
  hb.addEventListener('click', () => {
    panel.classList.add('open');
    hb.setAttribute('aria-expanded', 'true');
  });
  cx.addEventListener('click', () => {
    panel.classList.remove('open');
    hb.setAttribute('aria-expanded', 'false');
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));
}

// Scroll reveal animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
</script>
</body>
</html>
