export const filterImageURL = (list) => {
    if(list.length === 0) return list;

    const temp_arr = list.filter(item => {
        return !item.url.includes('youtube.com');
    });
    return temp_arr;
};

export const is_URL_Type = (url, type) => url.includes(type);
export const doesURLExist = (url) => url !== undefined;

export const setURL = (item, type, defaultImg) => {
    if(doesURLExist(item?.url) && is_URL_Type(item.url, type)) return item.url;
    return defaultImg;
} 

export const regexDate = (str) => /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/g.test(str);
export const regexSol = (str) => /^([1-9]|[1-9]\d|[1-9][0-9]{2}|[1-9][0-9]{3})$/g.test(str);
export const createList = (str) => str.split(/,/g);


export const updateLocalStorage = (storage_name, payload) => {
    localStorage.setItem(storage_name, JSON.stringify(payload));
}

export const getLocalStorage = (storage_name) => {
    return JSON.parse(localStorage.getItem(storage_name));
}

export const createLocalStorage = (storage_name) => {
    const cached_data = JSON.parse(localStorage.getItem(storage_name));
    if(!cached_data) {
        localStorage.setItem(storage_name, JSON.stringify([]));
    }
}