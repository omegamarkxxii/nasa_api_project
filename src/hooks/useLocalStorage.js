import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [local, setLocal] = useState(() => {
        try {
            let cached_data = JSON.parse(localStorage.getItem(key));
            return cached_data || initialValue ;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    })

    useEffect(() => {
        try {
            console.log('item set');
            localStorage.setItem(key, JSON.stringify(local));
        } catch (error) {   
            console.log(error);
        }
    }, [key, local]);


    return [local, setLocal];
};

export default useLocalStorage;