import filterSearchResult from "./filterSearchResult";

const APOD_MOCK_DATA = {
    date: "2022-10-22",
    title: "NGC 1499: The California Nebula",
    url: "https://apod.nasa.gov/apod/image/2210/20221011NGC1499CaliforniaNebula1024.jpg"
};

const MARS_MOCK_DATA = {
    photos: [
        {
            camera: {
                full_name: "Front Hazard Avoidance Camera",
                id: 20,
                name: "FHAZ",
                rover_id: 5
            },
            earth_date: "2017-10-16",
            id: 634105,
            img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01847/opgs/edr/fcam/FLB_561457773EDR_F0661516FHAZ00341M_.JPG",
            rover: {
                id: 5,
                landing_date: "2012-08-06",
                launch_date: "2011-11-26",
                name: "Curiosity",
                status: "active"
            }
        },
        {
            camera: {
                full_name: "Navigation Camera",
                id: 26,
                name: "NAVCAM",
                rover_id: 5
            },
            earth_date: "2017-10-16",
            id: 634121,
            img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01847/opgs/edr/ncam/NRB_561459621EDR_M0661516NCAM00575M_.JPG",
            rover: {
                id: 5,
                landing_date: "2012-08-06",
                launch_date: "2011-11-26",
                name: "Curiosity",
                status: "active"
            }
        }
    ]
}


const ASTRONOMY_PIC_OF_THE_DAY = "astronomypicoftheday";
const APOD_ID = "apod";
const MARS_ID = "mars";

test("should return empty array if data object does not have url", () => {
    const result_1 = filterSearchResult(APOD_ID, []);
    expect(result_1).toEqual([]);
    const result_2 = filterSearchResult(MARS_ID, []);
    expect(result_2).toEqual([]);
})

test("should match apod array object structure if id is apod and data has value", () => {
    const result = filterSearchResult(APOD_ID, APOD_MOCK_DATA);
    expect(result).toEqual([{
        id: APOD_MOCK_DATA.date,
        date: APOD_MOCK_DATA.date,
        url: APOD_MOCK_DATA.url,
        title: APOD_MOCK_DATA.title,
        name: ASTRONOMY_PIC_OF_THE_DAY
    }])
})

test("should match mars array object structure if id is mars and data has value", () => {
    const result = filterSearchResult(MARS_ID, MARS_MOCK_DATA);
    expect(result).toEqual([
        {
            id: MARS_MOCK_DATA.photos[0].id,
            date: MARS_MOCK_DATA.photos[0].earth_date,
            url: MARS_MOCK_DATA.photos[0].img_src,
            title: MARS_MOCK_DATA.photos[0].camera.full_name,
            name: MARS_MOCK_DATA.photos[0].rover.name
        },
        {
            id: MARS_MOCK_DATA.photos[1].id,
            date: MARS_MOCK_DATA.photos[1].earth_date,
            url: MARS_MOCK_DATA.photos[1].img_src,
            title: MARS_MOCK_DATA.photos[1].camera.full_name,
            name: MARS_MOCK_DATA.photos[1].rover.name
        }
    ])
})