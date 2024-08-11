import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    projects: Project[] = [
        {id: 0, name: "UNC Study Room Reservation App", summary: "Led the development of an Angular web app for students at UNC Chapel Hill to reserve study rooms, now used by over 300 students weekly.", description: 'I developed an Angular-based web application that allows students at UNC Chapel Hill to reserve study rooms, streamlining the process for hundreds of students weekly. Initially a passion project, it caught the attention of my professor, leading to its official integration into the university’s computer science website where I committed over 5000 lines of code. I led a team of four in a larger group of ten to design and implement the room reservation feature. You can check out the app here: <a href="https://csxl.unc.edu/welcome" target="_blank"> https://csxl.unc.edu/welcome</a>. You can also read the LinkedIn post I made when our feature was launched <a href="https://www.linkedin.com/feed/update/urn:li:activity:7176744839630200833/" target="_blank"> here</a>.', projectLink: 'https://github.com/unc-csxl/csxl.unc.edu', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PYTHON, Tag.POSTGRESQL, Tag.KUBERNETES], pictures: ["assets/projects/0/picture0.png", "assets/projects/0/picture1.png", "assets/projects/0/picture2.png"]},
        {id: 1, name: "Arduino Remote Controlled Car", summary: "3rd place at APPL110 Expo for designing Bestla, a custom wireless RC car programmed in C++ and Arduino for precise control, earning 42 stars from the audience.", description: "Secured 3rd place out of 50+ contestants at the APPL110 Expo by designing and crafting Bestla, a wireless remote-controlled car with a custom laser-cut wood enclosure and vinyl stickers. Programmed in C++ to develop a sophisticated control system, transmitting and receiving signals for precise car movements. Bestla garnered 42 stars from the audience, earning top recognition.", projectLink: 'https://github.com/yuvrajjain2003/bestla', tags: [Tag.ARDUINO, Tag.CPP, Tag.C], pictures: ["assets/projects/1/picture0.png", "assets/projects/1/picture1.png", "assets/projects/1/picture2.png", "assets/projects/1/picture3.png"]},
        {id: 2, name: "AI Fitness Tracker App", summary: "Developed an AI-powered fitness application utilizing MediaPipe to provide real-time feedback on exercise form accuracy. The app uses advanced algorithms to compare user performance against professional standards, offering detailed insights.", description: "Created an innovative AI fitness application that leverages MediaPipe to deliver precise, real-time feedback on exercise form. Focusing on bicep curls, the app analyzes angles of key anatomical landmarks, compares them with professional benchmarks, and calculates an accuracy score for each repetition. This tool empowers users to refine their techniques, track progress, and achieve fitness goals with greater precision. The project includes advanced Python programming to transmit and receive signals, ensuring accurate and responsive performance tracking.", projectLink: '', tags: [Tag.PYTHON, Tag.AI, Tag.JAVASCRIPT], pictures: ["assets/projects/2/picture0.png", "assets/projects/2/picture1.png", "assets/projects/2/picture2.png"]},
        {id: 3, name: "HackNC Python", summary: "Developed a Python-based endless scroller game with custom pixel art and efficient OOP design within 12 hours at UNC HACK110.", description: 'I created an endless scroller-style video game using Python and the PyGame API during the UNC HACK110 Hackathon, completing the project within 12 hours. The game features custom-designed pixel art assets and leverages Object-Oriented Programming to define unique classes for each object and imported asset, ensuring efficient and clear execution throughout the game.', projectLink: 'https://github.com/yuvrajjain2003/side-scrolling-endless-runner', tags: [Tag.PYTHON, Tag.PYGAME], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
        {id: 4, name: "Coming Soon.", summary: "Coming Soon.", description: 'Coming Soon.', projectLink: '', tags: [Tag.JAVA, Tag.CSHARP], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
        {id: 5, name: "Coming Soon.", summary: "Coming Soon.", description: '', projectLink: '', tags: [Tag.PYTHON, Tag.CSHARP, Tag.JAVA], pictures: ["../../assets/Temp.png", "../../assets/Temp2.png"]},
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
