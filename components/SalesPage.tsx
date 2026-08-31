import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import {
  faqs,
  heroContent,
  program,
  workshop,
  type HeroVariant,
} from "@/lib/content";

const phases = [
  {
    number: "01",
    title: "Contexto",
    text: "Recupere prioridades, riscos, desejos, restrições e critérios importantes. Antes de falar do seu escritório, mostre que entendeu o projeto do cliente.",
  },
  {
    number: "02",
    title: "Valor",
    text: "Conecte escopo, processo, experiência e entregas ao que o cliente quer evitar ou conquistar. O valor passa a responder à decisão real.",
  },
  {
    number: "03",
    title: "Decisão",
    text: "Apresente o investimento, trate dúvidas sem cair automaticamente no desconto e encerre com um próximo passo definido.",
  },
];

const included = [
  {
    index: "01",
    title: "Workshop ao vivo",
    text: "Aproximadamente 90 minutos para organizar a etapa mais delicada da sua venda.",
  },
  {
    index: "02",
    title: "Modelo de Proposta de Valor",
    text: "Material editável, pensado para arquitetos e pronto para adaptação ao seu escritório.",
  },
  {
    index: "03",
    title: "Mapa Mental e Checklist",
    text: "Um guia para revisar a estrutura antes e durante a apresentação da proposta.",
  },
  {
    index: "04",
    title: "Replay por 7 dias",
    text: "Tempo para rever a aula e aplicar cada etapa com calma na sua próxima proposta.",
  },
];

const audience = [
  "Você investe horas na proposta e depois recebe vou pensar.",
  "O cliente pede preço cedo e a conversa vira comparação.",
  "Você sente que precisa justificar honorários ou conceder desconto.",
  "Você envia PDF por mensagem e não sabe o que fazer quando o cliente some.",
  "Você quer vender com postura consultiva, sem parecer insistente.",
];

