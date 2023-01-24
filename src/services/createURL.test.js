import createURL from "./createURL";

const APOD_ID = "astronomypicoftheday";
const MARS_ID = 'mars';

test("if id is astronomypicoftheday should return a url string planetary/apod?date=date_value", () => {
    const result = createURL(APOD_ID, "2000-12-30");
    expect(result).toMatch("planetary/apod?date=2000-12-30");
})

test("if id is not equal to astronomypicoftheday should return a url string mars-photos/api/v1/rovers/mars/photos?earth_date=date_value&page=1", () => {
    const result = createURL(MARS_ID, "2000-12-30");
    expect(result).toMatch("mars-photos/api/v1/rovers/mars/photos?earth_date=2000-12-30&page=1");
})