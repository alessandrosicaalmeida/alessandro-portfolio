import { careerBands, careerTracks, type CareerProof } from "../data/careerDepth";
import type { Language } from "../data/projects";

const copy = {
  en: {
    kicker: "THE PARALLEL TRACKS",
    title: "Teaching, research, consulting, ventures, and international operations.",
    body: "Leadership, teaching, research, consulting, ventures, international delivery, transactions, and continuous learning evolved together.",
    hint: "Scroll the complete career canvas",
    statuses: {
      verified: "Documented",
      public: "Public verification",
      pending: "Evidence in preparation",
      sanitized: "Sanitized summary",
    } satisfies Record<CareerProof, string>,
    verify: "Verify credential",
  },
  pt: {
    kicker: "AS TRILHAS PARALELAS",
    title: "Ensino, pesquisa, consultoria, novos negócios e operações internacionais.",
    body: "Liderança, docência, pesquisa, consultoria, ventures, atuação internacional, transações e formação contínua evoluíram em conjunto.",
    hint: "Deslize para percorrer o mapa completo",
    statuses: {
      verified: "Documentado",
      public: "Verificação pública",
      pending: "Evidência em preparação",
      sanitized: "Resumo sanitizado",
    } satisfies Record<CareerProof, string>,
    verify: "Verificar credencial",
  },
} as const;

export function CareerDepthMap({ lang }: { lang: Language }) {
  const labels = copy[lang];

  return (
    <section className="career-depth" aria-labelledby="career-depth-title">
      <header className="career-depth-intro">
        <p className="eyebrow">{labels.kicker}</p>
        <h3 id="career-depth-title">{labels.title}</h3>
        <p>{labels.body}</p>
        <span className="career-depth-hint">{labels.hint} <i aria-hidden="true">→</i></span>
      </header>

      <div className="career-depth-scroll" tabIndex={0} aria-label={labels.hint}>
        <div className="career-depth-canvas">
          <div className="career-depth-years" aria-hidden="true">
            <span />
            <ol>{careerBands.map((band) => <li key={band}>{band}</li>)}</ol>
          </div>

          <div className="career-track-list">
            {careerTracks.map((track, trackIndex) => (
              <article className={`career-track track-${track.id}`} key={track.id}>
                <header>
                  <span>{String(trackIndex + 1).padStart(2, "0")}</span>
                  <h4>{track.label[lang]}</h4>
                  <p>{track.thesis[lang]}</p>
                </header>
                <div className="career-track-path">
                  {track.events.map((event) => (
                    <div
                      className={`career-track-event proof-${event.proof}`}
                      key={`${event.title.en}-${event.period.en}`}
                      style={{ gridColumn: `${event.column} / span ${event.span ?? 1}` }}
                    >
                      <div className="career-track-marker"><i /><span>{event.period[lang]}</span></div>
                      <strong>{event.title[lang]}</strong>
                      <p>{event.detail[lang]}</p>
                      <small>{labels.statuses[event.proof]}</small>
                      {event.href ? <a href={event.href} target="_blank" rel="noreferrer">{labels.verify} <i aria-hidden="true">↗</i></a> : null}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
