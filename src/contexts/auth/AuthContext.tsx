//libs
import { createContext, useState } from "react";
import type { Auth } from "../../types/auth";
import type { Props } from "../../types/common";

const AuthContext = createContext<Auth | undefined>(undefined);

function Provider({children}: Props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const values: Auth = {
        children,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, Provider}
