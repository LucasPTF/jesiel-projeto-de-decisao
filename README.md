# Workshop Projeto de Decisão

Página de vendas criada para Jesiel e voltada a arquitetos que desejam apresentar propostas com mais clareza, valor percebido e condução comercial.

## Tecnologias

- Next.js
- React
- TypeScript
- CSS responsivo

## Rotas

- `/a1`
- `/a2`
- `/a3`
- `/obrigado`

As três páginas de vendas compartilham os mesmos componentes, conteúdo, identidade visual e oferta. Somente a comunicação da hero muda entre as rotas.

## Execução local

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000/a1` no navegador.

## Validação e build

```bash
pnpm validate
pnpm lint
pnpm typecheck
pnpm build
```

## Informação pendente

O link do checkout ainda não foi fornecido. Quando estiver disponível, deve ser inserido em `lib/content.ts` no campo `checkoutUrl`.
