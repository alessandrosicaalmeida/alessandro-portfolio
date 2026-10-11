import { useEffect, useMemo, useState } from "react";
import { CareerTimeline } from "./components/CareerTimeline";
import { projects, statusCopy, type Language, type Project } from "./data/projects";

const ui = {
  en: {
    nav: ["Work", "Evidence", "Trajectory", "Contact"],
    heroKicker: "INVENTION Â· TRANSFORMATION Â· AI",
    heroTitle: "Creativity and vision, using AI to solve complex problems with agility and control.",
    heroBody: "For more than 20 years, I have found the pattern others missed, shaped original solutions, and led people, products, data, and technology to make them real.",
    explore: "Explore selected work",
    resume: "Download rÃ©sumÃ©",
    verified: "A career built around difficult problems",
    mapped: "years creating systems across operations, product, data, and AI",
    flagships: "solutions mapped across enterprise transformation and new ventures",
    based: "Tampa Bay Â· United States",
    flagship: "Flagship case",
    signingTitle: "SigningLab: predictive intelligence for football recruitment decisions.",
    signingBody: "I created SigningLab to make football recruitment decisions more transparent. Its public website and published iOS app put league-specific intelligence, rankings, and pre-outcome forecasts in users' hands.",
    leagues: "leagues",
    publishedCases: "published cases",
    lift: "strict-success lift",
    publicArtifact: "Public methodology artifact",
    leadershipTitle: "Leadership approach: from problem definition to implementation.",
    leadershipBody: "I enter where the problem is ambiguous, the existing model has stopped working, and progress requires both invention and execution.",
    leadershipKicker: "01 / LEADERSHIP PATTERN",
    leadershipPillars: [
      ["01", "Reframe the problem", "Find the structural constraint behind the visible symptom and turn ambiguity into a direction people can act on."],
      ["02", "Invent the system", "Combine business design, data, AI, product, and operating insight into a solution that did not exist before."],
      ["03", "Mobilize reality", "Align teams, partners, governance, and delivery around outcomes, then learn from evidence and adapt."],
    ],
    projectsTitle: "Solutions created across business, data, and AI.",
    projectsBody: "Each case shows a real problem, the system created to address it, Alessandro's leadership, and the evidence available today.",
    capabilityKicker: "03 / TECHNICAL CAPABILITY",
    capabilityTitle: "Architecture and AI capabilities proven through real systems.",
    capabilityBody: "The portfolio is organized around business outcomes, while this map makes the underlying technical depth explicit. Planned items are labeled and never presented as completed evidence.",
    portfolioKicker: "04 / SOLUTION PORTFOLIO",
    disclosureKicker: "05 / ACCOUNTABILITY",
    contactKicker: "06 / CONTACT",
    all: "All work",
    core: "Featured",
    supporting: "Supporting",
    archive: "Archive & evidence",
    view: "Inspect case",
    proof: "What is supported",
    role: "Leadership and ownership",
    problem: "Problem and context",
    operation: "How the system works",
    decisions: "Key decisions",
    capabilities: "Capabilities demonstrated",
    technologies: "Technologies",
    learnings: "What this project taught",
    boundary: "Public demo boundary",
    visualPlan: "How the project will be demonstrated",
    next: "What comes next",
    capabilityStatus: { implemented: "Implemented", prototype: "Prototype", planned: "Planned" },
    stage: "Solution stage",
    close: "Close case",
    methodsTitle: "Evidence, scope, and current maturity.",
    methodsBody: "Each case makes the boundary clear: the problem, my leadership, what exists today, and what can be independently inspected. Live products, prototypes, research, and enterprise systems are presented for what they are.",
    contactTitle: "Executive leadership for AI, product, and transformation.",
    contactBody: "I am exploring executive and senior leadership roles where the challenge is consequential, the path is not obvious, and a new system must be invented and led into reality.",
    email: "Start a conversation",
    github: "GitHub profile",
    footer: "Built as a living evidence system. Last audited September 2026.",
  },
  pt: {
    nav: ["Projetos", "EvidÃªncias", "TrajetÃ³ria", "Contato"],
    heroKicker: "INVENÃ‡ÃƒO Â· TRANSFORMAÃ‡ÃƒO Â· IA",
    heroTitle: "Criatividade e visÃ£o utilizando IA na soluÃ§Ã£o Ã¡gil e segura para problemas complexos.",
    heroBody: "HÃ¡ mais de 20 anos, encontro o padrÃ£o que outros nÃ£o perceberam, desenho soluÃ§Ãµes originais e lidero pessoas, produtos, dados e tecnologia para tornÃ¡-las realidade.",
    explore: "Explorar projetos selecionados",
    resume: "Baixar currÃ­culo",
    verified: "Uma carreira construÃ­da em torno de problemas difÃ­ceis",
    mapped: "anos criando sistemas em operaÃ§Ãµes, produto, dados e IA",
    flagships: "soluÃ§Ãµes mapeadas entre transformaÃ§Ã£o empresarial e novos negÃ³cios",
    based: "Tampa Bay Â· Estados Unidos",
    flagship: "Projeto principal",
    signingTitle: "SigningLab: inteligÃªncia preditiva para decisÃµes de contrataÃ§Ã£o no futebol.",
    signingBody: "Criei a SigningLab para tornar decisÃµes de contrataÃ§Ã£o no futebol mais transparentes. O site pÃºblico e o app publicado para iOS levam aos usuÃ¡rios inteligÃªncia por liga, rankings e previsÃµes registradas antes dos resultados.",
    leagues: "ligas",
    publishedCases: "casos publicados",
    lift: "ganho em sucesso estrito",
    publicArtifact: "Artefato pÃºblico de metodologia",
    leadershipTitle: "Abordagem de lideranÃ§a: da definiÃ§Ã£o do problema Ã  implementaÃ§Ã£o.",
    leadershipBody: "Atuo onde o problema Ã© ambÃ­guo, o modelo existente parou de funcionar e avanÃ§ar exige invenÃ§Ã£o e execuÃ§Ã£o.",
    leadershipKicker: "01 / PADRÃƒO DE LIDERANÃ‡A",
    leadershipPillars: [
      ["01", "Reformular o problema", "Encontrar a restriÃ§Ã£o estrutural por trÃ¡s do sintoma visÃ­vel e transformar ambiguidade em uma direÃ§Ã£o acionÃ¡vel."],
      ["02", "Inventar o sistema", "Combinar desenho de negÃ³cio, dados, IA, produto e visÃ£o operacional em uma soluÃ§Ã£o que antes nÃ£o existia."],
      ["03", "Mobilizar a realidade", "Alinhar equipes, parceiros, governanÃ§a e execuÃ§Ã£o em torno de resultados, aprendendo com evidÃªncias e adaptando a rota."],
    ],
    projectsTitle: "SoluÃ§Ãµes criadas em negÃ³cios, dados e IA.",
    projectsBody: "Cada caso mostra um problema real, o sistema criado para enfrentÃ¡-lo, a lideranÃ§a de Alessandro e as evidÃªncias disponÃ­veis hoje.",
    capabilityKicker: "03 / CAPACIDADE TÃ‰CNICA",
    capabilityTitle: "Capacidades de arquitetura e IA comprovadas por sistemas reais.",
    capabilityBody: "O portfÃ³lio Ã© organizado por resultados de negÃ³cio, enquanto este mapa torna explÃ­cita a profundidade tÃ©cnica. Itens planejados sÃ£o identificados e nunca apresentados como evidÃªncia concluÃ­da.",
    portfolioKicker: "04 / PORTFÃ“LIO DE SOLUÃ‡Ã•ES",
    disclosureKicker: "05 / RESPONSABILIDADE",
    contactKicker: "06 / CONTATO",
    all: "Todos",
    core: "Destaques",
    supporting: "Complementares",
    archive: "Arquivo e evidÃªncias",
    view: "Inspecionar caso",
    proof: "O que estÃ¡ comprovado",
    role: "LideranÃ§a e responsabilidade",
    problem: "Problema e contexto",
    operation: "Como o sistema funciona",
    decisions: "DecisÃµes principais",
    capabilities: "Capacidades demonstradas",
    technologies: "Tecnologias",
    learnings: "Aprendizados",
    boundary: "Limite da demonstraÃ§Ã£o pÃºblica",
    visualPlan: "Como o projeto serÃ¡ demonstrado",
    next: "PrÃ³ximos passos",
    capabilityStatus: { implemented: "Implementado", prototype: "ProtÃ³tipo", planned: "Planejado" },
    stage: "EstÃ¡gio da soluÃ§Ã£o",
    close: "Fechar caso",
    methodsTitle: "EvidÃªncias, escopo e maturidade atual.",
    methodsBody: "Cada case deixa claro o problema, minha lideranÃ§a, o que existe hoje e o que pode ser verificado de forma independente. Produtos ativos, protÃ³tipos, pesquisas e sistemas empresariais sÃ£o apresentados exatamente pelo que sÃ£o.",
    contactTitle: "LideranÃ§a executiva em IA, produto e transformaÃ§Ã£o.",
    contactBody: "Estou avaliando posiÃ§Ãµes executivas e de lideranÃ§a sÃªnior nas quais o desafio Ã© relevante, o caminho nÃ£o Ã© Ã³bvio e um novo sistema precisa ser inventado e conduzido atÃ© a realidade.",
    email: "Iniciar uma conversa",
    github: "Perfil no GitHub",
    footer: "ConstruÃ­do como um sistema vivo de evidÃªncias. Ãšltima auditoria: setembro de 2026.",
  },
} as const;

