//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Socket } from "../../types/socket";

const SocketContext = createContext<Socket | undefined>(undefined);

function Provider({children}: Props) {
    const [socket, setSocket] = useState('');
    const [connected, setConnected] = useState(false);

    const values: Socket = {
        children,
        socket,
        setSocket,
        connected,
        setConnected
    }

    return (
        <SocketContext.Provider value={values}>
            {children}
        </SocketContext.Provider>
    );
};

export {SocketContext, Provider};
