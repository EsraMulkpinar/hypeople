import axios from "axios"
export const instance = axios.create({
    baseURL: "https://api.thecompaniesapi.com/v1/companies",

})
