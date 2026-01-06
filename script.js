// Terminal Portfolio - Priyanshu Sharma
// Tokyo Night Theme

const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('command-input');

// Command history
let commandHistory = [];
let historyIndex = -1;

// ASCII Art Logo
const ASCII_LOGO = `
<span class="ascii-art">
 ██████╗ ██████╗ ██╗██╗   ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗
 ██╔══██╗██╔══██╗██║╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝██║  ██║██║   ██║
 ██████╔╝██████╔╝██║ ╚████╔╝ ███████║██╔██╗ ██║███████╗███████║██║   ██║
 ██╔═══╝ ██╔══██╗██║  ╚██╔╝  ██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║
 ██║     ██║  ██║██║   ██║   ██║  ██║██║ ╚████║███████║██║  ██║╚██████╔╝
 ╚═╝     ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ 
</span>`;

const SMALL_LOGO = `
<span class="ascii-art">
    ____       _                       __         
   / __ \\_____(_)_  ______ _____  ____/ /_  __  __
  / /_/ / ___/ / / / / __ \`/ __ \\/ __  / / / / / /
 / ____/ /  / / /_/ / /_/ / / / / /_/ / /_/ / /_/ 
/_/   /_/  /_/\\__, /\\__,_/_/ /_/\\__,_/\\__,_/\\__,_/
             /____/                               
</span>`;

