import  axios, { AxiosResponse } from "axios";
import { ConfigInterface } from "../config";
export interface ApiServiceInterface {
    config: ConfigInterface;
    get<T>(url: string): AxiosResponse<T>;
}
class ApiService implements ApiServiceInterface {
    get<T>(): AxiosResponse<T> {
        return axios.get()
    }
}