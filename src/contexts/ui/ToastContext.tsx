//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Toast } from "../../types/ui";

const ToastContext = createContext<Toast | undefined>(undefined);

function Provider({children}: Props) {
    const [displayToast, setDisplayToast] = useState(false);
    const values: Toast = {
        children,
        displayToast,
        setDisplayToast
    }

    return (
        <ToastContext.Provider value={values}>
            {children}
        </ToastContext.Provider>
    );
};

export {ToastContext, Provider};