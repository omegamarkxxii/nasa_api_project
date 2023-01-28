export const MOCK_APOD_DATA = {
    date: "1999-10-19",
    explanation: "Active galaxy NGC 1275 is the central, dominant member of the large and relatively nearby Perseus Cluster of Galaxies. Wild-looking at visible wavelengths, the active galaxy is also a prodigious source of x-rays and radio emission. NGC 1275 accretes matter as entire galaxies fall into it, ultimately feeding a supermassive black hole at the galaxy's core. This color composite image made from Hubble Space Telescope data recorded during 2006. It highlights the resulting galactic debris and filaments of glowing gas, some up to 20,000 light-years long. The filaments persist in NGC 1275, even though the turmoil of galactic collisions should destroy them.  What keeps the filaments together? Observations indicate that the structures, pushed out from the galaxy's center by the black hole's activity, are held together by magnetic fields. Also known as Perseus A, NGC 1275 spans over 100,000 light years and lies about 230 million light years away.",
    hdurl: "https://apod.nasa.gov/apod/image/2301/ngc1275_heic0817a.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Active Galaxy NGC 1275",
    url: "https://apod.nasa.gov/apod/image/2301/ngc1275_heic0817a_1024.jpg"
};

export const MOCK_APOD_DATA_WITH_PARAMS = {
    date: "2022-10-17",
    explanation: "Why would x-ray rings appear around a gamma-ray burst?  The surprising answer has little to do with the explosion itself but rather with light reflected off areas of dust-laden gas in our own Milky Way Galaxy.  GRB 221009A was a tremendous explosion -- a very bright gamma-ray burst (GRB) that occurred far across the universe with radiation just arriving in our Solar System last week.  Since GRBs can also emit copious amounts of x-rays, a bright flash of x-rays arrived nearly simultaneously with the gamma-radiation. In this case, the X-rays also bounced off regions high in dust right here in our Milky Way Galaxy, creating the unusual reflections. The greater the angle between reflecting Milky Way dust and the GRB, the greater the radius of the X-ray rings, and, typically, the longer it takes for these light-echoes to arrive.",
    hdurl: "https://apod.nasa.gov/apod/image/2210/GrbRings_SwiftMiller_1458.jpg",
    media_type: "image",
    service_version: "v1",
    title: "X-Ray Rings Around a Gamma Ray Burst",
    url: "https://apod.nasa.gov/apod/image/2210/GrbRings_SwiftMiller_960.jpg"
}

export const MOCK_MARS_DATA_WITH_PARAMS = [
    {
        camera: {
            full_name: "Front Hazard Avoidance Camera",
            id: 20,
            name: "FHAZ",
            rover_id: 5
        },
        earth_date: "2012-10-09",
        id: 695,
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00063/opgs/edr/fcam/FRA_403075179EDR_F0050104FHAZ00311M_.JPG",
        rover: {
            id: 5,
            landing_date: "2012-08-06",
            launch_date: "2011-11-26",
            name: "Curiosity",
            status: "active"
        },
        sol: 63
    },
    {
        camera: {
            full_name: "Front Hazard Avoidance Camera",
            id: 20,
            name: "FHAZ",
            rover_id: 5
        },
        earth_date: "2012-10-09",
        id: 9578,
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00063/opgs/edr/fcam/FLA_403075179EDR_F0050104FHAZ00311M_.JPG",
        rover: {
            id: 5,
            landing_date: "2012-08-06",
            launch_date: "2011-11-26",
            name: "Curiosity",
            status: "active"
        },
        sol: 63
    },
    {
        camera: {
            full_name: "Front Hazard Avoidance Camera",
            id: 20,
            name: "FHAZ",
            rover_id: 5
        },
        earth_date: "2012-10-09",
        id: 1415,
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00063/opgs/edr/rcam/RRA_403075199EDR_F0050104RHAZ00309M_.JPG",
        rover: {
            id: 5,
            landing_date: "2012-08-06",
            launch_date: "2011-11-26",
            name: "Curiosity",
            status: "active"
        },
        sol: 63
    },
]