import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    projects: Project[] = [
        {
            id: 0,
            name: 'SLED: Scalable Language-based Explanations for Model Divergence',
            summary: 'First-author research published at ACL 2025 & EMNLP 2025. Built a scalable platform for behavioral analysis of LLMs, explaining divergence across thousands of real-world inputs.',
            description: `My undergraduate honors thesis — published as first author at <strong>ACL 2025</strong> and <strong>EMNLP 2025</strong>, two of the top venues in NLP and ML.<br><br>
SLED is a scalable platform for explaining <em>why</em> two language models behave differently on the same inputs. I designed and shipped end-to-end platform services for policy enforcement-style behavioral analysis, building REST APIs, operational tooling, and telemetry infrastructure that scaled across thousands of real-world inputs.<br><br>
Awarded <strong>Highest Honors — 1 of 2 CS awardees at UNC Chapel Hill</strong>. Presented at both ACL 2025 and EMNLP 2025, collaborating with cross-functional research and engineering teams throughout.`,
            projectLink: 'https://github.com/yuvrajjain2003',
            publication: 'ACL 2025 · EMNLP 2025',
            pictures: [],
            tags: [Tag.PYTHON, Tag.PYTORCH, Tag.NLP, Tag.LLM, Tag.HUGGINGFACE, Tag.AWS],
            category: 'research',
            featured: true,
            accentColor: 'linear-gradient(135deg, #4c1d95 0%, #1e3a8a 100%)'
        },
        {
            id: 1,
            name: 'Implicit Chain-of-Thought: Decoding What LLMs Actually Think',
            summary: 'AI-assisted analysis pipelines and operational dashboards for Trust & Safety-style behavioral analysis, applying anomaly detection across Llama-3.1, Qwen-2.5, and Gemma-2.',
            description: `Research project investigating the hidden reasoning mechanisms inside large language models. Built an end-to-end analysis pipeline that extracts and interprets intermediate representations from transformer architectures.<br><br>
Key contributions: React-based operational dashboards for Trust-and-Safety-style behavioral analysis, anomaly detection and classification to flag model behavior issues in real time, and scalable cloud-native infrastructure with Kubernetes and GitHub Actions CI/CD.<br><br>
Deployed observability tooling and telemetry dashboards giving real-time visibility into LLM behavior across three frontier models: <strong>Llama-3.1-8B, Qwen-2.5-7B, and Gemma-2-9B</strong>.`,
            projectLink: 'https://github.com/yuvrajjain2003',
            pictures: [],
            tags: [Tag.PYTHON, Tag.PYTORCH, Tag.REACT, Tag.GCP, Tag.KUBERNETES, Tag.NLP],
            category: 'research',
            accentColor: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)'
        },
        {
            id: 2,
            name: 'UNC Study Room Reservation App',
            summary: 'Full-stack web application serving 300+ weekly active users, officially integrated into the UNC Computer Science department platform.',
            description: `Full-stack web application enabling UNC Chapel Hill students to reserve study rooms in the CS building. What started as a passion project was adopted by the department and is now an official part of the university's CS platform.<br><br>
Led a team of four within a larger cross-functional team of ten. Contributed 5,000+ lines of production code across the Angular/TypeScript frontend, Python/FastAPI backend, and PostgreSQL database. Contributed to CI/CD pipelines with Docker and Kubernetes, improving deployment automation and observability.<br><br>
Currently serving <strong>300+ weekly active users</strong> with high availability. <a href="https://csxl.unc.edu/welcome" target="_blank" style="color:#3b82f6;">Live app ↗</a>`,
            projectLink: 'https://github.com/unc-csxl/csxl.unc.edu',
            pictures: ['assets/projects/0/picture0.png', 'assets/projects/0/picture1.png', 'assets/projects/0/picture2.png'],
            tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PYTHON, Tag.FASTAPI, Tag.POSTGRESQL, Tag.KUBERNETES],
            category: 'fullstack',
            featured: true,
            accentColor: 'linear-gradient(135deg, #1e40af 0%, #0891b2 100%)'
        },
        {
            id: 3,
            name: 'Sentiment Analysis for Stock Price Prediction',
            summary: 'Published at IJCIR 2021. Scalable backend processing 1M+ tweets with content classification achieving 86.24% accuracy for predicting short-term stock movements.',
            description: `Published at <strong>IJCIR 2021</strong>. Built a scalable backend service and REST API platform processing over <strong>1 million real-world tweets</strong> to predict stock price movements using NLP-based sentiment analysis.<br><br>
Developed a pipeline combining lexicon-based and ML approaches for financial sentiment classification, achieving <strong>86.24% accuracy</strong>. The system includes operational telemetry and moderation-style content classification built with Python, Node.js, and PostgreSQL.<br><br>
Validated against real market data, the paper demonstrates that Twitter sentiment is a statistically significant predictor of short-term stock movements — a result with real-world implications for quantitative finance.`,
            projectLink: 'https://github.com/yuvrajjain2003',
            publication: 'IJCIR 2021',
            pictures: [],
            tags: [Tag.PYTHON, Tag.NODEJS, Tag.POSTGRESQL, Tag.NLP, Tag.AI],
            category: 'research',
            accentColor: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)'
        },
        {
            id: 4,
            name: 'AI-Powered Real-Time Fitness Tracker',
            summary: 'Computer vision application using MediaPipe for real-time exercise form analysis, providing per-rep accuracy scores benchmarked against professional standards.',
            description: `AI fitness application leveraging Google's MediaPipe framework for real-time, precise feedback on exercise form. Built with Python and JavaScript, the app analyzes angles of key anatomical landmarks and compares them against professional benchmarks.<br><br>
The system calculates a per-repetition accuracy score, tracks progress over sessions, and provides actionable feedback to help users refine their technique. Currently focused on bicep curls with a modular architecture designed to extend to any exercise type.<br><br>
Demonstrates practical computer vision applied to healthcare and fitness — a high-impact application domain for AI systems at companies like Apple Health, Google Fit, and Amazon Halo.`,
            projectLink: '',
            pictures: ['assets/projects/2/picture0.png', 'assets/projects/2/picture1.png', 'assets/projects/2/picture2.png'],
            tags: [Tag.PYTHON, Tag.AI, Tag.JAVASCRIPT],
            category: 'ml',
            accentColor: 'linear-gradient(135deg, #7c2d12 0%, #b45309 100%)'
        },
        {
            id: 5,
            name: 'Bestla: Custom Wireless RC Car',
            summary: '3rd place at APPL110 Expo (50+ contestants). Custom-programmed wireless RC car in C++/Arduino with precision signal control, earning the highest audience star count.',
            description: `Secured 3rd place out of 50+ contestants at the APPL110 Expo by designing and building <strong>Bestla</strong> — a fully wireless remote-controlled car with a custom laser-cut wood enclosure and vinyl sticker design.<br><br>
Programmed entirely in C++ using the Arduino framework, implementing a custom signal protocol for precise bi-directional wireless communication between the transmitter and receiver. Every component — from the chassis design to the control algorithm — was hand-built.<br><br>
Bestla earned <strong>42 audience stars</strong> — the highest star count for any physical computing project at the expo — recognized for combining engineering precision with design quality.`,
            projectLink: 'https://github.com/yuvrajjain2003/bestla',
            pictures: ['assets/projects/1/picture0.png', 'assets/projects/1/picture1.png', 'assets/projects/1/picture2.png', 'assets/projects/1/picture3.png'],
            tags: [Tag.ARDUINO, Tag.CPP, Tag.C],
            category: 'systems',
            accentColor: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)'
        }
    ]

    constructor() { }

    getProjects() {
        return this.projects;
    }

    getProjectById(id: number): Project {
        const project = this.projects.find(p => p.id === id);
        if (project === undefined) {
            throw new TypeError('No project with id: ' + id);
        }
        return project;
    }
}
