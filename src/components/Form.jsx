import { useState, useEffect, useContext } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import CustomSelect from "./CustomSelect";
import searchLabel from "../Constants/searchLabel";
import TextFieldSelect from "./TextFieldSelect";
import handleFetch from "../Data/handleFetch";
import SearchResultContext from "../context/SearchResultContext";

const label = searchLabel();
const createQuery = (query) => {
    let reset_day = query.day;
    if(parseInt(query.month) === 2 && parseInt(query.day) > 28) {
        reset_day = 28;
    } 
    let date = `${query.year}-${query.month}-${reset_day}`;

    if(query.id === "astronomy picture of the day") {
        return `planetary/apod?date=${date}`;
    } else {
        return `mars-photos/api/v1/rovers/${query.id}/photos?earth_date=${date}&page=1`;
    }
}

const modifyMarsList = (list) => {
    const { photos } = list;
    const temp_arr = photos.map(photo => {
        return {
            id: photo.id,
            url: photo.img_src,
            title: `${photo.rover.name}   ${photo.camera.full_name}` 
        }
    });

    return temp_arr;
}

const Form = ({setImages}) => {
    // const setNum = useContext(SearchResultContext);
    const [urlPath, setUrlPath] = useState('');

    const [id ,setID] = useState("astronomy picture of the day");
    const handleID = (e) => {
        setID(e.target.value);
    }
    const [year, setYear] = useState(label[id].years[0]);
    const handleYear = (val) => {
        setYear(val);
    }

    const [month, setMonth] = useState(label.months[0]);
    const handleMonth = (e) => {
        setMonth(e.target.value);
    }

    const [day, setDay] = useState(label.days[0]);
    const handleDay = (e) => {
        setDay(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let path = createQuery({id, year, month, day});
        setUrlPath(path);
    }

    useEffect(() => {
        console.log('useeffect running');
        if(!urlPath) return;
        console.log(urlPath);
        const controller = new AbortController();
        const signal = controller.signal;
        handleFetch({url: urlPath, abortSignal: signal})
            .then(res => {
                console.log(res);
                if(id === "astronomy picture of the day") {
                    setImages([res]);
                    return;
                }

                const modifiedMarsList = modifyMarsList(res);
                setImages(modifiedMarsList);
            })
            .catch(err => {
                console.log(err);
            })

        return () => {
            console.log('aborted!!!!!!!');
            controller.abort();
        }
    }, [urlPath]);

    useEffect(() => {
        setYear(label[id].years[0]);
    }, [id]);

    return ( 
        <form onSubmit={handleSubmit}>
            <Stack>

                {/* target select field */}
                <Box>
                    <Typography variant="subtitle2">
                        Choose search target
                    </Typography>
                    <Box sx={{ mt: 1.5}}>
                        <CustomSelect 
                            select={{
                                title: "target",
                                InputLabel: "target-select-label",
                                id: "target-select",
                                labelID: "target-select-label",
                                label: "target",
                                list: ['astronomy picture of the day','spirit','opportunity', 'curiosity'],
                                width: 120
                            }}
                            value={id}
                            setValue={handleID}
                        />
                    </Box>
                </Box>

                {/* date select field */}
                <Box sx={{mt: 2}}>
                    <Box sx={{display: 'flex'}}>
                        {/* year */}
                        {id === "astronomy picture of the day" &&  
                            <TextFieldSelect 
                                list={[...label['astronomy picture of the day'].years]}
                                handleYear={handleYear}
                                width = '40%'
                            />
                        }
                        {id === "spirit" &&  
                            <TextFieldSelect 
                                list={[...label['spirit'].years]}
                                handleYear={handleYear}
                                width = '40%'
                            />
                        }
                        {id === "opportunity" &&  
                            <TextFieldSelect 
                                list={[...label['opportunity'].years]}
                                handleYear={handleYear}
                                width = '40%'
                            />
                        }
                        {id === "curiosity" &&  
                            <TextFieldSelect 
                                list={[...label['curiosity'].years]}
                                handleYear={handleYear}
                                width = '40%'
                            />
                        }

                        {/* month */}
                        <CustomSelect 
                            select={{
                                title: "month",
                                InputLabel: "month-select-label",
                                id: "month-select",
                                labelID: "month-select-label",
                                label: "month",
                                list: [...label["months"]],
                                width: "30%"
                            }}
                            value={month}
                            setValue={handleMonth}
                        />

                        {/* day */}
                        <CustomSelect 
                            select={{
                                title: "day",
                                InputLabel: "day-select-label",
                                id: "day-select",
                                labelID: "day-select-label",
                                label: "day",
                                list: [...label["days"]],
                                width: "30%"
                            }}
                            value={day}
                            setValue={handleDay}
                        />
                    </Box>
                </Box>

                {/* search button */}
                <Box textAlign="center" sx={{mt: 4}}>
                    <Button type="submit" sx={{width: '70%'}} size="medium" variant="outlined" color="primary">Search</Button>
                </Box>

            </Stack>
        </form>
    );
}
 
export default Form;