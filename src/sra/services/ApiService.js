import  axios from "axios";
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import type { AxiosPromise } from "axios";
import type { ConfigInterface } from "../config.js";
import https from "https";

export interface ApiServiceInterface {
    config: ConfigInterface;
    axiosInstance: AxiosInstance;
    axiosConfig: AxiosRequestConfig;
    get<T>(url: string, params?: Object): AxiosPromise<T>;
}
export class ApiService implements ApiServiceInterface {
    config: ConfigInterface;
    axiosInstance: AxiosInstance;
    axiosConfig: AxiosRequestConfig;
    get<T>(url: string, params?: Object): AxiosPromise<T> {
        const _url = `${this.config.baseUrl}/${url}`;
        const agent = new https.Agent({  
            rejectUnauthorized: false
          });
        const config: AxiosRequestConfig = {...this.axiosConfig, params, url: _url, method:'get', httpsAgent: agent};
        return axios(_url, config )
        .then(response => console.log('response fetched', response))
        .catch(err => console.log('error catched', err));
    }
    constructor(config: ConfigInterface, axiosConfig: AxiosRequestConfig) {
        this.axiosConfig = axiosConfig;
        this.config = config;
    }
}