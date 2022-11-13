import curiosityImg from '../images/curiosity.jpg';
import spiritImg from '../images/spirit.jpg';
import opportunityImg from '../images/opportunity.jpg';

export const Spirit = {
    id: 7,
    name: "Spirit",
    image: spiritImg,
    landing_date: "2004-01-04",
    launch_date: "2003-06-10",
    status: "complete",
    max_sol: 2208,
    max_date: "2010-03-21",
    total_photos: 124550,
    cameras: [
        {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera"
        },
        {
            name: "NAVCAM",
            full_name: "Navigation Camera"
        },
        {
            name: "PANCAM",
            full_name: "Panoramic Camera"
        },
        {
            name: "MINITES",
            full_name: "Miniature Thermal Emission Spectrometer (Mini-TES)"
        },
        {
            name: "ENTRY",
            full_name: "Entry, Descent, and Landing Camera"
        },
        {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera"
        }
    ],
    detail: "Spirit, also known as MER-A (Mars Exploration Rover - A) or MER-2, is a Mars robotic rover, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols or 3.3 Martian years (2249 days; 6 years, 77 days). It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover got stuck in a 'sand trap' in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was on March 22, 2010."
};

export const Opportunity = {
    id: 6,
    name: "Opportunity",
    image: opportunityImg,
    landing_date: "2004-01-25",
    launch_date: "2003-07-07",
    status: "complete",
    max_sol: 5111,
    max_date: "2018-06-11",
    total_photos: 198439,
    cameras: [
        {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera"
        },
        {
            name: "NAVCAM",
            full_name: "Navigation Camera"
        },
        {
            name: "PANCAM",
            full_name: "Panoramic Camera"
        },
        {
            name: "MINITES",
            full_name: "Miniature Thermal Emission Spectrometer (Mini-TES)"
        },
        {
            name: "ENTRY",
            full_name: "Entry, Descent, and Landing Camera"
        },
        {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera"
        }
    ],
    detail: "Opportunity, also known as MER-B (Mars Exploration Rover - B) or MER-1, is a robotic rover that was active on Mars from 2004 until 2018. Opportunity was operational on Mars for 5111 sols (14 years, 138 days). Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin, Spirit (MER-A), touched down on the other side of the planet. With a planned 90-sol duration of activity (slightly less than 92.5 Earth days), Spirit functioned until it got stuck in 2009 and ceased communications in 2010, while Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power. This careful operation allowed Opportunity to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 47 days (in Earth time). By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles)."
};

export const Curiosity = {
    id: 5,
    name: "Curiosity",
    image: curiosityImg,
    landing_date: "2012-08-06",
    launch_date: "2011-11-26",
    status: "active",
    max_sol: 3647,
    max_date: "2022-11-09",
    total_photos: 608651,
    cameras: [
        {
            name: "FHAZ",
            full_name: "Front Hazard Avoidance Camera"
        },
        {
            name: "NAVCAM",
            full_name: "Navigation Camera"
        },
        {
            name: "MAST",
            full_name: "Mast Camera"
        },
        {
            name: "CHEMCAM",
            full_name: "Chemistry and Camera Complex"
        },
        {
            name: "MAHLI",
            full_name: "Mars Hand Lens Imager"
        },
        {
            name: "MARDI",
            full_name: "Mars Descent Imager"
        },
        {
            name: "RHAZ",
            full_name: "Rear Hazard Avoidance Camera"
        }
    ],
    detail: "Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey. Mission goals include an investigation of the Martian climate and geology, assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life (including investigation of the role of water), and planetary habitability studies in preparation for human exploration."
};