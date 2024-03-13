import http from "./httpService";

export function getCategoryApi(qs: string) {
    return http.get(`/food/menuItems/search?${qs}`).then(({ data }) => data);
}