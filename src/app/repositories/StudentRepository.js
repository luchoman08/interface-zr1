import { EntradaParaBusquedaEstudiante, ResultadoBusquedaEstudiante } from "../models/index.js";
import type { SRAHandlerInterface } from "../infraestructures/SRAHandler.js";
import type { TipoBusquedaEstudianteType } from "../models/index.js";
import { 
    ResultadoBusquedaEstudiante as SRAResultadoBusquedaEstudiante,
    EntradaParaBusquedaEstudiante as SRAEntradaParaBusquedaEstudiante
} from '../../sra/models/index.js';
 function sraResultadosEstudianteToResultadosEstudiante(
     result: SRAResultadoBusquedaEstudiante
     ): ResultadoBusquedaEstudiante {
     var convertedResult : any = {};
     Object.assign(convertedResult, result); // dummy conversion while the properties are the same
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
    searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType): Promise<ResultadoBusquedaEstudiante []>;
}


export class StudentRepository implements StudentRepositoryInterface{
    sraHandler: SRAHandlerInterface;
    async searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType
        ): Promise<ResultadoBusquedaEstudiante []> {
            const sraInput = inputSearchStudentToSRAinputSearchStudent(input);
            const sraResults = await this.sraHandler.getSRAApp().getStudentService().searchStudent(sraInput, searchType);
            return sraResults.map<ResultadoBusquedaEstudiante>(sraResultadosEstudianteToResultadosEstudiante);
    }
    constructor(sraHandler: SRAHandlerInterface){
        this.sraHandler = sraHandler;
    }
}