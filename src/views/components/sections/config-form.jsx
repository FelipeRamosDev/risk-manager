// Material UI
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// Contexts
import { useConfigData } from '@/controllers/contexts/config-data';

// Controllers
import { handleChanges, firstFocusInput } from '@/controllers/form-controller';

// Styles
import mainStyles from 'styles/main.module.css';

export default function ConfigFormSectionComponent() {
    const { configData, setConfigData } = useConfigData();

    return (

        <form className={`${mainStyles['main-form']}`}>

            <div className={`${mainStyles['flex-container']}`} line-space="">
                <div value-field="" className={mainStyles['flex-item']}>
                    <TextField
                        label="Saldo total"
                        style={{
                            width: '100%',
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            type: 'number',
                        }}
                        onChange={(ev)=> handleChanges({ev,  data: configData, setter: setConfigData, field: 'totalBalance', outType: 'number'})}
                        value={Boolean(configData.totalBalance) ? configData.totalBalance : ''}
                        onFocus={()=> firstFocusInput({data: configData, setter: setConfigData, field: 'totalBalance'})}
                    />
                </div>
            </div>
            <div className={`${mainStyles['flex-container']}`} line-space="">
                <div value-field="" className={mainStyles['flex-item']}>
                    <TextField
                        label="Risco máximo"
                        style={{
                            width: '100%',
                            
                        }}
                        InputProps={{
                            type: 'number'
                        }}
                        onChange={(ev)=> handleChanges({ev, data: configData, setter: setConfigData, field: 'maxRisk', outType: 'number'})}
                        value={Boolean(configData.maxRisk) ? configData.maxRisk : ''}
                        onFocus={()=> firstFocusInput({data: configData, setter: setConfigData, field: 'maxRisk'})}
                    />
                </div>
            </div>
            <div className={`${mainStyles['flex-container']}`} line-space="">
                <div value-field="" className={mainStyles['flex-item']}>
                    <TextField
                        label="Corretagem"
                        style={{
                            width: '100%',
                            
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            type: 'number'
                        }}
                        onChange={(ev)=> handleChanges({ev, data: configData, setter: setConfigData, field: 'commission', outType: 'number'})}
                        value={Boolean(configData.commission) ? configData.commission : ''}
                        onFocus={()=> firstFocusInput({data: configData, setter: setConfigData, field: 'commission'})}
                    />
                </div>
            </div>
            <div className={`${mainStyles['flex-container']}`} line-space="" style={{ marginBottom: 0 }}>
                <div value-field="" className={mainStyles['flex-item']}>
                    <TextField
                        label="Risco/Recompensa"
                        style={{
                            width: '100%',
                            
                        }}
                        InputProps={{
                            type: 'number'
                        }}
                        onChange={(ev)=> handleChanges({ev, data: configData, setter: setConfigData, field: 'riskReturn', outType: 'number'})}
                        value={Boolean(configData.riskReturn) ? configData.riskReturn : ''}
                        onFocus={()=> firstFocusInput({data: configData, setter: setConfigData, field: 'riskReturn'})}
                    />
                </div>
            </div>
        </form>

    );
}