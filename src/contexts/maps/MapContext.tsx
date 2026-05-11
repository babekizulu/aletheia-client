//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Maps } from "../../types/maps";

const MapContext = createContext<Maps | undefined>(undefined);

function Provider({children}: Props) {
    const [data, setData] = useState(0);

    const values: Maps = {
        children,
        data,
        setData
    }

    return (
        <MapContext.Provider value={values}>
            {children}
        </MapContext.Provider>
    );
};

export {MapContext, Provider};