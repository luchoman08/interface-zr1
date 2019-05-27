import  axios from "axios";
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import type { AxiosPromise } from "axios";
import type { ConfigInterface } from "../config.mjs";
import https from "https";

export interface ApiServiceInterface {
    config: ConfigInterface;
    axiosInstance: AxiosInstance;
    axiosConfig: AxiosRequestConfig;
    get<T>(url: string, params?: Object): AxiosPromise<T>;
    post<T>(url: string, data: Object): AxiosPromise<T>;
}
export class ApiService implements ApiServiceInterface {
    config: ConfigInterface;
    axiosInstance: AxiosInstance;
    axiosConfig: AxiosRequestConfig;
    get<T>(url: string, params?: Object): AxiosPromise<T> {
        const _url = `${this.config.baseUrl}/${url}`;
        // $FlowFixMe
        return axios({
            ...this.axiosConfig,
            url: _url,
            method: 'get',
            params: params
        }).then(response => response.data);
    }
    post<T>(url: string, data: Object): AxiosPromise<T> {
        const _url = `${this.config.baseUrl}/${url}`;
        // $FlowFixMe
        return axios({
            ...this.axiosConfig,
            url: _url,
            method: 'post',
            data: data
        }).then(response => response.data)
    }
    constructor(config: ConfigInterface, axiosConfig: AxiosRequestConfig) {
        this.axiosConfig = axiosConfig;
        this.config = config;
    }
}