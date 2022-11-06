import axios from "axios";

// for astronomy picture of the day
// https://api.nasa.gov/planetary/apod?api_key=aLg1jdzAJCHquaktdj4RP4t2oGRswgtuJXjq15PQ

const fetchAPI = async (url, abortSignal) => {
    try {
        const response = await axios({
            method: 'get',
            baseURL: 'https://api.nasa.gov/',
            params: {
                api_key: process.env.REACT_APP_NASA_API_KEY
            },
            url: url,
            signal: abortSignal
        });

        return response.data;
    } catch (error) {
        console.log(error.response);
    }
};

export default fetchAPI;