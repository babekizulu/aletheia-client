//libs
import { useContext } from "react";
import { AppContext } from "../contexts/app/AppContext";
import { Provider } from "../contexts/app/AppContext";

export default function useAppContext() {
    const context = useContext(AppContext);

    if(!context) {
        throw new Error("useAppContext must be used inside the Provider");
    }

    return context;
}

export {AppContext, Provider, useAppContext}