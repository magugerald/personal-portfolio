import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING",
    title: "Breast cancer classification",
    description:
      "A Random Forest model to classify breast cells, supported by feature analysis and cross-validation.",
    result: "96% model accuracy",
    note: "Evaluated with cross-validation, confusion matrix and ROC analysis.",
    tags: ["Python", "Random Forest", "Model evaluation"],
  },
  {
    number: "02",
    category: "NATURAL LANGUAGE PROCESSING",
    title: "Customer review sentiment",
    description:
      "A Naive Bayes model that classifies customer reviews, from text preprocessing through cross-validated evaluation.",
    result: "~82% accuracy across five folds",
    note: "Explored how review language maps to sentiment.",
    tags: ["Python", "Naive Bayes", "NLP"],
  },
  {
    number: "03",
    category: "PREDICTIVE ANALYTICS",
    title: "Creditworthiness prediction",
    description:
      "Compared Logistic Regression and SVM models on a German credit dataset after preparing and exploring the data.",
    result: "23.4% SVM prediction error",
    note: "Outperformed Logistic Regression; cross-validation accuracy: 79.27%.",
    tags: ["Classification", "SVM", "Analysis"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Real estate & growth",
    description:
      "Property marketing, client advisory, prospecting and relationship-led sales.",
    skills: "Property tours · Lead generation · Negotiation",
  },
  {
    number: "02",
    title: "Data & analytics",
    description:
      "Turning raw information into clear findings that support better decisions.",
    skills: "Python · SQL · R · Power BI · Tableau",
  },
  {
    number: "03",
    title: "AI & evaluation",
    description:
      "Preparing and reviewing data, models and AI-generated outputs with care.",
    skills: "Machine learning · Annotation · Quality review",
  },
  {
    number: "04",
    title: "Web development",
    description:
      "Building and improving websites and digital products, with a focus on practical features and useful customer experiences.",
    skills: "React · Node.js · Next.js",
  },
];

const experience = [
  {
    period: "NOV 2025 — PRESENT",
    role: "Real Estate Professional",
    company: "Prime African Estates",
    description:
      "Marketing properties, qualifying leads and guiding clients through searches, viewings and purchase decisions.",
  },
  {
    period: "JAN 2019 — PRESENT",
    role: "Data Analyst",
    company: "Freelance",
    description:
      "Analyzed data and developed predictive models using Python and R, with dashboards in Power BI and Tableau.",
  },
  {
    period: "SEP 2023 — JAN 2024",
    role: "AI Data Annotator / Trainer",
    company: "Remotasks / Scale AI",
    description:
      "Supported AI training through image and text annotation, guideline-based reviews and data quality checks.",
  },
  {
    period: "JAN 2019 — APR 2024",
    role: "Researcher & Content Writer",
    company: "Freelance",
    description:
      "Gathered and analyzed information, synthesized sources and delivered clear, structured writing.",
  },
];

