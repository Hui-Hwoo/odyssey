// ============================ //
//        Parse raw data        //
// ============================ //

import { randomUUID } from "crypto";
import * as fs from "fs";

// [Helper] Capitalize first letter
const capitalizeFirstLetter = (string) => {
    // FIXME: deal with case like "typescript" => "TypeScript"
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// ====================================== //
//                Node Radius             //
// ====================================== //
const defaultNodeRadius = 7;
const roleNodeRadius = 70;
const skillNodeRadius = 7;
const internshipNodeRadius = 15;
const teacherAssistantNodeRadius = 12;
const projectNodeRadius = 12;
const certificateNodeRadius = 10;
const hackathonNodeRadius = 12;

const getNodeRadius = (category) => {
    switch (category) {
        case "role":
            return roleNodeRadius;
        case "skill":
            return skillNodeRadius;
        case "internship":
            return internshipNodeRadius;
        case "teacher assistant":
            return teacherAssistantNodeRadius;
        case "project":
            return projectNodeRadius;
        case "certificate":
            return certificateNodeRadius;
        case "hackathon":
            return hackathonNodeRadius;
        default:
            return defaultNodeRadius;
    }
};

// ====================================== //
//                Role Node               //
// ====================================== //

// [Constants] Control Role Node Layout
const roleNodeOffset = -45;
const roleNodeDiff = [
    [0, 15],
    [10, 25],
    [5, 30],
];

// [Helper] Get the angle of the Role node.
const getAngle = (index, total, radius = 100, offset = 0) => {
    if (total === 0) {
        return { fx: undefined, fy: undefined };
    }
    const angleInDegrees = (360 * index) / total + offset;
    const angleInRadians = angleInDegrees * (Math.PI / 180); // Convert degrees to radians

    return {
        fx: Math.sin(angleInRadians) * radius,
        fy: -Math.cos(angleInRadians) * radius,
    };
};

// ======================================== //
//            Color Palette                 //
// ======================================== //

// [Helper] Get the color of the skill.
const getSkillColor = (skill) => {
    const frontendSkills = [
        "html",
        "css",
        "javascript",
        "typescript",
        "react",
        "micro frontend",
        "vue",
        "figma",
        "canva",
        "zustand",
        "graphql",
        "next.js",
        "d3.js",
        "taiwindcss",
        "webpack",
        "storybook",
        "jest",
        "swift",
        "swiftui",
        "mvvm",
        "ios",
    ];
    const backendSkills = [
        "node.js",
        "express.js",
        "python",
        "pytest",
        "django",
        "flask",
        "fastapi",
        "sql",
        "sqlite",
        "firestore",
        "vitest",
        "postgresql",
        "azure",
        "aws s3",
        "stripe",
        "prisma",
        "algorithm",
        "data structure",
        "math",
        "jupyter notebook",
        "google cloud",
        "c++",
        "computer vision",
        "pytorch",
        "google colab",
        "cnn",
        "java",
        "mongodb",
        "database",
    ];
    const AI_Skills = [
        "llm",
        "vector search",
        "genai",
        "fine-tuning",
        "deep learning",
        "data mining",
        "machine learning",
    ];
    const devOpsSkills = ["docker", "kubernetes", "ci/cd", "github actions"];
    const keyword = skill.toLowerCase();

    if (frontendSkills.includes(keyword)) {
        return "yellow";
    } else if (backendSkills.includes(keyword)) {
        return "blue";
    } else if (AI_Skills.includes(keyword)) {
        return "gray";
    } else if (devOpsSkills.includes(keyword)) {
        return "green";
    } else {
        console.log(`[Warning] Skill ${skill} does not have a color`);
        return "gray";
    }
};

const colorPalette = {
    internship: "red",
    "teacher assistant": "green",
    project: "green",
    certificate: "purple",
    hackathon: "green",
    other: "black",
};

const getColor = (category, title) => {
    if (category === "role") {
        switch (title.toLowerCase()) {
            case "frontend engineer":
                return "yellow";
            case "backend engineer":
                return "blue";
            default:
                return "gray";
        }
    }

    if (category === "skill") {
        return getSkillColor(title);
    }

    return colorPalette[category] || "black";
};

// ======================================== //
//                  Priority                //
// ======================================== //

const categoryPriority = {
    role: 0,
    internship: 1,
    "teacher assistant": 2,
    project: 3,
    certificate: 4,
    hackathon: 5,
    other: 6,
    skill: 7,
};

// ======================================== //
//        Parse raw data to JSON file       //
// ======================================== //

const parseRawData = (sourceFilePath, targetFilePath) => {
    // Check file existence
    if (!fs.existsSync(sourceFilePath)) {
        console.error("Source file does not exist");
        return;
    }

    // Read raw data from file
    const rawData = fs.readFileSync(sourceFilePath, "utf8");
    const jsonData = JSON.parse(rawData);

    // Parse data
    let nodes = [];
    let links = [];
    let nodesMap = {};
    let skillIdMap = {};
    let roleIdMap = {};
    for (const categoryData of jsonData) {
        const category = String(categoryData.category).toLowerCase();
        if (category === "sample") {
            console.log(`[Category] ${category} - Skip`);
            continue;
        }

        const data = categoryData.data;
        const totalRoleNode = category === "role" ? data.length : 0;

        console.log(`[Category] ${category} - ${data.length} items`);

        // Create nodes
        for (const [index, item] of data.entries()) {
            console.log(
                `  [Item] ${item.title} - ${item.skills.length} skills`
            );
            const experienceNodeId = `${category}-${randomUUID()}`;
            const skills = item.skills || [];
            const experienceNode = {
                id: experienceNodeId,

                category: category,
                color: getColor(category, item.title),
                title: item.title,

                description: item.description,
                skills: [],
                links: item.links || [],
                date: item.date || [],
            };

            if (category === "role") {
                roleIdMap[item.title.toLowerCase()] = experienceNodeId;
                experienceNode["experiences"] = [];
            }

            const experienceGraphNode = {
                ...getAngle(
                    index,
                    totalRoleNode,
                    category === "role"
                        ? roleNodeRadius + roleNodeDiff[index][1]
                        : getNodeRadius(category),
                    roleNodeOffset
                ),
                id: experienceNodeId,
                radius:
                    category === "role"
                        ? roleNodeRadius + roleNodeDiff[index][0]
                        : getNodeRadius(category),
                ops: {
                    title: item.title,
                    color: getColor(category, item.title),
                },
            };

            // Add graph node
            nodes.push(experienceGraphNode);

            for (const skill of skills) {
                const skillName = String(skill).toLowerCase();

                if (skillName.endsWith("engineer")) {
                    console.log(`    [Role] ${skill}`);
                    const roleId = roleIdMap[skillName];

                    if (!roleId) {
                        console.error(`[Error] Role ${skill} does not exist`);
                        continue;
                    }

                    nodesMap[roleId].experiences.push(experienceNodeId);
                    experienceNode.skills.push(roleId);
                    links.push({
                        source: experienceNodeId,
                        target: roleId,
                    });
                    continue;
                }

                console.log(`    [Skill] ${skill}`);

                if (!skillIdMap[skillName]) {
                    const keywordId = `skill-${randomUUID()}`;
                    skillIdMap[skillName] = keywordId;

                    const skillNode = {
                        id: keywordId,

                        category: "skill",
                        title: capitalizeFirstLetter(skill),
                        color: getColor("skill", skill),

                        experiences: [],
                    };

                    const skillGraphNode = {
                        id: keywordId,
                        radius: getNodeRadius("skill"),
                        ops: {
                            title: capitalizeFirstLetter(skill),
                            color: getColor("skill", skill),
                        },
                    };

                    // Add graph node
                    nodes.push(skillGraphNode);
                    nodesMap[keywordId] = skillNode;
                }

                // Add skill node
                const skillNodeId = skillIdMap[skillName];
                experienceNode.skills.push(skillNodeId);

                // Update skill node's experiences
                if (!experienceNodeId.startsWith("role")) {
                    nodesMap[skillNodeId].experiences.push(experienceNodeId);
                }

                // Add link
                links.push({
                    source: experienceNodeId,
                    target: skillNodeId,
                });
            }

            // Add Experience node
            nodesMap[experienceNodeId] = experienceNode;
        }
    }

    const fullNodesMap = {};
    for (const node of nodes) {
        const category = node.id.split("-")[0];
        if (category === "skill") {
            const relatedNodes = nodesMap[node.id].experiences
                .filter((experienceId) => !experienceId.startsWith("role"))
                .map((experienceId) => {
                    const experienceNode = nodesMap[experienceId];
                    return {
                        id: experienceNode.id,
                        title: experienceNode.title,
                        category: experienceNode.category,
                        color: experienceNode.color,
                    };
                })
                .sort((a, b) => {
                    return (
                        categoryPriority[a.category] -
                        categoryPriority[b.category]
                    );
                });

            fullNodesMap[node.id] = {
                ...nodesMap[node.id],
                experiences: relatedNodes,
            };
        } else {
            const relatedNodes = nodesMap[node.id].skills.map((skillId) => {
                const skillNode = nodesMap[skillId];
                return {
                    id: skillNode.id,
                    title: skillNode.title,
                    category: skillNode.category,
                    color: skillNode.color,
                };
            });

            fullNodesMap[node.id] = {
                ...nodesMap[node.id],
                skills: relatedNodes,
            };

            if ("experiences" in nodesMap[node.id]) {
                fullNodesMap[node.id].experiences = nodesMap[
                    node.id
                ].experiences.map((experienceId) => {
                    const experienceNode = nodesMap[experienceId];
                    return {
                        id: experienceNode.id,
                        title: experienceNode.title,
                        category: experienceNode.category,
                        color: experienceNode.color,
                    };
                });
            }
        }
    }

    const sortedNodes = nodes.sort((a, b) => {
        return (
            categoryPriority[a.id.split("-")[0]] -
            categoryPriority[b.id.split("-")[0]]
        );
    });

    // write parsed data to file
    const parsedData = {
        nodes: sortedNodes,
        links: links,
        nodesMap: fullNodesMap,
    };

    fs.writeFileSync(targetFilePath, JSON.stringify(parsedData, null, 2));
};

const rawDataPath = "src/data/raw-data.json";
const parsedDataPath = "src/data/parsed-data.json";
parseRawData(rawDataPath, parsedDataPath);
