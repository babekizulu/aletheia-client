//libs
import { createContext, useState } from "react";
import type { ObjectArray, Props } from "../../types/common";
import type { Safety } from "../../types/safety";

const SafetyContext = createContext<Safety | undefined>(undefined);

function Provider({children}: Props) {
    const [safetyTips, setSafetyTips] = useState<ObjectArray>([]);

    const values: Safety = {
        children,
        safetyTips,
        setSafetyTips
    }

    return (
        <SafetyContext.Provider value={values}>
            {children}
        </SafetyContext.Provider>
    )
}

export {SafetyContext, Provider};