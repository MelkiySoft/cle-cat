# Структура проекта cle-cat

> Автоматически сгенерировано скриптом `scripts/generate-structure.js`
> 
> Последнее обновление: 2026-07-21

```bash
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── admin/
│   │   ├── customer/
│   │   ├── provider/
│   │   └── layout.tsx
│   ├── (public)/
│   │   ├── catalog/
│   │   │   ├── [...path]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── company/
│   │   │   └── [slug]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── webhooks/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── admin/
│   ├── catalog/
│   ├── common/
│   ├── customer/
│   ├── dashboard/
│   ├── forms/
│   ├── layout/
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── provider/
│   ├── ui/
│   │   └── button.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── docs/
├── hooks/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── auth.ts
│   ├── constants.ts
│   ├── index.ts
│   ├── middleware.ts
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   ├── icons/
│   ├── images/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── scripts/
│   └── generate-structure.js
├── types/
├── .env.example
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── components.json
├── db.js
├── eslint.config.mjs
├── LICENSE
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── prisma.config.ts
├── PROJECT_STRUCTURE.md
├── README.md
└── tsconfig.json
```

---

**Примечание:** node_modules, .git, .next и другие служебные папки исключены.