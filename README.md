# Thaylor Jobs

Landing page da Thaylor Jobs — marketing na área da beleza. Feita com
[Next.js](https://nextjs.org) (App Router) e [Tailwind CSS](https://tailwindcss.com),
pronta para deploy na [Vercel](https://vercel.com).

## Requisitos

- Node.js `>=20.9.0`

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — sem configuração extra.
   As imagens em `public/images/` são otimizadas nativamente pelo `next/image`.

## Estrutura

- `app/` — páginas (App Router), layout e estilos globais
- `public/images/` — imagens da landing page