// Commands data
const commands = {
    help: () => `
<div class="section-header">⚡ Available Commands</div>
<div class="suggestions">
    <span class="suggestion" onclick="runCommand('about')">about</span>
    <span class="suggestion" onclick="runCommand('skills')">skills</span>
    <span class="suggestion" onclick="runCommand('experience')">experience</span>
    <span class="suggestion" onclick="runCommand('projects')">projects</span>
    <span class="suggestion" onclick="runCommand('achievements')">achievements</span>
    <span class="suggestion" onclick="runCommand('education')">education</span>
    <span class="suggestion" onclick="runCommand('contact')">contact</span>
    <span class="suggestion" onclick="runCommand('neofetch')">neofetch</span>
    <span class="suggestion" onclick="runCommand('whoami')">whoami</span>
    <span class="suggestion" onclick="runCommand('clear')">clear</span>
</div>

<div class="table" style="margin-top: 15px;">
    <div class="table-row">
        <span class="table-key">about</span>
        <span class="table-value">Learn about me and what I do</span>
    </div>
    <div class="table-row">
        <span class="table-key">skills</span>
        <span class="table-value">View my technical skills & stack</span>
    </div>
    <div class="table-row">
        <span class="table-key">experience</span>
        <span class="table-value">Professional work experience</span>
    </div>
    <div class="table-row">
        <span class="table-key">projects</span>
        <span class="table-value">Featured side projects</span>
    </div>
    <div class="table-row">
        <span class="table-key">achievements</span>
        <span class="table-value">Awards, hackathons & more</span>
    </div>
    <div class="table-row">
        <span class="table-key">education</span>
        <span class="table-value">Academic background</span>
    </div>
    <div class="table-row">
        <span class="table-key">contact</span>
        <span class="table-value">Get in touch with me</span>
    </div>
    <div class="table-row">
        <span class="table-key">neofetch</span>
        <span class="table-value">System info, hacker style 😎</span>
    </div>
    <div class="table-row">
        <span class="table-key">clear</span>
        <span class="table-value">Clear the terminal</span>
    </div>
    <div class="table-row">
        <span class="table-key">repo</span>
        <span class="table-value">View source code on GitHub</span>
    </div>
</div>

<p class="text-comment" style="margin-top: 15px;">💡 Tip: Use ↑↓ arrows for command history, Tab for autocomplete</p>
`,

    about: () => `
${ASCII_LOGO}
<div class="section-header">👋 About Me</div>

<p class="text-fg">I'm a <span class="text-green text-bold">Full-Stack Engineer</span> and <span class="text-cyan text-bold">Systems Developer</span> based in <span class="text-yellow">New Delhi, India</span>.</p>

<p class="text-fg" style="margin-top: 10px;">I build <span class="text-magenta">production-grade platforms</span> with deep experience in:</p>

<div style="margin: 15px 0;">
    <div class="list-item"><span class="text-blue">Golang</span> systems & high-performance APIs</div>
    <div class="list-item"><span class="text-cyan">Next.js & TypeScript</span> modern frontends</div>
    <div class="list-item"><span class="text-orange">AWS</span> cloud architecture</div>
    <div class="list-item"><span class="text-green">AI/LLM</span> integration & products</div>
</div>

<p class="text-comment" style="margin-top: 15px;">
I've worked directly with CTOs and startup founders, led engineering teams, 
and built things that ship, scale, and make money. 💰
</p>

<div style="margin-top: 20px;">
    <span class="text-magenta text-bold">What Makes Me Different:</span>
    <div style="margin-top: 10px;">
        <span class="tag">✔ Startup Founder Mindset</span>
        <span class="tag">✔ Production Systems</span>
        <span class="tag">✔ CTO-Level Collaboration</span>
        <span class="tag">✔ Full Stack + Infra</span>
        <span class="tag">✔ AI + Systems + Product</span>
    </div>
</div>
`,

    skills: () => `
<div class="section-header">🛠️ Technical Skills</div>

<div class="text-yellow text-bold" style="margin: 15px 0 10px 0;">// Languages</div>
<div class="progress-bar">
    <span class="progress-label">Go</span>
    <div class="progress-track"><div class="progress-fill" style="width: 95%"></div></div>
    <span class="progress-value">Expert</span>
</div>
<div class="progress-bar">
    <span class="progress-label">TypeScript</span>
    <div class="progress-track"><div class="progress-fill" style="width: 92%"></div></div>
    <span class="progress-value">Expert</span>
</div>
<div class="progress-bar">
    <span class="progress-label">JavaScript</span>
    <div class="progress-track"><div class="progress-fill" style="width: 90%"></div></div>
    <span class="progress-value">Expert</span>
</div>
<div class="progress-bar">
    <span class="progress-label">C++</span>
    <div class="progress-track"><div class="progress-fill" style="width: 85%"></div></div>
    <span class="progress-value">Advanced</span>
</div>
<div class="progress-bar">
    <span class="progress-label">Python</span>
    <div class="progress-track"><div class="progress-fill" style="width: 82%"></div></div>
    <span class="progress-value">Advanced</span>
</div>
<div class="progress-bar">
    <span class="progress-label">C / Dart / Lua</span>
    <div class="progress-track"><div class="progress-fill" style="width: 75%"></div></div>
    <span class="progress-value">Proficient</span>
</div>

<div class="text-cyan text-bold" style="margin: 20px 0 10px 0;">// Frameworks & Tools</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px;">
    <span class="tag">Next.js</span>
    <span class="tag">React</span>
    <span class="tag">Flutter</span>
    <span class="tag">FastAPI</span>
    <span class="tag">Spring Boot</span>
    <span class="tag">Tailwind CSS</span>
    <span class="tag">Prisma</span>
    <span class="tag">Zustand</span>
</div>

<div class="text-green text-bold" style="margin: 20px 0 10px 0;">// Backend & Cloud</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px;">
    <span class="tag">AWS DynamoDB</span>
    <span class="tag">AWS S3</span>
    <span class="tag">CloudFront</span>
    <span class="tag">REST APIs</span>
    <span class="tag">gRPC</span>
    <span class="tag">Stripe</span>
    <span class="tag">MySQL</span>
</div>

<div class="text-magenta text-bold" style="margin: 20px 0 10px 0;">// Systems & Core</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px;">
    <span class="tag">Linux</span>
    <span class="tag">Vim</span>
    <span class="tag">DSA</span>
    <span class="tag">Distributed Systems</span>
    <span class="tag">LLM Integration</span>
</div>
`,

    experience: () => `
<div class="section-header">💼 Professional Experience</div>

<div class="timeline-item">
    <div class="timeline-title">Software Development Intern @ TBO.com</div>
    <div class="timeline-subtitle">🦄 Travel Unicorn • Gurugram • Jan 2025 – Present</div>
    <div class="timeline-content">
        <p>Working directly with the CTO to build <span class="text-cyan text-bold">Voya</span>, an AI-powered itinerary planner for travel agents.</p>
        <div style="margin-top: 10px;">
            <div class="list-item">Built <span class="text-green">high-performance Golang REST server</span> integrating internal services & LLM providers</div>
            <div class="list-item">Designed AWS infrastructure using <span class="text-orange">DynamoDB, S3 & CloudFront</span></div>
            <div class="list-item">Created advanced <span class="text-blue">React + TypeScript</span> frontend with drag-drop editing & AI chat</div>
            <div class="list-item">Contributed to product vision, roadmap and UX decisions</div>
        </div>
        <div style="margin-top: 10px;">
            <span class="tag">Golang</span>
            <span class="tag">React</span>
            <span class="tag">TypeScript</span>
            <span class="tag">AWS</span>
            <span class="tag">LLM APIs</span>
        </div>
    </div>
</div>

<div class="timeline-item">
    <div class="timeline-title">Lead Software Developer @ BrdsAI</div>
    <div class="timeline-subtitle">🇺🇸 California, USA • May 2023 – Oct 2023</div>
    <div class="timeline-content">
        <p>Led a <span class="text-yellow">5-member engineering team</span> building <span class="text-cyan text-bold">Wingman</span>, an AI medical notes platform.</p>
        <div style="margin-top: 10px;">
            <div class="list-item">Built <span class="text-blue">Next.js / TypeScript SaaS</span>, Chrome extension & landing site (1000+ monthly visitors)</div>
            <div class="list-item">Refactored backend to <span class="text-green">async MVC FastAPI</span> → <span class="text-yellow">50% faster concurrency</span></div>
            <div class="list-item">Integrated <span class="text-magenta">OpenAI OCR, LangChain</span>, web scraping</div>
            <div class="list-item">Implemented <span class="text-orange">Stripe payments</span>, MySQL migrations, Spring Boot services</div>
        </div>
    </div>
</div>

<div class="timeline-item">
    <div class="timeline-title">Co-Founder @ Flownote</div>
    <div class="timeline-subtitle">🚀 New Delhi • May 2023 – Present</div>
    <div class="timeline-content">
        <p>Bootstrapped a <span class="text-green">SaaS startup</span> for real-time web annotation.</p>
        <div style="margin-top: 10px;">
            <div class="list-item">Represented Flownote at <span class="text-magenta text-bold">Buildspace S4</span> (1000+ audience)</div>
            <div class="list-item"><span class="text-yellow">60+ active users</span>, paying customers live 💰</div>
            <div class="list-item">Built dashboard, collaborative editor & Stripe billing</div>
            <div class="list-item">Developed <span class="text-cyan">Golang proxy server</span> for CORS-safe iframe rendering</div>
        </div>
    </div>
</div>
`,

    projects: () => `
<div class="section-header">🚀 Featured Projects</div>

<div class="card" style="border-left-color: var(--green);">
    <div class="card-title">⚡ Flashlog — Ultra-Fast Log Processing Engine</div>
    <div class="card-subtitle">Golang • High-Performance Systems</div>
    <div class="card-content">
        <p>Blazing-fast log ingestion and indexing engine built for scale.</p>
        <div style="margin-top: 8px;">
            <div class="list-item">Structured log parsing, time-range querying, field-based filtering</div>
            <div class="list-item">Built for <span class="text-cyan">low-latency debugging</span> of distributed systems</div>
            <div class="list-item">Optimized file-based indexing & memory-efficient search pipelines</div>
        </div>
        <div style="margin-top: 10px;">
            <span class="tag">Golang</span>
            <span class="tag">Systems</span>
            <span class="tag">Performance</span>
        </div>
    </div>
</div>

<div class="card" style="border-left-color: var(--cyan);">
    <div class="card-title">🔍 Cengine — C++ Search Engine</div>
    <div class="card-subtitle">C++ • CLI • TF-IDF</div>
    <div class="card-content">
        <p>CLI-based local search engine with custom indexing.</p>
        <div style="margin-top: 8px;">
            <div class="list-item">Custom tokenizer & lexer implementation</div>
            <div class="list-item">Persistent indexing for fast retrieval</div>
            <div class="list-item">Low-level systems design mastery</div>
        </div>
        <div style="margin-top: 10px;">
            <span class="tag">C++</span>
            <span class="tag">TF-IDF</span>
            <span class="tag">Search</span>
        </div>
    </div>
</div>

<div class="card" style="border-left-color: var(--magenta);">
    <div class="card-title">🎬 Greenlight — Golang Movie API</div>
    <div class="card-subtitle">Golang • REST • Authentication</div>
    <div class="card-content">
        <p>Production-ready API with enterprise features.</p>
        <div style="margin-top: 8px;">
            <div class="list-item">Token authentication & role-based access control</div>
            <div class="list-item">Email service integration, OpenAPI specs</div>
            <div class="list-item">Clean MVC & dependency injection architecture</div>
        </div>
        <div style="margin-top: 10px;">
            <span class="tag">Golang</span>
            <span class="tag">REST</span>
            <span class="tag">Auth</span>
        </div>
    </div>
</div>

<div class="card" style="border-left-color: var(--orange);">
    <div class="card-title">🪣 Token Bucket — Golang Rate Limiter</div>
    <div class="card-subtitle">Golang • Networking • Algorithms</div>
    <div class="card-content">
        <p>Production-style rate limiting implementation.</p>
        <div style="margin-top: 8px;">
            <div class="list-item">Demonstrates backend networking & algorithmic design</div>
            <div class="list-item">Thread-safe implementation with clean API</div>
        </div>
        <div style="margin-top: 10px;">
            <span class="tag">Golang</span>
            <span class="tag">Rate Limiting</span>
            <span class="tag">Algorithms</span>
        </div>
    </div>
</div>

<p class="text-comment" style="margin-top: 15px;">
    📂 More projects at <a href="https://github.com/PriyanshuSharma23" target="_blank" class="link">github.com/PriyanshuSharma23</a>
</p>
`,

    achievements: () => `
<div class="section-header">🏆 Achievements & Recognition</div>

<div style="margin: 15px 0;">
    <div class="badge"><span class="badge-icon">🏆</span> <span class="text-yellow">Winner</span> — Solana HackDay @ IIIT Delhi <span class="text-comment">(200+ teams)</span></div>
    <div class="badge"><span class="badge-icon">🥇</span> <span class="text-yellow">1st Prize</span> — Amity CyberCup</div>
    <div class="badge"><span class="badge-icon">🥉</span> <span class="text-orange">3rd Prize</span> — Hack KRMU 2.0</div>
    <div class="badge"><span class="badge-icon">🎓</span> <span class="text-cyan">Top 5% Scholarship</span> — NSUT</div>
</div>

<div class="section-header" style="margin-top: 25px;">🎖️ Leadership & Community</div>

<div class="card" style="border-left-color: var(--yellow);">
    <div class="card-title">👑 President — Algorithm Society, NSUT</div>
    <div class="card-content">
        Leading the competitive programming & algorithms community at university.
    </div>
</div>

<div class="card" style="border-left-color: var(--cyan);">
    <div class="card-title">💻 Senior Developer — Devcomm (IOSD)</div>
    <div class="card-content">
        Contributing to developer community events and mentoring juniors.
    </div>
</div>

<div class="card" style="border-left-color: var(--magenta);">
    <div class="card-title">🎤 Buildspace S4 Presenter</div>
    <div class="card-content">
        Represented Flownote to an audience of <span class="text-yellow">1000+ people</span>.
    </div>
</div>
`,

    education: () => `
<div class="section-header">🎓 Education</div>

<div class="card" style="border-left-color: var(--blue);">
    <div class="card-title">B.Tech Computer Science (Big Data Analytics)</div>
    <div class="card-subtitle">Netaji Subhas University of Technology, New Delhi</div>
    <div class="card-content" style="margin-top: 10px;">
        <div class="table">
            <div class="table-row">
                <span class="table-key">CGPA</span>
                <span class="table-value"><span class="text-green text-bold">8.94</span> / 10</span>
            </div>
            <div class="table-row">
                <span class="table-key">Honors</span>
                <span class="table-value"><span class="text-yellow">Top 5% University Scholarship</span></span>
            </div>
            <div class="table-row">
                <span class="table-key">Specialization</span>
                <span class="table-value">Big Data Analytics</span>
            </div>
        </div>
    </div>
</div>

<div style="margin-top: 20px;">
    <span class="text-magenta text-bold">Relevant Coursework:</span>
    <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px;">
        <span class="tag">Data Structures</span>
        <span class="tag">Algorithms</span>
        <span class="tag">Operating Systems</span>
        <span class="tag">Database Systems</span>
        <span class="tag">Computer Networks</span>
        <span class="tag">Distributed Computing</span>
        <span class="tag">Machine Learning</span>
    </div>
</div>
`,

    contact: () => `
<div class="section-header">📬 Let's Connect!</div>

<p class="text-fg">I'm open to new opportunities and collaborations:</p>

<div class="table" style="margin: 20px 0;">
    <div class="table-row">
        <span class="table-key">📧 Email</span>
        <span class="table-value"><a href="mailto:inbox.priyanshu@gmail.com" class="link">inbox.priyanshu@gmail.com</a></span>
    </div>
    <div class="table-row">
        <span class="table-key">📞 Phone</span>
        <span class="table-value"><a href="tel:+919871010603" class="link">+91-9871010603</a></span>
    </div>
    <div class="table-row">
        <span class="table-key">🐙 GitHub</span>
        <span class="table-value"><a href="https://github.com/PriyanshuSharma23" target="_blank" class="link">github.com/PriyanshuSharma23</a></span>
    </div>
    <div class="table-row">
        <span class="table-key">📍 Location</span>
        <span class="table-value">New Delhi, India</span>
    </div>
</div>

<div class="section-header">💼 I'm Looking For</div>
<div style="margin: 15px 0;">
    <div class="list-item"><span class="text-green">Full-stack / Backend engineering roles</span></div>
    <div class="list-item"><span class="text-cyan">Startup founding teams</span></div>
    <div class="list-item"><span class="text-magenta">Freelance & contract projects</span></div>
    <div class="list-item"><span class="text-yellow">Open-source collaboration</span></div>
</div>

<p class="text-comment" style="margin-top: 20px;">
    <span class="text-green glow">▸</span> Let's build something awesome together! 🚀
</p>
`,

    neofetch: () => `
<div class="neofetch">
    <div class="neofetch-logo">
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
      █░░░░░░░░░░░░░░░█
      █░░█▀▀█░█▀▀░░░░░█
      █░░█▄▄█░▀▀█░░░░░█
      █░░█░░░░▄▄█░░░░░█
      █░░░░░░░░░░░░░░░█
      █░▀█▀░▀█▀░█▀█░░░█
      █░░█░░░█░░█▄█░░░█
      █░▀▀▀░▀▀▀░▀░▀░░░█
      █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
    </div>
    <div class="neofetch-info">
        <div class="neofetch-title">priyanshu@portfolio</div>
        <div class="neofetch-separator">─────────────────────</div>
        <div class="neofetch-row">
            <span class="neofetch-label">OS</span>
            <span class="neofetch-value">Developer v2.0</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Host</span>
            <span class="neofetch-value">New Delhi, India</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Kernel</span>
            <span class="neofetch-value">Golang-Systems-Core</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Uptime</span>
            <span class="neofetch-value">3+ years shipping code</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Packages</span>
            <span class="neofetch-value">Go, TS, React, AWS, ++</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Shell</span>
            <span class="neofetch-value">zsh with vim motions</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Resolution</span>
            <span class="neofetch-value">High-Performance</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">DE</span>
            <span class="neofetch-value">VSCode + Neovim</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Theme</span>
            <span class="neofetch-value">Tokyo Night 🌃</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">CPU</span>
            <span class="neofetch-value">Async @ 100% efficiency</span>
        </div>
        <div class="neofetch-row">
            <span class="neofetch-label">Memory</span>
            <span class="neofetch-value">CGPA 8.94 / 10</span>
        </div>
        <div class="color-blocks">
            <span class="color-block" style="background: var(--red)"></span>
            <span class="color-block" style="background: var(--orange)"></span>
            <span class="color-block" style="background: var(--yellow)"></span>
            <span class="color-block" style="background: var(--green)"></span>
            <span class="color-block" style="background: var(--cyan)"></span>
            <span class="color-block" style="background: var(--blue)"></span>
            <span class="color-block" style="background: var(--magenta)"></span>
            <span class="color-block" style="background: var(--purple)"></span>
        </div>
    </div>
</div>
`,

    whoami: () => `
<span class="text-green text-bold">priyanshu</span>
<span class="text-comment">uid=1000(priyanshu) gid=1000(developers) groups=1000(developers),27(golang),44(typescript),100(startup-founders)</span>
`,

    clear: () => {
        output.innerHTML = '';
        return '';
    },

    repo: () => {
        window.open('https://github.com/PriyanshuSharma23', '_blank');
        return `<span class="text-green">Opening GitHub profile...</span>`;
    },

    ls: () => `
<span class="text-blue">about.md</span>    <span class="text-blue">skills.json</span>    <span class="text-blue">experience/</span>    <span class="text-blue">projects/</span>
<span class="text-blue">achievements.txt</span>    <span class="text-blue">education.md</span>    <span class="text-blue">contact.yaml</span>
`,

    pwd: () => `<span class="text-cyan">/home/priyanshu/portfolio</span>`,

    date: () => `<span class="text-fg">${new Date().toString()}</span>`,

    echo: (args) => `<span class="text-fg">${args.join(' ')}</span>`,

    cat: (args) => {
        const fileMap = {
            'about.md': 'about',
            'skills.json': 'skills',
            'achievements.txt': 'achievements',
            'education.md': 'education',
            'contact.yaml': 'contact'
        };
        const file = args[0];
        if (fileMap[file]) {
            return commands[fileMap[file]]();
        }
        return `<span class="text-red">cat: ${file || 'no file specified'}: No such file or directory</span>`;
    },

    sudo: () => `<span class="text-red">Nice try! 😏 But you don't need sudo to view my portfolio.</span>
<span class="text-comment">Try 'help' instead!</span>`,

    vim: () => `<span class="text-green">Ah, I see you're a person of culture! 🎩</span>
<span class="text-comment">But this terminal is read-only. Type 'help' to explore!</span>`,

    nvim: () => commands.vim(),

    exit: () => `<span class="text-yellow">Thanks for visiting! 👋</span>
<span class="text-comment">Feel free to reach out: inbox.priyanshu@gmail.com</span>`,

    man: (args) => {
        if (args[0] === 'priyanshu') {
            return commands.about();
        }
        return `<span class="text-comment">No manual entry for ${args[0] || 'unknown'}</span>
<span class="text-comment">Try: man priyanshu</span>`;
    },

    hire: () => `
<span class="text-green text-bold glow">🎉 Great choice!</span>

<span class="text-fg">Let's talk:</span>
<span class="text-cyan">📧 inbox.priyanshu@gmail.com</span>
<span class="text-cyan">📞 +91-9871010603</span>

<span class="text-comment">I'm ready to build something amazing! 🚀</span>
`,

    coffee: () => `
<span class="text-yellow">
   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----'
</span>
<span class="text-comment">Coffee is the fuel that powers great code! ☕</span>
`,

    '': () => ''
};

