//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Wallet } from "../../types/finance";

const WalletContext = createContext<Wallet | undefined>(undefined);

function Provider({children}: Props) {
    const [data, setData] = useState('');

    const values: Wallet = {
        children,
        data,
        setData
    }

    return (
        <WalletContext.Provider value={values}>
            {children}
        </WalletContext.Provider>
    )
}

export {WalletContext, Provider};