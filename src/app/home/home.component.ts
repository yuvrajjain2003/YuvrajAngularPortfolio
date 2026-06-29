import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private roleTimer: any;
  private fadeTimer: any;

  roles = ['Software Engineer', 'ML Researcher', 'ACL 2025 Author', 'Systems Builder'];
  currentRoleIndex = 0;
  roleVisible = true;

  get currentRole() { return this.roles[this.currentRoleIndex]; }

  skillGroups = [
    {
      name: 'Frontend',
      icon: '⚡',
      skills: ['React', 'TypeScript', 'Angular', 'JavaScript', 'HTML5 / CSS3']
    },
    {
      name: 'Backend & APIs',
      icon: '⚙️',
      skills: ['Python', 'Go', 'Node.js', 'FastAPI', 'Java', 'REST APIs']
    },
    {
      name: 'Cloud & Infrastructure',
      icon: '☁️',
      skills: ['AWS (SageMaker, EC2, S3, Lambda)', 'GCP / Vertex AI', 'Docker', 'Kubernetes', 'GitHub Actions CI/CD']
    },
    {
      name: 'AI / ML',
      icon: '🤖',
      skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LLM Workflows', 'CUDA', 'scikit-learn']
    },
    {
      name: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'SQL', 'MongoDB', 'Redis', 'AWS Athena']
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Yuvraj Jain — Software Engineer & ML Researcher');
  }

  ngOnInit() {
    this.roleTimer = setInterval(() => {
      this.roleVisible = false;
      this.fadeTimer = setTimeout(() => {
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.roleVisible = true;
      }, 350);
    }, 2800);
  }

  ngOnDestroy() {
    if (this.roleTimer) clearInterval(this.roleTimer);
    if (this.fadeTimer) clearTimeout(this.fadeTimer);
  }
}