// Available commands for autocomplete
const availableCommands = Object.keys(commands).filter(cmd => cmd !== '');

// Process command
function processCommand(cmd) {
    const parts = cmd.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commands[command]) {
        if (typeof commands[command] === 'function') {
            return commands[command](args);
        }
        return commands[command];
    }
    
    if (command) {
        return `<span class="text-red">Command not found: ${command}</span>
<span class="text-comment">Type 'help' to see available commands.</span>`;
    }
    return '';
}

// Add output to terminal
function addOutput(html, showPrompt = true) {
    if (html) {
        const div = document.createElement('div');
        div.className = 'output-block';
        div.innerHTML = html;
        output.appendChild(div);
    }
    scrollToBottom();
}

// Add command line to output
function addCommandLine(cmd) {
    const div = document.createElement('div');
    div.className = 'command-line';
    div.innerHTML = `
        <span class="prompt">
            <span class="user">priyanshu</span><span class="at">@</span><span class="host">dev</span>
            <span class="colon">:</span><span class="path">~</span><span class="dollar">$</span>
        </span>
        <span class="command-text">${escapeHtml(cmd)}</span>
    `;
    output.appendChild(div);
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Scroll to bottom
function scrollToBottom() {
    const terminalBody = document.querySelector('.terminal-body');
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Run command (for clickable suggestions)
function runCommand(cmd) {
    input.value = cmd;
    handleCommand();
}

// Handle command submission
function handleCommand() {
    const cmd = input.value;
    
    // Add to history
    if (cmd.trim()) {
        commandHistory.push(cmd);
        historyIndex = commandHistory.length;
    }
    
    // Show command
    addCommandLine(cmd);
    
    // Process and show output
    const result = processCommand(cmd);
    addOutput(result);
    
    // Clear input
    input.value = '';
}

// Autocomplete
function autocomplete(partial) {
    const matches = availableCommands.filter(cmd => cmd.startsWith(partial.toLowerCase()));
    if (matches.length === 1) {
        return matches[0];
    }
    return partial;
}

// Event listeners
input.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'Enter':
            handleCommand();
            break;
        case 'ArrowUp':
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
            break;
        case 'ArrowDown':
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
            break;
        case 'Tab':
            e.preventDefault();
            input.value = autocomplete(input.value);
            break;
        case 'l':
            if (e.ctrlKey) {
                e.preventDefault();
                commands.clear();
            }
            break;
    }
});

