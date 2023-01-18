import { filterImageURL, is_URL_Type, doesURLExist, setURL, regexMatchMarsURl, createList, checkDayForFeb, createDateStr, trimStr } from "./util";
import nasaImg from '../images/nasa_1.jpg';

const mockURL = [
    { url: "https://apod.nasa.gov/apod/image/2211/M33-NOIR-HST-LL_1024.jpg" },
    { url: "https://apod.nasa.gov/apod/image/2211/darksun_lafferty_960.jpg" },
    { url: "https://www.youtube.com/embed/7dh5VL5YGoA?rel=0" },

];

const MARS_URL = "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG";

const TEXT = '2004,2005,2006,2007,2008,2009,2010';

describe("filterImageURL", () => {
    test("if array length is equal to 0 should return empty array", () => {
        const result = filterImageURL([]);
        expect(result).toEqual([]);
    })

    test("should filter url with youtube.com string", () => {
        const result = filterImageURL(mockURL);
        expect(result).toHaveLength(2);
        expect(result).toEqual([
            { url: "https://apod.nasa.gov/apod/image/2211/M33-NOIR-HST-LL_1024.jpg" },
            { url: "https://apod.nasa.gov/apod/image/2211/darksun_lafferty_960.jpg" }
        ])
    })
})

describe("setURL", () => {

    test("should return true if type include in url string", () => {
        const result = is_URL_Type(mockURL[0].url, "image");
        expect(result).toBeTruthy();
    })
    
    test("should return false if type does not include in url string", () => {
        const result = is_URL_Type(mockURL[2].url, "image");
        expect(result).toBeFalsy();
    })
    
    
    test("should return false if url is undefined", () => {
        const result = doesURLExist(undefined);
        expect(result).toBeFalsy();
    })
    
    test("should return true if url is defined", () => {
        const result = doesURLExist(mockURL[0].url);
        expect(result).toBeTruthy();
    })

    test("should return default image", () => {
        const result = setURL([], "image", nasaImg);
        expect(result).toBe(nasaImg);
    })

    test("should return url", () => {
        const result = setURL(mockURL[0], "image", nasaImg);
        expect(result).toEqual(mockURL[0].url);
    })
})

test("should return true if string url match for mars", () => {
    const result = regexMatchMarsURl(MARS_URL);
    expect(result).toBeTruthy();
})

test("should return false if string url does not match for mars", () => {
    const result = regexMatchMarsURl(mockURL[0].url);
    expect(result).toBeFalsy();
})

test("should return an array from string text that is seperated by comma", () => {
    const result = createList(TEXT);
    expect(result).toEqual( ["2004","2005","2006","2007","2008","2009","2010"] );
})

test("should return 28 if its feb and more than 28", () => {
    const result = checkDayForFeb(2, 29);
    expect(result).toBe(28);
})

test("should return given number if its feb and less or equal than 28 or if its another month", () => {
    const result = checkDayForFeb(11, 31);
    expect(result).toBe(31);
})

test("returns a string date seperated by hypen", () => {
    const result = createDateStr(2000, 3, 29);
    expect(result).toMatch(/^2000-3-29$/i);
})

test("should trim string by 11 and return", () => {
    const result = trimStr("this is a string to test trim", 11);
    expect(result).toMatch(/^this is a s$/i)
})