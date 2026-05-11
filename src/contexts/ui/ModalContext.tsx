//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Modal } from "../../types/ui";

const ModalContext = createContext<Modal | undefined>(undefined);

function Provider({children}: Props) {
    const [opened, setOpened] = useState(true);
    
    const values: Modal = {
        children,
        opened,
        setOpened
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    );
};

export {ModalContext, Provider};