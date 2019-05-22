import { type StudentRepositoryInterface } from "../repositories/StudentRepository.js";
import {
    EntradaParaBusquedaEstudiante,
    ResultadoBusquedaEstudiante,
} from "../models/index.js";

import type { TipoBusquedaEstudianteType } from "../models/index.js";
export interface StudentServiceInterface {
    studentRepository: StudentRepositoryInterface;
    searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType): Promise<ResultadoBusquedaEstudiante []>;
}
export class StudentService implements StudentServiceInterface {
    studentRepository: StudentRepositoryInterface;
    searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType): Promise<ResultadoBusquedaEstudiante []> {
            return this.studentRepository.searchStudents(input, searchType);
        }
        constructor(studentRepository: StudentRepositoryInterface) {
            this.studentRepository = studentRepository;
        }
}