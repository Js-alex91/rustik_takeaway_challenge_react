import axios from "axios";
import { keys } from "../keys";

export const moviesAPI = axios.create({
    baseURL: keys.baseURL
})

