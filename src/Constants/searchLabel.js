import { createList } from "../util";

const astronomyPicOfTheDay_years = '1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022';
const spirit_rover_years = '2004,2005,2006,2007,2008,2009,2010';
const opportunity_rover_years = '2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018';
const curiosity_rover_years = '2012,2013,2014,2015,2016,2017,2018,2019,2020';
const months = '1,2,3,4,5,6,7,8,9,10,11,12';
const days = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31';


const searchLabel = () => {
    const label = {
        "astronomypicoftheday": {
            years: createList(astronomyPicOfTheDay_years)
        },
        "spirit": {
            years: createList(spirit_rover_years)
        },
        "opportunity": {
            years: createList(opportunity_rover_years)
        },
        "curiosity": {
            years: createList(curiosity_rover_years)
        },
        months: createList(months),
        days: createList(days)
    }

    return label;
};

export default searchLabel;