const capabilityDomains = [
  {
    code: "01",
    title: { en: "Data engineering, ETL, and machine learning", pt: "Engenharia de dados, ETL e machine learning" },
    body: { en: "Production and research pipelines, data-quality control, predictive models, pricing, temporal validation, and reproducible analytics.", pt: "Pipelines de produÃ§Ã£o e pesquisa, controle de qualidade, modelos preditivos, precificaÃ§Ã£o, validaÃ§Ã£o temporal e analytics reproduzÃ­veis." },
    projects: ["signinglab", "enose", "retail-intelligence", "legacy-systems"],
  },
  {
    code: "02",
    title: { en: "RAG, vectorization, and grounded retrieval", pt: "RAG, vetorizaÃ§Ã£o e recuperaÃ§Ã£o contextualizada" },
    body: { en: "Implemented in SigningLab's proprietary AI model; semantic retrieval is also present in Inflick. Controlled RAG cases for migration and operating knowledge are explicitly planned, not claimed as complete.", pt: "Implementado no modelo proprietÃ¡rio de IA da SigningLab; recuperaÃ§Ã£o semÃ¢ntica tambÃ©m estÃ¡ presente na Inflick. Cases controlados de RAG para migraÃ§Ã£o e conhecimento operacional estÃ£o explicitamente planejados, nÃ£o apresentados como concluÃ­dos." },
    projects: ["signinglab", "inflick", "lea-command-center", "control-biz"],
  },
  {
    code: "03",
    title: { en: "Multi-agent systems and orchestration", pt: "Sistemas multiagente e orquestraÃ§Ã£o" },
    body: { en: "Specialist roles, parallel rounds, structured handoffs, mission engines, tool routing, bounded autonomy, and human decision gates.", pt: "PapÃ©is especialistas, rodadas paralelas, passagens estruturadas, motores de missÃ£o, roteamento de ferramentas, autonomia delimitada e decisÃµes humanas." },
    projects: ["control-biz", "last-myth", "lea-command-center", "ai-parts"],
  },
  {
    code: "04",
    title: { en: "Agent audit, governance, and cost control", pt: "Auditoria de agentes, governanÃ§a e controle de custos" },
    body: { en: "Traceable actions, isolated context, approval and revision states, audit logs, model routing, token controls, and responsible evidence boundaries.", pt: "AÃ§Ãµes rastreÃ¡veis, contexto isolado, estados de aprovaÃ§Ã£o e revisÃ£o, logs de auditoria, roteamento de modelos, controles de tokens e limites responsÃ¡veis de evidÃªncia." },
    projects: ["control-biz", "last-myth", "ai-parts", "signinglab"],
  },
  {
    code: "05",
    title: { en: "Process automation and operating-cost reduction", pt: "AutomaÃ§Ã£o e reduÃ§Ã£o de custos operacionais" },
    body: { en: "Systems that coordinate scarce capacity, remove repetitive work, prioritize decisions, and connect automation to measurable operating outcomes.", pt: "Sistemas que coordenam capacidade escassa, eliminam trabalho repetitivo, priorizam decisÃµes e conectam automaÃ§Ã£o a resultados operacionais mensurÃ¡veis." },
    projects: ["legacy-systems", "control-biz", "last-myth", "minha-secretaria"],
  },
  {
    code: "06",
    title: { en: "Analytics and data visualization", pt: "Analytics e visualizaÃ§Ã£o de dados" },
    body: { en: "Executive dashboards, operational drilldowns, model evidence, geographic intelligence, risk views, and decision-oriented reporting.", pt: "Dashboards executivos, detalhamento operacional, evidÃªncia de modelos, inteligÃªncia geogrÃ¡fica, visÃµes de risco e relatÃ³rios orientados Ã  decisÃ£o." },
    projects: ["retail-intelligence", "signinglab", "enose", "ai-parts", "legacy-systems"],
  },
  {
    code: "07",
    title: { en: "Computer vision and realtime AI", pt: "VisÃ£o computacional e IA em tempo real" },
    body: { en: "Local facial mapping, GPU image processing, character motion, sports-vision signals, realtime audio, and streaming interaction.", pt: "Mapeamento facial local, tratamento de imagem em GPU, movimento de personagem, sinais visuais esportivos, Ã¡udio em tempo real e interaÃ§Ã£o por streaming." },
    projects: ["effigia", "signinglab", "intvox"],
  },
] as const;

