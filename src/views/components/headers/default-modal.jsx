// Icons 
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

// Styles
import mainStyles from 'styles/main.module.css';
import { defaultTheme } from 'styles/theme';

export default function DefautlModalHeaderComponent({title, modalCtrl}){
    return (
        <div className={mainStyles['modal-header']}>
            <div className={mainStyles['modal-header-item']}>
                <Button
                    style={{height: '100%', minWidth: '50px'}}
                    onClick={()=> modalCtrl(false)}
                >
                    <ArrowBackIcon style={{color: defaultTheme.text.main, height: '20px'}} />
                </Button>
            </div>
            <div className={mainStyles['modal-header-item']} slot="middle" >
                <span style={{color: defaultTheme.text.main, fontSize: '1.1em'}}>{title}</span>
            </div>
        </div>
    );
}