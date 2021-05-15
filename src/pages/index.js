import { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';

// Services
import LocalStorageService from '@/controllers/services/local-storage';

// Components
import CalculateRisk from '@/views/components/activities/calculate-risk';
import BoxActivity from '@/views/components/activities/box-config';

import { useConfigData } from '@/controllers/contexts/config-data';

// Modals
import ConfigModal from '@/views/components/modals/config-modal';

// Styles
import mainStyles from 'styles/main.module.css';

// Main decalrations
const ls = new LocalStorageService();

export default function Home() {
  const [ configCtrl, setConfigCtrl ] = useState(false);
  const { configData, setConfigData } = useConfigData();
  const [ accessType, setAccessType ] = useState('loading');
  let Activity = IsError;

  useEffect(()=>{
    let amIUser = ls.read({key: 'amIUser'});

    if(amIUser){
      setAccessType('configured');
    } else {
      setAccessType('first-access');
    }
    // ls.read({setter: setConfigData});  
  }, [configData])

  function saveHandle(accessType){
    window.location.reload();
  }
  

  switch(accessType){
    case 'loading':
      Activity = IsLoading;
      break;
    case 'first-access':
      Activity = IsFirstAccess;
      break;
    case 'configured':
      Activity = IsConfigured;
      break;
  }
  
  return (
    <div className={mainStyles.main}>
      <Activity setModalCtrl={setConfigCtrl} />

      <Modal
          open={configCtrl}
      >
          <ConfigModal modalCtrl={setConfigCtrl} addHandle={(accessType === 'configured') ? false : saveHandle} />
      </Modal>
    </div>
  )
}


function IsLoading({setModalCtrl}){
  return (
    <BoxActivity
      setModalCtrl={setModalCtrl}
      title="Carregando"
    />
  )
}
function IsFirstAccess({setModalCtrl}){
  return (
    <BoxActivity
      setModalCtrl={setModalCtrl}
      title="Seja bem-vindo"
      description="Antes de iniciar é necessário que você configure o app. Clique no botão abaixo para iniciar."
      hasButton={true}
      buttonText="Iniciar"
      buttonHandler={()=> setModalCtrl(true)}
    />
  )
}
function IsConfigured({setModalCtrl}){
  return (
    <CalculateRisk
      setModalCtrl={setModalCtrl}
    />
  )
}
function IsError({setModalCtrl}){
  return (
    <BoxActivity
      setModalCtrl={setModalCtrl}
      title="Ocorreu um erro!"
    />
  )
}


