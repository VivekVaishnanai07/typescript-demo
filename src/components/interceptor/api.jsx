import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dummyapi.io/data/v1',
    headers: {
        "content-type": "application/json; charset=UTF-8",
        "app-id": "627392069acddf4d5d7796f9"
    }
})