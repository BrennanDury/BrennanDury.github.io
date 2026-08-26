const ArrowUpRight = () => <span aria-hidden="true">↗</span>;

const experiences = [
  {
    dates: 'Aug 2025 — Present',
    role: 'Mathematics Researcher',
    organization: 'University of Pennsylvania',
    focus: 'Singular Learning Theory',
    summary:
      'Deriving free energy for analytic loss functions using multivariate local zeta functions, with applications to transfer learning and real log canonical threshold estimation.',
  },
  {
    dates: 'Jun — Aug 2025',
    role: 'Deep Learning Research Engineer',
    organization: 'Trim',
    focus: 'Scientific Transformers',
    summary:
      'Built linear-complexity transformer tooling for physical-system prediction, including key-value caching and custom Triton kernels for batched attention.',
  },
  {
    dates: 'Aug 2023 — Jun 2024',
    role: 'Neural Network Interpretability Researcher',
    organization: 'EleutherAI',
    focus: 'Concept Editing',
    summary:
      'Studied concept editing through optimal transport and identified mislabeled data through outlier detection in language-model activation space.',
  },
  {
    dates: 'Dec 2022 — Jan 2024',
    role: 'Manifold Learning Researcher',
    organization: 'University of Washington',
    focus: 'Feature Learning',
    summary:
      'Demonstrated suboptimality of a manifold-learning algorithm and studied feature learning as learning functions on noisy manifolds.',
  },
  {
    dates: 'Jun — Sep 2022',
    role: 'Cell-state Bayesian Modeling Researcher',
    organization: 'Fred Hutch Cancer Center',
    focus: 'Density Estimation',
    summary:
      'Contributed to Mellon, a non-parametric density estimator for single-cell data, and improved its algorithms, packaging, and documentation.',
  },
  {
    dates: '2021 — 2023',
    role: 'Genomic Bayesian Modeling Researcher',
    organization: 'Fred Hutch Cancer Center',
    focus: 'Gaussian Processes',
    summary:
      'Designed an approximate Gaussian-process algorithm with error guarantees for deconvolving Cut&Tag2for1 genomic data.',
  },
];

