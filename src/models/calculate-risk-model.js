export class CalculateRiskModel{
    constructor(props = {
        currentCotation: Number(),
        stopLoss: Number(),
        takeProfit: Number(),
    }){
        this.currentCotation = props.currentCotation;
        this.stopLoss = props.stopLoss;
        this.takeProfit = props.takeProfit;
    }
} 

export class CalculateConfigModel{
    constructor(props = {
        totalBalance: Number(),
        maxRisk: Number(),
        maxLoss: Number(),
        riskReturn: Number(),
        commission: Number()
    }){
        this.totalBalance = props.totalBalance;
        this.maxRisk = props.maxRisk;
        this.maxLoss = props.maxLoss;
        this.riskReturn = props.riskReturn;
        this.commission = props.commission;
    }
}

export class CalculateResultModel{
    constructor(props = {
        maxQuantity: Number(),
        totalInvest: Number(),
        projectedLoss: Number(),
        projectedProfit: Number(),
        outAmount: Number(),
        minTakeProfit: Number(),
        evaluation: new EvaluationModel(),
    }){
        this.maxQuantity = props.maxQuantity;
        this.totalInvest = props.totalInvest;
        this.projectedLoss = props.projectedLoss;
        this.projectedProfit = props.projectedProfit;
        this.outAmount = props.outAmount;
        this.minTakeProfit = props.minTakeProfit;
        this.evaluation = props.evaluation;
    }

}
CalculateResultModel.prototype.results = {
    maxLoss: ({configData, calcData})=>{
        const {
            maxRisk,
            totalBalance
        } = configData;

        return (maxRisk / 100) * totalBalance;
    },
    maxQuantity: ({configData, calcData}, { maxLoss })=>{
        const {commission} = configData;
        const {currentCotation, stopLoss} = calcData;

        return (maxLoss - (commission * 2)) / (currentCotation - stopLoss);
    },
    totalInvest: ({configData, calcData}, {maxQuantity})=>{
        const {currentCotation} = calcData;
        const {commission} = configData;

        return (currentCotation * maxQuantity) + commission;
    },
    projectedLoss: ({configData, calcData}, {maxQuantity})=>{
        const {commission} = configData;
        const {currentCotation, stopLoss} = calcData;

        return ((currentCotation - stopLoss) * maxQuantity) + (2 * commission);
    },
    projectedProfit: ({configData, calcData}, {projectedLoss})=>{
        const {riskReturn} = configData;

        return projectedLoss * riskReturn;
    },
    outAmount: ({configData, calcData}, {projectedProfit, totalInvest})=>{
        const {commission} = configData;

        return projectedProfit + totalInvest + commission;
    },
    minTakeProfit: ({configData, calcData}, {outAmount, maxQuantity})=>{
        const {commission} = configData;

        return (outAmount - commission) / maxQuantity;
    },
    evaluation: ({result, configData, calcData})=>{
        let { takeProfit, stopLoss, currentCotation } = calcData;
        let { totalBalance, commission } = configData;

        let takeProfitResult = (takeProfit >= result.minTakeProfit) ? true : false;
        let balanceResult = (result.totalInvest <= totalBalance) ? true : false;

        if(!balanceResult){
            let permitedQuantity = (totalBalance / currentCotation);
            let cost = ((currentCotation -  stopLoss) * permitedQuantity) + (2 * commission);
            let newRisk = (100 * cost) / totalBalance;

            return new EvaluationModel({ 
                status: 'success',
                result: false, 
                message: `Você não tem saldo suficiente para realizar essa operação, só será possível comprar: ${permitedQuantity.toFixed(0)} unidades com um risco de R$ ${cost.toFixed(2)} (${newRisk.toFixed(2)}%)`
            });
        }
        if(!takeProfitResult){ 
            return new EvaluationModel({ status: 'success', result: false, message: 'A relação risco/recompensa não foi atingida!'});
        }

        return new EvaluationModel({
            status: 'success',
            result: true,
            message: 'Aprovado'
        });
    }
}

class EvaluationModel{
    constructor(props = {
        status: String(),
        result: Boolean(),
        message: String()
    }){
        this.status = props.status;
        this.result = props.result;
        this.message = props.message;
    }
}