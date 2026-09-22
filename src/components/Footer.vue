<template>
  <footer class="footer">
    <div class="container footer-wrap">
      <div class="footer-brand">
        <a href="#home" class="logo">
          <span class="logo-bracket">&lt;</span>Zahoor<span class="accent">.</span><span class="logo-bracket">/&gt;</span>
        </a>
        <p>IT Support & Network Engineer — building reliable systems, one packet at a time.</p>
      </div>

      <div class="footer-links">
        <h4>Quick Links</h4>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="footer-social">
        <h4>Connect</h4>
        <div class="socials">
          <a href="https://github.com/" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:zahoor@example.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          <a href="/Zahoor-Illahi-CV.pdf" download aria-label="CV"><i class="fa-solid fa-file-arrow-down"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ year }} Zahoor Illahi. Built with <i class="fa-solid fa-heart"></i> using Vue 3 & Vite.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer { background: var(--bg); border-top: 1px solid var(--border); padding-top: 3rem; }
.footer-wrap {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2.5rem;
}
.footer-brand .logo {
  font-size: 1.4rem;
  font-weight: 800;
  font-family: var(--mono);
  display: inline-block;
  margin-bottom: 1rem;
}
.logo-bracket, .accent { color: var(--primary); }
.footer-brand p { color: var(--text-muted); font-size: 0.9rem; max-width: 340px; }
.footer h4 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.footer-links { display: flex; flex-direction: column; gap: 0.6rem; }
.footer-links a { color: var(--text-muted); font-size: 0.9rem; transition: color 0.2s ease; }
.footer-links a:hover { color: var(--primary); }
.socials { display: flex; gap: 0.75rem; }
.socials a {
  width: 40px; height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  transition: all 0.25s ease;
}
.socials a:hover { color: var(--primary); border-color: var(--primary); transform: translateY(-3px); }
.footer-bottom { border-top: 1px solid var(--border); padding: 1.25rem 0; text-align: center; }
.footer-bottom p { color: var(--text-muted); font-size: 0.85rem; }
.footer-bottom i { color: #ef4444; }
@media (max-width: 768px) {
  .footer-wrap { grid-template-columns: 1fr; gap: 2rem; }
}
</style>