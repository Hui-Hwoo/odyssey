import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useColorScheme() {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined
    );

    const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

    const getModeValue = () => {
        if (isDark === undefined) {
            return systemPrefersDark;
        } else {
            return isDark;
        }
    };

    const changeClass = (isDark: boolean) => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    };

    const value = getModeValue();

    useEffect(() => {
        if (isDark === undefined) {
            changeClass(systemPrefersDark);
        } else {
            changeClass(isDark);
        }
        // eslint-disable-next-line
    }, [systemPrefersDark]);

    const switchMode = () => {
        if (isDark !== undefined) {
            setIsDark(!isDark);
            changeClass(!isDark);
        } else {
            setIsDark(!systemPrefersDark);
            changeClass(!systemPrefersDark);
        }
    };

    return {
        isDarkMode: value,
        switchMode,
    };
}
