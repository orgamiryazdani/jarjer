import axios from "axios";

const apiKey: string = "551767d80af24661a2f91ef523510d3c";

const app = axios.create({
    baseURL: "https://api.spoonacular.com",
    headers: {
        "x-api-key": apiKey
    }
});

const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}

export default http;