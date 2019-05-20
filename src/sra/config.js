export interface ConfigInterface {
    baseUrl: string;
}

class Config implements ConfigInterface {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
}

export const config = new Config('"https://swebse32.univalle.edu.co/sra/');