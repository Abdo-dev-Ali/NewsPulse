# NewsPulse
🔗 **Live Demo:** [news-pulse-phi.vercel.app](https://news-pulse-phi.vercel.app)

A news app built with Next.js that pulls live Arabic news, with search, category filters, and dark mode.

## Features

- Live search through articles
- Filter by category (Tech, Sports, Economy, Misc)
- Dark mode with saved preference
- Loading and error states
- API key protected server-side (never exposed to the client)

## Tech Stack

Next.js, TypeScript, Tailwind CSS, NewsAPI

## Running locally

1. Clone the repo and install dependencies:
```bash
npm install
```

2. Get a free API key from [newsapi.org](https://newsapi.org) and add it to a `.env.local` file:

3. Run the dev server:
```bash
npm run dev
```

Open `localhost:3000` to view it.

## Project structure

- `app/api/news` — protected API route that fetches from NewsAPI
- `app/page.tsx` — main page
- `components/` — NewsCard, NewsList, ThemeToggle, etc.

---

Built by [Abdo].
