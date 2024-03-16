import "./Tag.css";
import { ColorType } from "../types";

interface TagProps {
    content: String;
    highlightColor: ColorType;
    className?: string;
}

export const Tag = (props: TagProps) => {
    const { content, highlightColor = ColorType.Gray, className="" } = props;

    return (
      <div className={`tag_container ${className}`} style={{backgroundColor: `var(--${highlightColor.toString()}-highlight)`}}>
        <div className="tag_content_container">
            <div className="tag_dot_container">
                <div className="tag_dot" style={{
                  backgroundColor: `var(--${highlightColor.toString()}-font)`
                }}></div>
            </div>
            <div className="tag_content" style={{color: `var(--${highlightColor.toString()}-font)`}}>{content}</div>
        </div>
        </div>
    );
};
