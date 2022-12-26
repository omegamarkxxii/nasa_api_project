import axios from "axios";

const BASE_URL = 'https://api.nasa.gov/';

const getData = async (url, option = {}) => {
    try {
        const res = await axios({
            method: option.method || 'get',
            baseURL: BASE_URL,
            url: url,
            params: {
                ...option.params,
                api_key: process.env.REACT_APP_NASA_API_KEY
            },
            signal: option.signal
        })

        return res;
    } catch (err) {
        return err.response;
    }
}

export default getData;