import { regexDate, regexSol, matchHypen } from "../util";

export const initialSearchQueryState = {
    target: 'apod',
    value: '',
    data: [],
    isValid: false,
    error: false,
    errorMsg: '',
    url_path: 'planetary/apod',
    parameters: {}
};

/*
apod min date = 1995-06-16 // max date = yesterday // max sol 0
spirit min date = 2004-01-04 // max date = 2010-03-21 // max sol 2208
opportunity min date = 2004-01-25 // max date = 2018-06-11 // max sol 5111
curiosity min date = 2012-08-06 // max date =  2022-11-09 // max sol 3647
/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/g for date yy//mm//dd
*/
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/?api_key=DEMO_KEY 
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2004-01-05&page=2&api_key=DEMO_KEY


const target = {
    "apod": {
        min_date: "1995-06-16 GMT",
        max_date: "2022-12-3 GMT",
        max_sol: 0,
        url_path: "planetary/apod"
    },
    "spirit": {
        min_date: "2004-01-04 GMT",
        max_date: "2010-03-21 GMT",
        max_sol: 2208,
        url_path: "mars-photos/api/v1/rovers/spirit/photos"
    },
    "opportunity": {
        min_date: "2004-01-25 GMT",
        max_date: "2018-06-11 GMT",
        max_sol: 5111,
        url_path: "mars-photos/api/v1/rovers/opportunity/photos"
    },
    "curiosity": {
        min_date: "2012-08-06 GMT",
        max_date: "2022-11-09 GMT",
        max_sol: 3647,
        url_path: "mars-photos/api/v1/rovers/curiosity/photos"
    },
};


export const searchQueryReducer = (state, action) => {

    switch(action.type) {
        case 'SET_TARGET':
            return {...state, target: action.payload};
        case 'SET_VALUE':
            return {...state, value: action.payload}; 
        case 'VALIDATE':
            if(state.value.length === 0) {
                return {
                    ...state,
                    error: false,
                    errorMsg: ''
                };
            }

            const isSolValid = regexSol(state.value);
            const isDateValid = regexDate(state.value);

            if(isSolValid && state.target === "apod") {
                return {
                    ...state,
                    error: true,
                    errorMsg: "for astronomy picture of the day, use date format:  yy//mm//dd: example: 2001-03-29, minimum date is 1995-06-16, maximum date is 2022-12-3"
                };
            }

            if(isSolValid || isDateValid) {
                if(isDateValid){
                    const searchDate = Date.parse(state.value);
                    const minDate = Date.parse(target[state.target].min_date);
                    const maxDate = Date.parse(target[state.target].max_date);

                    const dateWithinRange = (searchDate >= minDate && searchDate <= maxDate);
                    
                    if(!dateWithinRange) {
                        return {
                            ...state,
                            error: true,
                            errorMsg: `date specified for ${state.target} not within range, min date: ${target[state.target].min_date} | max date: ${target[state.target].max_date}`
                        }
                    }

                    return {
                        ...state, 
                        isValid: true,
                        error: false, 
                        errorMsg: ''
                    };
                }

                if(isSolValid) {
                    const targetSol = parseInt(state.value);
                    const minSol = 1;
                    const maxSol = target[state.target].max_sol;
                    
                    const solWithinRange = (targetSol >= minSol && targetSol <= maxSol);

                    if(!solWithinRange) {
                        return {
                            ...state,
                            error: true,
                            errorMsg: `sol specified for ${state.target} not within range, min sol is 1 and maximum sol is ${target[state.target].max_sol} ` 
                        }
                    }

                    return {
                        ...state,
                        isValid: true,
                        error: false,
                        errorMsg: ''
                    }
                }
            }

            return {
                ...state,
                error: true,
                errorMsg: "invalid input, check rules on the side bar for more info."
            };
        case 'SET_PARAMETERS':
            if(!state.isValid) return;
            let values = {};
            if(state.target === "apod") {
                values = {
                    date: state.value
                }
            } else {
                const key = matchHypen(state.value) === true ? "earth_date" : 'sol';
                values = {
                    [key]: state.value,
                    page: 1
                }
            }

            return {...state, parameters: {...values}};
        case 'SET_URL_PATH':
            if(!state.isValid) return;
            return {...state, url_path: target[state.target].url_path};
        case 'SET_DATA':
            if(state.data.length === 0) return;
            return {...state, data: action.payload};
        default:
            return state;
    }

};