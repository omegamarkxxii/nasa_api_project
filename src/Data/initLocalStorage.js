const initLocalStorage = (currentState) => {
    const cacheData = {
        apodList: [
            {
                date: '2023-10-21',
                explanation: '',
                title: '',
                hdurl: '',
                url: ''    

            }
        ],
        nasaimg: []};

    localStorage.setItem('NASA_Data', JSON.stringify(cacheData));
    return cacheData;
};

export default initLocalStorage;