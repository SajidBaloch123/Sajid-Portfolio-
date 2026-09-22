<template>
  <section id="certifications" class="certifications">
    <div class="container">
      <div class="fade-in">
        <h2 class="section-title">Certifi<span>cations</span></h2>
        <p class="section-subtitle">credentials &amp; achievements</p>
      </div>

      <div class="certs-grid">
        <div
          v-for="(cert, i) in certs"
          :key="cert.name"
          class="cert-card card fade-in"
          :class="{ 'cert-featured': i === 0 }"
          :style="{ transitionDelay: `${i * 0.08}s` }"
          @click="openCert(cert)"
        >
          <div class="cert-card-top">
            <span class="cert-tag" :class="cert.type === 'technical' ? 'cert-tag-tech' : 'cert-tag-ai'">
              {{ cert.type === 'technical' ? 'Technical' : 'AI & Technology' }}
            </span>
            <i class="fa-solid fa-arrow-up-right-from-square cert-link-icon"></i>
          </div>

          <h3>{{ cert.name }}</h3>
          <p class="cert-issuer" v-if="cert.issuer">{{ cert.issuer }}</p>

          <span class="view-cert-badge">
            <i class="fa-solid fa-eye"></i> View Credential
          </span>
        </div>
      </div>
    </div>

    <!-- ================= CERTIFICATE MODAL ================= -->
    <Transition name="modal-fade">
      <div v-if="activeCert" class="cert-modal" @click.self="closeCert">
        <div class="cert-modal-content">
          <button class="cert-modal-close" @click="closeCert" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="cert-modal-header">
            <span class="cert-modal-tag">
              {{ activeCert.type === 'technical' ? 'Technical' : 'AI & Technology' }}
            </span>
            <h3>{{ activeCert.name }}</h3>
            <p v-if="activeCert.issuer" class="cert-modal-issuer">
              <i class="fa-solid fa-award"></i> {{ activeCert.issuer }}
            </p>
          </div>

          <!-- ✅ SIRF CERTIFICATE SHOW HOGA — HOME PAGE NAHI -->
          <div class="cert-modal-body">
            <!-- Image Certificate (PNG) -->
            <img
              v-if="activeCert.isImage"
              :src="activeCert.file"
              :alt="activeCert.name"
              class="cert-image"
            />

            <!-- PDF Certificate -->
            <object
              v-else
              :data="activeCert.file"
              type="application/pdf"
              class="cert-frame"
            >
              <iframe
                :src="activeCert.file"
                class="cert-frame"
                title="Certificate"
              ></iframe>
            </object>
          </div>

          <div class="cert-modal-footer">
            <a
              :href="activeCert.file"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
              download
            >
              <i class="fa-solid fa-download"></i> Download
            </a>
            <a
              :href="activeCert.file"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <i class="fa-solid fa-up-right-from-square"></i> Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* ============================================================
   ✅ CERTIFICATES — Direct Vite Imports (100% guaranteed)
   ============================================================ */
/* ============================================================
   ✅ CERTIFICATE FILES — Vite Imports
   ============================================================ */
import navttcPdf from './assets/certificates/navttc-network-admin.pdf'
import generativeAiImg from './assets/certificates/generative-ai.pdf'
import aspirePdf from './assets/certificates/aspire-leadership.pdf'
import introAiPdf from './assets/certificates/intro-to-ai.pdf'
import promptingPdf from './assets/certificates/prompting.pdf'
import maxProductivityPdf from './assets/certificates/max-productivity.pdf'
import useAiPdf from './assets/certificates/use-ai-responsibly.pdf'
import aiFundamentalsPdf from './assets/certificates/ai-fundamentals.pdf'
import helloPythonPdf from './assets/certificates/hello-python.pdf'
import functionsPdf from './assets/certificates/functions-conditional.pdf'
import aiWritingPdf from './assets/certificates/ai-writing-communication.pdf'

const certs = [
  {
    name: 'NAVTTC — Network Administrator',
    issuer: 'CISCO • HUAWEI • IBM',
    type: 'technical',
    file: navttcPdf,
    isImage: false,
  },
  {
    name: 'Generative AI Application Development',
    issuer: 'AI Certification',
    type: 'ai',
    file: generativeAiImg,
    isImage: true,
  },
  {
    name: 'Aspire Leadership Program',
    issuer: 'Aspire Institute',
    type: 'ai',
    file: aspirePdf,
    isImage: false,
  },
  {
    name: 'Introduction to AI',
    issuer: 'AI Certification',
    type: 'ai',
    file: introAiPdf,
    isImage: false,
  },
  {
    name: 'Discover the Art of Prompting',
    issuer: 'AI Certification',
    type: 'ai',
    file: promptingPdf,
    isImage: false,
  },
  {
    name: 'Maximize Productivity With AI Tools',
    issuer: 'AI Certification',
    type: 'ai',
    file: maxProductivityPdf,
    isImage: false,
  },
  {
    name: 'Use AI Responsibly',
    issuer: 'AI Certification',
    type: 'ai',
    file: useAiPdf,
    isImage: false,
  },
  {
    name: 'AI Fundamentals',
    issuer: 'AI Certification',
    type: 'ai',
    file: aiFundamentalsPdf,
    isImage: false,
  },
  {
    name: 'Hello Python!',
    issuer: 'Python / AI Certification',
    type: 'ai',
    file: helloPythonPdf,
    isImage: false,
  },
  {
    name: 'Functions and Conditional Statements',
    issuer: 'Python / AI Certification',
    type: 'ai',
    file: functionsPdf,
    isImage: false,
  },
    {
    name: 'AI for Writing and Communication',
    issuer: 'AI Certification',
    type: 'ai',
    file: aiWritingPdf,
    isImage: false,
  },
]