export function SalesPage({ variant }: { variant: HeroVariant }) {
  const hero = heroContent[variant];

  return (
    <main>
      <header className="topbar">
        <div className="container topbar-inner">
          <Image
            src="/images/logo-arqbrasil.jpg"
            alt="ARQ Brasil"
            width={300}
            height={68}
            priority
            className="brand-logo"
          />
          <span>Projeto de Decisão</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow light">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-support">{hero.support}</p>
            <CtaLink>{hero.cta}</CtaLink>
            <p className="microcopy">
              {workshop.date}, às {workshop.time}. {workshop.format}.
            </p>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              <Image
                src="/images/jesiel-hero.png"
                alt="Jesiel em um ambiente profissional de arquitetura"
                width={1000}
                height={1576}
                priority
                sizes="(max-width: 900px) 88vw, 42vw"
                className="hero-image"
              />
            </div>
            <div className="hero-note">
              <span>Ao vivo</span>
              <strong>{workshop.duration}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="event-strip" aria-label="Informações do workshop">
        <div className="container event-grid">
          <div><span>Data</span><strong>24.09.2026</strong></div>
          <div><span>Horário</span><strong>19h30</strong></div>
          <div><span>Formato</span><strong>Google Meet</strong></div>
          <div><span>Investimento</span><strong>R$ 37</strong></div>
        </div>
      </section>

      <section className="section paper audience-section">
        <div className="container split-heading">
          <div>
            <p className="eyebrow">Para quem esta aula foi criada</p>
            <h2>Você sabe entregar um bom projeto.</h2>
          </div>
          <div className="lead-column">
            <h3>O problema é o que acontece antes da assinatura.</h3>
            <p>
              Este workshop foi criado para arquitetos autônomos e donos de
              escritório que já recebem pedidos de orçamento, mas sentem que a
              apresentação da proposta ainda depende demais de improviso.
            </p>
          </div>
        </div>
        <div className="container issue-list">
          {audience.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section ink problem-section">
        <div className="container problem-layout">
          <div className="problem-statement">
            <p className="eyebrow light">O problema concreto</p>
            <h2>O silêncio depois da proposta começa antes do envio.</h2>
          </div>
          <div className="problem-copy">
            <p>
              Quando a proposta vira apenas um arquivo com escopo, prazo e
              preço, você entrega ao cliente a parte mais delicada da venda e
              sai da conversa.
            </p>
            <p>
              A partir daí, ele compara números, pede opinião para terceiros,
              adia a decisão ou simplesmente não responde. Uma proposta bonita
              ajuda, mas não substitui a conversa que constrói valor.
            </p>
          </div>
        </div>
      </section>

      <section className="section clay mechanism-section">
        <div className="container mechanism-intro">
          <p className="eyebrow light">O mecanismo</p>
          <h2>Conheça o Projeto de Decisão.</h2>
          <p>
            Uma estrutura em três fases para que a proposta deixe de funcionar
            como um arquivo de preço e passe a funcionar como uma conversa de
            decisão.
          </p>
        </div>
        <div className="container phase-grid">
          {phases.map((phase) => (
            <article key={phase.title}>
              <span>{phase.number}</span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section paper program-section">
        <div className="container program-layout">
          <div className="program-title">
            <p className="eyebrow">Programa do workshop</p>
            <h2>90 minutos para reorganizar sua próxima proposta.</h2>
            <p>
              Não é uma aula para acumular conteúdo. Você acompanha a lógica da
              reunião e sai com um processo para adaptar ao seu escritório.
            </p>
            <CtaLink>Quero aprender o Projeto de Decisão</CtaLink>
          </div>
          <ol className="program-list">
            {program.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section stone included-section">
        <div className="container centered-heading">
          <p className="eyebrow">O que está incluído</p>
          <h2>Conteúdo para entender. Materiais para aplicar.</h2>
        </div>
        <div className="container included-grid">
          {included.map((item) => (
            <article key={item.title}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section paper fit-section">
        <div className="container fit-grid">
          <article className="fit-card positive">
            <p className="eyebrow">Faz sentido para você se</p>
            <h2>Você já apresenta propostas e quer conduzi-las com mais clareza.</h2>
            <ul>
              <li>Quer defender o valor do seu trabalho sem transformar a conversa em pressão.</li>
              <li>Sente que a proposta atual informa preço, mas não ajuda o cliente a decidir.</li>
              <li>Busca um processo comercial mais claro e profissional.</li>
            </ul>
          </article>
          <article className="fit-card negative">
            <p className="eyebrow">Não faz sentido se</p>
            <h2>Você procura uma fórmula para obrigar qualquer cliente a fechar.</h2>
            <ul>
              <li>Quer apenas um template bonito sem mudar a condução da conversa.</li>
              <li>Ainda não tem nenhuma situação real de proposta para aplicar.</li>
              <li>Espera resultado sem testar e adaptar o processo ao escritório.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section ink authority-section">
        <div className="container authority-layout">
          <div className="authority-image-wrap">
            <Image
              src="/images/jesiel-autoridade.png"
              alt="Jesiel em uma reunião de trabalho"
              width={1000}
              height={1576}
              sizes="(max-width: 900px) 88vw, 42vw"
              className="authority-image"
            />
          </div>
          <div className="authority-copy">
            <p className="eyebrow light">Quem conduz</p>
            <h2>Experiência comercial aplicada à arquitetura e à construção.</h2>
            <p>
              Jesiel construiu sua trajetória entre comunicação, marketing,
              vendas, negociação e desenvolvimento de negócios. Há cerca de 10
              anos ajuda empresas a estruturar crescimento, posicionamento e
              processos comerciais.
            </p>
            <p>
              Nos últimos três anos, direcionou essa experiência ao mercado de
              arquitetura e construção. Trabalhou diretamente ao lado da equipe
              de Renata Pocztaruk, participando da estruturação de processos,
              propostas, negociações e vendas de mentorias de alto valor para
              arquitetos.
            </p>
            <p>
              Hoje também atua na gestão estratégica de uma construtora,
              acompanhando decisões comerciais, contratos e negociações. O
              workshop nasce dessa vivência prática: organizar a conversa para
              que o cliente entenda valor antes de comparar apenas preço.
            </p>
            <div className="authority-facts">
              <div><strong>10 anos</strong><span>em desenvolvimento de negócios</span></div>
              <div><strong>3 anos</strong><span>no mercado de arquitetura e construção</span></div>
              <div><strong>Prática real</strong><span>em processos e negociações de alto valor</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper guarantee-section">
        <div className="container guarantee-card">
          <div className="guarantee-number">7</div>
          <div>
            <p className="eyebrow">Redução de risco</p>
            <h2>Garantia de 7 dias.</h2>
            <p>
              Você pode solicitar o reembolso integral em até 7 dias após a
              compra. A proposta é simples: entrar porque acredita que o
              processo pode melhorar suas próximas negociações, sem assumir um
              risco desnecessário para descobrir.
            </p>
          </div>
        </div>
      </section>

      <section className="section stone faq-section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2>Antes de garantir sua vaga.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-offer" id="inscricao">
        <div className="container offer-card">
          <p className="eyebrow light">Seu próximo passo</p>
          <h2>Sua próxima proposta não precisa terminar em te aviso.</h2>
          <p className="offer-lead">
            Você não controla a decisão do cliente. Mas pode controlar a
            qualidade da conversa que leva até ela.
          </p>
          <div className="offer-details">
            <div><span>Workshop ao vivo</span><strong>{workshop.date}, às {workshop.time}</strong></div>
            <div><span>Você recebe</span><strong>Aula, materiais e replay por 7 dias</strong></div>
            <div><span>Investimento</span><strong>{workshop.price}</strong></div>
          </div>
          <CtaLink final>Quero garantir minha vaga por R$ 37</CtaLink>
          {!workshop.checkoutUrl && (
            <p className="checkout-note">O link de pagamento será adicionado assim que o checkout for disponibilizado.</p>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <Image
            src="/images/logo-arqbrasil.jpg"
            alt="ARQ Brasil"
            width={300}
            height={68}
            className="brand-logo footer-logo"
          />
          <p>Workshop Projeto de Decisão. Conteúdo educacional para arquitetos.</p>
          <p>2026. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
