

export default class LocalStorageService{
    edit({data}){
        if(data) localStorage.setItem('config', JSON.stringify(data));
    }

    read({setter}){
        let data = localStorage.getItem('config');
        if(data) setter(JSON.parse(data));
    }
}