const BASE_URL = 'https://api.nasa.gov';

const getData = async (url, option = {}) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            signal: option.signal
        })
        return res;
    } catch (err) {
        return err;
    }
}

export default getData;