import React from "react";
import "./icons.css";
import { Circle } from "@phosphor-icons/react";

const LegendItem = (props: { color: string; text: string }) => {
    const { color, text } = props;

    return (
        <div
            className="legend-item"
            style={{
                display: "flex",
                alignItems: "center",
                padding: "2px 4px",
            }}
        >
            <Circle size={16} color={color} weight="fill" />
            <div
                style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                    color: "rgba(98, 98, 98, 0.87)",
                }}
            >
                {text}
            </div>
        </div>
    );
};

export const Legend = React.memo(() => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <LegendItem color="var(--graph-green-dark)" text="Projects" />
                <LegendItem color="var(--graph-red-dark)" text="Work" />
                <LegendItem color="var(--graph-purple-dark)" text="Education" />
                <LegendItem color="var(--graph-black-dark)" text="Skills" />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <LegendItem color="var(--graph-yellow-dark)" text="Frontend" />
                <LegendItem color="var(--graph-blue-dark)" text="Backend" />
                <LegendItem color="var(--graph-gray-dark)" text="AI Engineer" />
            </div>
        </>
    );
});
