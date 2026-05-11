//libs
import {createContext, useState} from 'react';
import type { Analytics } from '../../types/analytics';
import type { Props } from '../../types/common';

const AnalyticsContext = createContext<Analytics | undefined>(undefined);

function Provider({children}: Props) {
    const [data, setData] = useState('');
    const values: Analytics = {
        children,
        data,
        setData
    }
    return (
        <AnalyticsContext.Provider value={values}>
            {children}
        </AnalyticsContext.Provider>
    )
}

export {Provider, AnalyticsContext};