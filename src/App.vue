<template>
  <div class="portfolio-container">
    <!-- ================= NAVBAR ================= -->
    <header class="navbar">
      <div class="container nav-wrap">
        <a href="#home" class="logo" @click="handleNavClick($event, '#home')">
          <span class="logo-bracket">&lt;</span>Sajid<span class="logo-accent">.</span><span class="logo-bracket">/&gt;</span>
        </a>

        <button class="nav-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
          <i :class="mobileMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
        </button>

        <nav class="nav-links" :class="{ open: mobileMenuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="handleNavClick($event, link.href)"
          >
            {{ link.label }}
          </a>
          <a href="/resume/Sajid_Ali_CV.pdf" download class="btn btn-primary cv-btn">
            <i class="fa-solid fa-download"></i> Resume
          </a>
        </nav>
      </div>
    </header>

    <main>
      <!-- ================= HERO ================= -->
      <section id="home" class="hero">
        <div class="hero-bg"></div>
        <div class="container hero-grid">
          <div class="hero-text">
            <p class="hero-tag">
              <span class="dot"></span> Available for opportunities
            </p>
            <h1>Hi, I'm <span class="gradient"> Engr Sajid Ali</span></h1>
            <h2 class="hero-role">
              <span>{{ currentRole }}</span><span class="cursor">|</span>
            </h2>
            <p class="hero-desc">
              Computer Systems Engineer focused on building practical technology solutions by combining
              hardware, software, IoT, and AI.
            </p>

            <div class="hero-tech-pills">
              <span class="tech-pill">
                <i class="fa-solid fa-microchip"></i> IoT &amp; Embedded Systems
              </span>
              <span class="tech-pill">
                <i class="fa-solid fa-brain"></i> AI &amp; Machine Learning
              </span>
            </div>

            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary" @click="handleNavClick($event, '#projects')">
                <i class="fa-solid fa-terminal"></i> View Projects
              </a>
              <a href="/resume/Sajid_Ali_CV.pdf" download class="btn btn-outline">
                <i class="fa-solid fa-file-code"></i> Download CV
              </a>
            </div>

            <div class="hero-socials">
              <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" :title="s.name">
                <i :class="s.icon"></i>
              </a>
            </div>
          </div>

          <!-- ✅ Hero Visual with Profile Lines -->
          <div class="hero-visual">
            <div class="profile-line profile-line-top">
              <i class="fa-solid fa-microchip"></i> Computer Systems Engineer
            </div>

            <div class="profile-ring">
              <div class="tech-core">
                <img src="/profile.png" alt="Sajid Ali — Computer Systems Engineer" class="profile-img" />
              </div>
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
            </div>

            <div class="profile-line profile-line-bottom">
              <i class="fa-solid fa-certificate"></i> PEC Intern
            </div>
          </div>
        </div>

        <a href="#about" class="scroll-indicator" @click="handleNavClick($event, '#about')" aria-label="Scroll down">
          <i class="fa-solid fa-chevron-down"></i>
        </a>
      </section>

      <!-- ================= ABOUT ================= -->
      <section id="about" class="section section-alt">
        <div class="container">
          <h2 class="section-title">About <span>Sajid</span></h2>
          <p class="section-subtitle">who am i</p>

          <div class="about-grid">
            <div class="about-text card">
              <p>
                I am a <strong>Computer Systems Engineer</strong> with an interest in Artificial Intelligence,
                Internet of Things, embedded systems, networking, and software development. My engineering
                background allows me to work across both hardware and software systems.
              </p>
              <p>
                During my academic journey, I worked on practical projects involving IoT, AI/ML, automation,
                and application development. My major Final Year Project focused on developing a
                <strong>Smart Irrigation System</strong> using Rule-Based Machine Learning and IoT for
                efficient water management.
              </p>
              <p>
                I am continuously developing my technical skills through professional training, certifications,
                practical projects, and hands-on experimentation.
              </p>

              <div class="about-stats">
                <div class="stat">
                  <span class="stat-num">3.58</span>
                  <span class="stat-label">CGPA</span>
                </div>
                <div class="stat">
                  <span class="stat-num">6+</span>
                  <span class="stat-label">Months Training</span>
                </div>
                <div class="stat">
                  <span class="stat-num">10+</span>
                  <span class="stat-label">Certifications</span>
                </div>
                <div class="stat">
                  <span class="stat-num">5+</span>
                  <span class="stat-label">Projects</span>
                </div>
              </div>
            </div>

            <div class="about-info">
              <div class="info-card">
                <i class="fa-solid fa-user"></i>
                <div><span class="info-label">Name</span><span class="info-value">Sajid Ali</span></div>
              </div>
              <div class="info-card">
                <i class="fa-solid fa-graduation-cap"></i>
                <div><span class="info-label">Degree</span><span class="info-value">Computer Systems Engineering</span></div>
              </div>
              <div class="info-card">
                <i class="fa-solid fa-building-columns"></i>
                <div><span class="info-label">University</span><span class="info-value">BUET Khuzdar</span></div>
              </div>
              <div class="info-card">
                <i class="fa-solid fa-location-dot"></i>
                <div><span class="info-label">Location</span><span class="info-value">Balochistan, Pakistan</span></div>
              </div>
              <div class="info-card">
                <i class="fa-solid fa-circle-check"></i>
                <div><span class="info-label">Status</span><span class="info-value text-success">Graduate Engineer Trainee</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= SKILLS ================= -->
      <section id="skills" class="section">
        <div class="container">
          <h2 class="section-title">My <span>Skills</span></h2>
          <p class="section-subtitle">tech stack &amp; expertise</p>

          <div class="skills-grid">
            <div class="card skill-card" v-for="grp in skillGroups" :key="grp.title">
              <div class="skill-header">
                <i :class="grp.icon"></i>
                <h3>{{ grp.title }}</h3>
              </div>
              <div class="skill-tags">
                <span v-for="s in grp.skills" :key="s" class="tag">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= EXPERIENCE ================= -->
      <section id="experience" class="section section-alt">
        <div class="container">
          <h2 class="section-title">Work <span>Experience</span></h2>
          <p class="section-subtitle">6-month professional internship</p>

          <div class="timeline">
            <div v-for="(exp, idx) in experiences" :key="exp.company" class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content card">
                <span class="step-badge">Phase {{ String(idx + 1).padStart(2, '0') }}</span>
                <h3>{{ exp.role }}</h3>
                <p class="company"><i class="fa-solid fa-building"></i> {{ exp.company }}</p>
                <p class="exp-desc">{{ exp.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= EDUCATION ================= -->
      <section id="education" class="section">
        <div class="container">
          <h2 class="section-title">Edu<span>cation</span></h2>
          <p class="section-subtitle">academic background</p>

          <div class="edu-grid">
          <div class="card edu-card" v-for="(edu, idx) in educations" :key="edu.degree">
  <div
    class="edu-icon-wrap clickable-edu"
    @click="openEducation(edu)"
    title="Click to view certificate"
  >
    <img 
      :src="edu.logo" 
      :alt="edu.school" 
      class="edu-logo"
    />
  </div>
  <span class="edu-period">{{ edu.period }}</span>
  <h3>{{ edu.degree }}</h3>
  <p class="edu-school">{{ edu.school }}</p>
  <p v-if="edu.grade" class="edu-grade"><strong>{{ edu.grade }}</strong></p>
  <p v-if="edu.desc" class="edu-desc">{{ edu.desc }}</p>
</div>
          </div>
        </div>
      </section>

      <!-- ================= PROJECTS ================= -->
      <section id="projects" class="section section-alt">
        <div class="container">
          <h2 class="section-title">My <span>Projects</span></h2>
          <p class="section-subtitle">things i have built</p>

          <div class="projects-grid">
            <article
              v-for="(project, idx) in projectList"
              :key="project.title"
              class="card project-card"
              :class="{ 'featured-proj': project.featured, 'clickable-project': project.file !== '#' }"
              @click="openProject(project)"
            >
              <div class="project-top">
                <span class="card-badge">{{ project.badge }}</span>
                <i :class="project.icon"></i>
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="skill-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="project-links" @click.stop>
                <a
                  v-if="project.github !== '#'"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="project-link"
                >
                  <i class="fa-brands fa-github"></i> GitHub
                </a>
                <a
                  v-if="project.demo !== '#'"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener"
                  class="project-link"
                >
                  <i class="fa-solid fa-globe"></i> Live Demo
                </a>
                <span
                  v-if="project.file !== '#'"
                  class="project-link view-pdf-link"
                >
                  <i class="fa-solid fa-file-pdf"></i> View PDF
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ================= LABS ================= -->
      <section id="labs" class="section">
        <div class="container">
          <h2 class="section-title">My AI &amp; Development <span>Labs</span></h2>
          <p class="section-subtitle">hands-on practice &amp; prototypes</p>

          <div class="labs-grid">
            <div class="card lab-card" v-for="lab in labs" :key="lab.title">
              <i :class="lab.icon"></i>
              <h3>{{ lab.title }}</h3>
              <p>{{ lab.desc }}</p>
            </div>
          </div>

          <div class="pipeline">
            <div class="pipe-step"><i class="fa-solid fa-lightbulb"></i><span>Idea</span></div>
            <i class="fa-solid fa-arrow-right pipe-arrow"></i>
            <div class="pipe-step"><i class="fa-solid fa-robot"></i><span>ChatGPT</span></div>
            <i class="fa-solid fa-arrow-right pipe-arrow"></i>
            <div class="pipe-step"><i class="fab fa-google"></i><span>Colab</span></div>
            <i class="fa-solid fa-arrow-right pipe-arrow"></i>
            <div class="pipe-step"><i class="fab fa-python"></i><span>Python</span></div>
            <i class="fa-solid fa-arrow-right pipe-arrow"></i>
            <div class="pipe-step"><i class="fab fa-github"></i><span>GitHub</span></div>
            <i class="fa-solid fa-arrow-right pipe-arrow"></i>
            <div class="pipe-step"><i class="fa-solid fa-rocket"></i><span>Streamlit</span></div>
            <i class="fa-solid fa-arrow-right pipe-arrow"></i>
            <div class="pipe-step"><i class="fa-solid fa-globe"></i><span>Web App</span></div>
          </div>
        </div>
      </section>

      <!-- ================= CERTIFICATIONS ================= -->
      <section id="certifications" class="section section-alt">
        <div class="container">
          <h2 class="section-title">Certifi<span>cations</span></h2>
          <p class="section-subtitle">credentials &amp; achievements</p>

          <div class="certs-grid">
            <div
              v-for="(c, idx) in certList"
              :key="c.title"
              class="card cert-card"
              :class="{ 'cert-featured': idx === 0 }"
              @click="openCert(c)"
            >
              <div class="cert-icon-wrap">
                <i :class="c.icon"></i>
              </div>

              <span class="cert-tag" :class="idx === 0 ? 'cert-tag-tech' : 'cert-tag-ai'">
                {{ idx === 0 ? 'Technical' : 'AI & Technology' }}
              </span>

              <h3>{{ c.title }}</h3>

              <p v-if="c.issuer" class="cert-issuer">{{ c.issuer }}</p>

              <span class="view-cert-badge">
                <i class="fa-solid fa-eye"></i> View Credential
                <i class="fa-solid fa-arrow-right cert-arrow"></i>
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= TRAINING ================= -->
      <section id="training" class="section">
        <div class="container">
          <h2 class="section-title">Professional <span>Training</span></h2>
          <p class="section-subtitle">PEC continuous professional development flow</p>

          <div class="training-grid">
            <a v-for="(t, idx) in trainings" :key="t.dept" :href="t.link" class="card training-card" :class="{ 'training-featured': t.featured }">
              <div class="training-card-top">
                <span class="training-phase">Phase {{ String(idx + 1).padStart(2, '0') }}</span>
                <span class="training-tag">{{ t.tag }}</span>
              </div>
              <h3>{{ t.title }}</h3>
              <p class="training-dept"><i class="fa-solid fa-building"></i> {{ t.dept }}</p>
              <div class="training-link-row">
                <span>View Training</span>
                <i class="fa-solid fa-arrow-right link-arrow"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- ================= CONTACT ================= -->
      <section id="contact" class="section section-alt">
        <div class="container">
          <h2 class="section-title">Get in <span>Touch</span></h2>
          <p class="section-subtitle">let's build something practical</p>

          <div class="contact-items">
            <a v-for="c in contacts" :key="c.label" :href="c.url" target="_blank" rel="noopener" class="card contact-item">
              <i :class="c.icon"></i>
              <div>
                <span>{{ c.label }}</span>
                <strong>{{ c.value }}</strong>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="footer">
      <div class="container footer-wrap">
        <p>© 2026 Sajid Ali • Computer Systems Engineer. All rights reserved.</p>
        <div class="footer-socials">
          <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" :title="s.name">
            <i :class="s.icon"></i>
          </a>
        </div>
      </div>
    </footer>

    <!-- ================= CERTIFICATE MODAL ================= -->
    <Transition name="modal-fade">
      <div v-if="activeCert" class="cert-modal" @click.self="closeCert">
        <div class="cert-modal-content">
          <button class="cert-modal-close" @click="closeCert" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="cert-modal-header">
            <span class="cert-modal-tag">Certificate</span>
            <h3>{{ activeCert.title }}</h3>
            <p v-if="activeCert.issuer" class="cert-modal-issuer">
              <i class="fa-solid fa-award"></i> {{ activeCert.issuer }}
            </p>
          </div>

          <div class="cert-modal-body">
            <iframe
              v-if="activeCert.file && activeCert.file.endsWith('.pdf')"
              :src="activeCert.file"
              class="cert-frame"
              title="Certificate Preview"
            ></iframe>

            <img
              v-else-if="activeCert.file && activeCert.file !== '#'"
              :src="activeCert.file"
              :alt="activeCert.title"
              class="cert-image"
            />

            <div v-else class="cert-placeholder">
              <i class="fa-solid fa-award"></i>
              <p>Certificate preview will be available soon.</p>
              <span>Please check back later or contact me for details.</span>
            </div>
          </div>

          <div class="cert-modal-footer">
            <a
              v-if="activeCert.file && activeCert.file !== '#'"
              :href="activeCert.file"
              target="_blank"
              class="btn btn-outline"
              download
            >
              <i class="fa-solid fa-download"></i> Download
            </a>
            <a
              v-if="activeCert.file && activeCert.file !== '#'"
              :href="activeCert.file"
              target="_blank"
              class="btn btn-primary"
            >
              <i class="fa-solid fa-up-right-from-square"></i> Open in New Tab
            </a>
            <button v-else class="btn btn-primary" @click="closeCert">
              <i class="fa-solid fa-check"></i> Got it
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ================= EDUCATION CERTIFICATE MODAL ================= -->
    <Transition name="modal-fade">
      <div v-if="activeEdu" class="cert-modal" @click.self="closeEducation">
        <div class="cert-modal-content">
          <button class="cert-modal-close" @click="closeEducation" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="cert-modal-header">
            <span class="cert-modal-tag">Academic Certificate</span>
            <h3>{{ activeEdu.degree }}</h3>
            <p class="cert-modal-issuer">
              <i class="fa-solid fa-graduation-cap"></i> {{ activeEdu.school }}
            </p>
          </div>

          <div class="cert-modal-body">
            <iframe
              :src="activeEdu.file"
              class="cert-frame"
              title="Certificate Preview"
            ></iframe>
          </div>

          <div class="cert-modal-footer">
            <a
              :href="activeEdu.file"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
              download
            >
              <i class="fa-solid fa-download"></i> Download
            </a>
            <a
              :href="activeEdu.file"
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

    <!-- ================= PROJECT PDF MODAL ================= -->
    <Transition name="modal-fade">
      <div v-if="activeProject" class="cert-modal" @click.self="closeProject">
        <div class="cert-modal-content">
          <button class="cert-modal-close" @click="closeProject" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="cert-modal-header">
            <span class="cert-modal-tag">Project Document</span>
            <h3>{{ activeProject.title }}</h3>
            <p v-if="activeProject.badge" class="cert-modal-issuer">
              <i class="fa-solid fa-folder-open"></i> {{ activeProject.badge }}
            </p>
          </div>

          <div class="cert-modal-body">
            <iframe
              :src="activeProject.file"
              class="cert-frame"
              title="Project PDF Preview"
            ></iframe>
          </div>

          <div class="cert-modal-footer">
            <a
              :href="activeProject.file"
              target="_blank"
              rel="noopener"
              class="btn btn-outline"
              download
            >
              <i class="fa-solid fa-download"></i> Download PDF
            </a>
            <a
              :href="activeProject.file"
              target="_blank"
              rel="noopener"
              class="btn btn-primary"
            >
              <i class="fa-solid fa-up-right-from-square"></i> Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* ---------- NAVIGATION ---------- */
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
]
const mobileMenuOpen = ref(false)

/* ---------- SOCIALS ---------- */
const socials = [
  { name: 'GitHub', url: 'https://github.com/', icon: 'fa-brands fa-github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sajid-baloch-b1b178242/', icon: 'fa-brands fa-linkedin-in' },
  { name: 'Instagram', url: 'https://www.instagram.com/sajidnad33m?stkn=cmR0dnFjeTRnbThj', icon: 'fa-brands fa-instagram' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1BHJ6GM6kE/', icon: 'fa-brands fa-facebook-f' },
  { name: 'Email', url: 'mailto:sajidbbaloch69@gmail.com', icon: 'fa-solid fa-envelope' },
]

/* ---------- HERO TYPEWRITER ---------- */
const roles = [
  'Computer Systems Engineer',
  'IoT & Embedded Systems Specialist',
  'AI & Machine Learning Practitioner',
  'Network Systems Trainee',
]
const currentRole = ref('')
let roleIndex = 0
let charIndex = 0
let deleting = false
let timer

const type = () => {
  const full = roles[roleIndex]
  currentRole.value = deleting ? full.substring(0, charIndex--) : full.substring(0, charIndex++)
  let speed = deleting ? 40 : 90
  if (!deleting && charIndex === full.length + 1) {
    deleting = true
    speed = 1800
  } else if (deleting && charIndex === 0) {
    deleting = false
    roleIndex = (roleIndex + 1) % roles.length
    speed = 400
  }
  timer = setTimeout(type, speed)
}

/* ---------- ✅ SMOOTH SCROLL HANDLER ---------- */
const handleNavClick = (e, href) => {
  if (href && href.startsWith('#')) {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const navbar = document.querySelector('.navbar')
      const navbarHeight = navbar ? navbar.offsetHeight : 80
      const extraPadding = 20
      const offset = navbarHeight + extraPadding

      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      mobileMenuOpen.value = false
    }
  }
}

/* ---------- SKILLS ---------- */
const skillGroups = [
  {
    title: 'Programming & Development',
    icon: 'fa-solid fa-code',
    skills: ['C++', 'Python', 'HTML', 'JSON', 'Streamlit', 'GitHub', 'Google Colab'],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'fa-solid fa-brain',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Rule-Based ML', 'Generative AI', 'Prompt Engineering', 'AI Applications'],
  },
  {
    title: 'IoT & Embedded Systems',
    icon: 'fa-solid fa-microchip',
    skills: ['ESP32', 'IoT Systems', 'Sensors', 'Automation', 'Embedded Systems', 'Smart Irrigation'],
  },
  {
    title: 'Professional Skills',
    icon: 'fa-solid fa-users-gear',
    skills: ['Presentation Skills', 'Public Speaking', 'Technical Communication', 'Problem Solving', 'Teamwork'],
  },
]

/* ---------- EXPERIENCE ---------- */
const experiences = [
  {
    role: 'Graduate Engineer Trainee / Intern',
    company: 'Balochistan Development Authority (BDA)',
    desc: 'Gained practical exposure to engineering and development-related activities within a government organization.',
  },
  {
    role: 'Intern',
    company: 'Provincial Disaster Management Authority (PDMA)',
    desc: 'Gained exposure to organizational operations, disaster management activities, and technology-related working environments.',
  },
  {
    role: 'Intern',
    company: 'Industries & Commerce Department, Quetta',
    desc: 'Experienced a government working environment and gained practical exposure to departmental operations and professional communication.',
  },
  {
    role: 'Intern',
    company: 'Planning & Development Department, Civil Secretariat Quetta',
    desc: 'Gained exposure to planning and development processes within the provincial government structure.',
  },
  {
    role: 'Intern',
    company: 'Science & Information Technology Department, Civil Secretariat Quetta',
    desc: 'Developed understanding of government technology-related operations and the role of IT in public-sector organizations.',
  },
  {
    role: 'Trainee Engineer',
    company: 'Agencies for Barani Area Development (ABAD), Rawalpindi',
    desc: 'Participated in professional training and development activities and gained exposure to organizational and engineering practices.',
  },
]

/* ---------- EDUCATION ---------- */
const educations = [
  {
    period: 'Apr 2026 — Sep 2026',
    degree: 'Graduate Engineer Trainee',
    school: 'Pakistan Engineering Council',
    grade: 'PEC Registered Engineer',
   logo: '/logos/pec.png',  
    file: '#',
    desc: 'BDA · PDMA · Industries & Commerce Department · P&D · Science & IT Department · ABAD',
  },
  {
    period: '2021 — 2025',
    degree: 'BE Computer Systems Engineering',
    school: 'BUET Khuzdar',
    grade: 'CGPA: 3.58 / 4.00',
    logo: '/logos/buet.png',    
    file: '/certificates/university.pdf',
  },
  {
    period: '2019 — 2021',
    degree: 'Intermediate (Pre-Engineering)',
    school: 'Govt Boys Degree College, Panjgur',
    grade: '72.81%',
   logo: '/logos/govt-dgp.jpg',   
    file: '/certificates/fsc-pre-engineering.pdf',
  },
  {
    period: '2017 — 2019',
    degree: 'Matriculation (Science)',
    school: 'Govt Boys High School, Panjgur',
    grade: '71.54%',
    logo: '/logos/govt-high-school.jpg', 
    file: '/certificates/matric-science.pdf',
  },
  
]

/* ---------- LABS ---------- */
const labs = [
  { icon: 'fa-solid fa-brain', title: 'AI Experiments', desc: 'Generative AI applications, prompt engineering, and ML prototypes.' },
  { icon: 'fa-brands fa-python', title: 'Python Labs', desc: 'Python fundamentals, automation functions, and data pipelines.' },
  { icon: 'fa-solid fa-flask', title: 'Google Colab', desc: 'Model prototyping and testing in cloud compute environments.' },
  { icon: 'fa-brands fa-github', title: 'GitHub Projects', desc: 'Source code repositories and version-controlled projects.' },
  { icon: 'fa-solid fa-window-maximize', title: 'Streamlit Applications', desc: 'Interactive web apps created by deploying Python projects.' },
]

/* ---------- CERTIFICATIONS ---------- */
const certList = [
  {
    title: 'NAVTTC — Network Administrator',
    issuer: 'CISCO • HUAWEI • IBM',
    icon: 'fa-solid fa-network-wired',
    file: '/certificates/navttc-network-admin.pdf',
  },
  {
    title: 'Generative AI Application Development',
    icon: 'fa-solid fa-robot',
    file: '/certificates/generative-ai.png',
  },
  {
    title: 'Aspire Leadership Program',
    icon: 'fa-solid fa-crown',
    file: '/certificates/aspire-leadership.pdf',
  },
  {
    title: 'Introduction to AI',
    icon: 'fa-solid fa-brain',
    file: '/certificates/intro-to-ai.pdf',
  },
  {
    title: 'Discover the Art of Prompting',
    icon: 'fa-solid fa-wand-magic-sparkles',
    file: '/certificates/prompting.pdf',
  },
  {
    title: 'Maximize Productivity With AI Tools',
    icon: 'fa-solid fa-bolt',
    file: '/certificates/max-productivity.pdf',
  },
  {
    title: 'Use AI Responsibly',
    icon: 'fa-solid fa-shield-halved',
    file: '/certificates/use-ai-responsibly.pdf',
  },
  {
    title: 'AI Fundamentals',
    icon: 'fa-solid fa-graduation-cap',
    file: '/certificates/ai-fundamentals.pdf',
  },
  {
    title: 'Hello Python!',
    icon: 'fa-brands fa-python',
    file: '/certificates/hello-python.pdf',
  },
  {
    title: 'Functions and Conditional Statements',
    icon: 'fa-solid fa-code',
    file: '/certificates/functions-conditional.pdf',
  },
  {
    title: 'AI for Writing and Communication',
    icon: 'fa-solid fa-pen-fancy',
    file: '/certificates/ai-writing-communication.pdf',
  },
]

/* ---------- PROJECTS ---------- */
const projectList = [
  {
    title: 'Smart Irrigation System Using Rule-Based ML and IoT',
    badge: 'Final Year Project • 6 Months',
    icon: 'fa-solid fa-star',
    description: 'Designed to monitor soil and environmental conditions and automatically control water flow using IoT sensors and Rule-Based Machine Learning in arid regions of Balochistan.',
    tags: ['AI/ML', 'IoT', 'ESP32', 'Sensors', 'C++', 'HTML', 'JSON'],
    file: '/projects/smart-irrigation.pdf',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Cartoon vs. Animation Classifier',
    badge: 'Computer Vision',
    icon: 'fa-solid fa-eye',
    description: 'Computer vision ML classification project that analyzes image features and categorizes digital artwork into Cartoon and Animation classes.',
    tags: ['Python', 'Computer Vision', 'Google Colab', 'Streamlit'],
    file: '#',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'AI Lab Prototypes',
    badge: 'AI Experiment',
    icon: 'fa-solid fa-flask',
    description: 'A growing collection of AI experiments, prompt engineering exercises, and generative AI application prototypes built with modern tools.',
    tags: ['ChatGPT', 'Python', 'Google Colab', 'Streamlit'],
    file: '#',
    github: '#',
    demo: '#',
    featured: false,
  },
]

/* ---------- TRAINING ---------- */
const trainings = [
  {
    title: 'Civil Schemes, PC-Forms & Procurement',
    dept: 'Balochistan Development Authority (BDA)',
    tag: 'Infrastructure & Schemes',
    featured: true,
    link: '#',
  },
  {
    title: 'Disaster Risk Management & Seismic Codes',
    dept: 'Provincial Disaster Management Authority (PDMA)',
    tag: 'Risk Management',
    featured: false,
    link: '#',
  },
  {
    title: 'Industrial Automation & Trade Operations',
    dept: 'Industries & Commerce Department',
    tag: 'Industrial Systems',
    featured: false,
    link: '#',
  },
  {
    title: 'Development Project Planning & Evaluation',
    dept: 'Planning & Development Department (P&D)',
    tag: 'Public Sector Planning',
    featured: false,
    link: '#',
  },
  {
    title: 'Data Center Infrastructure, WAN & E-Governance',
    dept: 'Science & Information Technology Department',
    tag: 'IT Infrastructure',
    featured: false,
    link: '#',
  },
  {
    title: 'Barani Systems & Field Engineering Training',
    dept: 'Agencies for Barani Area Development (ABAD)',
    tag: 'Field Engineering',
    featured: false,
    link: '#',
  },
]

/* ---------- CONTACT ---------- */
const contacts = [
  { label: 'Email', value: 'sajidbbaloch69@gmail.com', url: 'mailto:sajidbbaloch69@gmail.com', icon: 'fa-solid fa-envelope' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sajid-baloch', url: 'https://www.linkedin.com/in/sajid-baloch-b1b178242/', icon: 'fa-brands fa-linkedin-in' },
  { label: 'GitHub', value: 'github.com/sajid-ali', url: 'https://github.com/', icon: 'fa-brands fa-github' },
  { label: 'Instagram', value: 'Follow on Instagram', url: 'https://www.instagram.com/sajidnad33m?stkn=cmR0dnFjeTRnbThj', icon: 'fa-brands fa-instagram' },
  { label: 'Facebook', value: 'Connect on Facebook', url: 'https://www.facebook.com/share/1BHJ6GM6kE/', icon: 'fa-brands fa-facebook-f' },
  { label: 'WhatsApp', value: 'Chat on WhatsApp', url: 'https://wa.me/923001234567', icon: 'fa-brands fa-whatsapp' },
]

/* ---------- CERTIFICATE MODAL STATE ---------- */
const activeCert = ref(null)

const openCert = (cert) => {
  activeCert.value = cert
  document.body.style.overflow = 'hidden'
}

const closeCert = () => {
  activeCert.value = null
  document.body.style.overflow = ''
}

/* ---------- EDUCATION MODAL STATE ---------- */
const activeEdu = ref(null)

const openEducation = (edu) => {
  activeEdu.value = edu
  document.body.style.overflow = 'hidden'
}

const closeEducation = () => {
  activeEdu.value = null
  document.body.style.overflow = ''
}

/* ---------- PROJECT MODAL STATE ---------- */
const activeProject = ref(null)

const openProject = (project) => {
  if (project.file && project.file !== '#') {
    activeProject.value = project
    document.body.style.overflow = 'hidden'
  }
}

const closeProject = () => {
  activeProject.value = null
  document.body.style.overflow = ''
}

/* ---------- ESCAPE KEY HANDLER ---------- */
const handleEsc = (e) => {
  if (e.key === 'Escape') {
    if (activeCert.value) closeCert()
    if (activeEdu.value) closeEducation()
    if (activeProject.value) closeProject()
  }
}

/* ---------- LIFECYCLE ---------- */
onMounted(() => {
  type()
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  clearTimeout(timer)
  window.removeEventListener('keydown', handleEsc)
})
</script>

<style scoped>
/* ============================================================
   THEME: BLUE GRADIENT + EMERALD ACCENT
   ============================================================ */
.portfolio-container {
  --primary: #10b981;
  --primary-dark: #059669;
  --primary-light: #34d399;
  --accent: #f59e0b;
  --bg-main: #0a0a0b;
  --bg-alt: #101012;
  --bg-card: #17171a;
  --bg-hover: #1e1e22;
  --border: #26262b;
  --border-light: #38383f;
  --text-main: #f0f0f2;
  --text-muted: #9a9aa3;
  --text-dim: #6b6b75;
  --mono: 'JetBrains Mono', 'Courier New', monospace;
  --radius: 16px;
  --radius-sm: 10px;
  --shadow: 0 8px 30px rgba(0, 0, 0, 0.5);

  background: linear-gradient(180deg,
    #0f172a 0%,
    #1e3a8a 15%,
    #1e40af 30%,
    #0369a1 50%,
    #0891b2 70%,
    #06b6d4 85%,
    #22d3ee 100%);
  background-attachment: fixed;

  color: var(--text-main);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
section { scroll-margin-top: 90px; }

/* ========== NAVBAR ========== */
.navbar {
  position: fixed; top: 0; left: 0; right: 0;
  background: rgba(10, 10, 11, 0.55);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000; padding: 0.75rem 0;
}
.nav-wrap { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.logo { font-size: 1.35rem; font-weight: 800; font-family: var(--mono); color: var(--text-main); text-decoration: none; white-space: nowrap; letter-spacing: -0.02em; }
.logo-bracket, .logo-accent { color: var(--primary); }
.nav-links { display: flex; gap: 0.35rem; align-items: center; }
.nav-links a:not(.cv-btn) { color: var(--text-muted); font-size: 0.88rem; font-weight: 500; text-decoration: none; padding: 0.5rem 0.85rem; border-radius: 8px; transition: all 0.2s ease; white-space: nowrap; }
.nav-links a:not(.cv-btn):hover { color: var(--text-main); background: rgba(255, 255, 255, 0.08); }

/* ========== BUTTONS ========== */
.btn { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.75rem 1.5rem; font-family: var(--mono); font-size: 0.82rem; font-weight: 600; letter-spacing: 0.03em; cursor: pointer; border-radius: 999px; text-decoration: none; border: 1px solid transparent; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); white-space: nowrap; }
.btn-primary { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color: #ffffff; border-color: rgba(255, 255, 255, 0.1); box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4); filter: brightness(1.08); }
.btn-outline { background: rgba(255, 255, 255, 0.06); color: var(--text-main); border-color: var(--border-light); backdrop-filter: blur(10px); }
.btn-outline:hover { background: rgba(16, 185, 129, 0.15); color: var(--primary-light); border-color: var(--primary); transform: translateY(-2px); }
.cv-btn { padding: 0.55rem 1.2rem !important; font-size: 0.78rem !important; }
.nav-toggle { display: none; background: transparent; border: 1px solid var(--border); color: var(--text-main); width: 40px; height: 40px; border-radius: 10px; cursor: pointer; font-size: 1.1rem; }

/* ========== HERO ========== */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: 110px 0 60px; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 50% at 50% -10%, rgba(16, 185, 129, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 85% 95%, rgba(34, 211, 238, 0.08) 0%, transparent 55%); z-index: 0; pointer-events: none; }
.hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1.15fr 1fr; gap: 3.5rem; align-items: center; }
.hero-tag { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.78rem; color: var(--primary); background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); padding: 0.35rem 0.9rem; border-radius: 999px; margin-bottom: 1.25rem; font-family: var(--mono); backdrop-filter: blur(10px); }
.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--primary); box-shadow: 0 0 10px var(--primary); animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.5); } }
.hero h1 { font-size: clamp(2.3rem, 5vw, 3.6rem); font-weight: 800; margin-bottom: 0.5rem; color: var(--text-main); line-height: 1.1; letter-spacing: -0.03em; }
.gradient { background: linear-gradient(135deg, var(--primary-light) 0%, #22d3ee 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-role { font-size: 1.15rem; color: var(--text-muted); font-family: var(--mono); margin-bottom: 1.25rem; min-height: 1.6em; }
.cursor { color: var(--primary); animation: blink 1s infinite; }
@keyframes blink { 50% { opacity: 0; } }
.hero-desc { color: var(--text-muted); font-size: 1rem; max-width: 540px; margin-bottom: 1.5rem; line-height: 1.7; }

.hero-tech-pills { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.75rem; }
.tech-pill { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.45rem 1rem; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 999px; font-size: 0.78rem; font-weight: 600; color: var(--text-main); font-family: var(--mono); transition: all 0.25s ease; backdrop-filter: blur(10px); }
.tech-pill:hover { border-color: var(--primary); background: rgba(16, 185, 129, 0.2); transform: translateY(-2px); }
.tech-pill i { color: var(--primary); font-size: 0.85rem; }

.hero-actions { display: flex; gap: 0.85rem; flex-wrap: wrap; margin-bottom: 2rem; }
.hero-socials { display: flex; gap: 0.6rem; flex-wrap: wrap; }

/* ========== SOCIAL ICONS — Brand Colors ========== */
.hero-socials a { width: 42px; height: 42px; display: grid; place-items: center; background: rgba(255, 255, 255, 0.95); border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 10px; font-size: 1.2rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); text-decoration: none; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
.hero-socials a[title="GitHub"] { color: #181717; }
.hero-socials a[title="GitHub"]:hover { background: #181717; color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(24, 23, 23, 0.4); }
.hero-socials a[title="LinkedIn"] { color: #0A66C2; }
.hero-socials a[title="LinkedIn"]:hover { background: #0A66C2; color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(10, 102, 194, 0.4); }
.hero-socials a[title="Instagram"] { color: #E4405F; }
.hero-socials a[title="Instagram"]:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(220, 39, 67, 0.4); }
.hero-socials a[title="Facebook"] { color: #1877F2; }
.hero-socials a[title="Facebook"]:hover { background: #1877F2; color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(24, 119, 242, 0.4); }
.hero-socials a[title="Email"] { color: #EA4335; }
.hero-socials a[title="Email"]:hover { background: #EA4335; color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(234, 67, 53, 0.4); }
.hero-socials a[title="WhatsApp"] { color: #25D366; }
.hero-socials a[title="WhatsApp"]:hover { background: #25D366; color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4); }

/* ========== HERO VISUAL — Profile + Lines ========== */
.hero-visual {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  min-height: 480px;
}

.profile-line {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.2rem;
  background: rgba(10, 10, 11, 0.85);
  border: 1px solid rgba(16, 185, 129, 0.35);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.03em;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  position: relative;
  z-index: 5;
  white-space: nowrap;
  animation: floatLine 5s ease-in-out infinite;
}

@keyframes floatLine {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.profile-line i {
  color: var(--primary);
  font-size: 0.85rem;
}

.profile-line-bottom {
  animation-delay: 2.5s;
  border-color: rgba(34, 211, 238, 0.35);
}

.profile-line-bottom i {
  color: #22d3ee;
}

.profile-ring { position: relative; width: 320px; height: 320px; }
.tech-core { position: absolute; inset: 25px; border-radius: 50%; overflow: hidden; border: 2px solid var(--primary); box-shadow: 0 0 40px rgba(16, 185, 129, 0.4), 0 0 0 8px rgba(16, 185, 129, 0.08); z-index: 2; background: #161b22; }
.profile-img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; display: block; transition: transform 0.6s ease; }
.tech-core:hover .profile-img { transform: scale(1.06); }
.ring { position: absolute; border-radius: 50%; border: 1px dashed rgba(16, 185, 129, 0.4); pointer-events: none; }
.ring-1 { inset: 0; animation: spin 24s linear infinite; }
.ring-2 { inset: -20px; border-color: rgba(34, 211, 238, 0.25); animation: spin 36s linear infinite reverse; }
@keyframes spin { to { transform: rotate(360deg); } }

.scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, 0.15); color: var(--primary); display: grid; place-items: center; text-decoration: none; animation: bounceDown 2s ease-in-out infinite; z-index: 2; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); cursor: pointer; }
@keyframes bounceDown { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 8px); } }

/* ========== SECTIONS ========== */
.section { padding: 5.5rem 0; position: relative; }
.section-alt { background: rgba(0, 0, 0, 0.25); backdrop-filter: blur(10px); border-top: 1px solid rgba(255, 255, 255, 0.05); border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
.section-title { font-size: clamp(1.7rem, 3.4vw, 2.3rem); font-weight: 800; color: var(--text-main); margin-bottom: 0.35rem; letter-spacing: -0.03em; }
.section-title span { color: var(--primary); }
.section-subtitle { font-family: var(--mono); font-size: 0.78rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.18em; margin-bottom: 2.5rem; }

/* ========== CARDS ========== */
.card { background: rgba(10, 10, 11, 0.55); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius); padding: 1.6rem; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
.card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent); opacity: 0; transition: opacity 0.35s; }
.card:hover { border-color: rgba(255, 255, 255, 0.18); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); background: rgba(10, 10, 11, 0.75); }
.card:hover::before { opacity: 1; }

/* ========== ABOUT ========== */
.about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 2rem; }
.about-text p { color: var(--text-muted); margin-bottom: 1rem; line-height: 1.75; font-size: 0.95rem; }
.about-text strong { color: var(--primary-light); }
.about-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed var(--border); }
.stat { text-align: center; }
.stat-num { display: block; font-family: var(--mono); font-size: 1.35rem; font-weight: 700; color: var(--primary); }
.stat-label { font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.08em; }
.about-info { display: flex; flex-direction: column; gap: 0.75rem; }
.info-card { display: flex; align-items: center; gap: 1rem; background: rgba(10, 10, 11, 0.5); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.08); padding: 0.9rem 1.1rem; border-radius: var(--radius-sm); transition: all 0.2s ease; }
.info-card:hover { border-color: rgba(16, 185, 129, 0.4); transform: translateX(4px); background: rgba(10, 10, 11, 0.7); }
.info-card i { font-size: 1.15rem; color: var(--primary); width: 22px; text-align: center; }
.info-label { font-size: 0.68rem; color: var(--text-dim); text-transform: uppercase; font-family: var(--mono); display: block; letter-spacing: 0.08em; }
.info-value { font-weight: 600; font-size: 0.9rem; }
.text-success { color: var(--primary); }

/* ========== SKILLS ========== */
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; }
.skill-header { display: flex; align-items: center; gap: 0.65rem; margin-bottom: 1rem; }
.skill-header i { color: var(--primary); font-size: 1.15rem; }
.skill-card h3 { font-size: 1rem; font-weight: 700; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 0.3rem 0.7rem; border-radius: 999px; font-size: 0.74rem; font-family: var(--mono); color: var(--text-muted); transition: all 0.2s ease; }
.tag:hover { border-color: var(--primary); color: var(--primary); background: rgba(16, 185, 129, 0.15); }

/* ========== EXPERIENCE ========== */
.timeline { position: relative; padding-left: 2.5rem; border-left: 2px solid rgba(255, 255, 255, 0.1); }
.timeline-item { position: relative; margin-bottom: 1.6rem; }
.timeline-dot { position: absolute; left: -2.9rem; top: 1.35rem; width: 14px; height: 14px; border-radius: 50%; background: var(--primary); box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2), 0 0 14px rgba(16, 185, 129, 0.6); }
.timeline-content { padding: 1.4rem 1.6rem; }
.step-badge { display: inline-block; font-family: var(--mono); font-size: 0.7rem; color: var(--primary); background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.15rem 0.6rem; border-radius: 999px; margin-bottom: 0.6rem; letter-spacing: 0.06em; }
.timeline-content h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem; }
.company { color: var(--primary-light); font-size: 0.88rem; font-weight: 600; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.45rem; }
.exp-desc { color: var(--text-muted); font-size: 0.9rem; line-height: 1.65; }

