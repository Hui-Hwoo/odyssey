import React, { useState } from "react";
import { Category, Color } from "src/types";
import { capitalizeFirstLetter } from "src/utils";
import { getIndexIcon } from "./shared";
import "./icons.css";

type ExperienceTagProps = {
    id?: string;
    title: string;
    category: Category;
    color: Color;
    index: number;
    onClick?: () => void;
};

export const ExperienceTag = React.memo((props: ExperienceTagProps) => {
    const { title, category, color, index, onClick } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="experience-tag-container"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                cursor: onClick ? "pointer" : "default",
            }}
        >
            <div className="experience-tag-index">{getIndexIcon(index)}</div>
            <div
                className="experience-tag-title"
                style={{
                    color: isHovered ? `var(--graph-${color}-dark)` : "inherit",
                    backgroundColor: isHovered
                        ? `var(--graph-${color}-light)`
                        : "transparent",
                }}
            >
                {`[${capitalizeFirstLetter(category)}] ${title}`}
            </div>
        </div>
    );
});
