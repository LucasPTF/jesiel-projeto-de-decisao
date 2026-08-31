import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Confirme a compra",
    text: "A plataforma de pagamento enviará a confirmação da inscrição pelos dados usados na compra.",
  },
  {
    number: "02",
    title: "Acesse a área de membros",
    text: "Após a liberação, procure a mensagem de boas-vindas e as orientações iniciais dentro da plataforma.",
  },
  {
    number: "03",
    title: "Entre no grupo oficial",
    text: "O link do grupo de WhatsApp será disponibilizado na área de membros. É nesse grupo que serão enviadas as orientações da aula.",
  },
  {
    number: "04",
    title: "Aguarde o encontro ao vivo",
    text: "O acesso ao Google Meet e os lembretes serão compartilhados pelos canais oficiais antes do workshop.",
  },
];

export default function ObrigadoPage() {
  return (
    <main className="thanks-page">
      <header className="topbar thanks-topbar">
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
      <section className="thanks-hero">
        <div className="container thanks-layout">
          <div>
            <p className="eyebrow light">Inscrição realizada</p>
            <h1>Compra concluída. Agora, prepare-se para a sua próxima proposta.</h1>
            <p>
              O acesso e as orientações serão enviados pela plataforma usada no
              pagamento. Confira também as pastas de promoções e spam caso a
              mensagem não apareça na caixa principal.
            </p>
          </div>
          <div className="thanks-mark" aria-hidden="true">✓</div>
        </div>
      </section>
      <section className="section paper">
        <div className="container centered-heading thanks-heading">
          <p className="eyebrow">O que fazer agora</p>
          <h2>Siga estes quatro passos.</h2>
        </div>
        <div className="container thanks-steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="container thanks-actions">
          <p>
            Se a compra ainda estiver em análise, aguarde a confirmação da
            plataforma. Nenhum contato de suporte foi informado nos materiais
            do projeto.
          </p>
          <Link className="text-link" href="/a1">Voltar para a página do workshop</Link>
        </div>
      </section>
    </main>
  );
}
