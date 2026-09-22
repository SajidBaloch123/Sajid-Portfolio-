<template>
  <section id="training" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Professional <span>Training</span></h2>
      <p class="section-subtitle">PEC continuous professional development flow</p>

      <!-- Certifications jaisa Cards Grid -->
      <div class="training-grid">
        <a
          v-for="item in trainings"
          :key="item.phase"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="card training-card"
        >
          <div class="training-card-top">
            <span class="training-phase">{{ item.phase }}</span>
            <span class="training-tag">{{ item.tag }}</span>
          </div>
          <h3>{{ item.dept }}</h3>
          <p class="training-desc">{{ item.desc }}</p>
          <div class="training-link-row">
            <span><i class="fa-regular fa-file-lines"></i> View Details</span>
            <i class="fa-solid fa-arrow-up-right-from-square link-arrow"></i>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const trainings = [
  {
    phase: 'Phase 01',
    dept: 'Balochistan Development Authority (BDA)',
    tag: 'Infrastructure & Schemes',
    desc: 'Engineering schemes, PC-1 formulations, and procurement monitoring.',
    link: '#'
  },
  {
    phase: 'Phase 02',
    dept: 'Provincial Disaster Management Authority (PDMA)',
    tag: 'Disaster Risk Management',
    desc: 'Earthquake monitoring telemetry, hazard assessment, and safety protocols.',
    link: '#'
  },
  {
    phase: 'Phase 03',
    dept: 'Industries & Commerce Department',
    tag: 'Industrial Systems',
    desc: 'Industrial estate management and enterprise coordination schemes.',
    link: '#'
  },
  {
    phase: 'Phase 04',
    dept: 'Planning & Development Department (P&D)',
    tag: 'Project Evaluation',
    desc: 'Public Sector Development Programme schemes review and automation.',
    link: '#'
  },
  {
    phase: 'Phase 05',
    dept: 'Science & Information Technology Department',
    tag: 'IT Infrastructure',
    desc: 'Provincial data center networks, WAN topologies, and e-governance systems.',
    link: '#'
  },
  {
    phase: 'Phase 06',
    dept: 'Agencies for Barani Area Development (ABAD)',
    tag: 'Field Engineering',
    desc: 'Arid zone technology systems and water infrastructure engineering in Rawalpindi.',
    link: '#'
  }
]
</script>

<style scoped>
.training-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.training-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.4rem;
  transition: all 0.25s ease;
  cursor: pointer;
}

.training-card:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.2);
}

.training-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.training-phase {
  font-family: var(--mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  background: rgba(16, 185, 129, 0.12);
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
}

.training-tag {
  font-size: 0.72rem;
  text-transform: uppercase;
  color: var(--text-muted);
  font-family: var(--mono);
}

.training-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  line-height: 1.35;
}

.training-desc {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 1.2rem;
}

.training-link-row {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  font-family: var(--mono);
  font-weight: 600;
  color: var(--primary);
  padding-top: 0.75rem;
  border-top: 1px dashed var(--border);
}

.training-card:hover .link-arrow {
  transform: translate(2px, -2px);
  transition: transform 0.2s ease;
}
</style>