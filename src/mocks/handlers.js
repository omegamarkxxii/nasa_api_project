import { rest } from "msw";
import { MOCK_APOD_DATA, MOCK_APOD_DATA_WITH_PARAMS } from "./mockData";

export const handlers = [
    rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
        const date_value = req.url.searchParams.get("date") || null;

        if(date_value) {
            return res(
                ctx.status(200),
                ctx.json(MOCK_APOD_DATA_WITH_PARAMS)
            )
        }
            
        return res(
            ctx.status(200),
            ctx.json(MOCK_APOD_DATA)
        )
    })
]