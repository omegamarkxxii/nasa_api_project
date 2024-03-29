import getData from "./api";
import { MOCK_APOD_DATA, MOCK_APOD_DATA_WITH_PARAMS, MOCK_MARS_DATA_WITH_PARAMS } from "../mocks/mockData";


test("should fetch correct data for astronomy picture of the day GET request", async () => {
    await getData("/planetary/apod")
            .then((res) => res.json())
            .then(data => {
                expect(data).toEqual(MOCK_APOD_DATA);
            })
})

test("should fetch correct data based on query param", async () => {
    await getData("/planetary/apod?date=2022-10-17")
            .then((res) => res.json())
            .then(data => {
                expect(data).toEqual(MOCK_APOD_DATA_WITH_PARAMS);
            })
})

test("should fetch mars photo data", async () => {
    await getData("/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2012-10-09&page=1")
            .then(res => res.json())
            .then(data => {
                expect(data).toEqual(MOCK_MARS_DATA_WITH_PARAMS);
            })
})