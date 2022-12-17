import { createList } from "../util";

const astronomyPicOfTheDay_years = '1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020';
const spirit_rover_years = '2004,2005,2006,2007,2008,2009,2010';
const opportunity_rover_years = '2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018';
const curiosity_rover_years = '2012,2013,2014,2015,2016,2017,2018,2019,2020';
const spirit_rover_sol = '2208';
const opportunity_rover_sol = '5111';
const curiosity_rover_sol = '3647';
const months = '1,2,3,4,5,6,7,8,9,10,11,12';
const days = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31';


const searchLabel = () => {
    const label = {
        "astronomy picture of the day": {
            years: createList(astronomyPicOfTheDay_years)
        },
        "spirit": {
            years: createList(spirit_rover_years),
            sol: spirit_rover_sol
        },
        "opportunity": {
            years: createList(opportunity_rover_years),
            sol: opportunity_rover_sol
        },
        "curiosity": {
            years: createList(curiosity_rover_years),
            sol: curiosity_rover_sol
        },
        months: createList(months),
        days: createList(days)
    }

    return label;
};

export default searchLabel;