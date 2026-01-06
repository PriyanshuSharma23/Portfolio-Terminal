import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// About section - single file
const about = defineCollection({
  loader: glob({ pattern: "about.mdx", base: "./src/content/about" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    highlights: z.array(z.string()),
    differentiators: z.array(z.string()),
  }),
});

// Skills section
const skills = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/skills" }),
  schema: z.object({
    category: z.string(),
    color: z.enum(['yellow', 'cyan', 'green', 'magenta', 'blue', 'orange', 'red']),
    order: z.number(),
    items: z.array(z.object({
      name: z.string(),
      level: z.number().min(0).max(100),
      label: z.string().optional(),
    })).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Experience entries
const experience = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyType: z.string().optional(),
    location: z.string(),
    period: z.string(),
    order: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

// Projects
const projects = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    color: z.enum(['green', 'cyan', 'magenta', 'orange', 'blue', 'yellow', 'red']),
    order: z.number(),
    tags: z.array(z.string()),
    link: z.string().optional(),
  }),
});

// Achievements
const achievements = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/achievements" }),
  schema: z.object({
    type: z.enum(['award', 'leadership']),
    title: z.string(),
    icon: z.string(),
    color: z.enum(['yellow', 'cyan', 'magenta', 'orange', 'blue', 'green', 'red']).optional(),
    highlight: z.string().optional(),
    order: z.number(),
  }),
});

// Education
const education = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    cgpa: z.string(),
    honors: z.string().optional(),
    specialization: z.string().optional(),
    coursework: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

// Contact info
const contact = defineCollection({
  loader: glob({ pattern: "contact.mdx", base: "./src/content/contact" }),
  schema: z.object({
    email: z.string(),
    phone: z.string(),
    github: z.string(),
    location: z.string(),
    lookingFor: z.array(z.object({
      text: z.string(),
      color: z.enum(['green', 'cyan', 'magenta', 'yellow', 'orange', 'blue', 'red']),
    })),
  }),
});

// Neofetch config
const neofetch = defineCollection({
  loader: glob({ pattern: "neofetch.mdx", base: "./src/content/neofetch" }),
  schema: z.object({
    rows: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
  }),
});

export const collections = {
  about,
  skills,
  experience,
  projects,
  achievements,
  education,
  contact,
  neofetch,
};

