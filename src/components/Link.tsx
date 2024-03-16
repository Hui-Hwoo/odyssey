import "./Link.css";
import { Github, LinkIcon } from "../assets";

export const Link = ({
    url,
    className,
}: {
    url: String;
    className: String;
}) => {
    const isGiithub = url.includes("github");
    return (
        <div className={`link_icon_container ${className}`}>
            <a href={url.toString()}>
                <img
                    src={isGiithub ? Github : LinkIcon}
                    alt="link"
                    className="link_icon"
                    width={20}
                    height={20}
                />
            </a>
        </div>
    );
};
