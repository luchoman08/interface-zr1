import { type KernelInterface as SRAKernel } from "../../sra/kernel.js";

 export interface SRAHandlerInterface {
     sraApp: SRAKernel ;
     getSRAApp(): SRAKernel;
 }

 export class SRAHandler implements SRAHandlerInterface {
    sraApp: SRAKernel 
    getSRAApp(): SRAKernel {
        return this.sraApp;
    } 
    constructor(sraApp: SRAKernel) {
        this.sraApp = sraApp;
    }
 }