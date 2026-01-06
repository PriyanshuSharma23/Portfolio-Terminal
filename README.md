# 🖥️ Terminal Portfolio — Priyanshu Sharma

A hacker-style, interactive terminal portfolio built with vanilla HTML, CSS, and JavaScript. Features the beautiful **Tokyo Night** color theme.

![Terminal Portfolio Preview](https://img.shields.io/badge/Theme-Tokyo%20Night-7aa2f7?style=for-the-badge)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-f7768e?style=for-the-badge)

## ⚡ Features

- **Interactive Terminal UI** — Type commands like a real terminal
- **Tokyo Night Theme** — Beautiful dark theme with carefully chosen colors
- **Responsive Design** — Works on desktop and mobile
- **Command History** — Navigate with ↑↓ arrow keys
- **Tab Autocomplete** — Press Tab to autocomplete commands
- **Clickable Suggestions** — Click on command chips for quick navigation
- **Boot Sequence Animation** — Cool startup animation
- **Neofetch Style Display** — Show system info in hacker style

## 🚀 Quick Start

Simply open `index.html` in your browser — no build tools required!

```bash
# Clone or download, then:
open index.html

# Or serve with any static server:
npx serve .
python -m http.server 8000
```

## 💻 Available Commands

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `about` | Learn about me and what I do |
| `skills` | View my technical skills & stack |
| `experience` | Professional work experience |
| `projects` | Featured side projects |
| `achievements` | Awards, hackathons & more |
| `education` | Academic background |
| `contact` | Get in touch with me |
| `neofetch` | System info, hacker style 😎 |
| `clear` | Clear the terminal |
| `repo` | Open GitHub profile |

### 🎮 Hidden Commands

Try these for some fun:
- `sudo`
- `vim` / `nvim`
- `coffee`
- `hire`
- `man priyanshu`
- `ls`, `pwd`, `date`

## 🎨 Color Palette (Tokyo Night)

```css
--bg-dark: #1a1b26      /* Background */
--fg: #c0caf5           /* Foreground */
--red: #f7768e          /* Errors, close button */
--orange: #ff9e64       /* Warnings */
--yellow: #e0af68       /* Highlights */
--green: #9ece6a        /* Success, prompt */
--cyan: #7dcfff         /* Links, paths */
--blue: #7aa2f7         /* Primary accent */
--magenta: #bb9af7      /* Secondary accent */
```

## 📁 Project Structure

```
Portfolio/
├── index.html      # Main HTML file
├── styles.css      # Tokyo Night themed styles
├── script.js       # Terminal logic & content
└── README.md       # This file
```

## ✨ Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-dark: #1a1b26;
    --blue: #7aa2f7;
    /* ... */
}
```

### Adding New Commands

Add a new command in `script.js`:

```javascript
const commands = {
    // ... existing commands
    
    mycommand: () => `
        <div class="section-header">My Custom Section</div>
        <p class="text-fg">Your content here!</p>
    `,
};
```

### Updating Content

All portfolio content is in `script.js` within the `commands` object. Each command returns HTML that gets rendered in the terminal.

## 🔧 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, flexbox, animations
- **Vanilla JS** — No dependencies!
- **JetBrains Mono** — Beautiful monospace font

## 📱 Responsive

The terminal adapts to different screen sizes:
- Desktop: Full terminal experience
- Tablet: Slightly condensed
- Mobile: Touch-friendly with adjusted font sizes

## 🙏 Credits

- Color Theme: [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme)
- Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Inspiration: Linux terminals, neofetch, hacker culture

## 📄 License

MIT License — Feel free to use this as a template for your own portfolio!

---

**Built with ❤️ by Priyanshu Sharma**

📧 inbox.priyanshu@gmail.com | 🐙 [GitHub](https://github.com/PriyanshuSharma23)