export default function Home() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <a className="portfolio-brand" href="#top" aria-label="Gerald Magu, home">
          GM<span>.</span>
        </a>
        <nav className="portfolio-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a
          className="portfolio-nav-cta"
          href="mailto:magugerald@gmail.com"
        >
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="portfolio-hero" id="top">
          <div className="portfolio-hero-copy">
            <p className="portfolio-eyebrow">
              <span className="portfolio-status-dot" />
              WEB DEVELOPMENT · DATA · REAL ESTATE
            </p>
            <h1>
              I turn insight
              <br />
              into <span>business</span>
              <br />
              momentum.
            </h1>
            <p className="portfolio-hero-intro">
              I&apos;m Gerald Magu — a data analyst, real estate professional
              and entrepreneur who brings commercial instinct and analytical
              thinking together to build better customer experiences.
            </p>
            <div className="portfolio-hero-actions">
              <a className="portfolio-button portfolio-button-dark" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="portfolio-text-link"
                href="mailto:magugerald@gmail.com"
              >
                Say hello <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="portfolio-hero-meta">
              <span>Nairobi, Kenya</span>
              <span>English &amp; Swahili</span>
            </div>
          </div>
          <div className="portfolio-portrait-wrap">
            <div className="portfolio-portrait-frame">
              <Image
                src="/images/passport-look.png"
                alt="Gerald Magu"
                fill
                priority
                sizes="(max-width: 760px) 84vw, 40vw"
                className="portfolio-portrait"
              />
            </div>
            <div className="portfolio-portrait-note">
              <span className="portfolio-note-mark">GM</span>
              <span>
                Curious by nature.
                <br />
                Optimistic by default.
              </span>
            </div>
            <span className="portfolio-portrait-index">01 / 04</span>
          </div>
        </section>

        <section className="portfolio-focus" aria-label="Professional focus">
          <p>ONE CAREER, MULTIPLE LENSES</p>
          <div>
            <span>Commercial thinking</span>
            <i />
            <span>Analytical problem-solving</span>
            <i />
            <span>Human-first execution</span>
          </div>
        </section>

        <section className="portfolio-section portfolio-work" id="work">
          <div className="portfolio-section-heading">
            <div>
              <p className="portfolio-eyebrow">A FEW THINGS I&apos;VE BUILT</p>
              <h2>Selected work<span>.</span></h2>
            </div>
            <p className="portfolio-section-intro">
              A snapshot of how I explore questions, work with data and turn
              ideas into useful outcomes.
            </p>
          </div>
          <div className="portfolio-project-grid">
            {projects.map((project) => (
              <article className="portfolio-project-card" key={project.number}>
                <div className="portfolio-project-topline">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="portfolio-project-description">
                  {project.description}
                </p>
                <div className="portfolio-project-result">
                  <strong>{project.result}</strong>
                  <span>{project.note}</span>
                </div>
                <ul className="portfolio-tag-list" aria-label="Project skills">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-capabilities">
          <div className="portfolio-section portfolio-capabilities-inner">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-eyebrow">WHERE I ADD VALUE</p>
                <h2>Curiosity, put to work<span>.</span></h2>
              </div>
              <p className="portfolio-section-intro">
                I bring together a broad toolkit, with a practical focus on
                solving business and customer problems.
              </p>
            </div>
            <div className="portfolio-capability-grid">
              {capabilities.map((capability) => (
                <article
                  className="portfolio-capability-card"
                  key={capability.number}
                >
                  <span className="portfolio-card-number">
                    {capability.number}
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <span className="portfolio-capability-skills">
                    {capability.skills}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section portfolio-experience" id="experience">
          <div className="portfolio-section-heading">
            <div>
              <p className="portfolio-eyebrow">THE EXPERIENCE BEHIND THE WORK</p>
              <h2>Building range, with purpose<span>.</span></h2>
            </div>
            <p className="portfolio-section-intro">
              Each chapter has strengthened how I research, communicate and
              create value for people.
            </p>
          </div>
          <div className="portfolio-timeline">
            {experience.map((item) => (
              <article className="portfolio-timeline-item" key={item.role}>
                <p className="portfolio-timeline-period">{item.period}</p>
                <div className="portfolio-timeline-role">
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                </div>
                <p className="portfolio-timeline-description">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-ventures">
          <div className="portfolio-section">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-eyebrow">
                  FEATURED PROJECTS · WEB &amp; REAL ESTATE
                </p>
                <h2>Ideas in motion<span>.</span></h2>
              </div>
              <p className="portfolio-section-intro">
                My latest projects bring together web development, real estate
                and digital product thinking to create useful experiences for
                businesses and their customers.
              </p>
            </div>
            <div className="portfolio-venture-grid">
              <article className="portfolio-venture-card portfolio-venture-estates">
                <span className="portfolio-venture-label">REAL ESTATE · KENYA</span>
                <h3>Prime African Estates</h3>
                <p>
                  Growing a client-first real estate business through clear
                  property presentations, thoughtful service and digital
                  marketing.
                </p>
                <a
                  className="portfolio-venture-foot"
                  href="https://www.primeafricanestates.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit the Prime African Estates website"
                >
                  VIEW LIVE WEBSITE <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="portfolio-venture-card portfolio-venture-stay">
                <span className="portfolio-venture-label">
                  DIGITAL PRODUCT · HOSPITALITY
                </span>
                <h3>Stay254</h3>
                <p>
                  Exploring a digital accommodation platform that helps guests
                  discover stays and gives Kenyan hosts a better way to reach
                  them.
                </p>
                <a
                  className="portfolio-venture-foot"
                  href="https://www.stay254.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit the Stay254 website"
                >
                  VIEW LIVE WEBSITE <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="portfolio-about" id="about">
          <div className="portfolio-section portfolio-about-inner">
            <div>
              <p className="portfolio-eyebrow">A LITTLE ABOUT ME</p>
              <h2>Learn continuously.<br />Build what matters.</h2>
            </div>
            <div className="portfolio-about-copy">
              <p>
                With a background in Mathematics and Computer Science from
                Multimedia University of Kenya, I&apos;ve built experience
                across data analysis, research, AI and entrepreneurship. Today,
                I bring that analytical perspective to real estate and business
                development.
              </p>
              <p>
                I bring a curious mind, an optimistic outlook and a genuine
                enjoyment of solving problems with people. I&apos;m motivated
                by useful ideas and the process of turning opportunity into
                something real.
              </p>
              <div className="portfolio-education">
                <span>EDUCATION &amp; PROFESSIONAL LEARNING</span>
                <strong>BSc, Mathematics &amp; Computer Science</strong>
                <span>Multimedia University of Kenya</span>
                <strong>Data Analysis with Python &amp; R · Coursera</strong>
                <strong>Data Science Foundation · Great Learning</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-contact" id="contact">
          <div>
            <p className="portfolio-eyebrow">HAVE A GOOD CHALLENGE IN MIND?</p>
            <h2>Let&apos;s make something meaningful.</h2>
          </div>
          <a
            className="portfolio-button portfolio-button-light"
            href="mailto:magugerald@gmail.com"
          >
            magugerald@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </div>
  );
}
