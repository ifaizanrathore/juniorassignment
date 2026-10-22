# 📝 Public Blog & Admin Dashboard

[![CI](https://github.com/ifaizanrathore/juniorassignment/actions/workflows/ci.yml/badge.svg)](https://github.com/ifaizanrathore/juniorassignment/actions/workflows/ci.yml)

A modern full-stack blog and admin dashboard built with **Next.js 15**, **Tailwind CSS**, **TypeScript**, **React Query**, and **shadcn/ui**. This project consumes the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for blog post data and includes a clean, responsive UI with client/server rendering.

---

## 🚀 Features

### ✅ Public Blog
- List of posts displayed from the JSONPlaceholder API
- SEO-optimized and server-side rendered
- Responsive UI with smooth hover effects
- Clean design using `shadcn/ui` components

### 🛠 Admin Dashboard
- Route: `/admin`
- Mock dashboard layout with sidebar and top bar
- Placeholder for admin post management (CRUD not functional)

### 🌐 Tech Stack
- **Next.js 14 App Router**
- **Tailwind CSS** (Utility-first styling)
- **shadcn/ui** (Elegant UI components)
- **TypeScript** (Static typing)
- **React Query** (Client-side data fetching and caching)
- **JSONPlaceholder API** (Mock API data source)

---

## Run locally

```bash
git clone https://github.com/ifaizanrathore/juniorassignment.git
cd juniorassignment
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Post data comes from the public JSONPlaceholder API, so no environment variables are needed.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Production build |

## License

Released under the [MIT License](LICENSE).
