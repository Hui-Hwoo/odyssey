import { ColorType } from "./types";
import { TimeIncident } from "./pages/TimeLine";

export const GitHub = "https://github.com/Hui-Hwoo";
export const LinkedIn = "https://www.linkedin.com/in/hui-hwoo/";
export const Email = "hui.hwoo@gmail.com";

export const timelineIncidents = [
    {
        tag: [
            { tagContent: "Computer Science", tagColor: ColorType.Green },
            { tagContent: "Education", tagColor: ColorType.Gray },
        ],
        date: new Date("2024-12-15"),
        title: "Northeastern University",
        content: "Master's degree in Computer Science",
    },
    {
        tag: [
            { tagContent: "Electrical Engineering", tagColor: ColorType.Green },
            { tagContent: "Education", tagColor: ColorType.Gray },
        ],
        date: new Date("2021-06-15"),
        title: "Tianjin University",
        content: "Bachelor's degree in Electrical Engineering",
    },
    {
        tag: [
            { tagContent: "Finance", tagColor: ColorType.Green },
            { tagContent: "Education", tagColor: ColorType.Gray },
        ],
        date: new Date("2021-06-14"),
        title: "Nankai University",
        content: "Double Bachelor's degree in Finance",
    },
    {
        tag: [
            { tagContent: "Internship", tagColor: ColorType.Blue },
            { tagContent: "Full-stack", tagColor: ColorType.Gray },
        ],
        date: new Date("2023-09-15"),
        title: "Aitist SWE Intern",
        content:
            "Tech-savvy innovator with a proven track record in propelling startup success from prototype to profitability, adept in React development for sophisticated applications, UI/UX design optimization, and enhancing codebase efficiency through centralized logic and customized API implementations, consistently driving enhanced performance and user satisfaction.",
        link: "https://www.aitist.ai/",
    },
    {
        tag: [
            { tagContent: "Internship", tagColor: ColorType.Blue },
            { tagContent: "Full-stack", tagColor: ColorType.Gray },
        ],
        date: new Date("2023-12-15"),
        title: "Lexmind SWE Intern",
        content:
            "Spearheaded the optimization of data serialization and deserialization processes, drove robust unit and integration testing strategies, and crafted specialized React components, streamlining development workflows and enhancing system reliability and efficiency.",
        link: "https://www.aitist.ai/",
    },
    {
        tag: [
            { tagContent: "Internship", tagColor: ColorType.Blue },
            { tagContent: "Backend", tagColor: ColorType.Gray },
            { tagContent: "LLM", tagColor: ColorType.Yellow },
        ],
        date: new Date("2024-04-15"),
        title: "YORG SWE Intern",
        content:
            "Enhanced chat interaction accuracy and reduced hallucinations by 25%, upgraded legacy APIs to support live streaming, and developed a secure payment system using Stripe API and Azure for robust processing.",
        link: "https://atlasai.dev/",
    },
    {
        tag: [
            { tagContent: "Internship", tagColor: ColorType.Blue },
            { tagContent: "Backend", tagColor: ColorType.Gray },
            { tagContent: "LLM", tagColor: ColorType.Yellow },
        ],
        date: new Date("2024-07-15"),
        title: "Gru.ai SWE Intern",
        content:
            "Developed a scalable data sync solution with Prisma and Kubernetes, optimized an LLM for error-free long file rewriting, and engineered an autonomous agent that secured top ranking on the swe-bench leaderboard.",
        link: "https://gru.ai/",
    },
    {
        tag: [
            { tagContent: "TA", tagColor: ColorType.Blue },
            { tagContent: "Work", tagColor: ColorType.Gray },
        ],
        date: new Date("2024-01-10"),
        title: "Teaching Assistant",
        content: "For course CS 5800 Algorithms at Northeastern University",
    },
    {
        tag: [
            { tagContent: "TA", tagColor: ColorType.Blue },
            { tagContent: "Work", tagColor: ColorType.Gray },
        ],
        date: new Date("2022-09-15"),
        title: "Teaching Assistant",
        content:
            "For course CS 5002 Discrete Mathematics and Data Structure at Northeastern University",
    },
    {
        tag: [
            { tagContent: "TA", tagColor: ColorType.Blue },
            { tagContent: "Work", tagColor: ColorType.Gray },
        ],
        date: new Date("2024-09-10"),
        title: "Teaching Assistant",
        content: "For course CS 6220 Data Mining at Northeastern University",
        link: "https://course.ccs.neu.edu/cs6220/data-mining/projects/2_project/",
    },
    {
        tag: [
            { tagContent: "Full-stack", tagColor: ColorType.Yellow },
            { tagContent: "Project", tagColor: ColorType.Gray },
        ],
        date: new Date("2022-01-15"),
        title: "Sauce",
        content:
            "Created a Sauce-Sharing Web Application utilizing Node, Express, Firestore, and Google Cloud, featuring mobile-responsive design, REST API integration for authentication and data management, and streamlined CI/CD pipeline via GitHub Actions, significantly enhancing deployment efficiency and user engagement.",
        link: "https://github.com/Hui-Hwoo/Sauce",
    },
    {
        tag: [
            { tagContent: "Frontend", tagColor: ColorType.Yellow },
            { tagContent: "Project", tagColor: ColorType.Gray },
        ],
        date: new Date("2024-01-15"),
        title: "Nope",
        content:
            "Delivered a robust Notion-style Component Library utilizing TypeScript, React, Jest, and Storybook, featuring seamless component interaction, rigorous testing with Jest, and comprehensive documentation through Storybook deployment.",
        link: "https://github.com/Hui-Hwoo/Nope",
    },
    {
        tag: [
            { tagContent: "Machine Learning", tagColor: ColorType.Yellow },
            { tagContent: "Project", tagColor: ColorType.Gray },
        ],
        date: new Date("2023-04-15"),
        title: "Digit Recognition system",
        content:
            "Led the development and deployment of an Object Recognition system using Deep Networks, achieving a remarkable 99% accuracy rate in handwritten digit detection and recognition leveraging the MNIST dataset, fine-tuning a custom CNN with PyTorch and Torchvision, seamlessly adapting for Greek Letters recognition through transfer learning, and optimizing workflow efficiency with Google Colab's GPU infrastructure.",
        link: "https://hui-hwoo.notion.site/Report-5-Recognition-using-Deep-Networks-815475a309bd42fca45d639694efac15",
    },
    {
        tag: [
            { tagContent: "IOS", tagColor: ColorType.Yellow },
            { tagContent: "Project", tagColor: ColorType.Gray },
        ],
        date: new Date("2024-02-15"),
        title: "Memorize IOS App",
        content:
            "Developed a sophisticated Memorize iOS App utilizing SwiftUI, MVVM architecture, and Combine framework, featuring dynamic card creation, and user-friendly game interface, significantly enhancing user engagement and retention.",
        link: "https://github.com/Hui-Hwoo/CS193p-Developing-Apps-for-iOS",
    },
    {
        tag: [
            { tagContent: "Hackathon", tagColor: ColorType.Yellow },
            { tagContent: "Competition", tagColor: ColorType.Gray },
        ],
        date: new Date("2023-12-02"),
        title: "Accelerate SF Hackathon Second Prize",
        content:
            "Create a web application that helps people to submit car-breakin reports in 60 seconds",
    },
    {
        tag: [
            { tagContent: "Hackathon", tagColor: ColorType.Yellow },
            { tagContent: "Competition", tagColor: ColorType.Gray },
        ],
        date: new Date("2022-12-02"),
        title: "Social Network Decentralizer",
        content: "Won prize on Lens Protocol Integration!",
        link: "https://github.com/ethdegen/hackathon-2022-11-ethsf",
    },
    {
        tag: [
            { tagContent: "Mathematics", tagColor: ColorType.Red },
            { tagContent: "Competition", tagColor: ColorType.Gray },
        ],
        date: new Date("2021-03-02"),
        title: "First Prize 🏆",
        content:
            "at Chinese National College Mathematics Competition (Top 0.5%)",
    },
    {
        tag: [
            { tagContent: "Mathematics", tagColor: ColorType.Red },
            { tagContent: "Competition", tagColor: ColorType.Gray },
        ],
        date: new Date("2019-12-02"),
        title: "Outstanding Prize 🥇",
        content: "at Chinese College Mathematics Competition (Rank: 2/1856)",
    },
    {
        tag: [
            { tagContent: "Coursera", tagColor: ColorType.Green },
            { tagContent: "Machine Learning", tagColor: ColorType.Gray },
        ],
        date: new Date("2023-09-02"),
        title: "Machine Learning Specialization Credential",
        content: "Issued by DeepLearning.AI and Stanford University",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3D6JAKJE676F",
    },
    {
        tag: [
            { tagContent: "Codepath", tagColor: ColorType.Green },
            { tagContent: "Algorithm", tagColor: ColorType.Gray },
        ],
        date: new Date("2024-08-25"),
        title: "Certificate in Advance Software Engineering",
        content: "Issued by Codeppath",
    },
] as TimeIncident[];
