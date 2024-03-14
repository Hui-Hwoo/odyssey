import "./ModeToggle.css";
import { useColorScheme } from "../hooks/useColorScheme";

const name = "simple";

export const ModeToggle = () => {
    const { isDarkMode, switchMode } = useColorScheme();
    return (
        <button
            className={`theme-toggle ${
                isDarkMode ? "theme-toggle--toggled" : ""
            }`}
            type="button"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={switchMode}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="100%"
                height="100%"
                strokeLinecap="round"
                className={`theme-toggle__${name}`}
                viewBox="0 0 32 32"
            >
                <clipPath id={`theme-toggle__${name}__cutout`}>
                    <path d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0" />
                </clipPath>
                <g clipPath={`url(#theme-toggle__${name}__cutout)`}>
                    <circle cx="16" cy="16" r="14" className="ert" />
                </g>
            </svg>
        </button>
    );
};
