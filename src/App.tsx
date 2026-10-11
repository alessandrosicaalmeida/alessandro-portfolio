import { useEffect, useMemo, useState } from "react";
import { CareerTimeline } from "./components/CareerTimeline";
import { projects, statusCopy, type Language, type Project } from "./data/projects";

const ui = {
  en: {
    nav: ["Work", "Evidence", "Trajectory", "Contact"],
    heroKicker: "INVENTION · TRANSFORMATION · AI",
    heroTitle: "Creativity and vision, using AI to solve complex problems with agility and control.",
    heroBody: "For more than 20 years, I have found the pattern others missed, shaped original solutions, and led people, products, data, and technology to make them real.",
    explore: "Explore selected work",
    resume: "Download résumé",
    verified: "A career built around difficult problems",
    mapped: "years creating systems across operations, product, data, and AI",
    flagships: "solutions mapped across enterprise transformation and new ventures",
    based: "Tampa Bay · United States",
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
    nav: ["Projetos", "Evidências", "Trajetória", "Contato"],
    heroKicker: "INVENÇÃO · TRANSFORMAÇÃO · IA",
    heroTitle: "Criatividade e visão utilizando IA na solução ágil e segura para problemas complexos.",
    heroBody: "Há mais de 20 anos, encontro o padrão que outros não perceberam, desenho soluções originais e lidero pessoas, produtos, dados e tecnologia para torná-las realidade.",
    explore: "Explorar projetos selecionados",
    resume: "Baixar currículo",
    verified: "Uma carreira construída em torno de problemas difíceis",
    mapped: "anos criando sistemas em operações, produto, dados e IA",
    flagships: "soluções mapeadas entre transformação empresarial e novos negócios",
    based: "Tampa Bay · Estados Unidos",
    flagship: "Projeto principal",
    signingTitle: "SigningLab: inteligência preditiva para decisões de contratação no futebol.",
    signingBody: "Criei a SigningLab para tornar decisões de contratação no futebol mais transparentes. O site público e o app publicado para iOS levam aos usuários inteligência por liga, rankings e previsões registradas antes dos resultados.",
    leagues: "ligas",
    publishedCases: "casos publicados",
    lift: "ganho em sucesso estrito",
    publicArtifact: "Artefato público de metodologia",
    leadershipTitle: "Abordagem de liderança: da definição do problema à implementação.",
    leadershipBody: "Atuo onde o problema é ambíguo, o modelo existente parou de funcionar e avançar exige invenção e execução.",
    leadershipKicker: "01 / PADRÃO DE LIDERANÇA",
    leadershipPillars: [
      ["01", "Reformular o problema", "Encontrar a restrição estrutural por trás do sintoma visível e transformar ambiguidade em uma direção acionável."],
      ["02", "Inventar o sistema", "Combinar desenho de negócio, dados, IA, produto e visão operacional em uma solução que antes não existia."],
      ["03", "Mobilizar a realidade", "Alinhar equipes, parceiros, governança e execução em torno de resultados, aprendendo com evidências e adaptando a rota."],
    ],
    projectsTitle: "Soluções criadas em negócios, dados e IA.",
    projectsBody: "Cada caso mostra um problema real, o sistema criado para enfrentá-lo, a liderança de Alessandro e as evidências disponíveis hoje.",
    capabilityKicker: "03 / CAPACIDADE TÉCNICA",
    capabilityTitle: "Capacidades de arquitetura e IA comprovadas por sistemas reais.",
    capabilityBody: "O portfólio é organizado por resultados de negócio, enquanto este mapa torna explícita a profundidade técnica. Itens planejados são identificados e nunca apresentados como evidência concluída.",
    portfolioKicker: "04 / PORTFÓLIO DE SOLUÇÕES",
    disclosureKicker: "05 / RESPONSABILIDADE",
    contactKicker: "06 / CONTATO",
    all: "Todos",
    core: "Destaques",
    supporting: "Complementares",
    archive: "Arquivo e evidências",
    view: "Inspecionar caso",
    proof: "O que está comprovado",
    role: "Liderança e responsabilidade",
    problem: "Problema e contexto",
    operation: "Como o sistema funciona",
    decisions: "Decisões principais",
    capabilities: "Capacidades demonstradas",
    technologies: "Tecnologias",
    learnings: "Aprendizados",
    boundary: "Limite da demonstração pública",
    visualPlan: "Como o projeto será demonstrado",
    next: "Próximos passos",
    capabilityStatus: { implemented: "Implementado", prototype: "Protótipo", planned: "Planejado" },
    stage: "Estágio da solução",
    close: "Fechar caso",
    methodsTitle: "Evidências, escopo e maturidade atual.",
    methodsBody: "Cada case deixa claro o problema, minha liderança, o que existe hoje e o que pode ser verificado de forma independente. Produtos ativos, protótipos, pesquisas e sistemas empresariais são apresentados exatamente pelo que são.",
    contactTitle: "Liderança executiva em IA, produto e transformação.",
    contactBody: "Estou avaliando posições executivas e de liderança sênior nas quais o desafio é relevante, o caminho não é óbvio e um novo sistema precisa ser inventado e conduzido até a realidade.",
    email: "Iniciar uma conversa",
    github: "Perfil no GitHub",
    footer: "Construído como um sistema vivo de evidências. Última auditoria: setembro de 2026.",
  },
} as const;

