import React, { useState } from "react";
import {
    Atom,
    FileVue,
    FileCss,
    FileHtml,
    FileJs,
    FileTs,
    FileMd,
    FilePy,
    FileSql,
    GearSix,
    Hammer,
    Barbell,
    BoxingGlove,
    EyedropperSample,
    Feather,
    MagnetStraight,
    PaintBrushBroad,
    Wrench,
} from "@phosphor-icons/react";
import "./icons.css";

type SkillTagProps = {
    skill: string;
    color: string;
    onClick?: () => void;
};

const getRandomIcon = (skill: string, iconSize: number) => {
    const index = skill.length;

    switch (index % 9) {
        case 0:
            return <GearSix size={iconSize} />;
        case 1:
            return <Hammer size={iconSize} />;
        case 2:
            return <Barbell size={iconSize} />;
        case 3:
            return <BoxingGlove size={iconSize} />;
        case 4:
            return <EyedropperSample size={iconSize} />;
        case 5:
            return <Feather size={iconSize} />;
        case 6:
            return <MagnetStraight size={iconSize} />;
        case 7:
            return <PaintBrushBroad size={iconSize} />;
        case 8:
            return <Wrench size={iconSize} />;
        default:
            return <GearSix size={iconSize} />;
    }
};

const SkillIcon = ({ skill }: { skill: string }) => {
    const iconSize = 20;

    switch (skill.toLowerCase()) {
        case "react":
            return <Atom size={iconSize} />;
        case "vue":
            return <FileVue size={iconSize} />;
        case "css":
            return <FileCss size={iconSize} />;
        case "html":
            return <FileHtml size={iconSize} />;
        case "javascript":
            return <FileJs size={iconSize} />;
        case "typescript":
            return <FileTs size={iconSize} />;
        case "markdown":
            return <FileMd size={iconSize} />;
        case "python":
            return <FilePy size={iconSize} />;
        case "sql":
            return <FileSql size={iconSize} />;
        case "nodejs":
            return <FileJs size={iconSize} />;
        default:
            return getRandomIcon(skill, iconSize);
    }
};

export const SkillTag = React.memo((props: SkillTagProps) => {
    const { skill, color, onClick } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div
            className="skill-tag-container"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                cursor: onClick ? "pointer" : "default",
                backgroundColor: isHovered
                    ? `var(--graph-${color}-light)`
                    : "transparent",
            }}
        >
            <SkillIcon skill={skill} />
            <div className="skill-tag-title">{skill}</div>
        </div>
    );
});
