<?php
if (!isset($config)) {
    require_once __DIR__ . '/config.php';
}
$pageTitle = $pageTitle ?? ($config['company_name'] . ' — ' . $config['tagline']);
$pageDesc = $pageDesc ?? ($config['company_name'] . ' is a full-service digital marketing agency with offices in Delhi, Mumbai and Chandigarh.');
$currentPage = $currentPage ?? 'home';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?= htmlspecialchars($pageTitle) ?></title>
<meta name="description" content="<?= htmlspecialchars($pageDesc) ?>">
<?php if (!empty($config['favicon'])): ?>
<link rel="icon" href="<?= htmlspecialchars($config['favicon']) ?>">
<?php endif; ?>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
:root{
  --ink:#12161C;
  --paper:#EDEFF2;
  --paper-alt:#F6F7F9;
  --surface-dark:#10151C;
  --surface-dark-alt:#181F29;
  --text-inverse:#F5F6F8;
  --muted:#5B6472;
  --muted-inverse:#9AA3AF;
  --signal:#FF5B2E;
  --signal-dim:rgba(255,91,46,.13);
  --teal:#1FAE8E;
  --teal-dim:rgba(31,174,142,.12);
  --border:rgba(18,22,28,.10);
  --border-inverse:rgba(255,255,255,.12);
  --font-display:'Space Grotesk',sans-serif;
  --font-body:'Inter',sans-serif;
  --font-mono:'JetBrains Mono',monospace;
  --max:1180px;
}
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:var(--font-body);color:var(--ink);background:var(--paper-alt);line-height:1.6;-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;min-height:100vh;}
main{flex:1;}
img{max-width:100%;display:block;}
a{color:inherit;text-decoration:none;}
ul{list-style:none;}
.wrap{max-width:var(--max);margin:0 auto;padding:0 24px;}
.eyebrow{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);font-weight:600;display:inline-flex;align-items:center;gap:8px;}
.eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--signal);box-shadow:0 0 0 4px var(--signal-dim);}
h1,h2,h3,h4{font-family:var(--font-display);letter-spacing:-.02em;line-height:1.08;}
h2{font-size:clamp(1.7rem,1rem + 2.6vw,2.5rem);font-weight:700;margin-top:10px;}
.section{padding:88px 0;}
.section-head{max-width:680px;margin-bottom:48px;}
.section-head p{color:var(--muted);margin-top:14px;font-size:1.02rem;}
:focus-visible{outline:2px solid var(--signal);outline-offset:3px;}

