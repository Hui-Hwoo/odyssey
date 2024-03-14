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
            console.log("system", isDark);
            changeClass(systemPrefersDark);
        } else {
            console.log("isDark", isDark);
            changeClass(isDark);
        }
    // eslint-disable-next-line 
    }, [systemPrefersDark]);

    useEffect(() => {
        console.log(
            "systemPrefersDark",
            systemPrefersDark,
            "isDark",
            isDark,
            "classlist",
            document.body.classList
        );
    }, [systemPrefersDark, value, isDark]);

    const switchMode = () => {
        if (isDark !== undefined) {
            console.log("switching to 1 ", !isDark);

            setIsDark(!isDark);
            changeClass(!isDark);
        } else {
            console.log("switching to 2 ", !systemPrefersDark);
            setIsDark(!systemPrefersDark);
            changeClass(!systemPrefersDark);
        }
    };

    return {
        isDarkMode: value,
        switchMode,
    };
}