const capabilityDomains = [
  {
    code: "01",
    title: { en: "Data engineering, ETL, and machine learning", pt: "Engenharia de dados, ETL e machine learning" },
    body: { en: "Production and research pipelines, data-quality control, predictive models, pricing, temporal validation, and reproducible analytics.", pt: "Pipelines de produção e pesquisa, controle de qualidade, modelos preditivos, precificação, validação temporal e analytics reproduzíveis." },
    projects: ["signinglab", "enose", "retail-intelligence", "legacy-systems"],
  },
  {
    code: "02",
    title: { en: "RAG, vectorization, and grounded retrieval", pt: "RAG, vetorização e recuperação contextualizada" },
    body: { en: "Implemented in SigningLab's proprietary AI model; semantic retrieval is also present in Inflick. Controlled RAG cases for migration and operating knowledge are explicitly planned, not claimed as complete.", pt: "Implementado no modelo proprietário de IA da SigningLab; recuperação semântica também está presente na Inflick. Cases controlados de RAG para migração e conhecimento operacional estão explicitamente planejados, não apresentados como concluídos." },
    projects: ["signinglab", "inflick", "lea-command-center", "control-biz"],
  },
  {
    code: "03",
    title: { en: "Multi-agent systems and orchestration", pt: "Sistemas multiagente e orquestração" },
    body: { en: "Specialist roles, parallel rounds, structured handoffs, mission engines, tool routing, bounded autonomy, and human decision gates.", pt: "Papéis especialistas, rodadas paralelas, passagens estruturadas, motores de missão, roteamento de ferramentas, autonomia delimitada e decisões humanas." },
    projects: ["control-biz", "last-myth", "lea-command-center", "ai-parts"],
  },
  {
    code: "04",
    title: { en: "Agent audit, governance, and cost control", pt: "Auditoria de agentes, governança e controle de custos" },
    body: { en: "Traceable actions, isolated context, approval and revision states, audit logs, model routing, token controls, and responsible evidence boundaries.", pt: "Ações rastreáveis, contexto isolado, estados de aprovação e revisão, logs de auditoria, roteamento de modelos, controles de tokens e limites responsáveis de evidência." },
    projects: ["control-biz", "last-myth", "ai-parts", "signinglab"],
  },
  {
    code: "05",
    title: { en: "Process automation and operating-cost reduction", pt: "Automação e redução de custos operacionais" },
    body: { en: "Systems that coordinate scarce capacity, remove repetitive work, prioritize decisions, and connect automation to measurable operating outcomes.", pt: "Sistemas que coordenam capacidade escassa, eliminam trabalho repetitivo, priorizam decisões e conectam automação a resultados operacionais mensuráveis." },
    projects: ["legacy-systems", "control-biz", "last-myth", "minha-secretaria"],
  },
  {
    code: "06",
    title: { en: "Analytics and data visualization", pt: "Analytics e visualização de dados" },
    body: { en: "Executive dashboards, operational drilldowns, model evidence, geographic intelligence, risk views, and decision-oriented reporting.", pt: "Dashboards executivos, detalhamento operacional, evidência de modelos, inteligência geográfica, visões de risco e relatórios orientados à decisão." },
    projects: ["retail-intelligence", "signinglab", "enose", "ai-parts", "legacy-systems"],
  },
  {
    code: "07",
    title: { en: "Computer vision and realtime AI", pt: "Visão computacional e IA em tempo real" },
    body: { en: "Local facial mapping, GPU image processing, character motion, sports-vision signals, realtime audio, and streaming interaction.", pt: "Mapeamento facial local, tratamento de imagem em GPU, movimento de personagem, sinais visuais esportivos, áudio em tempo real e interação por streaming." },
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
        <button className="case-close" onClick={onClose}>{ui[lang].close} <span aria-hidden="true">×</span></button>
        <div className="case-grid">
          <header className="case-header">
            <div className="project-meta"><span>{project.year}</span><span>{project.category[lang]}</span></div>
            <h2 id="case-title">{project.title}</h2>
            <p className="case-summary">{project.summary[lang]}</p>
            <div className="case-status">
              <span className={`status-dot ${project.status}`} />
              <span>{ui[lang].stage}: {project.stage[lang]}</span>
              <span>·</span>
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
              <div><strong>1.85×</strong><span>{copy.lift}</span></div>
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

      <footer><span>© 2026 Alessandro Luiz Sica De Almeida</span><span>{copy.footer}</span></footer>
      {selected && <ProjectDetail project={selected} lang={lang} onClose={closeProject} />}
    </>
  );
}
