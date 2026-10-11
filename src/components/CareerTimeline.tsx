import { useState } from "react";
import { careerStages } from "../data/career";
import { projects, statusCopy, type Language } from "../data/projects";
import { CareerDepthMap } from "./CareerDepthMap";

const labels = {
  en: {
    kicker: "04 / CAREER, BUILT IN CHAPTERS",
    title: "Transformation trajectory.",
    body: "Follow the problems that changed, the systems created, the scale reached, and the evidence available at each stage.",
    shift: "The shift",
    delivered: "What moved into reality",
    evidence: "Evidence at this stage",
    related: "Related systems",
    open: "Open case",
  },
  pt: {
    kicker: "04 / CARREIRA, CONSTRUÍDA EM CAPÍTULOS",
    title: "Trajetória de transformação.",
    body: "Acompanhe os problemas que mudaram, os sistemas criados, a escala alcançada e as evidências disponíveis em cada etapa.",
    shift: "A mudança",
    delivered: "O que se tornou realidade",
    evidence: "Evidências desta etapa",
    related: "Sistemas relacionados",
    open: "Abrir case",
  },
} as const;

export function CareerTimeline({ lang, onOpenProject }: { lang: Language; onOpenProject: (projectId: string) => void }) {
  const [activeId, setActiveId] = useState(careerStages[0].id);
  const active = careerStages.find((stage) => stage.id === activeId) ?? careerStages[0];
  const copy = labels[lang];

  return (
    <section className="career-map" id="trajectory" aria-labelledby="career-map-title">
      <header className="career-map-intro">
        <p className="eyebrow">{copy.kicker}</p>
        <h2 id="career-map-title">{copy.title}</h2>
        <p>{copy.body}</p>
      </header>

      <div className="career-rail" role="tablist" aria-label={copy.title}>
        {careerStages.map((stage, index) => (
          <button
            key={stage.id}
            role="tab"
            aria-selected={stage.id === active.id}
            aria-controls="career-stage-panel"
            className={stage.id === active.id ? "active" : ""}
            onClick={() => setActiveId(stage.id)}
          >
            <span className="rail-node"><i />{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage.period}</strong>
            <small>{stage.chapter[lang]}</small>
          </button>
        ))}
      </div>

      <article className="career-stage" id="career-stage-panel" role="tabpanel" key={active.id}>
        <div className="career-stage-identity">
          <span className="career-period">{active.period}</span>
          <h3>{active.chapter[lang]}</h3>
          <p>{active.context[lang]}</p>
          <div className="career-metrics">
            {active.metrics.map((metric) => (
              <div key={metric.label.en}><strong>{metric.value}</strong><span>{metric.label[lang]}</span></div>
            ))}
          </div>
        </div>

        <div className="career-stage-story">
          <p className="section-label">{copy.shift}</p>
          <p className="career-thesis">{active.thesis[lang]}</p>
          <p className="section-label delivery-label">{copy.delivered}</p>
          <ol>
            {active.deliveries.map((delivery, index) => (
              <li key={delivery.en}><b>{String(index + 1).padStart(2, "0")}</b><span>{delivery[lang]}</span></li>
            ))}
          </ol>
        </div>

        <aside className="career-stage-evidence">
          <p className="section-label">{copy.evidence}</p>
          <div className="career-evidence-state">
            <span className={`status-dot ${active.evidenceStatus}`} />
            <strong>{statusCopy[active.evidenceStatus][lang]}</strong>
          </div>
          <p>{active.evidence[lang]}</p>
          <div className="career-related">
            <span>{copy.related}</span>
            {active.projectIds.map((projectId) => {
              const project = projects.find((item) => item.id === projectId);
              return project ? <button key={projectId} onClick={() => onOpenProject(projectId)}>{project.title}<i>{copy.open}</i></button> : null;
            })}
          </div>
        </aside>
      </article>

      <CareerDepthMap lang={lang} />
    </section>
  );
}
