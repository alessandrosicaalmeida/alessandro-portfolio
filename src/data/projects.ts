export type Language = "en" | "pt";
export type EvidenceStatus = "public" | "sanitized" | "pending" | "archived";

export type Localized = {
  en: string;
  pt: string;
};

export type CapabilityStatus = "implemented" | "prototype" | "planned";
export type Capability = {
  name: Localized;
  status: CapabilityStatus;
};

export type Project = {
  id: string;
  title: string;
  category: Localized;
  year: string;
  status: EvidenceStatus;
  stage: Localized;
  priority: "flagship" | "selected" | "archive" | "documentation";
  summary: Localized;
  contribution: Localized;
  proof: Localized[];
  next: Localized[];
  tags: string[];
  problem: Localized;
  operation: Localized;
  decisions: Localized[];
  capabilities: Capability[];
  technologies: string[];
  learnings: Localized[];
  publicBoundary: Localized;
  visualPlan: Localized;
  image?: string;
  imageAlt?: Localized;
  links?: { label: Localized; href: string }[];
};

type ProjectDetails = Pick<Project, "problem" | "operation" | "decisions" | "capabilities" | "technologies" | "learnings" | "publicBoundary" | "visualPlan">;
type ProjectCore = Omit<Project, keyof ProjectDetails>;

