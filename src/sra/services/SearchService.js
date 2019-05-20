import { 
    EntradaParaBusquedaEstudiante,
    ResultadoBusquedaEstudiante
} from '../models/index.js';
export interface SearchServiceInterface {
    searchStudent(input: EntradaParaBusquedaEstudiante): ResultadoBusquedaEstudiante[];
}

class SearchService implements SearchServiceInterface{
    searchStudent(input: EntradaParaBusquedaEstudiante): ResultadoBusquedaEstudiante[] {
        let arr: Array<ResultadoBusquedaEstudiante> = [];
        return arr;
    }
}