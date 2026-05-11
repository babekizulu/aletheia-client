//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Language } from "../../types/language";

const LanguageContext = createContext<Language | undefined>(undefined);

function Provider({children}: Props) {
    const [language, setLanguage] = useState('en-US');

    const values: Language = {
        children,
        language,
        setLanguage
    }

    return (
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext, Provider};