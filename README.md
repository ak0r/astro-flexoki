# 🌟 Astro Flexoki

A minimalist, fast, and elegant blog theme built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and the warm, beautiful [Flexoki](https://stephango.com/flexoki) color palette.

> ✨ Ideal for developers, writers, and creators who value simplicity, performance, and timeless design.

![Astro Flexoki Preview](./public/og-theme-preview.jpg)

---

## 🚀 Features

- ⚡ **Blazing fast** with Astro’s static site generation
- 🎨 **Custom theming** using Flexoki’s harmonious color tokens
- 🌗 **Light/Dark mode** toggle with `data-theme`
- 🧠 **SEO optimized** with dynamic `<meta>` tags and OG support
- ✍️ **Markdown-powered** posts, notes, and pages
- 🖼️ Ready for dynamic **OG image generation** via Astro API
- 📱 Fully **responsive** and mobile-first
- 🔗 Configurable **navigation, social, and footer links**
- 📦 No heavy dependencies — just Astro and Tailwind CSS

---

## 🗂️ Folder Structure

```bash
astro-flexoki/
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, etc.)
│   ├── content/          # Markdown content for blog, notes, etc.
│   ├── layouts/          # Layouts used by pages
│   ├── pages/            # Routes like /, /about, /articles
│   ├── styles/           # Tailwind and theme styles
├── public/               # Static assets
├── site.config.ts        # Global site configuration
├── tailwind.config.ts    # Tailwind CSS configuration
```

---

## 🛠️ Getting Started

```bash
# Clone the repo
git clone https://github.com/ak0r/astro-flexoki.git
cd astro-flexoki

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then visit `http://localhost:4321` in your browser.

---

## ⚙️ Configuration

All your site settings live in `site.config.ts`:

```ts
export const siteConfig = {
  title: 'Astro Flexoki',
  description: 'A Astro starter template built with TailwindCSS and Flexoki colour pallette',
  author: 'John Doe',
  url: 'https://example.com',
  settings: {
    accentColor: 'orange',
    postsPerPage: 6,
    enableDarkMode: true,
    showNewsletterSignup: true,
  },
};
```

---

## 📸 Screenshots

| Light Theme | Dark Theme |
|-------------|------------|
| ![](./public/screens/light-home.png) | ![](./public/screens/dark-home.png) |

---

## 🔮 Roadmap

- [ ] Update MDX contents
- [ ] Add full-text search
- [ ] Add Projects / Notes content collections
- [ ] OG-image generation
- [ ] CMS integration (Tina, Notion, Contentlayer)
- [ ] RSS feed and sitemap

---

## 🙌 Credits

- [Astro](https://astro.build) — the static site builder
- [Tailwind CSS](https://tailwindcss.com) — utility-first CSS
- [Steph Ango](https://stephango.com/flexoki) — the color palette
- [Astro Pure](https://github.com/cworld1/astro-theme-pure) — References

---

## 📄 License

MIT © [Amit K](https://github.com/ak0r)  
Free to use, modify, and share.

---

> Made with 💛 using Astro, Tailwind, and Flexoki.
