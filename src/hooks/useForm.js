import { useState, useEffect } from 'react';
import searchLabel from '../Constants/searchLabel';
import { checkDayForFeb, createDateStr } from '../util/util';
import createURL from '../services/createURL';
import getData from '../services/api';
import filterSearchResult from '../services/filterSearchResult';
import { regexMatchMarsURl } from '../util/util';

const label = searchLabel();

const useForm = (initialValue) => {
    const [formState, setFormState] = useState(initialValue);

    const setFormValue = (name, value) => {
        setFormState(prevState => {
            return {...prevState, [name]: value};
        })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormState(prevState => {
            return {...prevState, search_result: []};
        })
        const day = checkDayForFeb(formState.month, formState.day);
        const date = createDateStr(formState.year, formState.month, day);
        const url = createURL(formState.id, date);
        setFormState(prevState => {
            return {...prevState, url_path: url};
        })
    };

    useEffect(() => {
        if(!formState.url_path) return;
        console.log(formState.url_path);
        const targetID = regexMatchMarsURl(formState.url_path) ? "mars" : "apod";
        const controller = new AbortController();
        const signal = controller.signal;
    
        getData(formState.url_path, { signal })
            .then(res =>  res.json())
            .then(data => {
                const filteredData = filterSearchResult(targetID, data);
                setFormState(prevState => {
                    return {...prevState, search_result: filteredData};
                });
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    

    }, [formState.url_path]);
    
    useEffect(() => {
        setFormState(prevState => {
            return {...prevState, year: label[formState.id].years[0]};
        })
    }, [formState.id]);

    return {formState, setFormValue, handleFormSubmit};
}
 
export default useForm;