/* ========== EDUCATION ========== */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}

.edu-card {
  text-align: center;
  padding: 1.5rem 1rem;
}

.edu-icon-wrap {
  width: 68px;
  height: 68px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);      /* ✅ White background for logos */
  border: 1px solid rgba(16, 185, 129, 0.3);
  display: grid;
  place-items: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;
  padding: 8px;                                /* ✅ Padding for logo */
  overflow: hidden;
}

.edu-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Fallback agar logo load na ho — icon ki jagah */
.edu-logo-fallback {
  font-size: 1.6rem;
  color: var(--primary);
}

.clickable-edu { cursor: pointer; }
.clickable-edu:hover {
  transform: scale(1.1) rotate(-3deg);
  border-color: var(--primary);
  background: rgba(16, 185, 129, 0.25);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
}
.clickable-edu:active { transform: scale(0.98); }

.edu-period {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--primary);
  display: inline-block;
  margin-bottom: 0.4rem;
  letter-spacing: 0.06em;
}

.edu-card h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.edu-school {
  color: var(--text-muted);
  font-size: 0.82rem;
  margin-bottom: 0.5rem;
}

.edu-grade {
  color: var(--primary);
  font-family: var(--mono);
  font-weight: 600;
  font-size: 0.85rem;
}

.edu-desc {
  margin-top: 0.7rem;
  font-size: 0.68rem;
  color: var(--text-dim);
  line-height: 1.4;
  text-align: center;
  padding-top: 0.7rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  font-family: var(--mono);
}

