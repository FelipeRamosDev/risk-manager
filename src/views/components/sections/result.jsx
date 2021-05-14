import mainStyles from 'styles/main.module.css';
import { defaultTheme } from 'styles/theme';

// Controllers
import { fixingNumbers } from '@/controllers/form-controller';

// Contexts
import { useResultData } from '@/controllers/contexts/result-data';

export default function ResultSectionComponent(){
    const { resultData } = useResultData();

    return (
 
        <div className={mainStyles.card} style={{
            backgroundColor: defaultTheme.primary.hardDark
        }}>
            <div className={mainStyles.container} style={{color: 'var(--secondary-soft)' }}>
                <h3>Resultado</h3>

                {/* Quantidade máxima */}
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Quantidade máxima:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>{fixingNumbers(resultData.maxQuantity, 0)} unidades</span>
                    </div>
                </div>

                {/* Investimento total */}
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Investimento total:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(resultData.totalInvest, 2)}</span>
                    </div>
                </div> 

                {/* Prejuízo máximo */}
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Prejuízo máximo:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(resultData.maxLoss, 2)}</span>
                    </div>
                </div>

                {/* Prejuízo projetado */}
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Prejuízo projetado:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(resultData.projectedLoss, 2)}</span>
                    </div>
                </div> 

                {/* Lucro projetado */}
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Lucro projetado:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(resultData.projectedProfit, 2)}</span>
                    </div>
                </div> 

                {/* Montante ao sair */}
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Montante ao sair:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(resultData.outAmount, 2)}</span>
                    </div>
                </div> 

                {/* Take profit mínimo */}
                <div className={`${mainStyles['flex-container']}`} line-space="" style={{
                    marginBottom: '20px'
                }}>
                    <div className={mainStyles['flex-item']}>
                        <span>Take profit mínimo:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(resultData.minTakeProfit, 2)}</span>
                    </div>
                </div> 

                <EvaluationComponent data={resultData.evaluation} />
            </div>
        </div>
    )
}


function EvaluationComponent({data}){
    let background;

    if(data.status){
        if(data.result){
            background = defaultTheme.success.main;
        } else {
            background = defaultTheme.danger.main;
        }
    }
    return (
        <div 
            className={`${mainStyles['flex-container']} ${mainStyles.card}`} 
            line-space="" 
            style={{
                marginBottom: 0, 
                backgroundColor: background,
                padding: '10px'
            }}
        >
            <div 
                value-field="" 
                className={mainStyles['flex-item']}
                style={{
                    alignItems: 'center'
                }}
            >
                <span style={{color: defaultTheme.text.main, textAlign: 'center'}}>{data.message || 'Insira os dados para calcular...'}</span>
            </div>
        </div>
    )
}