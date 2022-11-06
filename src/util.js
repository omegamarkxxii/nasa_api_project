export const filterImageURL = (list) => {
    if(list.length === 0) return list;

    const temp_arr = list.filter(item => {
        return !item.url.includes('youtube.com') && item.url.includes('image');
    });
    return temp_arr;
};

export const is_URL_Type = (url, type) => url.includes(type);
export const doesURLExist = (url) => url !== undefined;

export const setURL = (item, type, defaultImg) => {
    if(doesURLExist(item?.url) && is_URL_Type(item.url, type)) return item.url;
    return defaultImg;
} 