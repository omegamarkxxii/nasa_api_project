import axios from "axios";

const default_method = 'get';
const base_url = 'https://api.nasa.gov/';
const key = process.env.REACT_APP_NASA_API_KEY;

const handleFetch = async ({url, abortSignal, paramEntries = {}}) => {
    try {
        const res = await axios({
            method: default_method,
            baseURL: base_url,
            url: url,
            params: {
                ...paramEntries,
                api_key: key
            },
            signal: abortSignal
        })

        return res.data;
    } catch (err) {
        return err.response;
    }
}

export default handleFetch;