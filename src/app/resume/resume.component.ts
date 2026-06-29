import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Resume — Yuvraj Jain');
  }

  experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Kinetik Solutions',
      location: 'Raleigh, NC',
      period: 'May 2024 – Present',
      color: '#3b82f6',
      bullets: [
        'Designed and built scalable backend services and REST APIs on AWS serving enterprise platform operations, contributing to CI/CD pipelines, Kubernetes deployments, observability infrastructure, and deployment automation across production systems.',
        'Built AI-assisted workflows integrating LLM-based moderation and classification logic for enterprise data quality and policy enforcement, applying anomaly detection and behavioral analysis to flag issues in real-time across 23,600+ enterprise contacts.',
        'Partnered with cross-functional teams — product managers, engineers, and stakeholders — to design and deliver reliable platform services; contributed to technical discussions and system design alongside senior engineers.'
      ]
    },
    {
      role: 'Full-Stack Software Engineering Intern',
      company: 'UNC Dept. of Computer Science (CSXL)',
      location: 'Chapel Hill, NC',
      period: 'Aug 2023 – May 2024',
      color: '#22d3ee',
      bullets: [
        'Built scalable web applications and backend platform services (React/TypeScript, Angular, Python/FastAPI, PostgreSQL) end-to-end, designing APIs and operational dashboards that served 300+ weekly active users with high reliability.',
        'Contributed to CI/CD pipelines with Docker and Kubernetes, improving deployment automation and observability; collaborated in Agile sprints with product, design, and engineering stakeholders across a cross-functional team.'
      ]
    },
    {
      role: 'Software Development Research Assistant',
      company: 'DepenD Lab, UNC Dept. of Neuroscience',
      location: 'Chapel Hill, NC',
      period: 'May 2023 – Aug 2024',
      color: '#8b5cf6',
      bullets: [
        'Built scalable data processing pipelines and operational tooling on Linux/Unix cloud infrastructure, contributing 3,000+ lines of well-documented Python to an active open-source platform used across UNC, Duke, and UVA.'
      ]
    },
    {
      role: 'Data Science Intern',
      company: 'Havells India Ltd.',
      location: 'India (Remote)',
      period: 'May 2022 – Aug 2022',
      color: '#10b981',
      bullets: [
        'Built telemetry and analytics pipelines for operational data, developing a React + JavaScript dashboard that gave stakeholders real-time visibility into platform metrics and supported data-driven decision-making.'
      ]
    }
  ];

  education = [
    {
      degree: 'M.S. in Computer Science',
      school: 'University of North Carolina at Chapel Hill',
      period: 'Expected Dec 2026',
      detail: '',
      color: '#3b82f6'
    },
    {
      degree: 'B.S. Computer Science · B.S. Statistics & Analytics · Minor Data Science',
      school: 'University of North Carolina at Chapel Hill',
      period: 'May 2025',
      detail: 'GPA: 4.0 · Highest Honors (1 of 2 CS awardees) · Honors Thesis: SLED — ACL 2025 & EMNLP 2025',
      color: '#22d3ee'
    }
  ];

  publications = [
    {
      title: 'SLED: Scalable Language-based Explanations for Model Divergence',
      venue: 'ACL 2025 · EMNLP 2025',
      role: 'First Author',
      note: 'Undergraduate Honors Thesis — Highest Honors'
    },
    {
      title: 'Sentiment Analysis of Tweets to Predict Stock Prices',
      venue: 'IJCIR 2021',
      role: 'Author',
      note: '86.24% accuracy · 1M+ data points'
    }
  ];

  certifications = [
    { name: 'AWS Developer Associate (DVA-C02)', issuer: 'Amazon Web Services', icon: '☁️' },
    { name: 'Chess.com Collegiate Ambassador', issuer: 'Chess.com', icon: '♟️' }
  ];

  extras = [
    { title: 'Lead Organizer & Judge, HackNC 2024', detail: "Co-led NC's largest hackathon — 500+ participants; coordinated venue, sponsors, mentors; judged on technical innovation." },
    { title: 'Winner, Carolina Across Data Hackathon (Mar 2022)', detail: '1st place ($500) for COVID-19 impact analysis on NC mental health; findings contributed to NC state policy 122C-2.' },
    { title: 'Teaching Assistant, UNC Dept. of Computer Science', detail: 'Aug 2022 – Present. Cross-functional teaching environment across multiple CS courses.' }
  ];
}
