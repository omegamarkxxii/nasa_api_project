import searchLabel from "../Constants/searchLabel";

const label = searchLabel();
export const initialFormState = {
    id: "astronomypicoftheday",
    year: label["astronomypicoftheday"].years[0],
    month: label.months[0],
    day: label.days[0],
    url_path: '',
    search_result: []
};

export const formReducer = (state, action) => {
    switch(action.type) {
        case "SET_VALUE":
            return {...state, [action.payload.name]: action.payload.value};
        case "CREATE_URL_PATH":
            let reset_day = state.day;
            if(Number.parseInt(state.month) === 2 && Number.parseInt(state.day) > 28) { reset_day = 28; }
            const date = `${state.year}-${state.month}-${reset_day}`;
            const url = (state.id === "astronomypicoftheday") ? `planetary/apod?date=${date}` : `mars-photos/api/v1/rovers/${state.id}/photos?earth_date=${date}&page=1`;
            return {...state, url_path: url};
        case "MODIFY_LIST":
            const res = action.payload;
            let modified_array = [];
            if(state.id === "astronomypicoftheday") {
                if(!res?.url) return state;
                modified_array.push({
                    id: res.date,
                    date: res.date,
                    url: res.url,
                    hdURL: res?.hdurl || '',
                    title: res.title,
                    name: "astronomypicoftheday"
                });
                return {...state, search_result: modified_array};
            }

            if(!res?.photos) return state;
            const { photos } = res;
            modified_array = photos.map(photo => {
                return {
                    id: photo.id,
                    date: photo.earth_date,
                    url: photo.img_src,
                    title: photo.camera.full_name,
                    name: photo.rover.name
                }
            })

            return {...state, search_result: modified_array};
        default: 
            return state;
    }
}