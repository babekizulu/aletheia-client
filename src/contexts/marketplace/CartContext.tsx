//libs
import { createContext, useState } from "react";
import { type ObjectArray, type Props } from "../../types/common";
import type { Cart } from "../../types/marketplace";

const CartContext = createContext<Cart | undefined>(undefined);

function Provider({children}: Props) {
    const [items, setItems] = useState<ObjectArray>([]);

    const values: Cart = {
        children,
        items,
        setItems
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};

export {CartContext, Provider};