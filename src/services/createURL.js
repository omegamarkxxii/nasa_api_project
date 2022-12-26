const ASTRONOMY_PIC_OF_THE_DAY = "astronomypicoftheday";

const createURL = (id, date) => {
    const url = (id === ASTRONOMY_PIC_OF_THE_DAY) ?  `planetary/apod?date=${date}`  : `mars-photos/api/v1/rovers/${id}/photos?earth_date=${date}&page=1`;

    return url;
}

export default createURL;