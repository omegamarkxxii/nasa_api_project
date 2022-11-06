import axios from "axios";

// // https://api.nasa.gov/planetary/apod?api_key=aLg1jdzAJCHquaktdj4RP4t2oGRswgtuJXjq15PQ

const fetchData = async () => {
    try {
        const response =  await axios({
            method: 'get',
            url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`,
        });
        
        // console.log('status:  ', response.status);
        console.log('x-ratelimit:  ', response.headers);
        // console.log('data:  ', response.data);

        return response.data;
        
    } catch (error) {
        console.log('error -->  ', error.response);
        // return null;
    }
};

export default fetchData;