const activeCert = ref(null)

const openCert = (cert) => {
  activeCert.value = cert
  document.body.style.overflow = 'hidden'
}

const closeCert = () => {
  activeCert.value = null
  document.body.style.overflow = ''
}

const handleEsc = (e) => {
  if (e.key === 'Escape' && activeCert.value) closeCert()
}

onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))
</script>

<style scoped>
.certifications {
  background: var(--bg-alt, #101012);
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: clamp(1.7rem, 3.4vw, 2.3rem);
  font-weight: 800;
  color: var(--text-main, #f0f0f2);
  margin-bottom: 0.35rem;
  letter-spacing: -0.03em;
}
.section-title span { color: var(--primary, #10b981); }
.section-subtitle {
  font-family: var(--mono, 'JetBrains Mono', monospace);
  font-size: 0.78rem;
  color: var(--text-dim, #6b6b75);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 2.5rem;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.3rem;
}

.card {
  background: var(--bg-card, #17171a);
  border: 1px solid var(--border, #26262b);
  border-radius: 16px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cert-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  cursor: pointer;
  color: inherit;
}

.cert-card:hover {
  border-color: rgba(16, 185, 129, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  background: var(--bg-hover, #1e1e22);
}

.cert-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.cert-tag {
  font-size: 0.68rem;
  text-transform: uppercase;
  font-family: var(--mono, 'JetBrains Mono', monospace);
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.cert-tag-tech {
  color: var(--primary, #10b981);
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.cert-tag-ai {
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.25);
}

.cert-link-icon {
  font-size: 0.85rem;
  color: var(--text-dim, #6b6b75);
  transition: all 0.2s ease;
}

.cert-card:hover .cert-link-icon {
  color: var(--primary, #10b981);
  transform: translate(2px, -2px);
}

.cert-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main, #f0f0f2);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.cert-issuer {
  color: var(--primary, #10b981);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: var(--mono, 'JetBrains Mono', monospace);
}

.view-cert-badge {
  margin-top: auto;
  font-size: 0.74rem;
  font-family: var(--mono, 'JetBrains Mono', monospace);
  font-weight: 600;
  color: var(--primary, #10b981);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--border, #26262b);
  transition: all 0.2s ease;
}

.cert-card:hover .view-cert-badge {
  color: var(--primary-light, #34d399);
  gap: 0.6rem;
}

.cert-featured {
  border-color: rgba(16, 185, 129, 0.4);
  background: linear-gradient(160deg, #17171a 0%, #14201c 100%);
}

/* ============================================================
   MODAL
   ============================================================ */
.cert-modal {
  position: fixed;
  inset: 0;
  background: rgba(5, 5, 8, 0.9);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.cert-modal-content {
  background: var(--bg-card, #17171a);
  border: 1px solid var(--border-light, #38383f);
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7);
  animation: modalSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalSlideUp {
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.cert-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border, #26262b);
  color: var(--text-muted, #9a9aa3);
  font-size: 1.1rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.cert-modal-close:hover {
  background: rgba(239, 68, 68, 0.15);
  border-color: #ef4444;
  color: #ef4444;
  transform: rotate(90deg);
}

.cert-modal-header {
  padding: 1.6rem 1.8rem 1.2rem;
  border-bottom: 1px solid var(--border, #26262b);
}

.cert-modal-tag {
  display: inline-block;
  font-size: 0.68rem;
  text-transform: uppercase;
  color: var(--primary, #10b981);
  font-family: var(--mono, 'JetBrains Mono', monospace);
  font-weight: 700;
  background: rgba(16, 185, 129, 0.08);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
}

.cert-modal-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main, #f0f0f2);
  margin-bottom: 0.35rem;
  line-height: 1.35;
  padding-right: 2.5rem;
}

.cert-modal-issuer {
  font-size: 0.85rem;
  color: var(--text-muted, #9a9aa3);
  font-family: var(--mono, 'JetBrains Mono', monospace);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.cert-modal-issuer i { color: #f59e0b; }

.cert-modal-body {
  flex: 1;
  overflow: auto;
  padding: 1rem;
  background: var(--bg-alt, #101012);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.cert-frame {
  width: 100%;
  height: 65vh;
  min-height: 400px;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  display: block;
}

.cert-image {
  max-width: 100%;
  max-height: 65vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: block;
}

.cert-modal-footer {
  padding: 1rem 1.8rem 1.4rem;
  border-top: 1px solid var(--border, #26262b);
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 1.4rem;
  font-family: var(--mono, 'JetBrains Mono', monospace);
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
}

.btn-outline {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-main, #f0f0f2);
  border-color: var(--border-light, #38383f);
}

.btn-outline:hover {
  border-color: var(--primary, #10b981);
  color: var(--primary-light, #34d399);
  transform: translateY(-2px);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .cert-modal { padding: 0.75rem; }
  .cert-modal-header { padding: 1.2rem 1.2rem 0.9rem; }
  .cert-modal-header h3 { font-size: 1rem; }
  .cert-modal-body { padding: 0.5rem; min-height: 300px; }
  .cert-frame { height: 55vh; min-height: 300px; }
  .cert-modal-footer {
    padding: 0.9rem 1.2rem 1.1rem;
    flex-direction: column;
  }
  .cert-modal-footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>