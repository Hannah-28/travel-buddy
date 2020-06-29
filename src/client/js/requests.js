import { json } from "body-parser"

async function getCoordinates(location) {

    const postData = await fetch("http://localhost:8000/postLocation", {
        method: 'Post',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: location })
    });
}

export {
    getCoordinates
}