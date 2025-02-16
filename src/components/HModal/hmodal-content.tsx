import React from "react";
import { ExperienceNodeInfo, SkillNodeInfo } from "src/types";
import { CategoryIcon, LinkTag, SkillTag, ExperienceTag } from "../Icons";
import "./hmodal.css";

type HModalContentProps = {
    nodeInfo: SkillNodeInfo | ExperienceNodeInfo;
    changeNodeId: (id: string) => void;
};

export const HModalContent = React.memo((props: HModalContentProps) => {
    const { nodeInfo, changeNodeId } = props;
    const { category, title } = nodeInfo;

    return (
        <div>
            <div className="hmodal-content-header">
                <CategoryIcon category={category} />
                <div className="hmodal-content-header-title">{title}</div>
            </div>
            <div className="hmodal-content-body-container">
                {"description" in nodeInfo &&
                    nodeInfo.description.length > 0 && (
                        <div className="hmodal-content-body">
                            {nodeInfo.description}
                        </div>
                    )}
                {"experiences" in nodeInfo &&
                    nodeInfo.experiences.length > 0 && (
                        <div>
                            <div className="hmodal-content-subtitle">
                                Related Experiences:
                            </div>
                            {nodeInfo.experiences.map(function (
                                experience,
                                index
                            ) {
                                return (
                                    <ExperienceTag
                                        key={experience.id}
                                        title={experience.title}
                                        category={experience.category}
                                        color={experience.color}
                                        index={index + 1}
                                        onClick={() =>
                                            changeNodeId(experience.id)
                                        }
                                    />
                                );
                            })}
                        </div>
                    )}
                {"skills" in nodeInfo && nodeInfo.skills.length > 0 && (
                    <div>
                        <div className="hmodal-content-subtitle">Skills:</div>
                        <div className="hmodal-content-skills">
                            {nodeInfo.skills.map((skill) => (
                                <SkillTag
                                    key={skill.id}
                                    skill={skill.title}
                                    color={skill.color}
                                    onClick={() => changeNodeId(skill.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {"links" in nodeInfo && nodeInfo.links.length > 0 && (
                    <div>
                        <div className="hmodal-content-subtitle">Links:</div>
                        {nodeInfo.links.map(function (link, index) {
                            return (
                                <LinkTag
                                    key={link.url}
                                    title={link.title}
                                    url={link.url}
                                    index={index + 1}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
});
