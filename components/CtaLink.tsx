import { workshop } from "@/lib/content";

type CtaLinkProps = {
  children: React.ReactNode;
  className?: string;
  final?: boolean;
};

export function CtaLink({ children, className = "", final = false }: CtaLinkProps) {
  if (workshop.checkoutUrl) {
    return (
      <a className={`button ${className}`} href={workshop.checkoutUrl}>
        {children}
      </a>
    );
  }

  if (final) {
    return (
      <button className={`button ${className}`} type="button" disabled>
        Checkout em preparação
      </button>
    );
  }

  return (
    <a className={`button ${className}`} href="#inscricao">
      {children}
    </a>
  );
}
