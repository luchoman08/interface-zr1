import { type StudentsServiceInterface, StudentsService } from "./services/StudentsService.js";
import { Config } from "./config.js";
import type { ConfigInterface } from "./config.js";
import { type ApiServiceInterface, ApiService } from "./services/ApiService.js";
import type { AxiosRequestConfig, AxiosInstance } from "axios";

export interface KernelInterface {
    studentService: StudentsServiceInterface;
    config: ConfigInterface;
    axiosConfig: AxiosRequestConfig;
    apiService: ApiServiceInterface;
    getStudentService(): StudentsServiceInterface;
}

export class Kernel implements KernelInterface {
    studentService: StudentsServiceInterface;
    config: ConfigInterface;
    axiosConfig: AxiosRequestConfig;
    apiService: ApiServiceInterface;
    getStudentService(): StudentsServiceInterface {
        return this.studentService;
    }
    constructor(cookie: string, baseUrl?: string) {
        this.config = new Config(baseUrl? baseUrl: 'https://swebse32.univalle.edu.co/sra/');
        this.axiosConfig = {headers: {
            Cookie: cookie
        }
        };
        this.apiService = new ApiService(this.config, this.axiosConfig);
        this.studentService = new StudentsService(this.apiService);
    }
}