//libs
import { createContext, useState } from "react";
import type {Certification} from '../../types/education';
import type { Props } from "../../types/common";

const CertificationContext = createContext<Certification | undefined>(undefined);

function Provider({children}: Props) {
    const [certificateID, setCertificateID] = useState('');

    const values: Certification = {
        children,
        certificateID,
        setCertificateID
    }

    return (
        <CertificationContext.Provider value={values}>
            {children}
        </CertificationContext.Provider>
    )
}

export {CertificationContext, Provider}