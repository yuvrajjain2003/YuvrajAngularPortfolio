import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];

  categories = [
    { key: 'all', label: 'All' },
    { key: 'research', label: 'Research' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'ml', label: 'ML / AI' },
    { key: 'systems', label: 'Systems' }
  ];

  activeCategory = 'all';

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Projects — Yuvraj Jain');
  }

  ngOnInit(): void {
    this.allProjects = this.projectService.getProjects();
    this.filteredProjects = this.allProjects;
  }

  setFilter(key: string) {
    this.activeCategory = key;
    if (key === 'all') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(p => p.category === key);
    }
  }
}
