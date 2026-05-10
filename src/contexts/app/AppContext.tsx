import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { App } from "../../types/app";

const AppContext = createContext<App | undefined>(undefined);

function Provider({children}: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen((prev) => !prev);
    }

    function closeSidebar() {
        setIsSidebarOpen(false);
    }

    const value: App = {
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        isLoading,
        setIsLoading
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, Provider}