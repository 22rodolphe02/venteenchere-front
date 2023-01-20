import axios from "axios";
import { SPRING_URL_LOCAL} from "./env";

export const api = axios.create({
    baseURL: SPRING_URL_LOCAL
})