/* ========== PROJECTS ========== */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.35rem; }
.project-card { display: flex; flex-direction: column; cursor: pointer; }
.clickable-project:hover { border-color: var(--primary); }
.project-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.9rem; }
.project-top i { color: var(--primary); font-size: 1.1rem; opacity: 0.7; }
.card-badge { display: inline-block; font-size: 0.68rem; color: var(--primary); background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.22rem 0.6rem; border-radius: 999px; font-family: var(--mono); font-weight: 600; }
.project-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.65rem; line-height: 1.4; }
.project-card p { color: var(--text-muted); margin-bottom: 1rem; font-size: 0.9rem; line-height: 1.65; }
.project-links { display: flex; gap: 1rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--border); flex-wrap: wrap; }
.project-link { color: var(--primary); font-size: 0.8rem; font-family: var(--mono); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; transition: all 0.2s ease; }
.project-link:hover { transform: translateX(3px); }
.view-pdf-link { color: var(--primary); cursor: pointer; }
.clickable-project:hover .view-pdf-link { color: var(--primary-light); transform: translateX(3px); }
.featured-proj { border-color: rgba(16, 185, 129, 0.5); background: linear-gradient(160deg, rgba(16, 185, 129, 0.08) 0%, rgba(10, 10, 11, 0.6) 100%); }

