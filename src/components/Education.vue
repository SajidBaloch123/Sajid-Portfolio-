<template>
  <section id="education" class="education">
    <div class="container">
      <div class="fade-in">
        <h2 class="section-title">Edu<span>cation</span></h2>
        <p class="section-subtitle">academic background</p>
      </div>

      <div class="edu-grid">
        <div
          v-for="(edu, i) in educations"
          :key="i"
          class="edu-card card fade-in"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="edu-icon"><i :class="edu.icon"></i></div>
          <span class="edu-period">{{ edu.period }}</span>
          <h3>{{ edu.degree }}</h3>
          <p class="edu-school">{{ edu.school }}</p>
          <p class="edu-desc">{{ edu.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const educations = [
  {
    icon: 'fa-solid fa-graduation-cap',
    degree: 'Graduate Engineer Trainee',
    school: 'Pakistan Engineering Council',
    period: '1st Apr 2026-30 sep 2026 ',
    desc: 'BDA (Balochistan Development Authority)   PDMA (Provincial Disaster Management Authority)   Industries & Commerce Department   P&D (Planning & Development Department)   Science & Information Technology Department   ABAD (Agencies for Barani Area Development) .',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    degree: 'BE in Computer System Engineering',
    school: 'Balochistan University of Engineering and Technology Khuzdar',
    period: '2022 — 2025 ',
    desc: 'Focused on networking, operating systems, and IT infrastructure. Completed final year project on network security.',
  },
  {
    icon: 'fa-solid fa-certificate',
    degree: 'Intermediate (Pre-Engineering)',
    school: 'Govt Degree College Usta Muhammad',
    period: '2018 — 2020',
    desc: 'Built a strong foundation in mathematics, physics, and computer fundamentals.',
  },
  {
    icon: 'fa-solid fa-school',
    degree: 'Matriculation',
    school: 'Govt High School Cattle Farm',
    period: '2016 — 2018',
    desc: 'Developed early interest in computers and technology through science subjects.',
  },
]
</script>

<style scoped>
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.edu-card { text-align: center; padding: 2.25rem 1.75rem; }
.edu-icon {
  width: 70px; height: 70px;
  margin: 0 auto 1.25rem;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15));
  border: 1px solid var(--border);
  border-radius: 16px;
  font-size: 1.6rem;
  color: var(--primary);
}
.edu-period {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--primary);
  background: rgba(0, 212, 255, 0.08);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}
.edu-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; }
.edu-school { color: var(--primary); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.75rem; }
.edu-desc { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
</style>