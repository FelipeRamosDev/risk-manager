

export default class LocalStorageService{
    edit({data}){
        localStorage.setItem('amIUser', true);
        if(data) localStorage.setItem('config', JSON.stringify(data));
    }

    read({setter, key}){
        let data = localStorage.getItem(key || 'config');
        if(data) {
            let parsed = JSON.parse(data);
            if(setter) setter(parsed);
            return parsed;
        } else {
            return false
        }
    }
}