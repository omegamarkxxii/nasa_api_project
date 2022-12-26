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

// for rover detail --> spirit, Curiosity, Opportunity
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/?api_key=DEMO_KEY 
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2004-01-05&page=2&api_key=DEMO_KEY