type Filter = "all" | "flagship" | "selected" | "archive";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function ProjectDetail({ project, lang, onClose }: { project: Project; lang: Language; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="case-shell" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <button className="case-backdrop" onClick={onClose} aria-label={ui[lang].close} />
      <article className="case-panel">
        <button className="case-close" onClick={onClose}>{ui[lang].close} <span aria-hidden="true">Ã—</span></button>
        <div className="case-grid">
          <header className="case-header">
            <div className="project-meta"><span>{project.year}</span><span>{project.category[lang]}</span></div>
            <h2 id="case-title">{project.title}</h2>
            <p className="case-summary">{project.summary[lang]}</p>
            <div className="case-status">
              <span className={`status-dot ${project.status}`} />
              <span>{ui[lang].stage}: {project.stage[lang]}</span>
              <span>Â·</span>
              <span>{statusCopy[project.status][lang]}</span>
            </div>
          </header>
          <section className="case-column case-narrative">
            <p className="section-label">{ui[lang].problem}</p>
            <p>{project.problem[lang]}</p>
          </section>
          <section className="case-column case-narrative case-right">
            <p className="section-label">{ui[lang].operation}</p>
            <p>{project.operation[lang]}</p>
          </section>
          <section className="case-column">
            <p className="section-label">{ui[lang].role}</p>
            <p>{project.contribution[lang]}</p>
          </section>
          <section className="case-column case-right">
            <p className="section-label">{ui[lang].decisions}</p>
            <ol className="numbered-list">{project.decisions.map((item, index) => <li key={item.en}><b>{String(index + 1).padStart(2, "0")}</b><span>{item[lang]}</span></li>)}</ol>
          </section>
          <section className="case-column">
            <p className="section-label">{ui[lang].proof}</p>
            <ol className="numbered-list">{project.proof.map((item, index) => <li key={item.en}><b>{String(index + 1).padStart(2, "0")}</b><span>{item[lang]}</span></li>)}</ol>
          </section>
          <section className="case-column case-right">
            <p className="section-label">{ui[lang].learnings}</p>
            <ol className="numbered-list">{project.learnings.map((item, index) => <li key={item.en}><b>{String(index + 1).padStart(2, "0")}</b><span>{item[lang]}</span></li>)}</ol>
          </section>
          <section className="case-column case-wide case-tech-block">
            <p className="section-label">{ui[lang].capabilities}</p>
            <div className="capability-row">{project.capabilities.map((capability) => <div className={`capability-chip ${capability.status}`} key={capability.name.en}><span>{capability.name[lang]}</span><small>{ui[lang].capabilityStatus[capability.status]}</small></div>)}</div>
          </section>
          <section className="case-column case-wide case-tech-block technology-block">
            <p className="section-label">{ui[lang].technologies}</p>
            <div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </section>
          <section className="case-column case-boundary">
            <p className="section-label">{ui[lang].boundary}</p>
            <p>{project.publicBoundary[lang]}</p>
          </section>
          <section className="case-column case-visual-plan case-right">
            <p className="section-label">{ui[lang].visualPlan}</p>
            <p>{project.visualPlan[lang]}</p>
          </section>
          <section className="case-column case-wide">
            <p className="section-label">{ui[lang].next}</p>
            <ol className="numbered-list">{project.next.map((item, index) => <li key={item.en}><b>{String(index + 1).padStart(2, "0")}</b><span>{item[lang]}</span></li>)}</ol>
          </section>
          {project.links && <nav className="case-links" aria-label={`${project.title} links`}>{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label[lang]} <ArrowIcon /></a>)}</nav>}
        </div>
      </article>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const copy = ui[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const readHash = () => {
      const id = window.location.hash.match(/^#project\/(.+)$/)?.[1];
      setSelected(id ? projects.find((project) => project.id === id) ?? null : null);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const visibleProjects = useMemo(() => {
    if (filter === "all") return projects;
    if (filter === "archive") return projects.filter((project) => project.priority === "archive" || project.priority === "documentation");
    return projects.filter((project) => project.priority === filter);
  }, [filter]);

  const openProject = (project: Project) => { window.location.hash = `project/${project.id}`; };
  const openProjectById = (projectId: string) => {
    const project = projects.find((item) => item.id === projectId);
    if (project) openProject(project);
  };
  const closeProject = () => { history.pushState(null, "", window.location.pathname + window.location.search); setSelected(null); };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Alessandro Almeida home"><span>AA</span><b>Alessandro Almeida</b></a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#work">{copy.nav[0]}</a><a href="#evidence">{copy.nav[1]}</a><a href="#trajectory">{copy.nav[2]}</a><a href="#contact">{copy.nav[3]}</a>
        </nav>
        <div className="lang-switch" aria-label="Language">
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
          <button className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")} aria-pressed={lang === "pt"}>PT</button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-main">
            <p className="eyebrow">{copy.heroKicker}</p>
            <h1>{copy.heroTitle}</h1>
            <p className="hero-copy">{copy.heroBody}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">{copy.explore} <ArrowIcon /></a>
              <a className="button quiet" href="./Alessandro_Almeida_AI_Product_Transformation_Resume.pdf" download>{copy.resume}</a>
            </div>
          </div>
          <aside className="hero-evidence" aria-label={copy.verified}>
            <p className="section-label">{copy.verified}</p>
            <div className="evidence-number"><strong>20+</strong><span>{copy.mapped}</span></div>
            <div className="evidence-number"><strong>{projects.length}</strong><span>{copy.flagships}</span></div>
            <div className="hero-location">{copy.based}</div>
          </aside>
        </section>

        <section className="leadership-spine" aria-labelledby="leadership-title">
          <header>
            <p className="eyebrow">{copy.leadershipKicker}</p>
            <h2 id="leadership-title">{copy.leadershipTitle}</h2>
            <p>{copy.leadershipBody}</p>
          </header>
          <div className="leadership-sequence">
            {copy.leadershipPillars.map(([number, title, body]) => (
              <article key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flagship" id="evidence">
          <div className="flagship-copy">
            <p className="eyebrow">02 / {copy.flagship}</p>
            <h2>{copy.signingTitle}</h2>
            <p>{copy.signingBody}</p>
            <div className="metric-strip">
              <div><strong>21</strong><span>{copy.leagues}</span></div>
              <div><strong>8,559</strong><span>{copy.publishedCases}</span></div>
              <div><strong>1.85Ã—</strong><span>{copy.lift}</span></div>
            </div>
            <button className="text-action" onClick={() => openProject(projects[0])}>{copy.view} <ArrowIcon /></button>
          </div>
          <figure className="flagship-media">
            <img src="./projects/signinglab-proof.png" alt={projects[0].imageAlt?.[lang]} />
            <figcaption><span>SL / EVIDENCE 01</span><span>{copy.publicArtifact}</span></figcaption>
          </figure>
        </section>

        <section className="capability-map" id="capabilities" aria-labelledby="capability-title">
          <header className="capability-intro">
            <p className="eyebrow">{copy.capabilityKicker}</p>
            <h2 id="capability-title">{copy.capabilityTitle}</h2>
            <p>{copy.capabilityBody}</p>
          </header>
          <div className="capability-ledger">
            {capabilityDomains.map((domain) => (
              <article className="capability-domain" key={domain.code}>
                <b>{domain.code}</b>
                <div>
                  <h3>{domain.title[lang]}</h3>
                  <p>{domain.body[lang]}</p>
                </div>
                <nav aria-label={`${domain.title[lang]} cases`}>
                  {domain.projects.map((projectId) => {
                    const project = projects.find((item) => item.id === projectId);
                    return project ? <button key={projectId} onClick={() => openProject(project)}>{project.title}<ArrowIcon /></button> : null;
                  })}
                </nav>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <header className="section-intro">
            <p className="eyebrow">{copy.portfolioKicker}</p>
            <h2>{copy.projectsTitle}</h2>
            <p>{copy.projectsBody}</p>
          </header>
          <div className="filter-bar" role="group" aria-label="Project filter">
            {([
              ["all", copy.all], ["flagship", copy.core], ["selected", copy.supporting], ["archive", copy.archive],
            ] as [Filter, string][]).map(([value, label]) => <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)} aria-pressed={filter === value}>{label}</button>)}
          </div>
          <div className="project-ledger">
            {visibleProjects.map((project, index) => (
              <article className="project-row" key={project.id}>
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-name">
                  <div className="project-meta"><span>{project.year}</span><span>{project.category[lang]}</span></div>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-summary">{project.summary[lang]}</p>
                <div className="project-proof-state"><span className={`status-dot ${project.status}`} /><span>{copy.stage}</span><b>{project.stage[lang]}</b></div>
                <button className="row-action" onClick={() => openProject(project)} aria-label={`${copy.view}: ${project.title}`}><ArrowIcon /></button>
              </article>
            ))}
          </div>
        </section>

        <CareerTimeline lang={lang} onOpenProject={openProjectById} />

        <section className="methods">
          <div className="methods-mark" aria-hidden="true"><span>V</span><span>E</span><span>R</span><span>I</span><span>F</span><span>Y</span></div>
          <div className="methods-copy">
            <p className="eyebrow">{copy.disclosureKicker}</p>
            <h2>{copy.methodsTitle}</h2>
            <p>{copy.methodsBody}</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">{copy.contactKicker}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactBody}</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:alessandrolsa@gmail.com">{copy.email} <ArrowIcon /></a>
            <a className="button quiet" href="https://github.com/alessandrosicaalmeida" target="_blank" rel="noreferrer">{copy.github}</a>
          </div>
        </section>
      </main>

      <footer><span>Â© 2026 Alessandro Luiz Sica De Almeida</span><span>{copy.footer}</span></footer>
      {selected && <ProjectDetail project={selected} lang={lang} onClose={closeProject} />}
    </>
  );
}
