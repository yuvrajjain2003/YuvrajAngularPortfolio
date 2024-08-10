export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#DD0031'); // Angular Red
    static readonly TYPESCRIPT = new Tag('TypeScript', '#3178C6'); // TypeScript Blue
    static readonly PYTHON = new Tag('Python', 'hotpink'); // Python Blue
    static readonly CSHARP = new Tag('C#', '#9B4F96'); // C# Purple
    static readonly JAVA = new Tag('Java', '#B07219'); // Java Brown
    static readonly NODEJS = new Tag('Node.JS', '#68A063'); // Node.js Green
    static readonly ASPNET = new Tag('ASP.NET', '#512BD4'); // ASP.NET Purple
    static readonly JAVASCRIPT = new Tag('JavaScript', '#E34F26'); // JavaScript Orange
    static readonly REACT = new Tag('React', '#61DAFB'); // React Blue
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#336791'); // PostgreSQL Blue
    static readonly KUBERNETES = new Tag('Kubernetes', '#3C873A'); // Kubernetes Blue
    static readonly ARDUINO = new Tag('Arduino', '#00979D'); // Arduino Teal
    static readonly CPP = new Tag('C++', '#00599C'); // C++ Blue
    static readonly C = new Tag('C', '#A8B9CC'); // C Light Blue
    
    
    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}