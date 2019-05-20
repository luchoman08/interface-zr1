import { 
    EntradaParaBusquedaEstudiante,
    ResultadoBusquedaEstudiante
} from '../models/index.js';
import { ConfigInterface } from '../config.js';
export interface StudentsRepositoryInterface {
    searchStudent(input: EntradaParaBusquedaEstudiante): ResultadoBusquedaEstudiante[];
    
}

class StudentsRepository implements StudentsRepositoryInterface {
    searchStudent(input: EntradaParaBusquedaEstudiante): ResultadoBusquedaEstudiante[] {
        let arr: Array<ResultadoBusquedaEstudiante> = [];
        return arr;
    }
}