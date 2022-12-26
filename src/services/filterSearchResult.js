const ASTRONOMY_PIC_OF_THE_DAY = "astronomypicoftheday";

const filterSearchResult = (id, data) => {
    if(id === "apod") {
        if(!data?.url) return [];
        return [{
            id: data.date,
            date: data.date,
            url: data.url,
            title: data.title,
            name: ASTRONOMY_PIC_OF_THE_DAY
        }];
    }

    if(!data?.photos) return [];
    const temp_array = data.photos.map(photo => {
        return {
            id: photo.id,
            date: photo.earth_date,
            url: photo.img_src,
            title: photo.camera.full_name,
            name: photo.rover.name
        }
    });
    return temp_array;
};

export default filterSearchResult;