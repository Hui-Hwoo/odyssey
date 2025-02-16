import { Category } from "src/types";
import {
    AirplaneTilt,
    Cactus,
    Carrot,
    GraduationCap,
    UserCircle,
    ChalkboardSimple,
    HighlighterCircle,
    Mountains,
    PuzzlePiece,
    GlobeHemisphereEast,
} from "@phosphor-icons/react";

type CategoryIconProps = {
    category: Category;
    color?: string;
};

export const CategoryIcon = (props: CategoryIconProps) => {
    const { category, color } = props;
    switch (category) {
        case Category.Internship:
            return <Mountains size={28} />;
        case Category.Project:
            return <Cactus size={32} />;
        case Category.Certificate:
            return <Carrot size={32} />;
        case Category.Education:
            return <GraduationCap size={32} />;
        case Category.Role:
            return <UserCircle size={32} />;
        case Category.Skill:
            return <HighlighterCircle size={32} />;
        case Category.TA:
            return <ChalkboardSimple size={32} />;
        case Category.Other:
            return <PuzzlePiece size={32} />;
        case Category.Hackathon:
            return <AirplaneTilt size={32} color={color} />;
        default:
            return <GlobeHemisphereEast size={32} />;
    }
};
