export interface ConfigInterface {
    baseUrl: string;
}

export class Config implements ConfigInterface {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
}

