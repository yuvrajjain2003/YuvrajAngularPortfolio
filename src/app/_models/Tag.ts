export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#DD0031');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#3178C6');
    static readonly PYTHON = new Tag('Python', '#306998');
    static readonly CSHARP = new Tag('C#', '#9B4F96');
    static readonly JAVA = new Tag('Java', '#B07219');
    static readonly NODEJS = new Tag('Node.js', '#3C873A');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#c9a000');
    static readonly REACT = new Tag('React', '#0891b2');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#336791');
    static readonly KUBERNETES = new Tag('Kubernetes', '#326CE5');
    static readonly ARDUINO = new Tag('Arduino', '#00979D');
    static readonly CPP = new Tag('C++', '#00599C');
    static readonly C = new Tag('C', '#5c6bc0');
    static readonly AI = new Tag('AI/ML', '#0d9488');
    static readonly PYGAME = new Tag('Pygame', '#c026d3');
    static readonly AWS = new Tag('AWS', '#e07b00');
    static readonly GCP = new Tag('GCP', '#1a73e8');
    static readonly DOCKER = new Tag('Docker', '#2496ED');
    static readonly FASTAPI = new Tag('FastAPI', '#059669');
    static readonly PYTORCH = new Tag('PyTorch', '#c0392b');
    static readonly TENSORFLOW = new Tag('TensorFlow', '#d97706');
    static readonly HUGGINGFACE = new Tag('Hugging Face', '#7c3aed');
    static readonly LLM = new Tag('LLM', '#6d28d9');
    static readonly NLP = new Tag('NLP', '#0e7490');
    static readonly CUDA = new Tag('CUDA', '#76b900');

    private constructor(private readonly key: string, public readonly color: string) {}

    toString() {
        return this.key;
    }
}
