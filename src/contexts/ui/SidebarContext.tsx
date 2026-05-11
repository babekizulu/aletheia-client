//libs
import { createContext, useState } from "react";
import type { StringArray, Props } from "../../types/common";
import type { Sidebar } from "../../types/ui";

const SidebarContext = createContext<Sidebar | undefined>(undefined);

function Provider({children}: Props) {
    const [items, setItems] = useState<StringArray>([]);
    const [opened, setOpened] = useState(true);

    const values: Sidebar = {
        children,
        items,
        setItems,
        opened,
        setOpened
    }

    return (
        <SidebarContext.Provider value={values}>
            {children}
        </SidebarContext.Provider>
    );
};

export {SidebarContext, Provider};