/* ---------- Nav ---------- */
header.nav{position:sticky;top:0;z-index:50;background:rgba(246,247,249,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;max-width:var(--max);margin:0 auto;}
.logo{display:inline-flex;align-items:center;font-family:var(--font-display);font-weight:800;font-size:1.15rem;letter-spacing:-.02em;}
.logo span{color:var(--signal);}
.logo-img{max-height:40px;width:auto;object-fit:contain;}
.nav-links{display:flex;gap:30px;font-size:.92rem;font-weight:500;}
.nav-links a{opacity:.75;transition:opacity .15s, color .15s;position:relative;}
.nav-links a:hover{opacity:1;color:var(--ink);}
.nav-links a.active{opacity:1;color:var(--signal);font-weight:600;}
.nav-links a.active::after{content:'';position:absolute;bottom:-6px;left:0;right:0;height:2px;background:var(--signal);border-radius:2px;}
.nav-cta{display:flex;align-items:center;gap:14px;}
.btn{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:6px;font-weight:600;font-size:.92rem;border:1px solid transparent;cursor:pointer;transition:transform .15s,background .15s,box-shadow .15s;}
.btn:hover{transform:translateY(-1px);}
.btn-signal{background:var(--signal);color:#fff;}
.btn-signal:hover{background:#E64E24;box-shadow:0 8px 20px rgba(255,91,46,.25);}
.btn-outline-dark{border-color:var(--ink);color:var(--ink);}
.btn-outline-dark:hover{background:var(--ink);color:#fff;}
.btn-outline-light{border-color:var(--border-inverse);color:var(--text-inverse);}
.btn-outline-light:hover{background:rgba(255,255,255,.08);}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px;}
.hamburger span{width:22px;height:2px;background:var(--ink);}
.mobile-panel{display:none;position:fixed;inset:0;z-index:60;background:var(--surface-dark);color:var(--text-inverse);padding:24px;flex-direction:column;}
.mobile-panel.open{display:flex;}
.mobile-panel .close-x{align-self:flex-end;background:none;border:none;color:var(--text-inverse);font-size:1.8rem;cursor:pointer;}
.mobile-panel a{font-family:var(--font-display);font-size:1.5rem;padding:16px 0;border-bottom:1px solid var(--border-inverse);font-weight:700;}
.mobile-panel a.active{color:var(--signal);}

/* ---------- Page Header Banner (Subpages) ---------- */
.page-hero{background:var(--surface-dark);color:var(--text-inverse);padding:72px 0 64px;border-bottom:1px solid var(--border-inverse);}
.page-hero .eyebrow{margin-bottom:8px;}
.page-hero h1{font-size:clamp(2.2rem, 1.2rem + 3.2vw, 3.6rem);font-weight:800;letter-spacing:-.03em;}
.page-hero p{color:var(--muted-inverse);font-size:1.1rem;max-width:620px;margin-top:16px;line-height:1.6;}

/* ---------- Hero (Home) ---------- */
.hero{background:var(--surface-dark);color:var(--text-inverse);padding:72px 0 96px;overflow:hidden;position:relative;}
.hero-grid{display:grid;grid-template-columns:1.08fr 0.92fr;gap:48px;align-items:center;}
.hero-hello{
  display:inline-flex;
  align-items:center;
  gap:10px;
  font-family:var(--font-display);
  font-weight:800;
  font-size:1.15rem;
  letter-spacing:.08em;
  color:var(--text-inverse);
  margin-bottom:8px;
}
.hero-hello .starburst{
  width:24px;
  height:24px;
  color:var(--signal);
  animation:spin-sparkle 16s linear infinite;
  display:inline-block;
  vertical-align:middle;
}
@keyframes spin-sparkle{
  from{transform:rotate(0deg);}
  to{transform:rotate(360deg);}
}
.hero h1{
  font-size:clamp(2.4rem, 1.3rem + 3.6vw, 4.2rem);
  font-weight:800;
  line-height:1.08;
  letter-spacing:-.03em;
  margin-top:10px;
}
.hero h1 em{font-style:normal;color:var(--signal);}
.hero-pill{
  display:inline-flex;
  align-items:center;
  vertical-align:middle;
  margin:0 4px;
  position:relative;
}
.hero-pill svg{
  height:clamp(28px, 1.2rem + 1.6vw, 42px);
  width:auto;
  display:inline-block;
  vertical-align:middle;
}
.hero p.lead{
  color:var(--muted-inverse);
  font-size:1.06rem;
  max-width:500px;
  margin-top:20px;
  line-height:1.65;
}
.hero-cta-area{position:relative;margin-top:32px;}
.hero-ctas{display:flex;gap:16px;align-items:center;flex-wrap:wrap;}
.btn-hero-primary{
  background:#F8B83D;
  color:#10151C;
  font-weight:700;
  padding:14px 28px;
  font-size:1rem;
  border-radius:8px;
  border:1px solid #F8B83D;
  box-shadow:0 10px 25px rgba(248,184,61,.3);
}
.btn-hero-primary:hover{
  background:#f3ad29;
  transform:translateY(-2px);
  box-shadow:0 14px 30px rgba(248,184,61,.45);
}
.hero-doodle-arrow{
  position:absolute;
  left:220px;
  bottom:-46px;
  width:140px;
  height:60px;
  pointer-events:none;
  color:var(--teal);
}
.hero-strip{
  display:flex;
  gap:28px;
  margin-top:54px;
  flex-wrap:wrap;
  border-top:1px solid var(--border-inverse);
  padding-top:24px;
}
.hero-strip div{font-family:var(--font-mono);font-size:.78rem;color:var(--muted-inverse);letter-spacing:.06em;}
.hero-strip strong{display:block;font-family:var(--font-display);font-size:1.3rem;color:var(--text-inverse);font-weight:700;letter-spacing:0;}

/* Right Side Composition */
.hero-art-wrapper{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:460px;
}
.hero-card-bg{
  position:absolute;
  width:clamp(280px, 24vw, 360px);
  height:clamp(280px, 24vw, 360px);
  border-radius:36px;
  transition:transform .4s ease;
}
.hero-card-green{
  background:var(--teal);
  transform:rotate(-14deg) translate(-20px, 25px);
  box-shadow:0 20px 45px rgba(31,174,142,.28);
}
.hero-card-yellow{
  background:#F8B83D;
  transform:rotate(10deg) translate(15px, -15px);
  box-shadow:0 25px 50px rgba(248,184,61,.32);
  overflow:hidden;
}
.hero-card-pattern{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}
.hero-person-img{
  position:relative;
  z-index:3;
  width:clamp(290px, 25vw, 380px);
  height:auto;
  border-radius:24px;
  object-fit:cover;
  filter:drop-shadow(0 20px 35px rgba(0,0,0,.45));
  transition:transform .3s ease;
}
.hero-person-img:hover{transform:scale(1.02);}
.hero-badge{
  position:absolute;
  z-index:4;
  background:rgba(24,31,41,.92);
  border:1px solid var(--border-inverse);
  backdrop-filter:blur(12px);
  color:var(--text-inverse);
  padding:10px 16px;
  border-radius:50px;
  font-size:.82rem;
  font-weight:600;
  display:inline-flex;
  align-items:center;
  gap:8px;
  box-shadow:0 12px 30px rgba(0,0,0,.35);
  animation:heroFloat 4s ease-in-out infinite;
}
.hero-badge.badge-top{top:15px;left:-10px;}
.hero-badge.badge-bottom{bottom:20px;right:-10px;animation-delay:2s;}
@keyframes heroFloat{
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-8px);}
}

/* ---------- Reveal Animation ---------- */
.reveal{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease;}
.reveal.is-visible{opacity:1;transform:translateY(0);}
@media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none;}}

