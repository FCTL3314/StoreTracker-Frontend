import {BASE_API_URL} from "@/constants";
import axios from "axios";

const instance = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true,
    headers: {
        accept: "application/json",
    }
});

export default instance;
