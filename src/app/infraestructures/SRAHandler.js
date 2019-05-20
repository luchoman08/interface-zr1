import { RegistroHistorialAcademico } from "../../sra/models/RegistroHistorialAcademico.js";
function r(){

}
 export interface SRAHandler {
     obtenerHistorialAcademico(doc: string): RegistroHistorialAcademico;
     buscarResultados(nombres: string, apellidos: string): any/** To do Resultados */;
 }
