import {
  PenTool, Mail, Mic, MessageSquare, Headphones,
  GraduationCap, AtSign, Palette, Workflow
} from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: any;
  features: string[];
  stock?: number;
  badge?: string;
  note?: string;
  duration: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "grammarly-pro",
    name: "Grammarly Pro Lifetime",
    shortDescription: "Advanced AI writing assistant with lifetime access.",
    description: "Get lifetime access to Grammarly Pro — the world's leading AI-powered writing assistant. Perfect grammar, tone detection, plagiarism checker, and more.",
    icon: PenTool,
    features: ["Advanced Grammar Checks", "Tone Detection", "Plagiarism Checker", "Style Suggestions", "Browser Extension", "Desktop & Mobile Apps"],
    stock: 2,
    badge: "Limited",
    duration: "Lifetime",
    featured: true,
  },
  {
    slug: "business-gmail",
    name: "Business Gmail",
    shortDescription: "Unlimited storage professional email for life.",
    description: "Professional Google Workspace email with unlimited storage. Custom domain support, advanced admin controls, and enterprise-grade security.",
    icon: Mail,
    features: ["Unlimited Storage", "Custom Domain", "Admin Controls", "Enterprise Security", "Google Meet Integration", "Google Drive Access"],
    duration: "Lifetime",
    featured: true,
  },
  {
    slug: "voiceflow-ai",
    name: "Voiceflow AI",
    shortDescription: "Build powerful AI voice & chat agents.",
    description: "Design, prototype, and launch AI-powered voice and chat experiences. Build conversational assistants without code.",
    icon: Mic,
    features: ["Visual Builder", "AI NLU Engine", "Multi-Channel Deploy", "Team Collaboration", "Analytics Dashboard", "Custom Integrations"],
    duration: "3 Months",
  },
  {
    slug: "chatgpt-business",
    name: "ChatGPT Business",
    shortDescription: "Enterprise ChatGPT for your team.",
    description: "Access GPT-4 with enhanced privacy, longer context windows, and priority access. Perfect for business and professional use.",
    icon: MessageSquare,
    features: ["GPT-4 Access", "Priority Speed", "Longer Context", "Data Privacy", "Team Management", "API Access"],
    duration: "1 Month",
    featured: true,
  },
  {
    slug: "intercom-advanced",
    name: "Intercom Advanced + Fin AI",
    shortDescription: "AI-first customer service platform.",
    description: "Full Intercom Advanced suite with Fin AI agent. Automate customer support with AI-powered responses, live chat, and engagement tools.",
    icon: Headphones,
    features: ["Fin AI Agent", "Live Chat", "Help Center", "Product Tours", "Custom Bots", "Advanced Analytics"],
    duration: "1 Year",
  },
  {
    slug: "github-student",
    name: "GitHub Student Developer Pack",
    shortDescription: "Premium dev tools for students.",
    description: "Access the full GitHub Student Developer Pack with premium tools, cloud credits, and development resources. Available while accounts last.",
    icon: GraduationCap,
    features: ["GitHub Pro", "Cloud Credits", "Dev Tools", "Domain Names", "CI/CD Tools", "Learning Resources"],
    note: "Only till accounts last",
    duration: "Varies",
  },
  {
    slug: "edu-mail",
    name: "EDU Mail Account",
    shortDescription: "Verified .edu email address.",
    description: "Get a verified .edu email address for accessing student discounts, software licenses, and exclusive educational offers worldwide.",
    icon: AtSign,
    features: ["Verified .edu Address", "Student Discounts", "Software Licenses", "Cloud Credits", "Streaming Discounts", "Academic Access"],
    duration: "Lifetime",
  },
  {
    slug: "canva-pro",
    name: "Canva Pro Lifetime",
    shortDescription: "Premium design tool with lifetime access.",
    description: "Unlock all Canva Pro features forever. Premium templates, brand kit, background remover, content planner, and 100M+ stock assets.",
    icon: Palette,
    features: ["100M+ Stock Assets", "Brand Kit", "Background Remover", "Content Planner", "Premium Templates", "Team Collaboration"],
    duration: "Lifetime",
    featured: true,
  },
  {
    slug: "n8n-business",
    name: "N8N Business Hosted",
    shortDescription: "Workflow automation platform.",
    description: "Self-hosted N8N Business with unlimited workflows, executions, and team members. Automate anything with 400+ integrations.",
    icon: Workflow,
    features: ["Unlimited Workflows", "400+ Integrations", "Team Access", "Custom Nodes", "Webhook Support", "Execution History"],
    duration: "1 Month",
  },
];

export const bundleTools = [
  "Ahrefs", "Semrush", "Majestic", "Moz", "Ubersuggest", "SEMScoop",
  "KWFinder", "Keyword Revealer", "Keyword Tool", "Keywords Everywhere",
  "StoryBase", "SpamZilla", "BuzzSumo", "SpyFu", "WordAi", "Spin Rewriter",
  "Article Forge", "Article Builder", "Grammarly", "Canva", "Crello",
  "PicMonkey", "Piktochart", "Animoto", "InstaText", "WooRank",
  "LinkedIn Learning", "Skillshare", "Indexification", "Treehouse",
  "Scribd", "SlideShare", "Everand",
];

export const underTestingTools = [
  "WriterZen", "StackSkills", "WordHero", "ChatGPT (very limited)",
  "SimilarWeb", "Answer The Public", "QuillBot", "Wordtune",
  "Copymatic", "GPL Themes & Plugins", "Storyblocks",
  "Envato Elements (98% uptime)", "WriteHuman", "Jasper",
];
