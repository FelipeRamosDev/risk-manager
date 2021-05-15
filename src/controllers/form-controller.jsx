import {CalculateResultModel, CalculateConfigModel} from '@/models/calculate-risk-model';
import LocalStorageService from '@/controllers/services/local-storage';

// Main declarations
const ls = new LocalStorageService();

export function handleChanges({ev, data, setter, field, outType }){
    let newValue;

    if(!Boolean(ev.target.value)){
        setter({...data, [field]: ''})
    } else {
        switch(outType){
            case 'number':
                newValue = Number(ev.target.value);
                break;
            case 'string': 
                newValue = String(ev.target.value);
                break;
            default:
                newValue = ev.target.value;
        }
        setter({ ...data, [field]: newValue });
    }
}

export function firstFocusInput({data, setter, field}){
    if(!data[field]){
        setter({...data, [field]: ''});
    }
}

export function calculate({setResultData, data}){
    let results = new CalculateResultModel().results;
    let final = new CalculateResultModel();
    const {calcData, configData} = data;

    final.maxQuantity = results.maxQuantity(data, final);
    final.totalInvest = results.totalInvest(data, final);
    final.projectedLoss = results.projectedLoss(data, final);
    final.projectedProfit = results.projectedProfit(data, final);
    final.outAmount = results.outAmount(data, final);
    final.minTakeProfit = results.minTakeProfit(data, final);
    final.evaluation = results.evaluation({result: final, calcData, configData});
    
    setResultData(final);
}

export function saveConfig({data, modalCtrl}){
    ls.edit({data});
    modalCtrl(false);
}

export function loadConfig({setConfigData}){
    ls.read({setter: setConfigData});
}

export function fixingNumbers(data, toFixed){
    data = Number(data);
    return (data && data.toFixed) ? data.toFixed(toFixed) : '--';
}