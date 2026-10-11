import type { EvidenceStatus, Localized } from "./projects";

export type CareerStage = {
  id: string;
  period: string;
  chapter: Localized;
  context: Localized;
  thesis: Localized;
  deliveries: Localized[];
  metrics: { value: string; label: Localized }[];
  evidence: Localized;
  evidenceStatus: EvidenceStatus;
  projectIds: string[];
};

export const careerStages: CareerStage[] = [
  {
    id: "foundation",
    period: "2004–2008",
    chapter: { en: "Make scale technically possible", pt: "Tornar a escala tecnicamente possível" },
    context: { en: "IT & Marketing Manager · Zanc Group", pt: "Gerente de TI e Marketing · Grupo Zanc" },
    thesis: {
      en: "The operation could not grow on legacy telecom and fragmented infrastructure. The first transformation was to redesign the foundation itself.",
      pt: "A operação não conseguiria crescer com telecom legado e infraestrutura fragmentada. A primeira transformação foi redesenhar a própria fundação.",
    },
    deliveries: [
      { en: "Replaced legacy telecom with a VoIP and Asterisk architecture", pt: "Substituição da telecom legada por arquitetura VoIP e Asterisk" },
      { en: "Connected technology, data, marketing, and operating needs", pt: "Integração entre tecnologia, dados, marketing e necessidades operacionais" },
      { en: "Created the technical base for national contact-center growth", pt: "Criação da base técnica para o crescimento nacional do contact center" },
    ],
    metrics: [
      { value: "~40%", label: { en: "telecom cost reduction", pt: "redução de custos de telecom" } },
      { value: "2004", label: { en: "start of the documented transformation arc", pt: "início do arco documentado de transformação" } },
    ],
    evidence: {
      en: "Career records support the role and outcome. Architecture reconstruction and dated artifacts are being assembled.",
      pt: "Registros profissionais sustentam o papel e o resultado. A reconstrução da arquitetura e os artefatos datados estão sendo reunidos.",
    },
    evidenceStatus: "pending",
    projectIds: ["legacy-systems"],
  },
  {
    id: "platforms",
    period: "2008–2022",
    chapter: { en: "Turn operations into proprietary platforms", pt: "Transformar operações em plataformas proprietárias" },
    context: { en: "Executive Director · Technology, Strategy & Marketing · Zanc Group", pt: "Diretor Executivo · Tecnologia, Estratégia e Marketing · Grupo Zanc" },
    thesis: {
      en: "Scale required more than software procurement. It required original platforms, decision intelligence, and an operating model designed around the business.",
      pt: "Escala exigia mais do que comprar software. Exigia plataformas originais, inteligência de decisão e um modelo operacional desenhado para o negócio.",
    },
    deliveries: [
      { en: "Conceived Multcall, a proprietary CRM and dialing platform with recording, VoIP, and decision capabilities", pt: "Concepção do Multcall, plataforma proprietária de CRM e discagem com gravação, VoIP e recursos de decisão" },
      { en: "Conceived Multcob for centralized credit recovery across the Sicredi network", pt: "Concepção do Multcob para recuperação centralizada de crédito na rede Sicredi" },
      { en: "Built an integrated data and analytics capability for propensity, segmentation, collections, and sales", pt: "Criação de uma capacidade integrada de dados e analytics para propensão, segmentação, cobrança e vendas" },
    ],
    metrics: [
      { value: "60M+", label: { en: "individuals in the integrated data platform", pt: "pessoas na plataforma integrada de dados" } },
      { value: "100+", label: { en: "cooperatives supported by Multcob", pt: "cooperativas apoiadas pelo Multcob" } },
      { value: "1,000+", label: { en: "service locations in the transformation scope", pt: "pontos de atendimento no escopo da transformação" } },
    ],
    evidence: {
      en: "Career records support scope and metrics. Specifications, diagrams, outcomes, and stakeholder corroboration remain in the evidence queue.",
      pt: "Registros profissionais sustentam escopo e métricas. Especificações, diagramas, resultados e corroboração de stakeholders seguem na fila de evidências.",
    },
    evidenceStatus: "pending",
    projectIds: ["legacy-systems"],
  },
  {
    id: "executive-scale",
    period: "2017–2022",
    chapter: { en: "Expand leadership across assets, ventures, and borders", pt: "Expandir a liderança entre ativos, ventures e fronteiras" },
    context: { en: "Executive Director & Partner · MTZ Data · Zanc governance · Upper DataSoftware", pt: "Diretor Executivo e Sócio · MTZ Data · Governança Zanc · Upper DataSoftware" },
    thesis: {
      en: "The mandate widened from systems to enterprise value: governance, distressed assets, venture building, international operations, and complex transactions.",
      pt: "O mandato avançou de sistemas para valor empresarial: governança, ativos estressados, criação de ventures, operações internacionais e transações complexas.",
    },
    deliveries: [
      { en: "Co-led portfolio recovery, real-estate, compliance, and performance strategy at MTZ", pt: "Coliderança de recuperação de portfólios, ativos imobiliários, compliance e performance na MTZ" },
      { en: "Directed cross-border operations and acquisition integration, including Portugal and Italy", pt: "Direção de operações e integração de aquisição internacionais, incluindo Portugal e Itália" },
      { en: "Extended proprietary capabilities into automation and data-intelligence ventures", pt: "Expansão das capacidades proprietárias para ventures de automação e inteligência de dados" },
    ],
    metrics: [
      { value: "20+", label: { en: "senior leaders led", pt: "líderes seniores liderados" } },
      { value: "200+", label: { en: "professionals across functions", pt: "profissionais entre diferentes funções" } },
      { value: "R$78M", label: { en: "annual operating budget managed", pt: "orçamento operacional anual gerenciado" } },
    ],
    evidence: {
      en: "Executive roles and scale are resume-documented. Transaction, governance, and operating artifacts require disclosure review.",
      pt: "Papéis executivos e escala estão documentados no currículo. Artefatos transacionais, de governança e operação exigem revisão de divulgação.",
    },
    evidenceStatus: "sanitized",
    projectIds: ["legacy-systems", "inflick"],
  },
  {
    id: "investment-models",
    period: "2021–2025",
    chapter: { en: "Create new investment and operating models", pt: "Criar novos modelos de investimento e operação" },
    context: { en: "Founder · League Consultoria · Founding Executive, AL Master Service", pt: "Fundador · League Consultoria · Executivo Fundador, AL Master Service" },
    thesis: {
      en: "Complex distressed-credit decisions needed an integrated model for sourcing, valuation, pricing, portfolio organization, and operating execution.",
      pt: "Decisões complexas sobre crédito estressado precisavam de um modelo integrado de originação, valuation, precificação, organização de portfólio e execução operacional.",
    },
    deliveries: [
      { en: "Directed portfolio sourcing, valuation, pricing, financial models, and operating strategy", pt: "Direção de originação, valuation, precificação, modelos financeiros e estratégia operacional" },
      { en: "Structured the launch transaction and analytical model for portfolio-acquisition decisions", pt: "Estruturação da transação de lançamento e do modelo analítico para aquisição de portfólios" },
      { en: "Supported the related securitization vehicle and renewed a strategic institutional relationship", pt: "Apoio ao veículo de securitização relacionado e renovação de relacionamento institucional estratégico" },
    ],
    metrics: [
      { value: "4 yrs", label: { en: "independent consulting and venture-building cycle", pt: "ciclo de consultoria independente e construção de ventures" } },
      { value: "1", label: { en: "new operating business launched", pt: "novo negócio operacional lançado" } },
    ],
    evidence: {
      en: "Roles and responsibilities are documented. Models and transaction records remain restricted until ownership and confidentiality review.",
      pt: "Papéis e responsabilidades estão documentados. Modelos e registros transacionais permanecem restritos até revisão de propriedade e confidencialidade.",
    },
    evidenceStatus: "sanitized",
    projectIds: ["legacy-systems"],
  },
  {
    id: "ai-native",
    period: "2025–present",
    chapter: { en: "Apply the same pattern to AI-native products", pt: "Aplicar o mesmo padrão a produtos nativos de IA" },
    context: { en: "Independent product R&D · USF AI & Business Analytics", pt: "P&D independente de produtos · USF AI & Business Analytics" },
    thesis: {
      en: "The current chapter applies decades of operating judgment to predictive ML, agentic systems, multimodal products, games, sports, trust, and applied research.",
      pt: "O capítulo atual aplica décadas de julgamento operacional a ML preditivo, sistemas agentic, produtos multimodais, games, esportes, confiança e pesquisa aplicada.",
    },
    deliveries: [
      { en: "Created SigningLab as a live, publicly testable decision-intelligence product", pt: "Criação da SigningLab como produto ativo e publicamente testável de inteligência de decisão" },
      { en: "Built governed multi-agent operating systems for business and game production", pt: "Criação de sistemas operacionais multiagente governados para negócios e produção de games" },
      { en: "Led applied ML research and a broader portfolio of AI product experiments", pt: "Liderança de pesquisa em ML aplicado e de um portfólio mais amplo de experimentos de produto com IA" },
    ],
    metrics: [
      { value: "12", label: { en: "AI, product, and research systems mapped", pt: "sistemas de IA, produto e pesquisa mapeados" } },
      { value: "21", label: { en: "leagues covered by SigningLab validation", pt: "ligas cobertas pela validação da SigningLab" } },
      { value: "3.9", label: { en: "current USF graduate GPA", pt: "GPA atual na pós-graduação da USF" } },
    ],
    evidence: {
      en: "Live public artifacts, local codebases, reproducible builds, research pipelines, and documented contribution boundaries.",
      pt: "Artefatos públicos ativos, bases de código locais, builds reproduzíveis, pipelines de pesquisa e limites de contribuição documentados.",
    },
    evidenceStatus: "public",
    projectIds: ["signinglab", "enose", "control-biz", "last-myth"],
  },
];
