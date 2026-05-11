//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Theme } from "../../types/ui";

const ThemeContext = createContext<Theme | undefined>(undefined);

function Provider({children}: Props) {
    const [theme, setTheme] = useState('');

    const values: Theme = {
        children,
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, Provider};