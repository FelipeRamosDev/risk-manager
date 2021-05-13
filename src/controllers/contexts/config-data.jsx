import { createContext, useContext, useState } from 'react';

// Models
import {CalculateConfigModel} from '@/models/calculate-risk-model';

const ConfigDataContext = createContext();

export default function ConfigDataProvider({ children }){
    const [ configData, setConfigData ] = useState(new CalculateConfigModel());

    return (
        <ConfigDataContext.Provider
            value={{
                configData,
                setConfigData
            }}
        >
            { children }
        </ConfigDataContext.Provider>
    )
}

export function useConfigData(){
    const context = useContext(ConfigDataContext);
    const { configData, setConfigData } = context;

    return { configData, setConfigData };
}