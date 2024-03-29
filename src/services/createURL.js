const ASTRONOMY_PIC_OF_THE_DAY = "astronomypicoftheday";
const APOD_URL = '/planetary/apod';
const MARS_URL = '/mars-photos/api/v1/rovers/';


const createURL = (id, date) => {
    const url = (id === ASTRONOMY_PIC_OF_THE_DAY) ?  `${APOD_URL}?date=${date}&${process.env.REACT_APP_NASA_API_KEY}`  : `${MARS_URL}${id}/photos?earth_date=${date}&page=1&${process.env.REACT_APP_NASA_API_KEY}`;

    return url;
}

export default createURL;