

// Contexts
import { useCalcData } from '@/controllers/contexts/calc-data';
import { useConfigData } from '@/controllers/contexts/config-data';
import { useResultData } from '@/controllers/contexts/result-data';

// Components
import ConfigDataSection from '@/views/components/sections/config-data';
import ResultSection from '@/views/components/sections/result';
import CalculateFormSection from '@/views/components/sections/calculate-form';

// Styles
import mainStyles from 'styles/main.module.css';

// Text
import { ptBR } from '@/views/text-content';

// Main declarations
const textPTBR = ptBR.calculateRisk;

export default function CalculateRiskActivity(){
    const { calcData, setCalcData } = useCalcData();
    const { configData, setConfigData } = useConfigData();
    const { resultData, setResultData } = useResultData();

    return (<>
        <h1 style={{ textAlign: 'center', color: 'var(--text-main)' }}>{textPTBR.title}</h1>
        <div className={`${mainStyles.card} ${mainStyles.container}`} style={{padding: '3%', width: '95%', boxShadow: '0 0 74px black'}}>

            <div className={mainStyles['flex-container']}>
                <div className={`${mainStyles['flex-item']} ${mainStyles['config-wrap']}`} >
                    <ResultSection />
                </div>
                <div className={mainStyles['flex-item']}>
                    <ConfigDataSection />
                    <CalculateFormSection />
                </div>
            </div>
        </div>
    </>)
}