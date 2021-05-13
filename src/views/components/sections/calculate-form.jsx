// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// Contexts
import { useCalcData } from '@/controllers/contexts/calc-data';
import { useConfigData } from '@/controllers/contexts/config-data';
import { useResultData } from '@/controllers/contexts/result-data';

// Material Icons
import ShowChartIcon from '@material-ui/icons/ShowChart';

// Controllers
import { handleChanges, firstFocusInput, calculate } from '@/controllers/form-controller';

// Styles
import mainStyles from 'styles/main.module.css';
import { defaultTheme } from 'styles/theme';

export default function CalculateFormSectionComponent() {
    const { calcData, setCalcData } = useCalcData();
    const { configData, setConfigData } = useConfigData();
    const { resultData, setResultData } = useResultData();

    return (

        <form className={`${mainStyles['main-form']}`}>
            <h2 style={{ marginTop: '0' }}>Dados do trade</h2>

            <div className={`${mainStyles['flex-container']}`} line-space="">
                <div value-field="" className={mainStyles['flex-item']}>
                    <TextField
                        label="Cotação atual"
                        style={{
                            width: '100%',
                            
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            type: 'number',
                        }}
                        onChange={(ev)=> handleChanges({ev, data: calcData, setter: setCalcData, field: 'currentCotation', outType: 'number'})}
                        value={calcData.currentCotation}
                        onFocus={()=> firstFocusInput({data: calcData, setter: setCalcData, field: 'currentCotation'})}
                    />
                </div>
            </div>
            <div className={`${mainStyles['flex-container']}`} line-space="">
                <div value-field="" className={mainStyles['flex-item']}>
                    <TextField
                        label="Take profit"
                        style={{
                            width: '100%',
                            
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            type: 'number'
                        }}
                        onChange={(ev)=> handleChanges({ev, data: calcData, setter: setCalcData, field: 'takeProfit', outType: 'number'})}
                        value={calcData.takeProfit}
                        onFocus={()=> firstFocusInput({data: calcData, setter: setCalcData, field: 'takeProfit'})}
                    />
                </div>
            </div>
            <div className={`${mainStyles['flex-container']}`} line-space="" style={{ marginBottom: 0 }}>
                <div value-field="" className={mainStyles['flex-item']}>
                    <TextField
                        label="Stop loss"
                        style={{
                            width: '100%',
                            
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            type: 'number'
                        }}
                        onChange={(ev)=> handleChanges({ev, data: calcData, setter: setCalcData, field: 'stopLoss', outType: 'number'})}
                        value={calcData.stopLoss}
                        onFocus={()=> firstFocusInput({data: calcData, setter: setCalcData, field: 'stopLoss'})}
                    />
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    // startIcon={<ShowChartIcon />}
                    style={{
                        backgroundColor: 'var(--tertiary-soft)',
                        marginTop: '30px'
                    }}
                    onClick={()=> calculate({setResultData, data: {calcData, configData}})}
                >
                    Calcular
                </Button>
            </div>
        </form>

    );
}