const writing = [
  {
    year: '2025',
    title: 'Disentangling Transformer Design Choices for Physical Trajectory Prediction',
    kind: 'Technical report',
    href: 'https://drive.google.com/file/d/1nQ5NyHnS7PB4drzhvZAXToduu1pNKQxE/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Meromorphic Continuation of Archimedean Zeta Functions',
    kind: 'Expository paper',
    href: 'https://drive.google.com/file/d/1Haw7bxtr9W7AoGoFOcqhkpHkPRpms1Uu/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Free Form Least-Squares Concept Erasure Without Oracle Concept Labels',
    kind: 'EleutherAI blog',
    href: 'https://blog.eleuther.ai/free-form-leace/',
  },
  {
    year: '2023',
    title: 'The Importance of Being Parameters: An Intra-Distillation Method for Serious Gains',
    kind: 'Reproduction study',
    href: 'https://github.com/yashmanne/intra-distillation/blob/main/Intra-Distillation-Reproducibility.pdf',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Brennan Dury, home">
          BD<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="status-dot" />
          Mathematics researcher &amp; ML engineer
        </div>
        <h1>
          I study the mathematics of <em>how models learn.</em>
        </h1>
        <div className="hero-footer">
          <p>
            I&apos;m Brennan Dury. My work connects singular learning theory,
            interpretable machine learning, and high-performance research
            engineering.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="mailto:brennandury@gmail.com">
              Get in touch <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="orbital-mark" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">ζ</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Highlights">
        <div><strong>2024</strong><span>Nature Methods co-author</span></div>
        <div><strong>6</strong><span>Research roles</span></div>
        <div><strong>M.A.</strong><span>Mathematics, Penn</span></div>
        <div><strong>Open</strong><span>to ambitious collaborations</span></div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">01 / Selected work</p>
          <h2>Research with a working implementation.</h2>
        </div>

        <div className="work-grid">
          <a
            className="project-card project-card-featured"
            href="https://www.nature.com/articles/s41592-024-02302-w"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-meta"><span>Publication</span><span>Nature Methods · 2024</span></div>
            <h3>Quantifying cell-state densities in single-cell landscapes</h3>
            <p>A Bayesian non-parametric density estimator for high-dimensional single-cell data, published as Mellon.</p>
            <div className="project-link">Read publication <ArrowUpRight /></div>
          </a>

          <a
            className="project-card project-card-dark"
            href="https://github.com/eg-trim/trim-transformer"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-meta"><span>Open source</span><span>Deep learning · 2025</span></div>
            <h3>Trim Transformer</h3>
            <p>A linear-complexity transformer package with key-value caching and custom Triton kernels.</p>
            <div className="project-link">View on GitHub <ArrowUpRight /></div>
          </a>

          <a
            className="project-card project-card-acid project-card-small"
            href="https://arxiv.org/pdf/2402.04362"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-meta"><span>Paper</span><span>ICML · 2024</span></div>
            <h3>Neural networks learn statistics of increasing complexity</h3>
            <p>Co-author of the extended analysis of how learned statistics evolve through training.</p>
            <div className="project-link">Read on arXiv <ArrowUpRight /></div>
          </a>

          <a
            className="project-card project-card-paper project-card-small"
            href="https://drive.google.com/file/d/1RP3pM7kxNy4GGRwHB_O8weZSkHNBuHcA/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-meta"><span>Master&apos;s thesis</span><span>Mathematics · 2026</span></div>
            <h3>Multivariate zeta functions, Laplace integrals, and singular learning theory</h3>
            <p>A mathematical study of asymptotic behavior in singular statistical models.</p>
            <div className="project-link">Read the thesis <ArrowUpRight /></div>
          </a>
        </div>
      </section>

      <section className="research-feature">
        <div className="research-copy">
          <p className="eyebrow eyebrow-light">Current research / Singular learning theory</p>
          <h2>Local zeta functions as a lens on model complexity.</h2>
          <p className="research-lead">
            At Penn, I derive free energy for analytic loss functions through
            multivariate local zeta functions and investigate applications to
            transfer learning, RLCT estimation, and weaker variance assumptions.
          </p>
          <a
            className="text-link text-link-light"
            href="https://drive.google.com/file/d/1-MkbkahqxBZweqaLIvous_Fu663SrzDV/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View the thesis manuscript <ArrowUpRight />
          </a>
        </div>
        <div className="formula-field" aria-hidden="true">
          <div className="formula-index">[01]</div>
          <div className="formula">ζ(z) = ∫ K(w)<sup>z</sup> φ(w) dw</div>
          <div className="formula-note">geometry → asymptotics → generalization</div>
          <span className="axis axis-x" />
          <span className="axis axis-y" />
          <span className="curve curve-one" />
          <span className="curve curve-two" />
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading section-heading-compact">
          <p className="eyebrow">02 / Experience</p>
          <h2>Across theory, experiments, and systems.</h2>
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-row" key={`${item.organization}-${item.role}`}>
              <div className="timeline-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-date">{item.dates}</div>
              <div className="timeline-main">
                <p className="timeline-focus">{item.focus}</p>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-summary">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <p className="eyebrow">03 / Education</p>
          <h2>Built on both proof and computation.</h2>
        </div>
        <div className="education-grid">
          <article className="education-card education-card-blue">
            <div className="education-topline"><span>University of Pennsylvania</span><span>2026</span></div>
            <h3>M.A.<br />Mathematics</h3>
            <div className="education-detail"><span>GPA 3.84</span><span>Philadelphia, PA</span></div>
          </article>
          <article className="education-card education-card-paper">
            <div className="education-topline"><span>University of Washington</span><span>2024</span></div>
            <h3>B.S. Computer Science<br />B.A. Mathematics</h3>
            <div className="education-detail"><span>GPA 3.86</span><span>Seattle, WA</span></div>
          </article>
        </div>
        <div className="coursework">
          <p className="eyebrow">Graduate coursework</p>
          <p>Analysis I–II · Algebra I–II · Topology I–II · Cryptography · Combinatorics · Numerical Analysis · Concentration Inequalities · Natural Language Processing</p>
        </div>
      </section>

      <section className="section writing-section" id="writing">
        <div className="section-heading section-heading-compact">
          <p className="eyebrow">04 / Writing</p>
          <h2>Notes from the frontier.</h2>
        </div>
        <div className="writing-list">
          {writing.map((item, index) => (
            <a className="writing-row" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span className="writing-index">W{index + 1}</span>
              <span className="writing-title">{item.title}</span>
              <span className="writing-meta">{item.kind} · {item.year}</span>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="community-section">
        <div>
          <p className="eyebrow">05 / Beyond the lab</p>
          <h2>Ideas get better in community.</h2>
        </div>
        <div className="community-list">
          <article>
            <span>Leadership</span>
            <h3>President, AI Alignment at UW</h3>
            <p>Organized and mentored discussion and research groups in interpretability, red-teaming, and eliciting latent knowledge.</p>
          </article>
          <article>
            <span>Community</span>
            <h3>Organizer, Effective Altruism at UW</h3>
            <p>Facilitated student discussions on moral uncertainty, decision theory, and complex cluelessness.</p>
          </article>
          <article>
            <span>Workshop</span>
            <h3>Foundations of Interpretability at IPAM</h3>
            <p>Helped organize a workshop bringing together researchers working on interpretable machine learning.</p>
            <a href="https://www.ipam.ucla.edu/programs/workshops/foundations-of-interpretability/" target="_blank" rel="noreferrer">View workshop <ArrowUpRight /></a>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow eyebrow-light">Have a hard problem?</p>
        <h2>Let&apos;s build something rigorous.</h2>
        <div className="contact-links">
          <a href="mailto:brennandury@gmail.com">brennandury@gmail.com <ArrowUpRight /></a>
          <a href="https://github.com/BrennanDury" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
        </div>
        <div className="footer-line">
          <span>© {new Date().getFullYear()} Brennan Dury</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>
    </main>
  );
}
