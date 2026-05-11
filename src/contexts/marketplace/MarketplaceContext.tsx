//libs
import { createContext, useState } from "react";
import type { Props, ObjectArray } from "../../types/common";
import type { Marketplace} from "../../types/marketplace";

const MarketplaceContext = createContext<Marketplace | undefined>(undefined);

function Provider({children}: Props) {
    const [products, setProducts] = useState<ObjectArray>([]);
    const [services, setServices] = useState<ObjectArray>([]);
    
    const values: Marketplace = {
        children,
        products,
        setProducts,
        services,
        setServices
    }

    return (
        <MarketplaceContext.Provider value={values}>
            {children}
        </MarketplaceContext.Provider>
    );
};

export {MarketplaceContext, Provider};