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
      { name: "Power BI", level: 75 },
      { name: "Tableau", level: 75 },
      { name: "Advanced Excel", level: 95 },
      { name: "Google Analytics", level: 70 }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Team Work", level: 95 },
      { name: "Curiosity & Lifelong Learner", level: 90 },
      { name: "Soft Leadership", level: 85 },
      { name: "Agile Tools", level: 80 },
      { name: "Critical & Analytical Thinking", level: 90 },
      { name: "Multilingualism", level: 95 },
      { name: "Reliability", level: 95 },
      { name: "Teamwork Ethic", level: 95 },
      { name: "Respect of Confidentiality", level: 100 },
      { name: "Excellent Attention to Detail", level: 95 },
      { name: "Motivation & Self-Awareness", level: 90 }
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
          <a href="${p.github}" class="project-link">GitHub</a>
          <span class="tag" style="border-color: var(--primary); color: #fff;">${p.impact}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const techContainer = document.getElementById('technical-skills-container');
  const softContainer = document.getElementById('soft-skills-container');

  const renderCard = (cat, index) => {
    const skillItems = cat.items.map(s => `
      <div class="skill-item">
        <div class="skill-info">
          <span>${s.name}</span>
        </div>
      </div>
    `).join('');

    return `
      <div class="skill-category" data-cat-index="${index}">
        ${cat.category === 'Soft Skills' ? '' : `<h4>${cat.category}</h4>`}
        <div class="carousel-outer">
          <button class="carousel-btn prev" onclick="moveCarousel(${index}, -1)">❮</button>
          <div class="carousel-container" id="carousel-${index}">
            <div class="carousel-track">
              ${skillItems}
              ${skillItems}
              ${skillItems}
            </div>
          </div>
          <button class="carousel-btn next" onclick="moveCarousel(${index}, 1)">❯</button>
        </div>
      </div>
    `;
  };

  if (techContainer) {
    techContainer.innerHTML = SKILLS_DATA.slice(0, 2).map((cat, i) => renderCard(cat, i)).join('');
  }
  if (softContainer) {
    softContainer.innerHTML = SKILLS_DATA.slice(2).map((cat, i) => renderCard(cat, i + 2)).join('');
  }

  // Initialize positions
  SKILLS_DATA.forEach((_, index) => {
    const container = document.getElementById(`carousel-${index}`);
    const track = container.querySelector('.carousel-track');
    const items = track.querySelectorAll('.skill-item');
    const itemCount = items.length / 3;
    const itemWidth = items[0].offsetWidth + 48; // width + gap

    // Center the first item of the middle set
    const centerOffset = (container.offsetWidth / 2) - (items[0].offsetWidth / 2);
    container.scrollLeft = (itemWidth * itemCount) - centerOffset;
  });
}

function moveCarousel(index, direction) {
  const container = document.getElementById(`carousel-${index}`);
  const track = container.querySelector('.carousel-track');
  const items = track.querySelectorAll('.skill-item');
  const itemCount = items.length / 3;
  const itemWidth = items[0].offsetWidth + 48;

  const targetScroll = container.scrollLeft + (direction * itemWidth);

  container.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });

  // Infinite scroll check after animation
  setTimeout(() => {
    const centerOffset = (container.offsetWidth / 2) - (items[0].offsetWidth / 2);
    const middleStart = (itemWidth * itemCount) - centerOffset;

    if (container.scrollLeft >= middleStart + (itemWidth * itemCount)) {
      container.scrollLeft = middleStart;
    } else if (container.scrollLeft <= middleStart - (itemWidth * itemCount)) {
      container.scrollLeft = middleStart;
    }
  }, 400);
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
      ghBtn.innerHTML = `GitHub Repos: ${data.public_repos}`;

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
