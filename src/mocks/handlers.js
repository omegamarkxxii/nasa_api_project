import { rest } from "msw";

const URL ="https://api.nasa.gov/planetary/apod";

export const handlers = [
    rest.get(URL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                name: "pudge"
            })
        )
    })
]