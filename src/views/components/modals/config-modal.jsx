import Button from '@material-ui/core/Button';

// Components
import ConfigForm from '@/views/components/sections/config-form';
import Header from '@/views/components/headers/default-modal';

// Controllers
import { saveConfig } from '@/controllers/form-controller';
// Contexts
import { useConfigData } from '@/controllers/contexts/config-data';

// Material Icons
import SaveIcon from '@material-ui/icons/Save';

// Styles
import mainStyles from 'styles/main.module.css';
import { defaultTheme } from 'styles/theme';

export default function ConfigModal({modalCtrl}){
    const { configData, setConfigData } = useConfigData();

    return (
        <div className={mainStyles['flex-container']} style={{
            backgroundColor: 'hsl(194deg 13% 48% / 42%)',
            backdropFilter: 'blur(15px)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: '2%'
        }}>
            <div className={mainStyles.card} style={{
                maxWidth: '300px',
                overflow: 'hidden'
            }}>
                <Header title="Configurações" modalCtrl={modalCtrl} />

                <div className={mainStyles.container}>
                    <ConfigForm modalCtrl={modalCtrl} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<SaveIcon />}
                            style={{
                                backgroundColor: 'var(--secondary-main)',
                                color: 'var(--secondary-dark)',
                                marginTop: '30px'
                            }}
                            onClick={()=> saveConfig({data: configData, modalCtrl })}
                        >Salvar</Button>
                    </div>
                </div>

            </div>
        </div>
    );
}