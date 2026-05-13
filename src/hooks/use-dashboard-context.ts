//libs
import { useContext } from "react";
import { DashboardContext } from "../contexts/dashboard/DashboardContext";

export default function useDashboardContext() {
    const context = useContext(DashboardContext);

    if(!context) {
        throw new Error("useAppContext must be used inside the Provider");
    }

    return context;
}