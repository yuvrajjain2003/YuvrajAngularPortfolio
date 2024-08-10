import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

    projects: Project[] = [
        {id: 0, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: []},
        {id: 1, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.ANGULAR, Tag.REACT], pictures: []},
        {id: 2, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.NODEJS, Tag.ASPNET], pictures: []},
        {id: 3, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.JAVASCRIPT, Tag.POSTGRESQL], pictures: []},
        {id: 4, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.JAVA, Tag.CSHARP], pictures: []},
        {id: 5, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.PYTHON, Tag.CSHARP, Tag.JAVA], pictures: []},

    ]

    constructor(private titleService: Title) {
        this.titleService.setTitle("Yuvraj Jain - Portfolio")
    }

}
