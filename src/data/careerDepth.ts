import type { Localized } from "./projects";

export type CareerProof = "verified" | "public" | "pending" | "sanitized";

export type CareerTrackEvent = {
  period: Localized;
  title: Localized;
  detail: Localized;
  proof: CareerProof;
  column: number;
  span?: number;
  href?: string;
};

export type CareerTrack = {
  id: string;
  label: Localized;
  thesis: Localized;
  events: CareerTrackEvent[];
};

export const careerBands = ["2003–2008", "2009–2012", "2013–2018", "2019–2024", "2025–now"];

export const careerTracks: CareerTrack[] = [
  {
    id: "teach-publish",
    label: { en: "Teach & publish", pt: "Ensinar e publicar" },
    thesis: {
      en: "Turn practice into knowledge that other people can use.",
      pt: "Transformar prática em conhecimento que outras pessoas podem usar.",
    },
    events: [
      {
        period: { en: "2008", pt: "2008" },
        title: { en: "1st place, UFRGS public selection", pt: "1º lugar em seleção pública da UFRGS" },
        detail: {
          en: "Recognition in the public selection for Marketing Instructor. It is presented as an honor, not as employment.",
          pt: "Reconhecimento na seleção pública para Professor de Marketing. É apresentado como conquista, não como vínculo profissional.",
        },
        proof: "verified",
        column: 1,
      },
      {
        period: { en: "2009–2012", pt: "2009–2012" },
        title: { en: "Professor, researcher, and published author", pt: "Professor, pesquisador e autor publicado" },
        detail: {
          en: "Adjunct Professor at PUCRS, teaching undergraduate and graduate courses and serving in advising and thesis committees. Academic record includes the 2009 EMAC presentation in Nantes; co-authorship of “Marketing Metrics: Insights from Brazilian Managers,” Industrial Marketing Management (2011); and the 2012 EDIPUCRS book chapter “Public Relations and Marketing in Business Planning.”",
          pt: "Professor adjunto na PUCRS, com disciplinas de graduação e pós-graduação, orientação e bancas. A produção acadêmica inclui apresentação no EMAC em Nantes em 2009; coautoria de “Marketing Metrics: Insights from Brazilian Managers”, na Industrial Marketing Management (2011); e o capítulo “Relações Públicas e Marketing no Planejamento Empresarial”, publicado pela EDIPUCRS em 2012.",
        },
        proof: "verified",
        column: 2,
        span: 2,
      },
      {
        period: { en: "2025–present", pt: "2025–presente" },
        title: { en: "Applied AI research leadership", pt: "Liderança em pesquisa aplicada de IA" },
        detail: {
          en: "Invited by USF faculty to supervise the continuation of the eNose work and serve as lead author on the planned manuscript. The manuscript remains in preparation.",
          pt: "Convidado por professores da USF a supervisionar a continuidade do eNose e liderar a autoria do artigo planejado. O manuscrito permanece em preparação.",
        },
        proof: "pending",
        column: 5,
      },
    ],
  },
  {
    id: "global-deals",
    label: { en: "Global & transactions", pt: "Internacional e transações" },
    thesis: {
      en: "Lead systems, people, and deals across borders.",
      pt: "Liderar sistemas, pessoas e transações entre países.",
    },
    events: [
      {
        period: { en: "During Zanc executive tenure", pt: "Durante a direção executiva na Zanc" },
        title: { en: "Portugal Telecom operation", pt: "Operação Portugal Telecom" },
        detail: {
          en: "Spent about six months in Portugal leading a Brazil-to-Portugal sales operation, including VoIP, redundant data centers, Siebel integration, databases, processes, and nationwide training.",
          pt: "Permaneceu cerca de seis meses em Portugal liderando uma operação Brasil–Portugal, incluindo VoIP, data centers redundantes, integração Siebel, bancos de dados, processos e treinamento nacional.",
        },
        proof: "sanitized",
        column: 2,
        span: 3,
      },
      {
        period: { en: "During Zanc executive tenure", pt: "Durante a direção executiva na Zanc" },
        title: { en: "C&A / Banco Ibi launch in Argentina", pt: "Lançamento C&A / Banco Ibi na Argentina" },
        detail: {
          en: "Helped launch the operating model in Argentina as part of Zanc's cross-border transformation portfolio.",
          pt: "Participou do lançamento do modelo operacional na Argentina como parte do portfólio de transformação internacional da Zanc.",
        },
        proof: "sanitized",
        column: 2,
        span: 3,
      },
      {
        period: { en: "During Zanc executive tenure", pt: "Durante a direção executiva na Zanc" },
        title: { en: "Abramo acquisition and integration, Italy", pt: "Aquisição e integração da Abramo, Itália" },
        detail: {
          en: "Led valuation, due diligence, MOU, negotiations, transaction documentation, and post-acquisition migration and integration for the Italian contact-center acquisition.",
          pt: "Liderou valuation, due diligence, MOU, negociações, documentação da transação e migração e integração pós-aquisição da empresa italiana de contact center.",
        },
        proof: "sanitized",
        column: 2,
        span: 3,
      },
    ],
  },
  {
    id: "consult-build",
    label: { en: "Consult & build", pt: "Consultar e construir" },
    thesis: {
      en: "Move between advisory work, operating leadership, and venture creation.",
      pt: "Transitar entre aconselhamento, liderança operacional e criação de empresas.",
    },
    events: [
      {
        period: { en: "2004–2013", pt: "2004–2013" },
        title: { en: "Elite Consultoria, founder and consultant", pt: "Elite Consultoria, fundador e consultor" },
        detail: {
          en: "Management, marketing, research, training, Balanced Scorecard, and administrative and financial advisory work, in parallel with part of the Zanc trajectory.",
          pt: "Consultoria em gestão, marketing, pesquisas, treinamento, Balanced Scorecard e apoio administrativo e financeiro, em paralelo a parte da trajetória na Zanc.",
        },
        proof: "verified",
        column: 1,
        span: 2,
      },
      {
        period: { en: "Parallel advisory work", pt: "Atuação consultiva paralela" },
        title: { en: "Boa Vista and Brazilian Chambers of Commerce", pt: "Boa Vista e Câmaras de Dirigentes Lojistas" },
        detail: {
          en: "Independent consulting and instruction on collections strategy, customer approach, and business performance.",
          pt: "Consultoria e treinamento independentes em estratégia de cobrança, abordagem de clientes e desempenho empresarial.",
        },
        proof: "verified",
        column: 2,
        span: 2,
      },
      {
        period: { en: "2019–2022", pt: "2019–2022" },
        title: { en: "Upper DataSoftware, Founding CEO", pt: "Upper DataSoftware, CEO fundador" },
        detail: {
          en: "Built a venture around automation, data intelligence, customer-engagement platforms, and AI/ML-enabled solutions.",
          pt: "Construiu uma venture de automação, inteligência de dados, plataformas de relacionamento com clientes e soluções habilitadas por IA/ML.",
        },
        proof: "verified",
        column: 4,
      },
      {
        period: { en: "2021–2025", pt: "2021–2025" },
        title: { en: "League Consultoria and AL Master", pt: "League Consultoria e AL Master" },
        detail: {
          en: "Connected executive consulting, analytics, valuation, pricing, transaction design, securitization support, and the operating launch of a new portfolio-management business.",
          pt: "Conectou consultoria executiva, analytics, valuation, precificação, desenho transacional, apoio à securitização e lançamento operacional de um novo negócio de gestão de portfólios.",
        },
        proof: "verified",
        column: 4,
        span: 2,
      },
    ],
  },
  {
    id: "learn-credential",
    label: { en: "Learn & credential", pt: "Formação e credenciais" },
    thesis: {
      en: "Keep formal learning close to the next operating frontier.",
      pt: "Manter a formação formal próxima da próxima fronteira de atuação.",
    },
    events: [
      {
        period: { en: "2004–2007", pt: "2004–2007" },
        title: { en: "Three complementary degrees", pt: "Três formações complementares" },
        detail: {
          en: "B.A. in Advertising & Public Relations, B.B.A. in Marketing, and M.S. in Business Strategy & Marketing.",
          pt: "Bacharelado em Publicidade e Relações Públicas, Administração com ênfase em Marketing e mestrado em Estratégia Empresarial e Marketing.",
        },
        proof: "verified",
        column: 1,
      },
      {
        period: { en: "July 2006", pt: "Julho de 2006" },
        title: { en: "PMP Exam Preparation Course", pt: "Curso preparatório para o exame PMP" },
        detail: {
          en: "Completed at Sisnema Informática in Porto Alegre. This is a course, not a PMP or PMI certification.",
          pt: "Concluído na Sisnema Informática, em Porto Alegre. Trata-se de curso, não de certificação PMP ou PMI.",
        },
        proof: "verified",
        column: 1,
      },
      {
        period: { en: "Evidence intake", pt: "Coleta de evidência" },
        title: { en: "800+ hours of Python training", pt: "Mais de 800 horas de formação em Python" },
        detail: {
          en: "The training volume is career-documented; provider, dates, and certificate still need to be attached before this becomes a public credential claim.",
          pt: "A carga de formação está registrada no histórico; instituição, datas e certificado ainda precisam ser anexados antes de se tornar uma credencial pública.",
        },
        proof: "pending",
        column: 4,
      },
      {
        period: { en: "2025–2027", pt: "2025–2027" },
        title: { en: "SnowPro Associate: Platform", pt: "SnowPro Associate: Platform" },
        detail: {
          en: "Snowflake certification issued October 24, 2025 and valid through October 24, 2027.",
          pt: "Certificação Snowflake emitida em 24 de outubro de 2025 e válida até 24 de outubro de 2027.",
        },
        proof: "public",
        column: 5,
        href: "https://achieve.snowflake.com/fcf71b7d-ea13-405d-a11f-ed5c9c6f6be2",
      },
      {
        period: { en: "2025–2027", pt: "2025–2027" },
        title: { en: "M.S. Artificial Intelligence & Business Analytics", pt: "M.S. em Inteligência Artificial e Business Analytics" },
        detail: {
          en: "USF, current GPA 3.9, with 21 graduate credits completed as of August 2026.",
          pt: "USF, GPA atual 3,9, com 21 créditos de pós-graduação concluídos até agosto de 2026.",
        },
        proof: "verified",
        column: 5,
      },
      {
        period: { en: "2025–2026 coursework", pt: "Disciplinas 2025–2026" },
        title: { en: "Graduate AI, data, and systems curriculum", pt: "Currículo de pós-graduação em IA, dados e sistemas" },
        detail: {
          en: "Completed: Advanced Database Management, Machine Learning, Foundations of Business Statistics, Advanced Systems Analysis/Design, Advanced Statistical Modeling, Analytics Application Development, and AI for Business. In progress in Fall 2026: Enterprise Information Systems Management, Data Visualization, and Big Data for Business.",
          pt: "Concluídas: Banco de Dados Avançado, Machine Learning, Fundamentos de Estatística para Negócios, Análise e Projeto Avançado de Sistemas, Modelagem Estatística Avançada, Desenvolvimento de Aplicações Analíticas e IA para Negócios. Em andamento no outono de 2026: Gestão de Sistemas de Informação Empresariais, Visualização de Dados e Big Data para Negócios.",
        },
        proof: "verified",
        column: 5,
      },
    ],
  },
];
