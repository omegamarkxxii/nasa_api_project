export const filterImageURL = (list) => {
    if(list.length === 0) return [];

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
export const regexMatchMarsURl = (str) => /mars/gm.test(str);
export const createList = (str) => str.split(/,/g);
export const  checkDayForFeb = (month, day) => (Number.parseInt(month) === 2 && Number.parseInt(day) > 28)? 28 : day;
export const createDateStr = (year, month, day) => `${year}-${month}-${day}`; 
export const trimStr = (str, val) => str.slice(0, val); 