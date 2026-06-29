import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
    category?: string;
    accentColor?: string;
    featured?: boolean;
    publication?: string;
    publicationLink?: string;
}
