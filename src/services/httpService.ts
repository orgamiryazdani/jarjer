import axios, { AxiosInstance } from 'axios';

const apiKey: string = "551767d80af24661a2f91ef523510d3c";

const app: AxiosInstance = axios.create({
    baseURL: "https://api.spoonacular.com",
    headers: {
        "x-api-key": apiKey
    },
});

interface HttpClient {
    get: AxiosInstance['get'];
    post: AxiosInstance['post'];
    delete: AxiosInstance['delete'];
    put: AxiosInstance['put'];
    patch: AxiosInstance['patch'];
}

const http: HttpClient = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
};

export default http;