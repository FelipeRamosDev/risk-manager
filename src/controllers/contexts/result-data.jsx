import { createContext, useContext, useState } from 'react';

// Models
import {CalculateResultModel} from '@/models/calculate-risk-model';

const ResultDataContext = createContext();

export default function ResultDataProvider({ children }){
    const [ resultData, setResultData] = useState(new CalculateResultModel());

    return (
        <ResultDataContext.Provider
            value={{
                resultData,
                setResultData
            }}
        >
            { children }
        </ResultDataContext.Provider>
    )
}

export function useResultData(){
    const context = useContext(ResultDataContext);
    const { resultData, setResultData} = context;

    return { resultData, setResultData};
}