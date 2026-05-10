import type { Dispatch, SetStateAction } from "react";

export type App = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}