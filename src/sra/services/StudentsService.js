import { 
    EntradaParaBusquedaEstudiante,
    ResultadoBusquedaEstudiante
} from '../models/index.js';
import { getSearchPatron, extractStudentsResults } from "../lib/search-student.js";
import type { ApiServiceInterface } from './ApiService.js';
import type { TipoBusquedaEstudianteType } from '../../app/models/index.js';
export interface StudentsServiceInterface {
    apiService: ApiServiceInterface;
    searchStudent(
        input: EntradaParaBusquedaEstudiante,
        method?: TipoBusquedaEstudianteType ): Promise<ResultadoBusquedaEstudiante[]>;
}

export class StudentsService implements StudentsServiceInterface{
    apiService: ApiServiceInterface;
    async searchStudent(input: EntradaParaBusquedaEstudiante, method?: TipoBusquedaEstudianteType ): Promise<ResultadoBusquedaEstudiante[]> {
        let arr: Array<ResultadoBusquedaEstudiante> = [];
        let url = 'paquetes/herramientas/wincombo.php';
        const patron = getSearchPatron(input, method);
        const params = { opcion: 'estudianteConsulta', variableCalculada: 0, patron  }
        let response: string = await this.apiService.get(url, params);
        return extractStudentsResults(response);
    }
    constructor(apiService: ApiServiceInterface) {
        this.apiService = apiService;
    }
}