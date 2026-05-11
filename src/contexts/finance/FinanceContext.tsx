//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Finance } from "../../types/finance";

const FinanceContext = createContext<Finance | undefined>(undefined);

function Provider({children}: Props) {
    const [selection, setSelection] = useState('');
    const values: Finance = {
        children,
        selection,
        setSelection
    }
    return (
        <FinanceContext.Provider value={values}>
            {children}
        </FinanceContext.Provider>
    )
}

export {FinanceContext, Provider};