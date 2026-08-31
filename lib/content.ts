export type HeroVariant = "a1" | "a2" | "a3";

export const workshop = {
  name: "Workshop Projeto de Decisão",
  date: "24 de setembro de 2026",
  time: "19h30",
  format: "Online ao vivo via Google Meet",
  duration: "Aproximadamente 90 minutos",
  replay: "Replay por 7 dias",
  price: "R$ 37",
  checkoutUrl: "",
} as const;

export const heroContent: Record<
  HeroVariant,
  { eyebrow: string; title: string; support: string; cta: string }
> = {
  a1: {
    eyebrow: "Workshop ao vivo para arquitetos",
    title: "Pare de mandar proposta no WhatsApp e torcer por uma resposta.",
    support:
      "Aprenda a apresentar sua proposta em uma reunião estruturada para aumentar o valor percebido, reduzir a disputa por preço e conduzir o cliente a um próximo passo claro.",
    cta: "Quero participar ao vivo por R$ 37",
  },
  a2: {
    eyebrow: "Workshop ao vivo para arquitetos",
    title:
      "Talvez o cliente esteja vendo o preço antes de entender o valor.",
    support:
      "Organize contexto, valor e decisão na ordem certa para que sua proposta deixe de entrar na conversa como apenas mais um número.",
    cta: "Quero aprender a apresentar valor",
  },
  a3: {
    eyebrow: "Workshop ao vivo para arquitetos",
    title:
      "Você aprendeu a projetar. Mas quem ensinou você a conduzir a reunião em que o cliente decide?",
    support:
      "Uma aula prática para quem entrega bons projetos, mas ainda improvisa na apresentação da proposta, no preço e no momento em que escuta um vou pensar.",
    cta: "Quero conduzir melhor minhas propostas",
  },
};

export const program = [
  "A diferença entre mandar orçamento e apresentar uma proposta.",
  "Como recuperar o diagnóstico do cliente antes de falar do seu escritório.",
  "Como construir percepção de valor sem transformar a reunião em uma palestra sobre portfólio.",
  "A ordem certa para escopo, processo, diferenciais e investimento.",
  "Como apresentar o preço sem pedir desculpas pelo próprio honorário.",
  "Como responder a vou pensar, está caro e pedidos de desconto com clareza.",
  "Como encerrar a reunião com um próximo passo objetivo.",
];

export const faqs = [
  {
    question: "Eu não levo jeito para vendas. Funciona para mim?",
    answer:
      "O workshop não ensina pressão nem técnicas agressivas. Ele organiza a conversa para que você saiba o que apresentar, em que ordem e como conduzir dúvidas com clareza.",
  },
  {
    question: "Meu problema é conseguir clientes, não fechar.",
    answer:
      "Se nenhuma oportunidade chega até você, existe um problema anterior de aquisição. Este workshop resolve outra etapa: o que fazer quando existe um cliente interessado e chega a hora da proposta.",
  },
  {
    question: "Preciso ter uma proposta pronta?",
    answer:
      "Não. Você pode usar a aula para reconstruir a proposta atual ou partir do modelo entregue no workshop.",
  },
  {
    question: "Vai ter replay?",
    answer: "Sim. O replay ficará disponível por 7 dias após a aula ao vivo.",
  },
  {
    question: "É um curso gravado?",
    answer:
      "Não. O núcleo da entrega é um workshop ao vivo, com Jesiel presente.",
  },
];
