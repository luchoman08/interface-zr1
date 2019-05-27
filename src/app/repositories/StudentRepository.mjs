import {
    EntradaParaBusquedaEstudiante,
    Estudiante,
    RegistrosHistorialAcademico
} from "../models/index.mjs";
import type { SRAHandlerInterface } from "../infraestructures/SRAHandler.mjs";
import type { TipoBusquedaEstudianteType } from "../models/index.mjs";
import { 
    Estudiante as SRAEstudiante,
    EntradaParaBusquedaEstudiante as SRAEntradaParaBusquedaEstudiante,
    RegistrosHistorialAcademico as SRARegistrosHistorialAcademico
} from '../../sra/models/index.mjs';
import type { AxiosPromise } from "axios";
 function sraResultadosEstudianteToResultadosEstudiante(
     result: SRAEstudiante
     ): Estudiante {
     var convertedResult : any = {};
     Object.assign(convertedResult, result); // dummy conversion while the properties are the same
     return convertedResult;
 }
 function studentToSRAStudent(e: Estudiante): SRAEstudiante {
    var convertedResult : any = {};
    Object.assign(convertedResult, e); // dummy conversion while the properties are the same
    return convertedResult;
 }

 function sraStudentToStudent(e: SRAEstudiante): Estudiante  {
    var convertedResult : any = {};
    Object.assign(convertedResult, e); // dummy conversion while the properties are the same
    return convertedResult;
 }
 function sraAcademicHistoryToAcademicHistory(
    input: SRARegistrosHistorialAcademico
    ): RegistrosHistorialAcademico {
    var convertedResult : any = {};
    Object.assign(convertedResult, input); // dummy conversion while the properties are the same
    return convertedResult;
}

 function inputSearchStudentToSRAinputSearchStudent(
    input: EntradaParaBusquedaEstudiante
    ): SRAEntradaParaBusquedaEstudiante {
    var convertedResult : any = {};
    Object.assign(convertedResult, input); // dummy conversion while the properties are the same
    return convertedResult;
}
export interface StudentRepositoryInterface {
    sraHandler: SRAHandlerInterface;
    getStudentAcademicHistory(student: Estudiante): Promise <RegistrosHistorialAcademico>;
    searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType): Promise<Estudiante []>;
    getStudentResolution(student: Estudiante):  Promise<string>;
}


export class StudentRepository implements StudentRepositoryInterface{
    sraHandler: SRAHandlerInterface;
    async getStudentResolution(student: Estudiante): Promise<string> {
        const sraStudent = studentToSRAStudent(student);
        const sraStudentResolution: string = await  this.sraHandler.getSRAApp().getStudentService().getStudentResolution(sraStudent);
        return sraStudentResolution;
    }
    async getStudentAcademicHistory(student: Estudiante): Promise <RegistrosHistorialAcademico> {
        const sraStudent = studentToSRAStudent(student);
        const sraAcademicRegistries = await this.sraHandler.getSRAApp().getStudentService().getStudentAcademicHistory(sraStudent);
        return sraAcademicHistoryToAcademicHistory(sraAcademicRegistries);
    }
    async searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType
        ): Promise<Estudiante []> {
            const sraInput = inputSearchStudentToSRAinputSearchStudent(input);
            const sraResults = await this.sraHandler.getSRAApp().getStudentService().searchStudent(sraInput, searchType);
            //console.log(sraResults);
            return sraResults.map(sraResultadosEstudianteToResultadosEstudiante);
    }
    constructor(sraHandler: SRAHandlerInterface){
        this.sraHandler = sraHandler;
    }
}