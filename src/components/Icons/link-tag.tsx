import { getIndexIcon } from "./shared";
import "./icons.css";

type LinkTagProps = {
    title: string;
    url: string;
    index: number;
};

export const LinkTag = (props: LinkTagProps) => {
    const { title, url, index } = props;
    return (
        <div className="link-tag-container">
            <div className="link-tag-index">{getIndexIcon(index)}</div>
            <div className="link-tag-title">
                <a
                    className="link-tag-link"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {title}
                </a>
            </div>
        </div>
    );
};
