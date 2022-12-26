export const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_ASTRONOMY_PICTURE_OF_THE_DAY':
            if(!action.payload?.date) return state;
            if(state.astronomypicoftheday.length === 0) return {...state, astronomypicoftheday: [{...action.payload}]};
            
            let set1 = new Set();
            let temp_arr1 = [...state.astronomypicoftheday, {...action.payload}];
            let new_arr1 = temp_arr1.filter(item => {
                if(!item?.date) return false;
                let duplicate1 = set1.has(item.date);
                set1.add(item.date);

                if(duplicate1) return false;
                return true;
            })

            return {...state, astronomypicoftheday: [...new_arr1]};
        case 'SAVE_IMAGE':
            const target = action.payload.name.toLowerCase();
            if(state[target].length === 0) {
                return {...state, [target]: [action.payload]};
            };

            let set = new Set();
            let temp_arr = [...state[target], {...action.payload}];
            let filtered_arr = temp_arr.filter(item => {
                let duplicate = set.has(item.url);
                set.add(item.url);
                if(duplicate) return false;
                return true;
            })

            return {...state, [target]: filtered_arr};
        case 'DELETE_IMAGE':
            const delete_target = action.payload.name.toLowerCase();
            const new_arr = state[delete_target].filter(item => {
                return item.url !== action.payload.url;
            })

            return {...state, [delete_target]: new_arr};
        default:
            return state;
    }
  
}