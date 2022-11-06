export const initializeState = {
    astronomyPicOfTheDay: []
}

export const primaryStateReducer = (state, action) => {
    switch(action.type) {
        case 'INIT_LOCAL_STORAGE': 
            const cached_data = JSON.parse(localStorage.getItem('NASA_API_DATA'));
            if(!cached_data) {
                localStorage.setItem('NASA_API_DATA', JSON.stringify(state));
                return {...state};
            }
            return {...cached_data};
        case 'UPDATE_LOCAL_STORAGE':
            localStorage.setItem('NASA_API_DATA', JSON.stringify(state));
            return state;
        case 'UPDATE_ASTRONOMY_PICTURE_OF_THE_DAY':
            if(!action.payload?.date) return state;
            if(state.astronomyPicOfTheDay.length === 0) return {...state, astronomyPicOfTheDay: [{...action.payload}]};
            
            let set = new Set();
            let temp_arr = [...state.astronomyPicOfTheDay, {...action.payload}];
            let new_arr = temp_arr.filter(item => {
                if(!item?.date) return false;
                let duplicate = set.has(item.date);
                set.add(item.date);

                if(duplicate) return false;
                return true;
            })

            return {...state, astronomyPicOfTheDay: [...new_arr]};
        case 'reset':
            const temp = {...action.payload};
            // return {...state, astronomyPicOfTheDay: []};
            console.log('temp', temp.apodList);
            return state;
        default:
            return state;
    }
  
}