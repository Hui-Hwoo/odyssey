import * as d3 from "d3";
import { useState, useEffect, useRef, useCallback } from "react";
import { GraphNodeType, RawDataType } from "src/types";
import { HModal, HModalContent } from "src/components/HModal";
import { useDisclosure } from "src/hooks";
import { Legend } from "src/components/Icons";
import GraphData from "src/data/parsed-data.json";
import "./graph.css";

export const SkillGraph = () => {
    const jsonData = GraphData as unknown as RawDataType;
    const { nodes, links, nodesMap } = jsonData;
    const ref = useRef<SVGSVGElement>(null);
    const [currentNodeId, setCurrentNodeId] = useState<string>(
        "internship-a1a6b760-1d19-499a-9006-436e0863d14e"
    );
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    const changeNodeId = useCallback((id: string) => {
        setCurrentNodeId(id);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getNode = useCallback(() => {
        // Specify the dimensions of the chart.
        const isMobile = screenWidth < 500;

        let width = screenWidth;
        let height = 400;
        const offset = isMobile ? 100 : 0;

        // Create a simulation with several forces.
        const simulation = d3
            .forceSimulation(nodes)
            .force(
                "link",
                d3
                    .forceLink(links)
                    .id((d: any) => d.id)
                    .strength(0.02)
            )
            .force("charge", d3.forceManyBody())
            .force("x", d3.forceX().strength(0.01))
            .force("y", d3.forceY().strength(0.06));

        // Create the SVG container.
        const svg = d3
            .select(ref.current)
            .attr("width", width - offset / 2)
            .attr("height", height - offset)
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        svg.selectAll("*").remove();

        // Define the tooltip
        const tooltip = d3
            .select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("text-align", "center")
            .style("max-width", "120px")
            .style("padding", "4px")
            .style("font", "12px sans-serif")
            .style("background", "white")
            .style("border-radius", "8px")
            .style("pointer-events", "none")
            .style("opacity", 0)
            .style("border", "2px dashed black");

        // Add a line for each link, and a circle for each node.
        const link = svg
            .append("g")
            .attr("stroke", "transparent")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", (d) => 2);

        const node = svg
            .append("g")
            .attr("stroke", "transparent")
            .attr("stroke-width", 1.5)
            .attr("fill", "transparent")
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", (d) => {
                if (d.radius) {
                    return d.radius;
                } else {
                    return 5;
                }
            })
            .attr("z-index", (d) => {
                if (d.id.startsWith("role")) {
                    return -100;
                }
                return null;
            })
            .on("click", (event, d) => {
                setCurrentNodeId(d.id);
                onOpen();
            })
            .on("mouseover", function (event, d) {
                tooltip
                    .style("opacity", 1)
                    .html(d.ops.title)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY - 20 + "px");

                (event.target as SVGCircleElement).setAttribute(
                    "fill",
                    `var(--graph-${d.ops.color}-dark)`
                );
            })
            .on("mousemove", function (event, d) {
                tooltip
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY - 20 + "px");
            })
            .on("mouseout", function (event: MouseEvent, d: GraphNodeType) {
                tooltip.style("opacity", 0);
                (event.target as SVGCircleElement).setAttribute(
                    "fill",
                    `var(--graph-${d.ops.color}-light)`
                );
            }) as d3.Selection<
            SVGCircleElement,
            any,
            SVGGElement,
            GraphNodeType
        >;

        // Set the position attributes of links and nodes each time the simulation ticks.
        simulation.on("tick", () => {
            link.attr("x1", (d) => (d.source as GraphNodeType).x ?? 0)
                .attr("y1", (d) => (d.source as GraphNodeType).y ?? 0)
                .attr("x2", (d) => (d.target as GraphNodeType).x ?? 0)
                .attr("y2", (d) => (d.target as GraphNodeType).y ?? 0);

            node.attr("cx", (d) => {
                return d.x;
            })
                .attr("cy", (d) => {
                    return d.y;
                })
                .attr("fill", (d) => {
                    if (d.id.startsWith("role")) {
                        return `var(--graph-gray-light)`;
                    } else if (d.id.startsWith("internship")) {
                        return `var(--graph-${d.ops.color}-dark)`;
                    } else {
                        return `var(--graph-black-dark)`;
                    }
                });
        });

        // Reheat the simulation when drag starts, and fix the subject position.
        function dragstarted(event: any, d: GraphNodeType) {
            if (d.id.startsWith("role")) {
                return;
            }
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        // Update the subject (dragged node) position during drag.
        function dragged(event: any, d: GraphNodeType) {
            if (d.id.startsWith("role")) {
                return;
            }
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        // Restore the target alpha so the simulation cools after dragging ends.
        // Unfix the subject position now that it’s no longer being dragged.
        function dragended(event: any, d: GraphNodeType) {
            if (d.id.startsWith("role")) {
                return;
            }

            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        node.call(
            d3
                .drag<SVGCircleElement, any>()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
        );
    }, [screenWidth, nodes, links, onOpen]);

    useEffect(() => {
        getNode();
    }, [getNode]);

    return (
        <div>
            <div className="graph-container">
                <div>
                    <svg id="barchart" ref={ref} />
                </div>
                <div className="legend-container">
                    <Legend />
                </div>
            </div>

            <HModal isOpen={isOpen} onClose={onClose}>
                {currentNodeId && (
                    <HModalContent
                        nodeInfo={nodesMap[currentNodeId]}
                        changeNodeId={changeNodeId}
                    />
                )}
            </HModal>
        </div>
    );
};
