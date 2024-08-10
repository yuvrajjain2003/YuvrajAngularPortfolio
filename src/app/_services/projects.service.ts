import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    projects: Project[] = [
        {id: 0, name: "UNC Study Room Reservation App", summary: "Led the development of an Angular web app for students to reserve study rooms, now used by over 300 students weekly.", description: 'I developed an Angular-based web application that allows students at UNC Chapel Hill to reserve study rooms, streamlining the process for hundreds of students weekly. Initially a passion project, it caught the attention of my professor, leading to its official integration into the university’s computer science website where I committed over 5000 lines of code. I led a team of four in a larger group of ten to design and implement the room reservation feature. You can check out the app here: <a href="https://csxl.unc.edu/welcome" target="_blank"> https://csxl.unc.edu/welcome</a>. You can also read the LinkedIn post I made when our feature was launched <a href="https://www.linkedin.com/feed/update/urn:li:activity:7176744839630200833/"> here</a>.', projectLink: 'https://github.com/unc-csxl/csxl.unc.edu', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PYTHON, Tag.POSTGRESQL, Tag.KUBERNETES], pictures: ["assets/projects/0/picture0.png", "../../assets/Temp2.png"]},
        {id: 1, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.ANGULAR, Tag.REACT], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
        {id: 2, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.NODEJS, Tag.ASPNET], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
        {id: 3, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.JAVASCRIPT, Tag.POSTGRESQL], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
        {id: 4, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.JAVA, Tag.CSHARP], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
        {id: 5, name: "Sample Angular Project", summary: "Text Description", description: '', projectLink: '', tags: [Tag.PYTHON, Tag.CSHARP, Tag.JAVA], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
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
