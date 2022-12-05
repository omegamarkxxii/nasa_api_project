import { regexDate, regexSol } from "../util";

export const initialSearchQueryState = {
    target: 'apod',
    value: '',
    data: null,
    isValid: false,
    error: false,
    errorMsg: ''
};

/*
apod min date = 1995-06-16 // max date = yesterday // max sol 0
spirit min date = 2004-01-04 // max date = 2010-03-21 // max sol 2208
opportunity min date = 2004-01-25 // max date = 2018-06-11 // max sol 5111
curiosity min date = 2012-08-06 // max date =  2022-11-09 // max sol 3647
/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/g for date yy//mm//dd
*/

const target = {
    "apod": {
        min_date: "1995-06-16 GMT",
        max_date: "2022-12-3 GMT",
        max_sol: 0
    },
    "spirit": {
        min_date: "2004-01-04 GMT",
        max_date: "2010-03-21 GMT",
        max_sol: 2208
    },
    "opportunity": {
        min_date: "2004-01-25 GMT",
        max_date: "2018-06-11 GMT",
        max_sol: 5111
    },
    "curiosity": {
        min_date: "2012-08-06 GMT",
        max_date: "2022-11-09 GMT",
        max_sol: 3647
    },
};


export const searchQueryReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TARGET':
            return {...state, target: action.payload};
        case 'SET_VALUE':
            return {...state, value: action.payload}; 
        case 'VALIDATE':
            const isSolValid = regexSol(state.value);
            const isDateValid = regexDate(state.value);

            if(isSolValid && state.target === "apod") {
                return {
                    ...state,
                    isValid: false, 
                    error: true,
                    errorMsg: "for astronomy picture of the day, use date format:  yy//mm//dd: example: 2001-03-29, minimum date is 1995-06-16, maximum date is 2022-12-3"
                };
            }

            if(isSolValid || isDateValid) {
                if(isDateValid){
                    const searchDate = Date.parse(state.value);
                    const minDate = Date.parse(target[state.target].min_date);
                    const maxDate = Date.parse(target[state.target].max_date);

                    const range = (searchDate >= minDate && searchDate <= maxDate);
                    
                    if(!range) {
                        return {
                            ...state,
                            isValid: false,
                            error: true,
                            errorMsg: `date specified for ${state.target} not within range, min date: ${target[state.target].min_date} | max date: ${target[state.target].max_date}`
                        }
                    }

                    return {...state, isValid: true, error: false, errorMsg: ''};
                }
            }

            console.log('value', state.value);
            console.log(isSolValid);
            console.log(isDateValid);


            return {...state};
        default:
            return state;
    }

};