const PROJECTS_DATA = [
  {
    id: 1,
    title: {
      en: "Business KPI Dashboard",
      es: "Dashboard de KPIs de Negocio",
      pt: "Dashboard de KPIs de Negócio"
    },
    description: {
      en: "Automated reporting system for high-level management decision making using Python and SQL.",
      es: "Sistema de reporting automatizado para la toma de decisiones directivas usando Python y SQL.",
      pt: "Sistema de relatórios automatizado para tomada de decisão gerencial usando Python e SQL."
    },
    tags: ["Python", "SQL", "Power BI"],
    github: "#",
    impact: "95% Reduction in manual error"
  },
  {
    id: 2,
    title: {
      en: "Customer Segment Analysis",
      es: "Análisis de Segmentación de Clientes",
      pt: "Análise de Segmentação de Clientes"
    },
    description: {
      en: "Uncovered key growth demographics for a retail dataset through EDA and statistical profiling.",
      es: "Identificación de demografías clave para el crecimiento mediante EDA y perfilado estadístico.",
      pt: "Identificação de demografias-chave para crescimento através de EDA e perfil estatístico."
    },
    tags: ["Python", "Pandas", "EDA"],
    github: "#",
    impact: "15% Potential revenue growth identified"
  }
];

const SKILLS_DATA = [
  {
    category: "Data Analysis",
    items: [
      { name: "SQL (MySQL)", level: 90 },
      { name: "Python (Pandas/NumPy)", level: 85 },
      { name: "Data Visualization", level: 80 }
    ]
  },
  {
    category: "Tools & BI",
    items: [
      { name: "Power BI / Tableau", level: 75 },
      { name: "Advanced Excel", level: 95 },
      { name: "Google Analytics", level: 70 }
    ]
  }
];

function renderProjects() {
  const container = document.getElementById('projects-container');
  const lang = localStorage.getItem('lang') || 'en';

  container.innerHTML = PROJECTS_DATA.map(p => `
    <article class="project-card glass">
      <div class="card-content">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <h3>${p.title[lang]}</h3>
        <p>${p.description[lang]}</p>
        <div class="project-links">
          <a href="${p.github}" class="project-link">GitHub <span>→</span></a>
          <span class="tag" style="border-color: var(--primary); color: #fff;">${p.impact}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');

  container.innerHTML = SKILLS_DATA.map(cat => `
    <div class="skill-category">
      <h4>${cat.category}</h4>
      <div class="skill-list">
        ${cat.items.map(s => `
          <div class="skill-item">
            <div class="skill-info">
              <span>${s.name}</span>
              <span>${s.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: ${s.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Recruiter Mode Toggle Logic
function setupRecruiterMode() {
  const toggle = document.getElementById('recruiter-mode-toggle');
  const panel = document.getElementById('recruiter-panel');
  const overlay = document.getElementById('overlay');

  if (!toggle) return;

  const openPanel = () => {
    panel.classList.add('open');
    overlay.classList.add('visible');
  };

  const closePanel = () => {
    panel.classList.remove('open');
    overlay.classList.remove('visible');
  };

  toggle.addEventListener('click', openPanel);
  overlay.addEventListener('click', closePanel);
}

async function fetchGitHubStats() {
  try {
    const response = await fetch('https://api.github.com/users/ThamirysKearney');
    const data = await response.json();
    if (data.public_repos) {
      const statsContainer = document.querySelector('.hero-actions');

      // Create an anchor instead of a span for interactivity
      const ghBtn = document.createElement('a');
      ghBtn.className = 'btn btn-primary'; // Same classes as other buttons
      ghBtn.href = 'https://github.com/ThamirysKearney';
      ghBtn.target = '_blank';
      ghBtn.style.marginLeft = '10px';
      ghBtn.innerHTML = `📊 GitHub Repos: ${data.public_repos}`;

      statsContainer.appendChild(ghBtn);
    }
  } catch (err) {
    console.error('GitHub API failed', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  setupRecruiterMode();
  fetchGitHubStats();

  // Re-render when language changes
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', () => {
      setTimeout(() => {
        renderProjects();
        renderSkills();
      }, 50); // Small delay to let i18n engine update
    });
  }
});
