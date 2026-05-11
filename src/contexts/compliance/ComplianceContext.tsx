//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Compliance } from "../../types/compliance";

const ComplianceContext = createContext<Compliance | undefined>(undefined);

function Provider({children}: Props) {
    const [companyName, setCompanyName] = useState('');
    const values: Compliance = {
        children,
        companyName,
        setCompanyName
    }
    return (
        <ComplianceContext.Provider value={values}>
            {children}
        </ComplianceContext.Provider>
    )
}

export {ComplianceContext, Provider}