/* ========== LABS ========== */
.labs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.15rem; }
.lab-card i { font-size: 1.5rem; color: var(--primary); margin-bottom: 0.7rem; }
.lab-card h3 { font-size: 1rem; margin-bottom: 0.4rem; }
.lab-card p { color: var(--text-muted); font-size: 0.86rem; line-height: 1.6; }
.pipeline { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 2.5rem; padding: 1.5rem 1rem; background: rgba(10, 10, 11, 0.5); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius); }
.pipe-step { display: flex; flex-direction: column; align-items: center; gap: 0.35rem; padding: 0.6rem 1rem; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; font-size: 0.76rem; font-family: var(--mono); font-weight: 600; color: var(--text-main); min-width: 90px; transition: all 0.2s ease; }
.pipe-step:hover { border-color: var(--primary); transform: translateY(-3px); box-shadow: 0 8px 18px rgba(16, 185, 129, 0.25); }
.pipe-step i { color: var(--primary); font-size: 1.1rem; }
.pipe-arrow { color: var(--text-dim); font-size: 0.9rem; }

/* ========== CERTIFICATIONS ========== */
.certs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.3rem; }
.cert-card { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 2rem 1.5rem; cursor: pointer; position: relative; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
.cert-icon-wrap { width: 64px; height: 64px; border-radius: 18px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.08) 100%); border: 1px solid rgba(16, 185, 129, 0.35); display: grid; place-items: center; margin-bottom: 1.1rem; transition: all 0.35s ease; }
.cert-icon-wrap i { font-size: 1.75rem; color: var(--primary); transition: all 0.35s ease; }
.cert-card:hover .cert-icon-wrap { transform: scale(1.1) rotate(-5deg); border-color: var(--primary); background: linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0.15) 100%); box-shadow: 0 10px 28px rgba(16, 185, 129, 0.4); }
.cert-card:hover .cert-icon-wrap i { transform: scale(1.1); }
.cert-tag { font-size: 0.68rem; text-transform: uppercase; font-family: var(--mono); font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 999px; letter-spacing: 0.05em; margin-bottom: 0.9rem; }
.cert-tag-tech { color: var(--primary); background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); }
.cert-tag-ai { color: #a78bfa; background: rgba(167, 139, 250, 0.12); border: 1px solid rgba(167, 139, 250, 0.3); }
.cert-card h3 { font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.4; }
.cert-issuer { color: var(--text-muted); font-size: 0.78rem; font-family: var(--mono); margin-bottom: 1rem; line-height: 1.4; }
.view-cert-badge { margin-top: auto; font-size: 0.74rem; font-family: var(--mono); font-weight: 600; color: var(--primary); display: inline-flex; align-items: center; gap: 0.45rem; padding-top: 1rem; border-top: 1px dashed rgba(255, 255, 255, 0.1); width: 100%; justify-content: center; transition: all 0.25s ease; }
.cert-card:hover .view-cert-badge { color: var(--primary-light); border-color: rgba(16, 185, 129, 0.4); }
.cert-arrow { transition: transform 0.25s ease; }
.cert-card:hover .cert-arrow { transform: translateX(4px); }
.cert-featured { border-color: rgba(16, 185, 129, 0.5); background: linear-gradient(160deg, rgba(16, 185, 129, 0.08) 0%, rgba(10, 10, 11, 0.6) 100%); }
.cert-featured .cert-icon-wrap { background: linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0.15) 100%); border-color: rgba(16, 185, 129, 0.5); }

