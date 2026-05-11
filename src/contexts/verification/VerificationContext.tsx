//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Verification } from "../../types/verification";

const VerificationContext = createContext<Verification | undefined>(undefined);

function Provider({children}: Props) {
    const [idNumber, setIDNumber] = useState('');
    const [facialImage, setFacialImage] = useState('');

    const values: Verification = {
        children,
        idNumber,
        setIDNumber,
        facialImage,
        setFacialImage
    }

    return (
        <VerificationContext.Provider value={values}>
            {children}
        </VerificationContext.Provider>
    );
};

export {VerificationContext, Provider};