/* ---------- Services & Grids ---------- */
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.service-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:34px 28px;transition:transform .2s,box-shadow .2s;display:flex;flex-direction:column;justify-content:space-between;}
.service-card:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(18,22,28,.08);}
.service-card .icn{width:42px;height:42px;color:var(--signal);margin-bottom:20px;}
.service-card h3{font-size:1.2rem;font-weight:700;margin-bottom:10px;}
.service-card p{color:var(--muted);font-size:.94rem;line-height:1.6;}
.service-card .service-features{margin:18px 0 22px;padding-top:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:8px;font-size:.86rem;color:var(--ink);}
.service-card .service-features li{display:flex;align-items:center;gap:8px;}
.service-card .service-features li::before{content:'✓';color:var(--teal);font-weight:700;}

/* ---------- Why Us / About ---------- */
.why{background:var(--paper);}
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;}
.why-item{background:#fff;padding:32px 24px;border-radius:10px;border:1px solid var(--border);}
.why-item .eyebrow{margin-bottom:14px;}
.why-item h3{font-size:1.1rem;font-weight:700;margin-bottom:10px;}
.why-item p{color:var(--muted);font-size:.92rem;}

.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:40px;}
.stat-box{background:var(--surface-dark-alt);border:1px solid var(--border-inverse);border-radius:12px;padding:28px 24px;text-align:center;color:var(--text-inverse);}
.stat-num{font-family:var(--font-display);font-size:2.6rem;font-weight:800;color:var(--signal);line-height:1;}
.stat-lbl{font-size:.9rem;color:var(--muted-inverse);margin-top:8px;}

