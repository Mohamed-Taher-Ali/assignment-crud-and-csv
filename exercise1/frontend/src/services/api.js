import axios from "axios";
import env from "../config/env.json";

export default axios.create({
    baseURL: env.API_URL,
});