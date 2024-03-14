import "./Avatar.css";
import {
    LinkedIn,
    Github,
    Mail,
    Twitter,
    Instagram,
    YouTube,
    LinkIcon,
} from "../assets";

interface AvatarProps {
    url: string;
    hoverUrl?: string;
    name: string;
    intro?: string;
    linkedIn?: string;
    github?: string;
    mail?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
}

enum SocialLinkType {
    Mail = "mail",
    GitHub = "github",
    LinkedIn = "linkedIn",
    Twitter = "twitter",
    Instagram = "instagram",
    YouTube = "youtube",
}

const SocialLink = (props: { url: string; type: SocialLinkType }) => {
    const { url, type } = props;
    let icon;

    switch (type) {
        case SocialLinkType.Mail:
            icon = (
                <img src={Mail} alt={type.toString()} width={32} height={32} />
            );
            break;
        case SocialLinkType.GitHub:
            icon = (
                <img
                    src={Github}
                    alt={type.toString()}
                    width={32}
                    height={32}
                />
            );
            break;
        case SocialLinkType.LinkedIn:
            icon = (
                <img
                    src={LinkedIn}
                    alt={type.toString()}
                    width={32}
                    height={32}
                />
            );
            break;
        case SocialLinkType.Twitter:
            icon = (
                <img
                    src={Twitter}
                    alt={type.toString()}
                    width={32}
                    height={32}
                />
            );
            break;
        case SocialLinkType.Instagram:
            icon = (
                <img
                    src={Instagram}
                    alt={type.toString()}
                    width={32}
                    height={32}
                />
            );
            break;
        case SocialLinkType.YouTube:
            icon = (
                <img
                    src={YouTube}
                    alt={type.toString()}
                    width={32}
                    height={32}
                />
            );
            break;
        default:
            icon = (
                <img src={LinkIcon} alt={"hyperlink"} width={32} height={32} />
            );
            break;
    }
    return (
        <a
            href={type !== SocialLinkType.Mail ? url : `mailto:${url}`}
            className="AvatarLink"
        >
            <div className="AvatarLinkIcon">
                {icon}
                <div className="AvatarGrayLayer"></div>
            </div>
        </a>
    );
};

export const Avatar = (props: AvatarProps) => {
    const {
        url,
        hoverUrl,
        name,
        intro,
        linkedIn,
        github,
        mail,
        twitter,
        instagram,
        youtube,
    } = props;
    return (
        <div className="AvatarContainer">
            <div className="AvatarImageContainer">
                <img
                    src={url}
                    alt={"avatar"}
                    width={100}
                    height={100}
                    className="avatarImage"
                />
                <img
                    src={hoverUrl}
                    alt={"avatar-hover"}
                    width={100}
                    height={100}
                    className="avatarHoverImage"
                />
            </div>
            <p className="AvatarTitle">{name}</p>
            {intro && <p className="AvatarIntro">{intro}</p>}

            <div className="AvatarLinks">
                {mail && <SocialLink url={mail} type={SocialLinkType.Mail} />}
                {github && (
                    <SocialLink url={github} type={SocialLinkType.GitHub} />
                )}
                {linkedIn && (
                    <SocialLink url={linkedIn} type={SocialLinkType.LinkedIn} />
                )}
                {twitter && (
                    <SocialLink url={twitter} type={SocialLinkType.Twitter} />
                )}
                {youtube && (
                    <SocialLink url={youtube} type={SocialLinkType.YouTube} />
                )}
                {instagram && (
                    <SocialLink
                        url={instagram}
                        type={SocialLinkType.Instagram}
                    />
                )}
            </div>
        </div>
    );
};
