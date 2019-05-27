import { 
    EntradaParaBusquedaEstudiante,
    Estudiante
} from '../models/index.mjs';

import { ConfigInterface } from '../config.mjs';

export interface StudentsRepositoryInterface {
    searchStudent(input: EntradaParaBusquedaEstudiante): Estudiante[];
}

class StudentsRepository implements StudentsRepositoryInterface {
    searchStudent(input: EntradaParaBusquedaEstudiante): Estudiante[] {
        let arr: Array<Estudiante> = [];
        return arr;
    }
}