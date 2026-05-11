//libs
import { createContext, useState } from "react";
import type { Community } from "../../types/community";
import type { Props, ObjectArray } from "../../types/common";

const CommunityContext = createContext<Community | undefined>(undefined);

function Provider({children}: Props) {
    const [feed, setFeed] = useState<ObjectArray>([]);

    const values: Community = {
        children,
        feed,
        setFeed
    }

    return (
        <CommunityContext.Provider value={values}>
            {children}
        </CommunityContext.Provider>
    )
}

export {CommunityContext, Provider}