// Focus input on click
document.querySelector('.terminal-body').addEventListener('click', () => {
    input.focus();
});

// Make runCommand available globally for onclick handlers
window.runCommand = runCommand;

// Initial boot sequence
function bootSequence() {
    const bootMessages = [
        { text: '<span class="text-comment">[    0.000000] Initializing portfolio kernel...</span>', delay: 0 },
        { text: '<span class="text-comment">[    0.001337] Loading modules: golang, typescript, react...</span>', delay: 100 },
        { text: '<span class="text-comment">[    0.004242] Mounting /dev/skills...</span>', delay: 200 },
        { text: '<span class="text-comment">[    0.006969] Starting experience daemon...</span>', delay: 300 },
        { text: '<span class="text-green">[    0.010000] System ready. Welcome! 🚀</span>', delay: 400 },
    ];

    bootMessages.forEach((msg, index) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'output-line';
            div.innerHTML = msg.text;
            output.appendChild(div);
            scrollToBottom();
            
            // Show welcome message after boot
            if (index === bootMessages.length - 1) {
                setTimeout(() => {
                    addOutput(`
${SMALL_LOGO}
<span class="text-fg">Welcome to my interactive portfolio! 🎉</span>
<span class="text-comment">I'm <span class="text-green text-bold">Priyanshu Sharma</span> — Full-Stack Engineer & Systems Developer</span>

<span class="text-yellow">Type</span> <span class="text-cyan text-bold">help</span> <span class="text-yellow">to see available commands, or click one below:</span>

<div class="suggestions">
    <span class="suggestion" onclick="runCommand('about')">about</span>
    <span class="suggestion" onclick="runCommand('skills')">skills</span>
    <span class="suggestion" onclick="runCommand('experience')">experience</span>
    <span class="suggestion" onclick="runCommand('projects')">projects</span>
    <span class="suggestion" onclick="runCommand('contact')">contact</span>
    <span class="suggestion" onclick="runCommand('neofetch')">neofetch</span>
</div>
`);
                    input.focus();
                }, 200);
            }
        }, msg.delay);
    });
}

// Start boot sequence
bootSequence();
