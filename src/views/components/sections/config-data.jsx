import { useState, useRef, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// Modals
import ConfigModal from '@/views/components/modals/config-modal';

// Controllers
import { fixingNumbers } from '@/controllers/form-controller';

// Contexts
import { useCalcData } from '@/controllers/contexts/calc-data';
import { useConfigData } from '@/controllers/contexts/config-data';
import { useResultData } from '@/controllers/contexts/result-data';

// Services
import LocalStorageService from '@/controllers/services/local-storage';

// Styles
import mainStyles from 'styles/main.module.css';

const ls = new LocalStorageService();

export default function ConfigDataSectionComponent(){
    const { calcData, setCalcData } = useCalcData();
    const { configData, setConfigData } = useConfigData();
    const { resultData, setResultData } = useResultData();
    const [ modalCtrl, setModalCtrl ] = useState(false)
    let modalRef = useRef('config-modal');

    useEffect(()=>{
        ls.read({setter: setConfigData})
    }, []);

    return (<> 
        <div className={mainStyles['card-gradient']} style={{marginBottom: '20px'}}>
            <div className={mainStyles.container}>
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Saldo total:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(configData.totalBalance, 2)}</span>
                    </div>
                </div>
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Risco máximo:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>{configData.maxRisk || '--'} %</span>
                    </div>
                </div>
                <div className={`${mainStyles['flex-container']}`} line-space="">
                    <div className={mainStyles['flex-item']}>
                        <span>Risco/Retorno:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>{configData.riskReturn || '--'}x</span>
                    </div>
                </div>
                <div className={`${mainStyles['flex-container']}`} line-space="" style={{marginBottom: 0}}>
                    <div className={mainStyles['flex-item']}>
                        <span>Corretagem:</span>
                    </div>
                    <div value-field="" className={mainStyles['flex-item']}>
                        <span>R$ {fixingNumbers(configData.commission, 2)}</span>
                    </div>
                </div>
            </div>
            <div className={mainStyles['flex-container']}>
                <div className={mainStyles['flex-item']} style={{width: '100%'}}>
                    <Button
                        style={{
                            borderRadius: 0,
                            color: 'var(--secondary-dark)'
                        }}
                        onClick={()=> setModalCtrl(true)}
                    >Configurar</Button>
                </div>
            </div>
        </div>
        <Modal
            open={modalCtrl}
            ref={modalRef}
        >
            <ConfigModal modalCtrl={setModalCtrl} />
        </Modal>
    </>);
}