/* ========== CERTIFICATE MODAL ========== */
.cert-modal { position: fixed; inset: 0; background: rgba(5, 5, 8, 0.9); backdrop-filter: blur(10px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 1.5rem; overflow-y: auto; }
.cert-modal-content { background: rgba(15, 15, 18, 0.95); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: var(--radius); max-width: 900px; width: 100%; max-height: 92vh; display: flex; flex-direction: column; position: relative; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7); animation: modalSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
@keyframes modalSlideUp { from { opacity: 0; transform: translateY(30px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
.cert-modal-close { position: absolute; top: 1rem; right: 1rem; width: 38px; height: 38px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.12); color: var(--text-muted); font-size: 1.1rem; cursor: pointer; display: grid; place-items: center; transition: all 0.2s ease; z-index: 10; }
.cert-modal-close:hover { background: rgba(239, 68, 68, 0.2); border-color: #ef4444; color: #ef4444; transform: rotate(90deg); }
.cert-modal-header { padding: 1.6rem 1.8rem 1.2rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
.cert-modal-tag { display: inline-block; font-size: 0.68rem; text-transform: uppercase; color: var(--primary); font-family: var(--mono); font-weight: 700; background: rgba(16, 185, 129, 0.15); padding: 0.25rem 0.6rem; border-radius: 999px; border: 1px solid rgba(16, 185, 129, 0.3); margin-bottom: 0.75rem; letter-spacing: 0.05em; }
.cert-modal-header h3 { font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.35rem; line-height: 1.35; padding-right: 2.5rem; }
.cert-modal-issuer { font-size: 0.85rem; color: var(--text-muted); font-family: var(--mono); display: flex; align-items: center; gap: 0.4rem; }
.cert-modal-issuer i { color: var(--accent); }
.cert-modal-body { flex: 1; overflow: auto; padding: 1.5rem; background: rgba(0, 0, 0, 0.3); display: flex; align-items: center; justify-content: center; min-height: 320px; }
.cert-frame { width: 100%; height: 60vh; min-height: 380px; border: none; border-radius: var(--radius-sm); background: #ffffff; }
.cert-image { max-width: 100%; max-height: 65vh; object-fit: contain; border-radius: var(--radius-sm); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); }
.cert-placeholder { text-align: center; color: var(--text-muted); padding: 2rem 1rem; }
.cert-placeholder i { font-size: 3rem; color: var(--primary); margin-bottom: 1rem; opacity: 0.6; }
.cert-placeholder p { font-size: 1rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.4rem; }
.cert-placeholder span { font-size: 0.85rem; color: var(--text-dim); }
.cert-modal-footer { padding: 1rem 1.8rem 1.4rem; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap; }
.cert-modal-footer .btn { padding: 0.65rem 1.25rem; font-size: 0.8rem; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

/* ========== TRAINING ========== */
.training-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; }
.training-card { display: flex; flex-direction: column; text-decoration: none; color: inherit; padding: 1.5rem; cursor: pointer; }
.training-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.9rem; }
.training-phase { font-family: var(--mono); font-size: 0.7rem; font-weight: 700; color: var(--primary); background: rgba(16, 185, 129, 0.15); padding: 0.25rem 0.6rem; border-radius: 999px; border: 1px solid rgba(16, 185, 129, 0.3); }
.training-tag { font-size: 0.66rem; text-transform: uppercase; color: var(--text-dim); font-family: var(--mono); letter-spacing: 0.05em; }
.training-card h3 { font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.6rem; line-height: 1.4; }
.training-dept { color: var(--text-muted); font-size: 0.84rem; margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.5rem; }
.training-dept i { color: var(--primary); }
.training-link-row { margin-top: auto; display: flex; justify-content: space-between; align-items: center; font-size: 0.74rem; font-family: var(--mono); font-weight: 600; color: var(--primary); padding-top: 0.75rem; border-top: 1px dashed rgba(255, 255, 255, 0.1); }
.training-card:hover .link-arrow { transform: translateX(4px); }
.link-arrow { transition: transform 0.2s ease; }
.training-featured { border-color: rgba(16, 185, 129, 0.5); background: linear-gradient(160deg, rgba(16, 185, 129, 0.08) 0%, rgba(10, 10, 11, 0.6) 100%); }

/* ========== CONTACT ========== */
.contact-items { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; max-width: 900px; margin: 0 auto; }
.contact-item { display: flex; align-items: center; gap: 1.15rem; padding: 1rem 1.25rem; text-decoration: none; color: inherit; }
.contact-item i { font-size: 1.4rem; color: var(--primary); width: 24px; text-align: center; }
.contact-item span { display: block; font-size: 0.68rem; color: var(--text-dim); text-transform: uppercase; font-family: var(--mono); letter-spacing: 0.08em; }
.contact-item strong { color: var(--text-main); font-size: 0.88rem; word-break: break-all; }

/* ========== FOOTER ========== */
.footer { border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 2rem 0; color: var(--text-muted); font-size: 0.85rem; font-family: var(--mono); background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(10px); }
.footer-wrap { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
.footer-socials { display: flex; gap: 0.5rem; }
.footer-socials a { width: 36px; height: 36px; border-radius: 10px; background: rgba(255, 255, 255, 0.95); border: 1px solid rgba(0, 0, 0, 0.1); display: grid; place-items: center; text-decoration: none; transition: all 0.25s ease; font-size: 1rem; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); }
.footer-socials a[title="GitHub"] { color: #181717; }
.footer-socials a[title="GitHub"]:hover { background: #181717; color: #ffffff; transform: translateY(-2px); }
.footer-socials a[title="LinkedIn"] { color: #0A66C2; }
.footer-socials a[title="LinkedIn"]:hover { background: #0A66C2; color: #ffffff; transform: translateY(-2px); }
.footer-socials a[title="Instagram"] { color: #E4405F; }
.footer-socials a[title="Instagram"]:hover { background: linear-gradient(45deg, #f09433 0%, #dc2743 50%, #bc1888 100%); color: #ffffff; transform: translateY(-2px); }
.footer-socials a[title="Facebook"] { color: #1877F2; }
.footer-socials a[title="Facebook"]:hover { background: #1877F2; color: #ffffff; transform: translateY(-2px); }
.footer-socials a[title="Email"] { color: #EA4335; }
.footer-socials a[title="Email"]:hover { background: #EA4335; color: #ffffff; transform: translateY(-2px); }

/* ========== RESPONSIVE ========== */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 2.5rem; }
  .hero-visual { order: -1; }
  .hero-actions, .hero-socials, .hero-tech-pills { justify-content: center; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .about-grid { grid-template-columns: 1fr; }
  .about-stats { grid-template-columns: repeat(2, 1fr); }
  .profile-ring { width: 260px; height: 260px; }
  .edu-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .nav-toggle { display: block; }
  .nav-links { position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; align-items: flex-start; background: rgba(10, 10, 11, 0.98); backdrop-filter: blur(20px); padding: 0; gap: 0.4rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease; }
  .nav-links.open { max-height: 80vh; overflow-y: auto; padding: 1rem 1.5rem; }
  .nav-links a:not(.cv-btn) { width: 100%; padding: 0.6rem 0.9rem; border-bottom: 1px dashed rgba(255, 255, 255, 0.08); }
  .cv-btn { width: 100%; justify-content: center; margin-top: 0.5rem; }
}

@media (max-width: 640px) {
  .section { padding: 3.5rem 0; }
  .section-title { font-size: 1.5rem; }
  .section-subtitle { font-size: 0.7rem; }
  .profile-ring { width: 220px; height: 220px; }
  .about-stats { grid-template-columns: repeat(2, 1fr); }
  .timeline { padding-left: 1.5rem; }
  .timeline-dot { left: -2rem; }
  .pipeline { padding: 1rem 0.5rem; }
  .pipe-step { min-width: 75px; font-size: 0.68rem; padding: 0.5rem 0.7rem; }
  .pipe-arrow { display: none; }
  .footer-wrap { flex-direction: column; text-align: center; }
  .hero { padding: 100px 0 60px; }
  .hero h1 { font-size: 2.1rem; }
  .hero-role { font-size: 1rem; }
  .edu-grid { grid-template-columns: 1fr; }
  .profile-line { font-size: 0.72rem; padding: 0.45rem 1rem; }

  /* Modal mobile */
  .cert-modal { padding: 0.75rem; }
  .cert-modal-header { padding: 1.2rem 1.2rem 0.9rem; }
  .cert-modal-header h3 { font-size: 1rem; }
  .cert-modal-body { padding: 0.9rem; min-height: 240px; }
  .cert-frame { height: 55vh; min-height: 300px; }
  .cert-modal-footer { padding: 0.9rem 1.2rem 1.1rem; flex-direction: column; }
  .cert-modal-footer .btn { width: 100%; justify-content: center; }
}
</style>