import { } from "../../sra/kernel.js";


 export class SRAHandler {
    getSRAApp() {
        return this.sraApp;
    } 
    constructor(sraApp) {
        this.sraApp = sraApp;
    }
 }