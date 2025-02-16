import React from "react";
import { Avatar } from "src/components/Avatar";
import { SkillGraph } from "src/components/Graph/";
import "./page.css";

export const HomePage = () => {
    return (
        <React.Fragment>
            <div className="HomePage">
                <div className="separator"></div>
                <Avatar
                    url="hwoo"
                    hoverUrl="hwoo"
                    name="Hui Hwoo"
                    intro="Tech, Mathematic, Minimalist"
                    linkedIn="https://www.linkedin.com/in/hui-hwoo/"
                    github="https://github.com/Hui-Hwoo"
                    mail="hui.hwoo@gmail.com"
                    instagram="https://www.instagram.com/hui_hwoo/"
                />
                <div className="graph-separator"></div>
                <SkillGraph />
            </div>
        </React.Fragment>
    );
};

// https://raw.githubusercontent.com/Hui-Hwoo/odyssey/main/public/avatar-circle.png?token=GHSAT0AAAAAACGYVDFBYYBAMJECMBMY4LN2ZPTKG6A
