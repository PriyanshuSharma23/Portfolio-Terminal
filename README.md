# Terminal Portfolio - Priyanshu Sharma

An interactive terminal-style portfolio built with [Astro](https://astro.build) and MDX content collections. Tokyo Night theme. ⚡

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── content/           # 📝 Edit your content here!
│   ├── about/
│   │   └── about.mdx
│   ├── skills/
│   │   ├── languages.mdx
│   │   ├── frameworks.mdx
│   │   ├── backend.mdx
│   │   └── systems.mdx
│   ├── experience/
│   │   ├── tbo.mdx
│   │   ├── brdsai.mdx
│   │   └── flownote.mdx
│   ├── projects/
│   │   ├── flashlog.mdx
│   │   ├── cengine.mdx
│   │   ├── greenlight.mdx
│   │   └── token-bucket.mdx
│   ├── achievements/
│   │   └── *.mdx
│   ├── education/
│   │   └── nsut.mdx
│   ├── contact/
│   │   └── contact.mdx
│   └── neofetch/
│       └── neofetch.mdx
├── components/
│   └── Terminal.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── content.config.ts  # Schema definitions
```

## ✏️ Editing Content

### About Section (`src/content/about/about.mdx`)

```mdx
---
name: Your Name
title: Your Title & Role
location: City, Country
highlights:
  - "**Skill 1** description"
  - "**Skill 2** description"
differentiators:
  - "Thing 1"
  - "Thing 2"
---

Your bio text here. Use **bold** for emphasis.
```

### Adding Experience (`src/content/experience/`)

Create a new `.mdx` file:

```mdx
---
title: Job Title
company: Company Name
companyType: "🚀 Company Type"
location: City
period: Jan 2024 – Present
order: 1  # Lower = appears first
tags:
  - Tech1
  - Tech2
---

Job description paragraph.

- Bullet point 1
- Bullet point 2
```

### Adding Projects (`src/content/projects/`)

```mdx
---
title: "🔥 Project Name"
subtitle: Tech • Stack • Used
color: green  # green, cyan, magenta, orange, blue, yellow, red
order: 1
tags:
  - Tag1
  - Tag2
---

Project description.

- Feature 1
- Feature 2
```

### Skills (`src/content/skills/`)

For languages with progress bars:

```mdx
---
category: Languages
color: yellow
order: 1
items:
  - name: Go
    level: 95
    label: Expert
  - name: TypeScript
    level: 90
    label: Advanced
---
```

For tag-based skills:

```mdx
---
category: Frameworks
color: cyan
order: 2
tags:
  - React
  - Next.js
  - Tailwind
---
```

### Contact (`src/content/contact/contact.mdx`)

```mdx
---
email: your@email.com
phone: "+1-234-567-8900"
github: github.com/yourusername
location: Your City
lookingFor:
  - text: Backend roles
    color: green
  - text: Startup opportunities
    color: cyan
---
```

### Neofetch (`src/content/neofetch/neofetch.mdx`)

```mdx
---
rows:
  - label: OS
    value: Developer v2.0
  - label: Host
    value: Your City
  - label: Theme
    value: Tokyo Night 🌃
---
```

## 🎨 Customization

### Colors

Available colors: `green`, `cyan`, `magenta`, `orange`, `blue`, `yellow`, `red`

### Fonts

The portfolio uses JetBrains Mono. Change in `src/layouts/Layout.astro`.

### Theme

Tokyo Night colors are defined in `src/layouts/Layout.astro` CSS variables.

## 📦 Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [MDX](https://mdxjs.com) - Markdown with JSX
- Tokyo Night Theme
- JetBrains Mono Font

## 📄 License

MIT