const projectCatalog: ProjectCore[] = [
  {
    id: "signinglab",
    title: "SigningLab",
    category: { en: "Predictive ML · Sports intelligence", pt: "ML preditivo · Inteligência esportiva" },
    year: "2025—present",
    status: "public",
    stage: { en: "Live web and mobile decision product", pt: "Produto ativo de decisão na web e no celular" },
    priority: "flagship",
    summary: {
      en: "A published web and mobile decision-intelligence product for football signings, combining league-specific predictive ML, computer vision, a proprietary AI model with structured vector RAG, temporal validation, public rankings, and pre-outcome forecast commitments.",
      pt: "Produto publicado na web e no celular de inteligência de decisão para contratações no futebol, combinando ML preditivo por liga, visão computacional, modelo proprietário de IA com RAG vetorial estruturado, validação temporal, rankings públicos e previsões registradas antes do resultado.",
    },
    contribution: {
      en: "Conceived and leads the product, model strategy, validation standard, publishing system, experience, and AI-assisted decision workflows.",
      pt: "Concebeu e lidera o produto, a estratégia dos modelos, o padrão de validação, o sistema de publicação, a experiência e os workflows de decisão assistidos por IA.",
    },
    proof: [
      { en: "Public website and iOS App Store listing", pt: "Site público e aplicativo listado na App Store" },
      { en: "21 leagues with public validation coverage", pt: "21 ligas com cobertura pública de validação" },
      { en: "8,559 evaluated signings in the published 2024–2025 matrix", pt: "8.559 contratações avaliadas na matriz pública de 2024–2025" },
      { en: "Public verification protocol and current forecast commitments", pt: "Protocolo público de verificação e compromissos atuais de previsões" },
      { en: "Proprietary AI architecture combining computer vision, vectorization, structured retrieval, and RAG; demonstrated without opening the model", pt: "Arquitetura proprietária de IA combinando visão computacional, vetorização, recuperação estruturada e RAG; demonstrada sem abrir o modelo" },
    ],
    next: [
      { en: "Package a sanitized technical case repository", pt: "Preparar um repositório técnico sanitizado" },
      { en: "Publish automated integrity checks and a reproducible audit sample", pt: "Publicar verificações automáticas e uma amostra de auditoria reproduzível" },
      { en: "Add independent or supervised external review", pt: "Adicionar revisão externa independente ou supervisionada" },
    ],
    tags: ["LightGBM", "DuckDB", "Temporal validation", "Responsible AI"],
    image: "./projects/signinglab-proof.png",
    imageAlt: {
      en: "SigningLab diagram showing a forecast committed before the outcome and verified after it",
      pt: "Diagrama da SigningLab mostrando uma previsão registrada antes do resultado e verificada depois",
    },
    links: [
      { label: { en: "Live product", pt: "Produto ativo" }, href: "https://signinglab.com/" },
      { label: { en: "iOS app", pt: "App para iOS" }, href: "https://apps.apple.com/br/app/signinglab/id6768526329" },
      { label: { en: "Verification", pt: "Verificação" }, href: "https://signinglab.com/verification" },
      { label: { en: "Rankings", pt: "Rankings" }, href: "https://signinglab.com/rankings/" },
    ],
  },
  {
    id: "last-myth",
    title: "Last Myth Studios + Multi-Agent Game Production",
    category: { en: "Agentic production · Games", pt: "Produção agentic · Games" },
    year: "2026",
    status: "public",
    stage: { en: "Live studio, playable builds, and an active game slate", pt: "Estúdio ativo, builds jogáveis e portfólio de jogos em produção" },
    priority: "flagship",
    summary: {
      en: "A connected game studio and production system spanning logic games, children's experiences, 3D games, and image/video interaction across Mythshards, Mythic Flight, Fairy Magic Myth, Stone Collection Myth, Void Myth, Checkmate Legends, and Realm Casters.",
      pt: "Estúdio e sistema de produção conectados que abrangem jogos de lógica, experiências infantis, jogos 3D e interação com imagens e vídeos em Mythshards, Mythic Flight, Fairy Magic Myth, Stone Collection Myth, Void Myth, Checkmate Legends e Realm Casters.",
    },
    contribution: {
      en: "Created the orchestration platform and directs the AI-assisted studio model, product slate, shared universe, specialist agents, human review, cost control, and playable delivery.",
      pt: "Criou a plataforma de orquestração e dirige o modelo de estúdio assistido por IA, o portfólio de produtos, o universo compartilhado, os agentes especialistas, a revisão humana, os custos e as entregas jogáveis.",
    },
    proof: [
      { en: "Public Last Myth Studios website and a catalog built around one connected fantasy universe", pt: "Site público e catálogo da Last Myth Studios construídos em torno de um universo de fantasia conectado" },
      { en: "Mythshards has been submitted and is awaiting Apple's review", pt: "Mythshards foi submetido e aguarda a análise da Apple" },
      { en: "Active local projects and build evidence for Mythic Flight, Fairy Magic Myth, Stone Collection Myth, and Void Myth", pt: "Projetos locais ativos e evidências de build para Mythic Flight, Fairy Magic Myth, Stone Collection Myth e Void Myth" },
      { en: "Checkmate Legends and Realm Casters are in active development with playable prototypes", pt: "Checkmate Legends e Realm Casters estão em desenvolvimento ativo com protótipos jogáveis" },
      { en: "34 configured roles and observable multi-agent round history across the production system", pt: "34 papéis configurados e histórico observável de rodadas multiagente no sistema de produção" },
    ],
    next: [
      { en: "Trace one brief-to-playable artifact workflow for each public game case", pt: "Rastrear um fluxo do briefing ao artefato jogável para cada case público de jogo" },
      { en: "Update architecture docs to match the current code", pt: "Atualizar arquitetura para refletir o código atual" },
      { en: "Complete asset, license, contribution, and store-readiness review before publishing source or builds", pt: "Concluir revisão de ativos, licenças, contribuições e prontidão para lojas antes de publicar código ou builds" },
    ],
    tags: ["Multi-agent", "Unity 6", "Human review", "Game production"],
    links: [
      { label: { en: "Live studio website", pt: "Site funcional do estúdio" }, href: "https://lastmythstudios.com/" },
      { label: { en: "Published game catalog", pt: "Catálogo público de jogos" }, href: "https://lastmythstudios.com/games" },
    ],
  },
  {
    id: "enose",
    title: "eNose",
    category: { en: "Applied ML research · Sensor analytics", pt: "Pesquisa em ML aplicado · Analytics de sensores" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Applied research in preparation", pt: "Pesquisa aplicada em preparação" },
    priority: "flagship",
    summary: {
      en: "A leakage-aware research pipeline for electronic-nose sensor signals, spanning raw-data quality control, feature engineering, model comparison, stability tests, sensor reduction, and external-mixture evaluation.",
      pt: "Pipeline de pesquisa para sinais de sensores de nariz eletrônico, com prevenção de leakage, controle de qualidade, engenharia de atributos, comparação de modelos, estabilidade, redução de sensores e avaliação externa.",
    },
    contribution: {
      en: "Leads the applied ML workstream, experimental logic, and analytical direction; preparing the study as lead author, with publication still in progress.",
      pt: "Lidera a frente de ML aplicado, a lógica experimental e a direção analítica; prepara o estudo como autor principal, com publicação ainda em andamento.",
    },
    proof: [
      { en: "Ten-stage documented ML workflow", pt: "Workflow de ML documentado em dez etapas" },
      { en: "Explicit target-leakage exclusions and feature audit", pt: "Exclusões explícitas de target leakage e auditoria de atributos" },
      { en: "Chronological, stability, and external-mixture tests", pt: "Testes cronológicos, de estabilidade e de mistura externa" },
    ],
    next: [
      { en: "Create a canonical repository and approved sample dataset", pt: "Criar repositório canônico e amostra de dados aprovada" },
      { en: "Freeze a reproducible run and model card", pt: "Congelar uma execução reproduzível e model card" },
      { en: "Confirm publication rights for figures and contribution statement", pt: "Confirmar direitos de publicação das figuras e declaração de contribuição" },
    ],
    tags: ["Python", "Random Forest", "Leakage control", "Experimental design"],
  },
  {
    id: "control-biz",
    title: "Control Biz",
    category: { en: "Agentic AI · Business operations", pt: "IA agentic · Operações empresariais" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Functional agentic system with a synthetic public demo", pt: "Sistema agentic funcional com demo pública sintética" },
    priority: "flagship",
    summary: {
      en: "A configurable multi-agent operating system with 24 specialist roles, model routing, parallel execution, structured requests, audit and cost controls, and human-review gates. Its new public mode demonstrates missions, routines, proposals, revisions, and approvals with synthetic data and no backend dependency.",
      pt: "Sistema operacional multiagente configurável com 24 papéis especializados, roteamento de modelos, execução paralela, pedidos estruturados, auditoria, controle de custos e revisão humana. O novo modo público demonstra missões, rotinas, propostas, revisões e aprovações com dados sintéticos e sem dependência de backend.",
    },
    contribution: {
      en: "Conceived the operating model and led its execution across orchestration, specialist roles, provider strategy, permissions, state, governance, and experience.",
      pt: "Concebeu o modelo operacional e liderou sua execução em orquestração, papéis especializados, estratégia de provedores, permissões, estado, governança e experiência.",
    },
    proof: [
      { en: "Production frontend build passes", pt: "Build de produção do frontend aprovado" },
      { en: "OpenAI and Anthropic routing with isolated agent context", pt: "Roteamento OpenAI e Anthropic com contexto isolado por agente" },
      { en: "Depth, cost, permission, and human-review controls", pt: "Controles de profundidade, custo, permissão e revisão humana" },
      { en: "Bilingual synthetic demo with mission engine, agent teams, proposal review, revision, and approval workflows", pt: "Demo sintética bilíngue com motor de missões, equipes de agentes e workflows de proposta, revisão, ajuste e aprovação" },
    ],
    next: [
      { en: "Harden authentication and session handling", pt: "Reforçar autenticação e sessões" },
      { en: "Add orchestration, permission, cost, and fallback tests", pt: "Adicionar testes de orquestração, permissão, custo e fallback" },
      { en: "Publish a reviewed source repository with a deterministic, synthetic demo", pt: "Publicar repositório de código revisado com demo sintética e determinística" },
    ],
    tags: ["React", "Fastify", "OpenAI", "Anthropic", "HITL"],
  },
  {
    id: "lea-command-center",
    title: "LEA Enterprises",
    category: { en: "Post-acquisition integration · Multi-agent AI", pt: "Integração pós-aquisição · IA multiagente" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Public prototype with simulated data, ready for real integrations", pt: "Protótipo público com dados simulados, preparado para integrações reais" },
    priority: "flagship",
    summary: {
      en: "A supervised command center for managing systems migration after acquisitions. The public prototype uses simulated data, while the system is designed to operate with real enterprise data and integrations that cannot be exposed in the demo.",
      pt: "Command center supervisionado para controlar a migração de sistemas após aquisições. O protótipo público utiliza dados simulados, enquanto o sistema foi projetado para operar com dados e integrações empresariais reais que não podem ser expostos na demo.",
    },
    contribution: {
      en: "Created the product direction and migration-control model, connecting executive integration governance, specialist agent queues, source/target-system monitoring, bounded automation, and accountable human decisions.",
      pt: "Criou a direção do produto e o modelo de controle da migração, conectando governança executiva da integração, filas de agentes especialistas, monitoramento dos sistemas de origem e destino, automação limitada e decisões humanas responsáveis.",
    },
    proof: [
      { en: "Functional single-page command center with synthetic demonstration data", pt: "Command center funcional em página única com dados sintéticos de demonstração" },
      { en: "Operational views for canonical tables, source systems, exceptions, agent queues, budgets, risk, and executive reporting", pt: "Visões operacionais para tabelas canônicas, sistemas de origem, exceções, filas de agentes, orçamento, risco e relatório executivo" },
      { en: "Server-side Anthropic integration with fail-closed access control and no browser-exposed API key", pt: "Integração Anthropic no servidor com controle de acesso fail-closed e sem chave de API exposta no navegador" },
      { en: "Explicit human confirmation and solution-log workflows for consequential changes", pt: "Workflows explícitos de confirmação humana e registro de soluções para mudanças relevantes" },
    ],
    next: [
      { en: "Create a deterministic public recruiter mode that runs without credentials or external APIs", pt: "Criar um modo público determinístico para recrutadores que funcione sem credenciais ou APIs externas" },
      { en: "Publish a concise architecture, threat boundary, synthetic scenario, and limitations", pt: "Publicar arquitetura concisa, limites de segurança, cenário sintético e limitações" },
      { en: "Add integration-state, approval, authorization, and failure-path tests before releasing source", pt: "Adicionar testes de estado de integração, aprovação, autorização e falhas antes de liberar o código" },
    ],
    tags: ["Multi-agent", "ERP integration", "Human approval", "Cloudflare Pages"],
  },
  {
    id: "retail-intelligence",
    title: "Marpeh Retail Intelligence Dashboard",
    category: { en: "AI insights · Grocery operations", pt: "Insights com IA · Operações de supermercados" },
    year: "2026—present",
    status: "pending",
    stage: { en: "Private production product with a synthetic public-demo prototype", pt: "Produto privado em produção com protótipo público sintético" },
    priority: "selected",
    summary: {
      en: "A production management and decision dashboard for supermarket operations. The portfolio version will be a structurally faithful prototype with simulated data because real client data, figures, and integrations cannot be exposed.",
      pt: "Dashboard de gestão e decisão em produção para operações de supermercados. A versão para o portfólio será um protótipo estruturalmente fiel com dados simulados, pois dados, números e integrações reais do cliente não podem ser expostos.",
    },
    contribution: {
      en: "Created the product and analytical operating model, translating fragmented retail data into executive decisions, store and product diagnostics, prioritized actions, and an evolving AI-assisted management system.",
      pt: "Criou o produto e o modelo operacional analítico, transformando dados fragmentados do varejo em decisões executivas, diagnósticos por loja e produto, ações priorizadas e um sistema de gestão assistido por IA em evolução.",
    },
    proof: [
      { en: "Real product currently used in production", pt: "Produto real atualmente utilizado em produção" },
      { en: "Operational scope spans management, insights, finance, inventory, tax, and workforce", pt: "Escopo operacional abrange gestão, insights, financeiro, estoque, fiscal e workforce" },
      { en: "The real dashboard remains private because it contains client and operational data", pt: "O dashboard real permanece privado porque contém dados operacionais e do cliente" },
    ],
    next: [
      { en: "Build a polished synthetic demo that preserves the real management logic without copying client data", pt: "Construir uma demo sintética visualmente refinada que preserve a lógica real de gestão sem copiar dados do cliente" },
      { en: "Validate every public screen against the production workflow and disclosure boundary", pt: "Validar cada tela pública em relação ao fluxo de produção e aos limites de divulgação" },
    ],
    tags: ["Retail analytics", "AI insights", "Pricing", "Inventory", "Workforce"],
  },
  {
    id: "ai-parts",
    title: "AI Parts Control Hub",
    category: { en: "Supervised AI · Operating control", pt: "IA supervisionada · Controle operacional" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Public prototype with simulated data, ready for real integrations", pt: "Protótipo público com dados simulados, preparado para integrações reais" },
    priority: "selected",
    summary: {
      en: "A controller-led operations prototype coordinating procurement, workforce, risk, and audit views with grounded AI responses and human approval. The demo uses simulated data, while the architecture is designed for real operational data and integrations that cannot be published.",
      pt: "Protótipo operacional liderado por um controlador, coordenando compras, força de trabalho, risco e auditoria com respostas de IA contextualizadas e aprovação humana. A demo utiliza dados simulados, enquanto a arquitetura foi criada para dados e integrações operacionais reais que não podem ser publicados.",
    },
    contribution: {
      en: "Led the control concept, operational panel, Controller AI, and orchestration layer, with explicit ownership boundaries for the team's ML and review workstreams.",
      pt: "Liderou o conceito de controle, o painel operacional, a Controller AI e a camada de orquestração, com limites explícitos para as frentes de ML e revisão da equipe.",
    },
    proof: [
      { en: "Clear role and approval architecture", pt: "Arquitetura clara de papéis e aprovações" },
      { en: "Grounded operational-state snapshot", pt: "Snapshot de estado operacional usado como contexto" },
      { en: "Standalone academic deliverable", pt: "Entrega acadêmica autocontida" },
    ],
    next: [
      { en: "Select one canonical version and initialize a public repository", pt: "Selecionar uma versão canônica e criar repositório público" },
      { en: "Restore a restricted Worker or ship deterministic local mode", pt: "Restaurar Worker restrito ou modo local determinístico" },
      { en: "Add architecture, contribution, and limitation documentation", pt: "Adicionar documentação de arquitetura, contribuição e limites" },
    ],
    tags: ["Claude", "Cloudflare Worker", "State grounding", "Responsible AI"],
  },
  {
    id: "inflick",
    title: "Inflick",
    category: { en: "Marketing AI · Creator economy", pt: "IA para marketing · Creator economy" },
    year: "2026",
    status: "sanitized",
    stage: { en: "AI product platform", pt: "Plataforma de produto com IA" },
    priority: "selected",
    summary: {
      en: "An AI-enabled influencer-marketing platform spanning semantic matching, campaigns, content validation, sentiment, anomalies, pricing, ROI, reporting, and human escalation.",
      pt: "Plataforma de influencer marketing com IA para matching semântico, campanhas, validação de conteúdo, sentimento, anomalias, precificação, ROI, relatórios e escalonamento humano.",
    },
    contribution: {
      en: "Conceived the product architecture and directed a system of specialized AI services, conversational agents, human escalation, and commercial decision support.",
      pt: "Concebeu a arquitetura do produto e dirigiu um sistema de serviços especializados de IA, agentes conversacionais, escalonamento humano e suporte a decisões comerciais.",
    },
    proof: [
      { en: "Substantial Next.js/Prisma codebase", pt: "Base substancial em Next.js/Prisma" },
      { en: "27 test files and extensive E2E tooling", pt: "27 arquivos de teste e ferramentas E2E extensas" },
      { en: "Recent Git history", pt: "Histórico Git recente" },
    ],
    next: [
      { en: "Stabilize test execution and CI", pt: "Estabilizar execução de testes e CI" },
      { en: "Build one synthetic end-to-end campaign", pt: "Construir uma campanha sintética ponta a ponta" },
      { en: "Document implemented services vs. agent skeletons", pt: "Documentar serviços implementados versus esqueletos de agentes" },
    ],
    tags: ["Next.js", "Prisma", "Marketing AI", "Human escalation"],
  },
  {
    id: "minha-secretaria",
    title: "Minha Secretaria",
    category: { en: "Tool-using AI · Productivity", pt: "IA com ferramentas · Produtividade" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Functional product system", pt: "Sistema de produto funcional" },
    priority: "selected",
    summary: {
      en: "A voice-enabled AI assistant connecting email triage, calendars, meetings, transcription, translation, documents, and administrative actions with user confirmation.",
      pt: "Assistente de IA com voz que conecta triagem de e-mails, calendários, reuniões, transcrição, tradução, documentos e ações administrativas com confirmação do usuário.",
    },
    contribution: {
      en: "Conceived and led the product and integration model across personal productivity and verticalized business operations, including consent and action controls.",
      pt: "Concebeu e liderou o produto e o modelo de integrações para produtividade pessoal e operações empresariais verticalizadas, incluindo controles de consentimento e ação.",
    },
    proof: [
      { en: "TypeScript checks pass for both primary applications", pt: "Verificações TypeScript aprovadas nos dois aplicativos principais" },
      { en: "Realtime voice and function-calling paths", pt: "Fluxos de voz em tempo real e function calling" },
      { en: "Explicit confirmation and mock fallback design", pt: "Design com confirmação explícita e fallbacks simulados" },
    ],
    next: [
      { en: "Freeze a clean demo release", pt: "Congelar uma versão limpa de demonstração" },
      { en: "Publish real-vs-mock integration matrix", pt: "Publicar matriz de integrações reais versus simuladas" },
      { en: "Document consent, scopes, retention, and tool authorization", pt: "Documentar consentimento, escopos, retenção e autorização de ferramentas" },
    ],
    tags: ["Next.js", "Realtime voice", "Function calling", "Automation"],
  },
  {
    id: "intvox",
    title: "IntVox",
    category: { en: "Realtime AI · Translation", pt: "IA em tempo real · Tradução" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Cross-platform prototype", pt: "Protótipo multiplataforma" },
    priority: "selected",
    summary: {
      en: "A multimodal translation product spanning web, browser extension, and mobile conversation experiences.",
      pt: "Produto multimodal de tradução com experiências web, extensão de navegador e conversação mobile.",
    },
    contribution: {
      en: "Defined the cross-platform product vision and directed translation and conversation experiences across web, browser, and mobile surfaces.",
      pt: "Definiu a visão de produto multiplataforma e dirigiu experiências de tradução e conversação em web, navegador e mobile.",
    },
    proof: [
      { en: "Clean inspected Git worktree", pt: "Worktree Git inspecionado sem alterações" },
      { en: "Web, extension, and mobile implementations", pt: "Implementações web, extensão e mobile" },
      { en: "Direction and conversation mode controls", pt: "Controles de direção e modo de conversa" },
    ],
    next: [
      { en: "Fix reproducible production builds and add CI", pt: "Corrigir builds reproduzíveis e adicionar CI" },
      { en: "Measure latency and translation quality on a public demo", pt: "Medir latência e qualidade em demonstração pública" },
      { en: "Add audio privacy and failure-mode documentation", pt: "Adicionar documentação de privacidade de áudio e falhas" },
    ],
    tags: ["Next.js", "Mobile", "Browser extension", "Realtime"],
  },
  {
    id: "recordia",
    title: "Recordia",
    category: { en: "Generative media · Trust product", pt: "Mídia generativa · Produto de confiança" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Trust-centered prototype", pt: "Protótipo centrado em confiança" },
    priority: "selected",
    summary: {
      en: "A digital-legacy prototype for creating and safely releasing future messages using text, voice, video, family relationships, and explicit confirmation workflows.",
      pt: "Protótipo de legado digital para criar e liberar mensagens futuras com texto, voz, vídeo, relações familiares e workflows explícitos de confirmação.",
    },
    contribution: {
      en: "Created the product concept and trust model, then directed the experience, generative-media workflow, and evolving backend architecture.",
      pt: "Criou o conceito e o modelo de confiança do produto, dirigindo a experiência, o workflow de mídia generativa e a evolução da arquitetura de backend.",
    },
    proof: [
      { en: "Broad product and architecture documentation", pt: "Documentação ampla de produto e arquitetura" },
      { en: "Supabase and event/queue direction", pt: "Direção com Supabase e eventos/filas" },
      { en: "Text, voice, and avatar workflow prototypes", pt: "Protótipos de workflows em texto, voz e avatar" },
    ],
    next: [
      { en: "Reconcile current architecture and make CI reproducible", pt: "Conciliar arquitetura atual e tornar CI reproduzível" },
      { en: "Complete identity, consent, revocation, dispute, and release threat model", pt: "Completar threat model de identidade, consentimento, revogação, disputa e liberação" },
      { en: "Demonstrate one fictional, text-first end-to-end flow", pt: "Demonstrar um fluxo fictício, text-first, ponta a ponta" },
    ],
    tags: ["React", "Supabase", "Generative media", "Trust & privacy"],
    image: "./projects/recordia-mark.png",
    imageAlt: {
      en: "Abstract layered Recordia product mark",
      pt: "Marca abstrata em camadas do produto Recordia",
    },
  },
  {
    id: "jersey-nation",
    title: "Jersey Nation",
    category: { en: "Commerce systems · Data modeling", pt: "Sistemas de comércio · Modelagem de dados" },
    year: "2026",
    status: "public",
    stage: { en: "Supporting academic case", pt: "Case acadêmico complementar" },
    priority: "selected",
    summary: {
      en: "An academic commerce simulation for national-team jerseys combining C#/Razor, relational modeling, interactive ERD documentation, analytics, behavioral tracking, and two Botpress assistants.",
      pt: "Simulação acadêmica de e-commerce de camisas de seleções combinando C#/Razor, modelagem relacional, ERD interativo, analytics, rastreamento comportamental e dois assistentes Botpress.",
    },
    contribution: {
      en: "Defined the commerce operating model and translated it into product flows, relational architecture, executive analytics, and distinct customer/admin assistants.",
      pt: "Definiu o modelo operacional de comércio e o traduziu em fluxos de produto, arquitetura relacional, analytics executivos e assistentes distintos para cliente e administração.",
    },
    proof: [
      { en: "Build passes with zero warnings and zero errors", pt: "Build aprovado sem warnings ou erros" },
      { en: "Interactive ERD and data dictionary", pt: "ERD interativo e dicionário de dados" },
      { en: "Customer and admin Botpress assistants", pt: "Assistentes Botpress para cliente e administração" },
    ],
    next: [
      { en: "Deploy the static demo and confirm image licenses", pt: "Publicar demo estático e confirmar licenças das imagens" },
      { en: "Implement one persistent catalog-to-order vertical slice", pt: "Implementar um fluxo persistente de catálogo a pedido" },
      { en: "Add pricing, cart, order-state, search, and API tests", pt: "Adicionar testes de preço, carrinho, pedido, busca e API" },
    ],
    tags: ["ASP.NET Core", "C#", "Chart.js", "Botpress", "Data modeling"],
  },
  {
    id: "effigia",
    title: "Effigia Lens",
    category: { en: "Computer vision · Real-time image processing", pt: "Visão computacional · Tratamento de imagem em tempo real" },
    year: "2026",
    status: "sanitized",
    stage: { en: "Filter and facial-mapping demo with character-animation application", pt: "Demo de filtro e mapeamento facial com aplicação em animação de personagem" },
    priority: "flagship",
    summary: {
      en: "A real-time demo combining advanced image filtering, 468-point facial mapping, region-aware treatment, and the application of facial motion to character animation, with local processing designed to preserve privacy.",
      pt: "Demo em tempo real que combina filtro avançado de imagem, mapeamento facial com 468 pontos, tratamento por regiões e aplicação do movimento facial à animação de personagem, com processamento local orientado à privacidade.",
    },
    contribution: {
      en: "Created the product and its real-time processing architecture, integrating local facial analysis, targeted treatment, browser-stream interception, user controls, and a privacy-first execution model.",
      pt: "Criou o produto e sua arquitetura de processamento em tempo real, integrando análise facial local, tratamento direcionado, interceptação do stream do navegador, controles do usuário e execução orientada à privacidade.",
    },
    proof: [
      { en: "Local MediaPipe Face Landmarker with 468 facial landmarks and region-aware masks", pt: "MediaPipe Face Landmarker local com 468 landmarks faciais e máscaras por região" },
      { en: "WebGL2 multi-pass treatment with frequency-separation smoothing and localized under-eye correction", pt: "Tratamento WebGL2 multi-pass com suavização por separação de frequência e correção localizada sob os olhos" },
      { en: "Live MediaStream processing with pass-through fallback and no need to send video frames to a server", pt: "Processamento de MediaStream ao vivo com fallback pass-through e sem necessidade de enviar frames de vídeo a um servidor" },
      { en: "Character-animation application is part of the new portfolio demo and will be published with a verified motion capture", pt: "A aplicação em animação de personagem integra a nova demo do portfólio e será publicada com captura de movimento verificada" },
    ],
    next: [
      { en: "Validate the current extension in a live supported video-call flow", pt: "Validar a extensão atual em um fluxo real de videochamada compatível" },
      { en: "Capture a consented before/after demo and benchmark FPS, latency, and device load", pt: "Capturar demo consentida de antes/depois e medir FPS, latência e carga do dispositivo" },
      { en: "Publish a sanitized technical demo after dependency, privacy, and license review", pt: "Publicar demo técnica sanitizada após revisar dependências, privacidade e licenças" },
    ],
    tags: ["MediaPipe", "WebGL2", "Real-time vision", "Privacy-first"],
  },
  {
    id: "legacy-systems",
    title: "Multcob, Multcall & Applied ML Systems",
    category: { en: "Enterprise systems · Historical evidence", pt: "Sistemas corporativos · Evidência histórica" },
    year: "2008—2020s",
    status: "pending",
    stage: { en: "Enterprise transformation portfolio", pt: "Portfólio de transformação empresarial" },
    priority: "documentation",
    summary: {
      en: "A historical body of enterprise work across collections ERP, dialing/CRM, geospatial customer bases, propensity, recovery curves, pricing, and omnichannel decision workflows.",
      pt: "Conjunto histórico de trabalhos corporativos em ERP de cobrança, discador/CRM, bases geográficas de clientes, propensão, curvas de recuperação, precificação e decisão omnichannel.",
    },
    contribution: {
      en: "Executive product conception, architecture, model strategy, and team/vendor direction; exact boundaries will be documented per system.",
      pt: "Concepção executiva de produto, arquitetura, estratégia de modelos e direção de equipes/fornecedores; os limites exatos serão documentados por sistema.",
    },
    proof: [
      { en: "Career narrative and candidate-confirmed responsibilities", pt: "Narrativa profissional e responsabilidades confirmadas pelo candidato" },
      { en: "Multcob and Multcall are explicitly treated as different products", pt: "Multcob e Multcall são tratados explicitamente como produtos distintos" },
      { en: "Original artifacts and disclosure-safe outcomes still required", pt: "Ainda faltam artefatos originais e resultados publicáveis" },
    ],
    next: [
      { en: "Collect dated specifications, diagrams, outcomes, and witness evidence", pt: "Reunir especificações, diagramas, resultados e testemunhos datados" },
      { en: "Confirm ownership and recreate sanitized architecture", pt: "Confirmar propriedade e recriar arquitetura sanitizada" },
      { en: "Separate personal model work from team and vendor implementation", pt: "Separar modelos pessoais da implementação por equipe e fornecedores" },
    ],
    tags: ["ERP", "Pricing ML", "Collections", "Geospatial data", "Omnichannel"],
  },
];

const projectDetails: Record<string, ProjectDetails> = {
  signinglab: {
    problem: {
      en: "Football recruitment decisions are often judged only after the outcome, while league differences, time leakage, and opaque criteria make comparisons unreliable.",
      pt: "Decisões de contratação no futebol frequentemente são avaliadas apenas depois do resultado, enquanto diferenças entre ligas, leakage temporal e critérios opacos tornam as comparações pouco confiáveis.",
    },
    operation: {
      en: "League-specific predictive models score signings, computer vision extracts visual signals, and a proprietary AI layer uses vectorization and structured RAG to retrieve and organize relevant context. Temporal validation tests generalization, while public forecasts are committed before outcomes for later verification.",
      pt: "Modelos preditivos específicos por liga avaliam contratações, visão computacional extrai sinais visuais e uma camada proprietária de IA usa vetorização e RAG estruturado para recuperar e organizar contexto relevante. A validação temporal testa generalização, enquanto previsões públicas são registradas antes dos resultados para verificação posterior.",
    },
    decisions: [
      { en: "Use separate models and validation logic for materially different leagues.", pt: "Usar modelos e lógicas de validação separados para ligas materialmente diferentes." },
      { en: "Freeze forecasts before outcomes and preserve an auditable verification trail.", pt: "Congelar previsões antes dos resultados e preservar uma trilha auditável de verificação." },
      { en: "Expose methodology, limitations, rankings, and evidence as part of the product.", pt: "Expor metodologia, limitações, rankings e evidências como parte do produto." },
    ],
    capabilities: [
      { name: { en: "ETL and analytical pipelines", pt: "ETL e pipelines analíticos" }, status: "implemented" },
      { name: { en: "Predictive machine learning", pt: "Machine learning preditivo" }, status: "implemented" },
      { name: { en: "Computer vision", pt: "Visão computacional" }, status: "implemented" },
      { name: { en: "Vector RAG and structured retrieval", pt: "RAG vetorial e recuperação estruturada" }, status: "implemented" },
      { name: { en: "Proprietary AI model", pt: "Modelo proprietário de IA" }, status: "implemented" },
      { name: { en: "Model validation and audit", pt: "Validação e auditoria de modelos" }, status: "implemented" },
      { name: { en: "Decision-data visualization", pt: "Visualização de dados para decisão" }, status: "implemented" },
    ],
    technologies: ["Python", "LightGBM", "DuckDB", "SQL", "Computer vision", "Vector embeddings", "Vector retrieval", "Structured RAG", "Proprietary AI model", "Temporal validation", "Data pipelines", "Web", "iOS"],
    learnings: [
      { en: "Temporal separation matters more than an impressive retrospective metric.", pt: "Separação temporal importa mais do que uma métrica retrospectiva impressionante." },
      { en: "Public commitments and limitations increase trust in predictive products.", pt: "Compromissos públicos e limitações aumentam a confiança em produtos preditivos." },
    ],
    publicBoundary: { en: "Public rankings, methodology, validation, and selected audit artifacts can be inspected. The proprietary AI model, source code, weights, prompts, vector indexes, data preparation, and credentials will not be opened.", pt: "Rankings, metodologia, validação e artefatos selecionados de auditoria podem ser inspecionados. O modelo proprietário de IA, código-fonte, pesos, prompts, índices vetoriais, preparação de dados e credenciais não serão abertos." },
    visualPlan: { en: "Live product screens, a sanitized architecture showing computer vision and vector RAG, the model-to-ranking flow, and a forecast timeline from commitment to verified outcome.", pt: "Telas do produto ativo, arquitetura sanitizada mostrando visão computacional e RAG vetorial, fluxo do modelo ao ranking e linha do tempo da previsão, do registro à verificação do resultado." },
  },
  "last-myth": {
    problem: { en: "A small studio needs to coordinate design, narrative, art, engineering, testing, and publishing across multiple games without losing quality, canon, or cost control.", pt: "Um estúdio pequeno precisa coordenar design, narrativa, arte, engenharia, testes e publicação em vários jogos sem perder qualidade, coerência do universo ou controle de custos." },
    operation: { en: "Specialist agents work in bounded roles and parallel rounds, structured requests connect disciplines, and human review converts approved work into Unity builds and a connected game slate.", pt: "Agentes especialistas atuam em papéis delimitados e rodadas paralelas, pedidos estruturados conectam disciplinas e a revisão humana transforma trabalhos aprovados em builds Unity e um portfólio integrado de jogos." },
    decisions: [
      { en: "Keep human approval at product, creative, cost, and release checkpoints.", pt: "Manter aprovação humana nos pontos de produto, criação, custo e lançamento." },
      { en: "Share a reusable production core while preserving each game's identity and maturity.", pt: "Compartilhar um núcleo de produção reutilizável preservando a identidade e a maturidade de cada jogo." },
      { en: "Show playable evidence and production traces, not only agent conversations.", pt: "Mostrar evidências jogáveis e rastros de produção, não apenas conversas entre agentes." },
    ],
    capabilities: [
      { name: { en: "Multi-agent systems", pt: "Sistemas multiagente" }, status: "implemented" },
      { name: { en: "Agent orchestration", pt: "Orquestração de agentes" }, status: "implemented" },
      { name: { en: "Agent trace and audit", pt: "Rastreabilidade e auditoria de agentes" }, status: "implemented" },
      { name: { en: "Production automation", pt: "Automação de produção" }, status: "implemented" },
      { name: { en: "Cost control and human review", pt: "Controle de custos e revisão humana" }, status: "implemented" },
    ],
    technologies: ["Unity 6", "C#", "Multi-agent orchestration", "OpenAI API", "Anthropic API", "React", "Node.js", "Human review", "Audit logs"],
    learnings: [
      { en: "Agent teams need explicit ownership, handoffs, and acceptance criteria.", pt: "Equipes de agentes precisam de responsabilidades, passagens e critérios de aceite explícitos." },
      { en: "A playable artifact communicates production capability better than a long orchestration log.", pt: "Um artefato jogável comunica capacidade produtiva melhor do que um longo log de orquestração." },
    ],
    publicBoundary: { en: "Public studio site, approved gameplay, store listings, and selected production traces; private source, credentials, licensed assets, and internal creative bibles stay protected.", pt: "Site público do estúdio, gameplays aprovados, listagens nas lojas e rastros selecionados de produção; código privado, credenciais, ativos licenciados e documentos criativos internos permanecem protegidos." },
    visualPlan: { en: "A visual game slate, short gameplay captures, and one trace from creative brief through agent collaboration to a playable build.", pt: "Um portfólio visual dos jogos, capturas curtas de gameplay e um rastro do briefing criativo à colaboração dos agentes e ao build jogável." },
  },
  enose: {
    problem: { en: "Electronic-nose signals are noisy, unstable over time, and vulnerable to target leakage, making apparently strong models fail outside the training sample.", pt: "Sinais de nariz eletrônico são ruidosos, instáveis ao longo do tempo e vulneráveis a target leakage, fazendo modelos aparentemente fortes falharem fora da amostra de treinamento." },
    operation: { en: "The research pipeline audits raw signals, engineers features, excludes leakage, compares models, tests chronological and mixture generalization, and evaluates reduced sensor sets.", pt: "O pipeline de pesquisa audita sinais brutos, cria atributos, exclui leakage, compara modelos, testa generalização cronológica e em misturas e avalia conjuntos reduzidos de sensores." },
    decisions: [
      { en: "Audit leakage before optimizing any model.", pt: "Auditar leakage antes de otimizar qualquer modelo." },
      { en: "Prioritize chronological, stability, and external-mixture tests.", pt: "Priorizar testes cronológicos, de estabilidade e de misturas externas." },
      { en: "Treat sensor reduction as a deployment decision, not only a modeling exercise.", pt: "Tratar redução de sensores como decisão de implantação, não apenas exercício de modelagem." },
    ],
    capabilities: [
      { name: { en: "ETL and data-quality control", pt: "ETL e controle de qualidade de dados" }, status: "implemented" },
      { name: { en: "Feature engineering", pt: "Engenharia de atributos" }, status: "implemented" },
      { name: { en: "Leakage-aware ML validation", pt: "Validação de ML com controle de leakage" }, status: "implemented" },
      { name: { en: "Research visualization", pt: "Visualização para pesquisa" }, status: "implemented" },
    ],
    technologies: ["Python", "Random Forest", "Feature engineering", "Data-quality pipeline", "Chronological validation", "Stability testing", "Model comparison"],
    learnings: [
      { en: "Leakage control must precede model selection.", pt: "O controle de leakage deve preceder a seleção do modelo." },
      { en: "Stability and deployability can be more valuable than peak in-sample accuracy.", pt: "Estabilidade e viabilidade de implantação podem valer mais do que a maior acurácia dentro da amostra." },
    ],
    publicBoundary: { en: "Approved figures, methods, and a reproducible sample can be public; unpublished research data and restricted raw signals remain private.", pt: "Figuras aprovadas, métodos e uma amostra reproduzível podem ser públicos; dados de pesquisa não publicados e sinais brutos restritos permanecem privados." },
    visualPlan: { en: "Signal-quality panels, leakage audit, chronological validation, model comparison, and sensor-reduction results in a reproducible research narrative.", pt: "Painéis de qualidade dos sinais, auditoria de leakage, validação cronológica, comparação de modelos e resultados da redução de sensores em uma narrativa reproduzível." },
  },
  "control-biz": {
    problem: { en: "Complex business work requires multiple specialties, but unstructured AI collaboration loses context, accountability, cost control, and a clear path from proposal to approved action.", pt: "Trabalho empresarial complexo exige várias especialidades, mas colaboração de IA sem estrutura perde contexto, responsabilidade, controle de custos e um caminho claro da proposta à ação aprovada." },
    operation: { en: "A mission engine assembles specialist teams, routes models, runs parallel rounds, records inter-agent requests, and moves proposals through review, revision, approval, and audit states.", pt: "Um motor de missões monta equipes especialistas, direciona modelos, executa rodadas paralelas, registra pedidos entre agentes e conduz propostas por revisão, ajuste, aprovação e auditoria." },
    decisions: [
      { en: "Isolate agent context and make handoffs explicit.", pt: "Isolar o contexto dos agentes e tornar as passagens explícitas." },
      { en: "Separate the real provider-backed orchestrator from the deterministic public demo.", pt: "Separar o orquestrador real conectado a provedores da demo pública determinística." },
      { en: "Put depth, cost, permissions, revision, and human approval in the operating model.", pt: "Incorporar profundidade, custo, permissões, revisão e aprovação humana ao modelo operacional." },
    ],
    capabilities: [
      { name: { en: "Multi-agent systems", pt: "Sistemas multiagente" }, status: "implemented" },
      { name: { en: "Agent orchestration", pt: "Orquestração de agentes" }, status: "implemented" },
      { name: { en: "Agent audit and observability", pt: "Auditoria e observabilidade de agentes" }, status: "implemented" },
      { name: { en: "Process automation", pt: "Automação de processos" }, status: "implemented" },
      { name: { en: "Token and process-cost control", pt: "Controle de tokens e custos de processos" }, status: "implemented" },
      { name: { en: "RAG over operating knowledge", pt: "RAG sobre conhecimento operacional" }, status: "planned" },
    ],
    technologies: ["React 18", "Vite 6", "Fastify 5", "JavaScript", "OpenAI SDK", "Anthropic SDK", "Tailwind CSS 4", "React Markdown", "Lucide React", "JSON persistence", "Audit logs", "i18n"],
    learnings: [
      { en: "Useful orchestration depends on state transitions and acceptance criteria, not the number of agents.", pt: "Orquestração útil depende de transições de estado e critérios de aceite, não da quantidade de agentes." },
      { en: "A synthetic demo must preserve workflow truth while removing infrastructure and data risk.", pt: "Uma demo sintética deve preservar a verdade do workflow removendo riscos de infraestrutura e dados." },
    ],
    publicBoundary: { en: "The public demo uses synthetic missions and local deterministic behavior; provider credentials, private prompts, operational data, and protected integrations remain outside the repository.", pt: "A demo pública usa missões sintéticas e comportamento local determinístico; credenciais de provedores, prompts privados, dados operacionais e integrações protegidas ficam fora do repositório." },
    visualPlan: { en: "Polished mission creation, team assembly, live round, structured request, proposal revision, approval, cost, and audit views in one guided scenario.", pt: "Criação refinada de missão, montagem da equipe, rodada ao vivo, pedido estruturado, revisão de proposta, aprovação, custo e auditoria em um cenário guiado." },
  },
  "lea-command-center": {
    problem: { en: "Acquisitions create fragmented systems, conflicting master data, migration dependencies, exceptions, and consequential decisions that cannot be managed safely in disconnected spreadsheets.", pt: "Aquisições criam sistemas fragmentados, dados mestres conflitantes, dependências de migração, exceções e decisões relevantes que não podem ser geridas com segurança em planilhas desconectadas." },
    operation: { en: "The command center organizes migration waves, source-to-target mappings, canonical tables, agent queues, exceptions, risk, budgets, and human approvals in one supervised flow.", pt: "O command center organiza ondas de migração, mapeamentos entre origem e destino, tabelas canônicas, filas de agentes, exceções, riscos, orçamento e aprovações humanas em um único fluxo supervisionado." },
    decisions: [
      { en: "Use simulated enterprise data in the public prototype.", pt: "Usar dados empresariais simulados no protótipo público." },
      { en: "Require accountable human approval for consequential migration changes.", pt: "Exigir aprovação humana responsável para mudanças relevantes da migração." },
      { en: "Keep AI access server-side and fail closed when authorization is missing.", pt: "Manter o acesso à IA no servidor e bloquear por padrão quando faltar autorização." },
    ],
    capabilities: [
      { name: { en: "Enterprise data integration", pt: "Integração de dados empresariais" }, status: "prototype" },
      { name: { en: "Migration workflow orchestration", pt: "Orquestração de workflows de migração" }, status: "prototype" },
      { name: { en: "Multi-agent supervision", pt: "Supervisão multiagente" }, status: "prototype" },
      { name: { en: "Risk and exception visualization", pt: "Visualização de riscos e exceções" }, status: "implemented" },
      { name: { en: "RAG over migration knowledge", pt: "RAG sobre conhecimento de migração" }, status: "planned" },
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Cloudflare Pages", "Cloudflare Functions", "Anthropic API", "Server-side AI proxy", "Role-based access", "Human approval", "Synthetic data"],
    learnings: [
      { en: "Integration is a governance problem as much as a technical one.", pt: "Integração é tanto um problema de governança quanto técnico." },
      { en: "Exceptions and canonical-data conflicts must be visible before automation can be trusted.", pt: "Exceções e conflitos de dados canônicos precisam estar visíveis antes que a automação seja confiável." },
    ],
    publicBoundary: { en: "The public artifact is a prototype with simulated data. The system is designed for real data sources and enterprise integrations, but those connections and records cannot be included in the demo.", pt: "O artefato público é um protótipo com dados simulados. O sistema foi projetado para fontes de dados e integrações empresariais reais, mas essas conexões e registros não podem entrar na demo." },
    visualPlan: { en: "An acquisition scenario showing migration waves, canonical conflicts, agent work queues, risk escalation, budget impact, and an approval decision.", pt: "Um cenário de aquisição mostrando ondas de migração, conflitos canônicos, filas de trabalho dos agentes, escalonamento de risco, impacto orçamentário e uma decisão de aprovação." },
  },
  "retail-intelligence": {
    problem: { en: "Small grocery networks often manage financial, inventory, fiscal, workforce, pricing, purchasing, and expansion decisions across fragmented reports with no unified operational diagnosis.", pt: "Pequenas redes de supermercados frequentemente gerenciam decisões financeiras, de estoque, fiscais, de workforce, precificação, compras e expansão em relatórios fragmentados e sem diagnóstico operacional unificado." },
    operation: { en: "The dashboard unifies management modules, store and product drilldowns, AI-assisted insights, prioritized actions, and decision support for daily operations and expansion.", pt: "O dashboard integra módulos de gestão, detalhamento por loja e produto, insights assistidos por IA, ações priorizadas e suporte à decisão para operações diárias e expansão." },
    decisions: [
      { en: "Connect financial, inventory, fiscal, workforce, and market signals in one management workflow.", pt: "Conectar sinais financeiros, de estoque, fiscais, de workforce e mercado em um único fluxo de gestão." },
      { en: "Make insights actionable through priorities and drilldowns rather than isolated charts.", pt: "Tornar insights acionáveis por meio de prioridades e detalhamentos, não gráficos isolados." },
      { en: "Recreate the public experience with simulated data and no client identifiers.", pt: "Recriar a experiência pública com dados simulados e sem identificadores do cliente." },
    ],
    capabilities: [
      { name: { en: "ETL and operational data integration", pt: "ETL e integração de dados operacionais" }, status: "implemented" },
      { name: { en: "AI-assisted management insights", pt: "Insights de gestão assistidos por IA" }, status: "implemented" },
      { name: { en: "Pricing and margin analytics", pt: "Analytics de preço e margem" }, status: "implemented" },
      { name: { en: "Workforce and inventory optimization", pt: "Otimização de workforce e estoque" }, status: "implemented" },
      { name: { en: "Executive data visualization", pt: "Visualização executiva de dados" }, status: "implemented" },
    ],
    technologies: ["Production data integrations", "ETL pipelines", "AI insights", "Retail analytics", "Financial analytics", "Inventory analytics", "Pricing analytics", "Workforce analytics", "Executive dashboards", "Production stack under disclosure review"],
    learnings: [
      { en: "Operational value comes from connecting metrics to decisions and actions.", pt: "Valor operacional vem de conectar métricas a decisões e ações." },
      { en: "A useful synthetic demo must preserve relationships and workflows, not imitate real numbers.", pt: "Uma demo sintética útil deve preservar relações e workflows, não imitar números reais." },
    ],
    publicBoundary: { en: "The real system operates with client data and integrations that remain private. The public prototype will use simulated stores, products, people, finances, fiscal events, and operational data.", pt: "O sistema real opera com dados e integrações do cliente que permanecem privados. O protótipo público usará lojas, produtos, pessoas, finanças, eventos fiscais e dados operacionais simulados." },
    visualPlan: { en: "A polished synthetic network with executive overview, margin and pricing, inventory risk, workforce planning, fiscal status, expansion analysis, and AI recommendations.", pt: "Uma rede sintética visualmente refinada com visão executiva, margem e preço, risco de estoque, planejamento de workforce, situação fiscal, análise de expansão e recomendações de IA." },
  },
  "ai-parts": {
    problem: { en: "Procurement, workforce, risk, and audit signals become difficult to coordinate when operational state, AI recommendations, and approval responsibility live in separate tools.", pt: "Sinais de compras, workforce, risco e auditoria tornam-se difíceis de coordenar quando estado operacional, recomendações de IA e responsabilidade de aprovação vivem em ferramentas separadas." },
    operation: { en: "A Controller AI receives a grounded operational snapshot, coordinates specialist views, explains risks and recommendations, and routes consequential actions through human approval.", pt: "Uma Controller AI recebe um snapshot contextualizado do estado operacional, coordena visões especialistas, explica riscos e recomendações e direciona ações relevantes para aprovação humana." },
    decisions: [
      { en: "Use the language model as a controller over state, not as the source of truth.", pt: "Usar o modelo de linguagem como controlador sobre o estado, não como fonte da verdade." },
      { en: "Keep attribution boundaries clear between leadership, team ML, and review work.", pt: "Manter claros os limites de autoria entre liderança, ML da equipe e trabalho de revisão." },
      { en: "Use deterministic and simulated integrations for the public demonstration.", pt: "Usar integrações determinísticas e simuladas na demonstração pública." },
    ],
    capabilities: [
      { name: { en: "Grounded AI control", pt: "Controle de IA contextualizado" }, status: "prototype" },
      { name: { en: "Workflow orchestration", pt: "Orquestração de workflows" }, status: "prototype" },
      { name: { en: "Human approval and audit", pt: "Aprovação humana e auditoria" }, status: "implemented" },
      { name: { en: "Operational data visualization", pt: "Visualização de dados operacionais" }, status: "implemented" },
      { name: { en: "RAG over policies and parts knowledge", pt: "RAG sobre políticas e conhecimento de peças" }, status: "planned" },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Claude Haiku", "Cloudflare Worker", "State grounding", "JSON operational snapshot", "Human approval", "Audit trail", "Synthetic data"],
    learnings: [
      { en: "Grounded state and approval controls are more important than conversational fluency.", pt: "Estado contextualizado e controles de aprovação são mais importantes do que fluência conversacional." },
      { en: "Team contribution boundaries strengthen, rather than weaken, the credibility of the case.", pt: "Limites de contribuição da equipe fortalecem, em vez de enfraquecer, a credibilidade do case." },
    ],
    publicBoundary: { en: "The public artifact is a prototype with simulated data. It is designed to connect to real operational data and integrations, but those records, endpoints, and credentials cannot be part of the demo.", pt: "O artefato público é um protótipo com dados simulados. Ele foi projetado para conectar dados e integrações operacionais reais, mas esses registros, endpoints e credenciais não podem fazer parte da demo." },
    visualPlan: { en: "A refined operational scenario connecting procurement, workforce, risk, Controller AI reasoning, approval, and audit history.", pt: "Um cenário operacional refinado conectando compras, workforce, risco, raciocínio da Controller AI, aprovação e histórico de auditoria." },
  },
  inflick: {
    problem: { en: "Influencer campaigns fragment matching, outreach, content validation, pricing, risk, measurement, and human escalation across disconnected decisions.", pt: "Campanhas com influenciadores fragmentam matching, contato, validação de conteúdo, preço, risco, medição e escalonamento humano em decisões desconectadas." },
    operation: { en: "Specialized AI services and conversational agents support semantic matching, campaign workflows, content checks, sentiment, anomalies, ROI, reporting, and escalation.", pt: "Serviços especializados de IA e agentes conversacionais apoiam matching semântico, workflows de campanha, validação de conteúdo, sentimento, anomalias, ROI, relatórios e escalonamento." },
    decisions: [
      { en: "Separate specialized analytical services from the conversational agent layer.", pt: "Separar serviços analíticos especializados da camada de agentes conversacionais." },
      { en: "Keep human escalation explicit for commercial and reputational decisions.", pt: "Manter escalonamento humano explícito para decisões comerciais e reputacionais." },
      { en: "Present current maturity honestly while stabilizing the golden path.", pt: "Apresentar a maturidade atual com honestidade enquanto o fluxo principal é estabilizado." },
    ],
    capabilities: [
      { name: { en: "Semantic retrieval and matching", pt: "Recuperação semântica e matching" }, status: "implemented" },
      { name: { en: "AI service orchestration", pt: "Orquestração de serviços de IA" }, status: "prototype" },
      { name: { en: "Campaign analytics and visualization", pt: "Analytics e visualização de campanhas" }, status: "prototype" },
      { name: { en: "Pricing and ROI decision support", pt: "Suporte à decisão de preço e ROI" }, status: "prototype" },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Prisma", "Relational database", "Claude", "Vector embeddings", "Semantic matching", "E2E testing", "Campaign analytics"],
    learnings: [
      { en: "AI features need a coherent campaign workflow to create business value.", pt: "Funcionalidades de IA precisam de um workflow coerente de campanha para gerar valor." },
      { en: "Synthetic campaign data is essential for a safe, convincing public demonstration.", pt: "Dados sintéticos de campanha são essenciais para uma demonstração pública segura e convincente." },
    ],
    publicBoundary: { en: "A synthetic campaign, creators, messages, pricing, and results can be public; real accounts, customer data, provider keys, and private integrations remain protected.", pt: "Campanha, criadores, mensagens, preços e resultados sintéticos podem ser públicos; contas reais, dados de clientes, chaves de provedores e integrações privadas permanecem protegidos." },
    visualPlan: { en: "A single campaign journey from creator discovery through outreach, content validation, risk escalation, and ROI reporting.", pt: "Uma jornada única de campanha, da descoberta de criadores ao contato, validação de conteúdo, escalonamento de risco e relatório de ROI." },
  },
  "minha-secretaria": {
    problem: { en: "Administrative work is spread across voice, email, calendar, meetings, and follow-ups, while assistants can create risk when they act without clear authorization.", pt: "Trabalho administrativo se espalha entre voz, e-mail, calendário, reuniões e acompanhamentos, enquanto assistentes criam risco quando agem sem autorização clara." },
    operation: { en: "A voice-led assistant understands requests, calls bounded tools, prepares communications and scheduling actions, and uses confirmation gates before consequential external changes.", pt: "Um assistente orientado por voz entende solicitações, aciona ferramentas delimitadas, prepara comunicações e ações de agenda e usa confirmações antes de mudanças externas relevantes." },
    decisions: [
      { en: "Design confirmation as part of the interaction, not as an afterthought.", pt: "Projetar a confirmação como parte da interação, não como detalhe posterior." },
      { en: "Document which actions are live, mocked, or planned.", pt: "Documentar quais ações são reais, simuladas ou planejadas." },
      { en: "Demonstrate one reliable end-to-end administrative journey.", pt: "Demonstrar uma jornada administrativa ponta a ponta confiável." },
    ],
    capabilities: [
      { name: { en: "Tool and workflow orchestration", pt: "Orquestração de ferramentas e workflows" }, status: "prototype" },
      { name: { en: "Administrative process automation", pt: "Automação de processos administrativos" }, status: "prototype" },
      { name: { en: "Realtime voice interaction", pt: "Interação por voz em tempo real" }, status: "prototype" },
      { name: { en: "Human confirmation and audit", pt: "Confirmação humana e auditoria" }, status: "prototype" },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Realtime voice", "Function calling", "Email APIs", "Calendar APIs", "Meeting workflows", "Confirmation gates"],
    learnings: [
      { en: "Trust depends on action authorization and recovery, not only recognition quality.", pt: "Confiança depende de autorização e recuperação das ações, não apenas da qualidade do reconhecimento." },
      { en: "Voice products need visible state, fallback, and cancellation paths.", pt: "Produtos de voz precisam de estado visível, fallback e caminhos de cancelamento." },
    ],
    publicBoundary: { en: "The public demo must use a synthetic workspace and sandboxed tools; real mailboxes, calendars, contacts, tokens, and personal messages remain private.", pt: "A demo pública deve usar um workspace sintético e ferramentas isoladas; caixas de e-mail, calendários, contatos, tokens e mensagens pessoais reais permanecem privados." },
    visualPlan: { en: "A polished voice-to-action flow showing intent, tool plan, confirmation, execution, and an auditable result.", pt: "Um fluxo refinado de voz à ação mostrando intenção, plano de ferramentas, confirmação, execução e resultado auditável." },
  },
  intvox: {
    problem: { en: "Multilingual conversations across web, browser, and mobile channels suffer from latency, unclear language direction, permission friction, and inconsistent recovery.", pt: "Conversas multilíngues em web, navegador e celular sofrem com latência, direção de idioma pouco clara, fricção de permissões e recuperação inconsistente." },
    operation: { en: "Streaming audio is captured, routed through translation, and returned in the selected language direction across coordinated web, extension, and mobile surfaces.", pt: "Áudio em streaming é capturado, direcionado à tradução e devolvido no idioma selecionado em superfícies coordenadas de web, extensão e celular." },
    decisions: [
      { en: "Prioritize one measurable golden path before broad platform coverage.", pt: "Priorizar um fluxo principal mensurável antes da cobertura ampla de plataformas." },
      { en: "Make microphone permission, language direction, latency, and connection state explicit.", pt: "Tornar explícitos permissão do microfone, direção dos idiomas, latência e estado da conexão." },
      { en: "Instrument reconnect, cancellation, and failure paths.", pt: "Instrumentar reconexão, cancelamento e caminhos de falha." },
    ],
    capabilities: [
      { name: { en: "Realtime streaming pipeline", pt: "Pipeline de streaming em tempo real" }, status: "prototype" },
      { name: { en: "Cross-platform orchestration", pt: "Orquestração multiplataforma" }, status: "prototype" },
      { name: { en: "AI translation", pt: "Tradução com IA" }, status: "prototype" },
      { name: { en: "Latency and reliability observability", pt: "Observabilidade de latência e confiabilidade" }, status: "planned" },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Browser extension APIs", "Mobile", "Media APIs", "Realtime audio", "Streaming", "Translation services"],
    learnings: [
      { en: "Latency and recovery are core experience features in realtime products.", pt: "Latência e recuperação são funcionalidades centrais da experiência em produtos em tempo real." },
      { en: "Cross-platform ambition must follow a proven end-to-end interaction.", pt: "Ambição multiplataforma deve vir depois de uma interação ponta a ponta comprovada." },
    ],
    publicBoundary: { en: "Only consented or synthetic audio can be shown; real recordings, account tokens, and provider credentials remain private.", pt: "Apenas áudio consentido ou sintético pode ser mostrado; gravações reais, tokens de contas e credenciais de provedores permanecem privados." },
    visualPlan: { en: "A timed conversation sequence showing capture, language direction, partial translation, final output, latency, and recovery.", pt: "Uma sequência cronometrada mostrando captura, direção dos idiomas, tradução parcial, saída final, latência e recuperação." },
  },
  recordia: {
    problem: { en: "Preserving future messages for loved ones creates technical, emotional, privacy, identity, consent, and release-timing risks that a simple media archive does not solve.", pt: "Preservar mensagens futuras para pessoas próximas cria riscos técnicos, emocionais, de privacidade, identidade, consentimento e liberação que um simples arquivo de mídia não resolve." },
    operation: { en: "A consent-first workflow links a person, message, recipient, release condition, revocation, and audit trail before any generative media layer is added.", pt: "Um fluxo orientado ao consentimento conecta pessoa, mensagem, destinatário, condição de liberação, revogação e trilha de auditoria antes de qualquer camada de mídia generativa." },
    decisions: [
      { en: "Build the trust and consent model before voice or video generation.", pt: "Construir o modelo de confiança e consentimento antes da geração de voz ou vídeo." },
      { en: "Use fictional identities and messages for every public scenario.", pt: "Usar identidades e mensagens fictícias em todos os cenários públicos." },
      { en: "Treat revocation and release authorization as first-class states.", pt: "Tratar revogação e autorização de liberação como estados centrais." },
    ],
    capabilities: [
      { name: { en: "Event-driven workflow", pt: "Workflow orientado a eventos" }, status: "prototype" },
      { name: { en: "Consent and release audit", pt: "Auditoria de consentimento e liberação" }, status: "prototype" },
      { name: { en: "Generative media orchestration", pt: "Orquestração de mídia generativa" }, status: "planned" },
      { name: { en: "Identity and access controls", pt: "Controles de identidade e acesso" }, status: "planned" },
    ],
    technologies: ["React", "Supabase", "Relational data", "Event workflows", "Generative text", "Voice and video roadmap", "Consent controls", "Audit history"],
    learnings: [
      { en: "Trust architecture is the product, not a compliance layer around it.", pt: "A arquitetura de confiança é o produto, não uma camada de compliance ao redor dele." },
      { en: "Media sophistication should follow proven identity, consent, and release controls.", pt: "Sofisticação de mídia deve vir depois de controles comprovados de identidade, consentimento e liberação." },
    ],
    publicBoundary: { en: "Only fictional people, synthetic messages, and simulated release events may appear in the demo; no real family content, identity material, or biometric media is included.", pt: "Somente pessoas fictícias, mensagens sintéticas e eventos de liberação simulados podem aparecer na demo; nenhum conteúdo familiar, material de identidade ou mídia biométrica real é incluído." },
    visualPlan: { en: "A restrained narrative showing message creation, consent, recipient designation, release rules, revocation, and audit history.", pt: "Uma narrativa sóbria mostrando criação da mensagem, consentimento, definição do destinatário, regras de liberação, revogação e histórico de auditoria." },
  },
  "jersey-nation": {
    problem: { en: "A commerce case needs to show more than a storefront by connecting product, customer, order, analytics, and assistant behavior to a coherent data model.", pt: "Um case de comércio precisa mostrar mais do que uma vitrine, conectando produto, cliente, pedido, analytics e comportamento dos assistentes a um modelo de dados coerente." },
    operation: { en: "Catalog, customer, cart, order, behavioral events, dashboards, and separate customer and admin assistants are modeled as one commerce system.", pt: "Catálogo, cliente, carrinho, pedido, eventos comportamentais, dashboards e assistentes separados para cliente e administração são modelados como um único sistema de comércio." },
    decisions: [
      { en: "Separate customer and administrative assistant responsibilities.", pt: "Separar responsabilidades dos assistentes de cliente e administração." },
      { en: "Use the relational model as the foundation for flows and analytics.", pt: "Usar o modelo relacional como base dos fluxos e analytics." },
      { en: "Keep it as a supporting case unless a persistent end-to-end slice is completed.", pt: "Mantê-lo como case complementar até concluir um fluxo persistente ponta a ponta." },
    ],
    capabilities: [
      { name: { en: "Relational data modeling", pt: "Modelagem relacional de dados" }, status: "implemented" },
      { name: { en: "Commerce analytics visualization", pt: "Visualização de analytics de comércio" }, status: "implemented" },
      { name: { en: "Conversational assistants", pt: "Assistentes conversacionais" }, status: "implemented" },
      { name: { en: "Transactional workflow", pt: "Workflow transacional" }, status: "prototype" },
    ],
    technologies: ["ASP.NET Core", "C#", "Razor", "Entity and relational modeling", "SQL", "Chart.js", "Botpress", "Behavioral events", "Interactive ERD"],
    learnings: [
      { en: "The data model determines which operational and behavioral questions the product can answer.", pt: "O modelo de dados determina quais perguntas operacionais e comportamentais o produto consegue responder." },
      { en: "A successful build is not the same as a production-ready commerce workflow.", pt: "Um build aprovado não equivale a um workflow de comércio pronto para produção." },
    ],
    publicBoundary: { en: "The public version must use synthetic customers and orders plus cleared product imagery; no credentials, personal data, or unlicensed assets are included.", pt: "A versão pública deve usar clientes e pedidos sintéticos e imagens de produtos liberadas; nenhuma credencial, dado pessoal ou ativo sem licença será incluído." },
    visualPlan: { en: "A catalog-to-order vertical slice supported by an interactive ERD, executive analytics, and clearly separated customer and admin assistants.", pt: "Um fluxo vertical do catálogo ao pedido apoiado por ERD interativo, analytics executivos e assistentes claramente separados para cliente e administração." },
  },
  effigia: {
    problem: { en: "Generic video filters modify the whole frame, reduce facial detail, and often send sensitive imagery to a server; character animation also needs stable facial motion rather than a beauty effect alone.", pt: "Filtros genéricos de vídeo alteram todo o quadro, reduzem detalhes faciais e frequentemente enviam imagens sensíveis a um servidor; animação de personagem também precisa de movimento facial estável, não apenas de um efeito de beleza." },
    operation: { en: "Local MediaPipe analysis maps 468 facial points, region masks target treatment, a multi-pass WebGL pipeline filters the live stream, and the facial-motion map can drive a character-animation layer.", pt: "A análise local do MediaPipe mapeia 468 pontos faciais, máscaras regionais direcionam o tratamento, um pipeline WebGL multi-pass filtra o stream ao vivo e o mapa de movimento facial pode controlar uma camada de animação de personagem." },
    decisions: [
      { en: "Run facial analysis and treatment locally for privacy and latency.", pt: "Executar análise e tratamento facial localmente por privacidade e latência." },
      { en: "Treat facial regions independently instead of applying a global blur.", pt: "Tratar regiões faciais de forma independente em vez de aplicar desfoque global." },
      { en: "Use the same mapped motion as a reusable input for character animation.", pt: "Usar o mesmo movimento mapeado como entrada reutilizável para animação de personagem." },
      { en: "Fail safely to the original stream when detection or rendering is unavailable.", pt: "Retornar com segurança ao stream original quando detecção ou renderização não estiverem disponíveis." },
    ],
    capabilities: [
      { name: { en: "Realtime computer vision", pt: "Visão computacional em tempo real" }, status: "implemented" },
      { name: { en: "Local inference", pt: "Inferência local" }, status: "implemented" },
      { name: { en: "GPU image-processing pipeline", pt: "Pipeline de tratamento de imagem em GPU" }, status: "implemented" },
      { name: { en: "Facial motion mapping", pt: "Mapeamento de movimento facial" }, status: "implemented" },
      { name: { en: "Character-animation control", pt: "Controle de animação de personagem" }, status: "prototype" },
    ],
    technologies: ["TypeScript", "Chrome Manifest V3", "MediaPipe Tasks Vision", "Face Landmarker", "468 facial landmarks", "WebAssembly", "WebGL2", "GLSL shaders", "Canvas", "MediaStream API", "getUserMedia interception", "Vite"],
    learnings: [
      { en: "Region-aware treatment preserves identity and detail better than a global filter.", pt: "Tratamento por regiões preserva identidade e detalhes melhor do que um filtro global." },
      { en: "Stable coordinate mapping, smoothing, and latency control are essential when vision drives animation.", pt: "Mapeamento estável de coordenadas, suavização e controle de latência são essenciais quando visão computacional controla animação." },
      { en: "Privacy-first local inference can also improve responsiveness and product differentiation.", pt: "Inferência local orientada à privacidade também pode melhorar responsividade e diferenciação do produto." },
    ],
    publicBoundary: { en: "The public demo uses consented or synthetic faces and a non-identifying character. No captured biometric data or video is retained, uploaded, or included in the repository.", pt: "A demo pública usa rostos consentidos ou sintéticos e um personagem não identificável. Nenhum dado biométrico ou vídeo capturado é retido, enviado ou incluído no repositório." },
    visualPlan: { en: "A premium split-screen demo showing the original stream, regional filter treatment, the 468-point face map, and the same motion driving a character in real time.", pt: "Uma demo premium em tela dividida mostrando o stream original, o tratamento regional do filtro, o mapa facial de 468 pontos e o mesmo movimento controlando um personagem em tempo real." },
  },
  "legacy-systems": {
    problem: { en: "Collections, customer operations, pricing, location intelligence, and omnichannel decisions were fragmented across operational systems that did not turn data into coordinated action at scale.", pt: "Cobrança, operações com clientes, precificação, inteligência de localização e decisões omnichannel estavam fragmentadas em sistemas operacionais que não transformavam dados em ação coordenada em escala." },
    operation: { en: "ERP, dialing and CRM, geospatial customer bases, propensity models, recovery curves, pricing models, and channel workflows were designed as decision systems tied to daily operations.", pt: "ERP, discagem e CRM, bases geográficas de clientes, modelos de propensão, curvas de recuperação, modelos de precificação e fluxos de canais foram concebidos como sistemas de decisão ligados à operação diária." },
    decisions: [
      { en: "Design around the operating decision, not around an isolated model or dashboard.", pt: "Projetar em torno da decisão operacional, não de um modelo ou dashboard isolado." },
      { en: "Use predictive and geospatial intelligence to prioritize scarce operational capacity.", pt: "Usar inteligência preditiva e geoespacial para priorizar capacidade operacional escassa." },
      { en: "Separate personal conception and leadership from team and vendor implementation evidence.", pt: "Separar concepção e liderança pessoais das evidências de implementação por equipes e fornecedores." },
    ],
    capabilities: [
      { name: { en: "Enterprise ETL and data integration", pt: "ETL e integração de dados empresariais" }, status: "implemented" },
      { name: { en: "Predictive and pricing ML", pt: "ML preditivo e de precificação" }, status: "implemented" },
      { name: { en: "Process automation and cost reduction", pt: "Automação e redução de custos de processos" }, status: "implemented" },
      { name: { en: "Geospatial and operational visualization", pt: "Visualização geoespacial e operacional" }, status: "implemented" },
      { name: { en: "Omnichannel decision systems", pt: "Sistemas de decisão omnichannel" }, status: "implemented" },
    ],
    technologies: ["ERP", "CRM and dialing platforms", "SQL", "Enterprise ETL", "Predictive ML", "Pricing models", "Propensity models", "Recovery curves", "Geospatial databases", "Operational dashboards", "Omnichannel workflows"],
    learnings: [
      { en: "A model creates value only when integrated into incentives, process, people, and system behavior.", pt: "Um modelo só gera valor quando integrado a incentivos, processos, pessoas e comportamento dos sistemas." },
      { en: "Enterprise scale requires governance, adoption, and operational feedback alongside technology.", pt: "Escala empresarial exige governança, adoção e feedback operacional junto com tecnologia." },
    ],
    publicBoundary: { en: "Only disclosure-safe architecture reconstructions, aggregate outcomes, dated public records, and verified testimony can be shown; proprietary code, client data, and employer-confidential material remain private.", pt: "Somente reconstruções de arquitetura seguras, resultados agregados, registros públicos datados e testemunhos verificados podem ser mostrados; código proprietário, dados de clientes e material confidencial dos empregadores permanecem privados." },
    visualPlan: { en: "A historical systems map connecting Multcob, Multcall, geospatial data, pricing ML, recovery analytics, and omnichannel operations to the decisions they improved.", pt: "Um mapa histórico de sistemas conectando Multcob, Multcall, dados geoespaciais, ML de precificação, analytics de recuperação e operações omnichannel às decisões que melhoraram." },
  },
};

const projectOrder = [
  "signinglab",
  "last-myth",
  "enose",
  "control-biz",
  "effigia",
  "lea-command-center",
  "retail-intelligence",
  "ai-parts",
  "inflick",
  "minha-secretaria",
  "intvox",
  "recordia",
  "jersey-nation",
  "legacy-systems",
];

export const projects: Project[] = projectCatalog
  .map((project) => ({ ...project, ...projectDetails[project.id] }))
  .sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));

export const statusCopy: Record<EvidenceStatus, Localized> = {
  public: { en: "Public product and evidence", pt: "Produto e evidências públicas" },
  sanitized: { en: "Selected evidence available", pt: "Evidências selecionadas disponíveis" },
  pending: { en: "Historical case being documented", pt: "Case histórico em documentação" },
  archived: { en: "Product learning case", pt: "Case de aprendizado de produto" },
};
