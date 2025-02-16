import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";
import { Color } from "./color";

export enum Category {
    Role = "role",
    Skill = "skill",
    Internship = "internship",
    TA = "teaching assistant",
    Project = "project",
    Certificate = "certificate",
    Hackathon = "hackathon",
    Education = "education",
    Other = "other",
}

// ==================================== //
//             Graph Data               //
// ==================================== //

export type LinkType = {
    title: string;
    url: string;
};

export type DateType = [string, string?];

export type NodeOps = {
    title: string;
    color: Color;
};

export interface GraphNodeType extends SimulationNodeDatum {
    id: string;
    radius: number;
    x?: number | undefined;
    y?: number | undefined;
    vx?: number | undefined;
    vy?: number | undefined;
    fx?: number | null | undefined;
    fy?: number | null | undefined;
    ops: NodeOps;
}

export interface GraphLinkType extends SimulationLinkDatum<GraphNodeType> {
    source: GraphNodeType | string | string; // the id of the source node
    target: GraphNodeType | string | number; // the id of the target node
    index?: number | undefined;
}

// ==================================== //
//             Raw Graph Data           //
// ==================================== //

export type RelatedNode = {
    id: string;
    title: string;
    category: Category;
    color: Color;
};

export type SkillNodeInfo = {
    id: string;
    category: Category;
    title: string;
    color: Color;
    experiences: RelatedNode[];
};

export type ExperienceNodeInfo = {
    id: string;
    category: Category;
    title: string;
    color: Color;
    description: string;
    skills: RelatedNode[];
    links: LinkType[];
    date?: DateType;
};

export type RawDataType = {
    nodes: GraphNodeType[];
    links: GraphLinkType[];
    nodesMap: Record<string, SkillNodeInfo | ExperienceNodeInfo>;
};
