import { createContext, useContext, useState } from 'react';

// Models
import {CalculateRiskModel} from '@/models/calculate-risk-model';

const CalcDataContext = createContext();

export default function CalcDataProvider({ children }){
    const [ calcData, setCalcData ] = useState(new CalculateRiskModel());

    return (
        <CalcDataContext.Provider
            value={{
                calcData,
                setCalcData
            }}
        >
            { children }
        </CalcDataContext.Provider>
    )
}

export function useCalcData(){
    const context = useContext(CalcDataContext);
    const { calcData, setCalcData } = context;

    return { calcData, setCalcData };
}