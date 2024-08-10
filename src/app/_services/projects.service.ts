import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    projects: Project[] = [
        {id: 0, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: []},
        {id: 1, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.ANGULAR, Tag.REACT], pictures: []},
        {id: 2, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.NODEJS, Tag.ASPNET], pictures: []},
        {id: 3, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.JAVASCRIPT, Tag.POSTGRESQL], pictures: []},
        {id: 4, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.JAVA, Tag.CSHARP], pictures: []},
        {id: 5, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.PYTHON, Tag.CSHARP, Tag.JAVA], pictures: []},
    ]

    constructor() { }

    getProjects() {
        return this.projects;
    }

    getProjectById(id: number) : Project {
        let project = this.projects.find(project => project.id === id);
        if (project === undefined) {
            throw new TypeError('There is no project that matches the id: ' + id)
        };
        return project;
    }


}