/* ---------- Branches ---------- */
.branches{background:var(--surface-dark);color:var(--text-inverse);}
.branches .section-head p{color:var(--muted-inverse);}
.branch-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.branch-card{
  background:var(--surface-dark-alt);
  border:1px solid var(--border-inverse);
  border-radius:12px;
  padding:32px 28px;
  position:relative;
  transition:transform .2s, border-color .2s;
}
.branch-card:hover{
  transform:translateY(-4px);
  border-color:rgba(255,91,46,.4);
}
.branch-code{font-family:var(--font-mono);color:var(--signal);font-size:.82rem;letter-spacing:.12em;font-weight:700;}
.branch-card h3{font-size:1.5rem;margin-top:10px;font-weight:700;}
.branch-card .branch-tag{color:var(--muted-inverse);font-size:.88rem;margin-top:6px;}
.branch-card .pin{position:absolute;top:28px;right:26px;width:22px;height:22px;color:var(--signal);}
.branch-details{margin-top:20px;padding-top:16px;border-top:1px solid var(--border-inverse);font-size:.9rem;color:var(--muted-inverse);display:flex;flex-direction:column;gap:8px;}

/* ---------- Contact & Form ---------- */
.contact-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:start;}
.contact-info h2{margin-top:10px;}
.contact-info p{color:var(--muted);margin-top:16px;max-width:440px;}
.info-row{display:flex;gap:14px;align-items:center;margin-top:22px;font-size:.96rem;}
.info-row .icn{width:22px;height:22px;color:var(--signal);flex-shrink:0;}
.form-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:38px;box-shadow:0 12px 30px rgba(0,0,0,.03);}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px;}
.field{display:flex;flex-direction:column;gap:6px;}
.field.full{grid-column:1/-1;}
label{font-size:.84rem;font-weight:600;color:var(--ink);}
input,select,textarea{font-family:var(--font-body);border:1px solid var(--border);border-radius:8px;padding:12px 14px;font-size:.94rem;background:var(--paper-alt);transition:border-color .15s,background .15s;}
input:focus,select:focus,textarea:focus{outline:2px solid var(--signal);outline-offset:1px;background:#fff;}
textarea{resize:vertical;min-height:100px;}
.honeypot{position:absolute;left:-9999px;opacity:0;height:0;overflow:hidden;}
.form-msg{padding:14px 18px;border-radius:8px;font-size:.92rem;margin-bottom:20px;}
.form-msg.ok{background:rgba(31,174,142,.12);color:#127a63;border:1px solid rgba(31,174,142,.3);}
.form-msg.err{background:var(--signal-dim);color:#c23e14;border:1px solid rgba(255,91,46,.3);}
.submit-btn{width:100%;justify-content:center;padding:15px;font-size:1rem;}

/* ---------- CTA Banner Section ---------- */
.cta-banner{background:var(--surface-dark);color:var(--text-inverse);padding:80px 0;text-align:center;}
.cta-box{max-width:760px;margin:0 auto;}
.cta-box h2{font-size:clamp(2rem, 1.2rem + 2.8vw, 3rem);font-weight:800;}
.cta-box p{color:var(--muted-inverse);font-size:1.08rem;margin:16px auto 32px;max-width:540px;}

/* ---------- FAQs Section ---------- */
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:36px;}
.faq-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:26px;}
.faq-item h4{font-size:1.05rem;font-weight:700;margin-bottom:10px;color:var(--ink);}
.faq-item p{color:var(--muted);font-size:.92rem;}

/* ---------- Footer ---------- */
footer{background:var(--ink);color:var(--muted-inverse);padding:64px 0 28px;margin-top:auto;}
.footer-top{display:grid;grid-template-columns:1.5fr 1fr 1.2fr 1fr;gap:36px;padding-bottom:44px;border-bottom:1px solid var(--border-inverse);}
.footer-brand .logo{color:#fff;}
.footer-brand p{margin-top:14px;font-size:.88rem;max-width:290px;line-height:1.6;}
footer h4{font-family:var(--font-mono);font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:#fff;margin-bottom:16px;}
.footer-links{display:flex;flex-direction:column;gap:10px;font-size:.9rem;}
.footer-links a{color:var(--muted-inverse);transition:color .15s;}
.footer-links a:hover{color:var(--text-inverse);}
.footer-branch-list{display:flex;flex-direction:column;gap:10px;font-size:.9rem;}
.footer-branch-item{display:flex;align-items:center;gap:10px;color:var(--text-inverse);}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:26px;font-size:.82rem;flex-wrap:wrap;gap:12px;}

/* ---------- WhatsApp Floating Widget ---------- */
.wa-float{position:fixed;bottom:24px;right:24px;z-index:55;background:#25D366;color:#fff;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 25px rgba(0,0,0,.3);transition:transform .2s,box-shadow .2s;}
.wa-float:hover{transform:scale(1.08);box-shadow:0 14px 30px rgba(37,211,102,.4);}
.wa-float svg{width:30px;height:30px;}

/* ---------- Responsive Breakpoints ---------- */
@media (max-width:900px){
  .nav-links,.nav-cta .btn-outline-dark{display:none;}
  .hamburger{display:flex;}
  .hero-grid{grid-template-columns:1fr;gap:40px;}
  .hero-art-wrapper{min-height:360px;margin-top:24px;}
  .hero-doodle-arrow{display:none;}
  .hero-badge.badge-top{left:10px;}
  .hero-badge.badge-bottom{right:10px;}
  .services-grid{grid-template-columns:repeat(2,1fr);}
  .why-grid{grid-template-columns:repeat(2,1fr);}
  .stats-grid{grid-template-columns:repeat(2,1fr);}
  .branch-grid{grid-template-columns:1fr;}
  .contact-grid{grid-template-columns:1fr;}
  .faq-grid{grid-template-columns:1fr;}
  .footer-top{grid-template-columns:1fr 1fr;gap:32px;}
}
@media (max-width:560px){
  .section{padding:64px 0;}
  .hero{padding:48px 0 64px;}
  .services-grid,.why-grid{grid-template-columns:1fr;}
  .stats-grid{grid-template-columns:1fr;}
  .form-row{grid-template-columns:1fr;}
  .footer-top{grid-template-columns:1fr;gap:28px;}
  .hero-strip{gap:20px;}
}
</style>
</head>
<body>

<header class="nav">
  <div class="nav-inner">
    <a href="index.php" class="logo">
      <?php if (!empty($config['logo'])): ?>
        <img src="<?= htmlspecialchars($config['logo']) ?>" alt="<?= htmlspecialchars($config['company_name']) ?>" class="logo-img">
      <?php else: ?>
        <?= htmlspecialchars($config['company_name']) ?><span>.</span>
      <?php endif; ?>
    </a>
    <nav class="nav-links">
      <a href="index.php" class="<?= ($currentPage === 'home') ? 'active' : '' ?>">Home</a>
      <a href="services.php" class="<?= ($currentPage === 'services') ? 'active' : '' ?>">Services</a>
      <a href="about.php" class="<?= ($currentPage === 'about') ? 'active' : '' ?>">Why Us</a>
      <a href="branches.php" class="<?= ($currentPage === 'branches') ? 'active' : '' ?>">Branches</a>
      <a href="contact.php" class="<?= ($currentPage === 'contact') ? 'active' : '' ?>">Contact</a>
    </nav>
    <div class="nav-cta">
      <a href="<?= htmlspecialchars($waLink) ?>" class="btn btn-outline-dark" target="_blank" rel="noopener">WhatsApp Us</a>
      <a href="contact.php" class="btn btn-signal">Get Free Proposal</a>
      <button class="hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<div class="mobile-panel" id="mobilePanel">
  <button class="close-x" id="closePanelBtn" aria-label="Close menu">&times;</button>
  <a href="index.php" class="<?= ($currentPage === 'home') ? 'active' : '' ?>">Home</a>
  <a href="services.php" class="<?= ($currentPage === 'services') ? 'active' : '' ?>">Services</a>
  <a href="about.php" class="<?= ($currentPage === 'about') ? 'active' : '' ?>">Why Us</a>
  <a href="branches.php" class="<?= ($currentPage === 'branches') ? 'active' : '' ?>">Branches</a>
  <a href="contact.php" class="<?= ($currentPage === 'contact') ? 'active' : '' ?>">Contact</a>
  <a href="<?= htmlspecialchars($waLink) ?>" target="_blank" rel="noopener" style="color:var(--signal);">WhatsApp Us →</a>
</div>

<main>
