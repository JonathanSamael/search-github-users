import { baseUrl, eventsQuantity } from "../variables.js";


async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    // console.log(await response.json());
    return await response.json()
}

export { getEvents }