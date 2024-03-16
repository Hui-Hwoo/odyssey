import "./TimeLine.css";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import { Tag } from "../components/Tag";
import { Link } from "../components/Link";
import { ColorType } from "../types";

export type TimeIncident = {
    tag?: { tagContent: String; tagColor?: ColorType }[];
    date: Date;
    endDate?: Date;
    title: String;
    content: String;
    link?: String;
};

interface TimeLineProps {
    incidents: TimeIncident[];
}

export const TimeLinePage = (props: TimeLineProps) => {
    const { incidents } = props;
    const sortedIncidents = incidents.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });
    const options: DateTimeFormatOptions = { year: "numeric", month: "short" };
    return (
        <div className="timeline">
            <ul>
                {sortedIncidents.map((incident, index) => {
                    return (
                        <li key={index}>
                            <div className="incident_content">
                                <div className="incident_title">
                                    <div className="incident_title_name">
                                        {incident.title}
                                    </div>
                                    {incident.link && (
                                        <Link
                                            className="incident_title_link"
                                            url={incident.link.toString()}
                                        />
                                    )}
                                </div>
                                {incident.tag && (
                                    <div className="incident_tag">
                                        {incident.tag.map((tag, index) => {
                                            return (
                                                <Tag
                                                    className="tag"
                                                    key={index}
                                                    content={tag.tagContent}
                                                    highlightColor={
                                                        tag.tagColor ||
                                                        ColorType.Blue
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                                <div className="incident_detail">
                                    {incident.content}
                                </div>
                            </div>
                            <div className="date_content">
                                <div className="date_str">
                                    {incident.date.toLocaleDateString(
                                        "en-US",
                                        options
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
                <div style={{ clear: "both" }}></div>
            </ul>
        </div>
    );
};
