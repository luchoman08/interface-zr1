import { type StudentRepositoryInterface } from "../repositories/StudentRepository.mjs";

import {
    EntradaParaBusquedaEstudiante,
    Estudiante,
    TipoBusquedaEstudianteEnum,
    RegistrosHistorialAcademico
} from "../models/index.mjs";
import type { AxiosPromise } from "axios"
import type { TipoBusquedaEstudianteType } from "../models/index.mjs";
export interface StudentServiceInterface {
    studentRepository: StudentRepositoryInterface;
    getStudentResolution(student: Estudiante):  Promise<string>;
    getStudentAcademicHistory(student: Estudiante): Promise <RegistrosHistorialAcademico>;
    getStudentAcademicHistories(docNumbers: Array<number>): Promise<RegistrosHistorialAcademico[]>;
    searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType): Promise<Estudiante []>;
}
export class StudentService implements StudentServiceInterface {
    studentRepository: StudentRepositoryInterface;
    searchStudents(
        input: EntradaParaBusquedaEstudiante,
        searchType?: TipoBusquedaEstudianteType): Promise<Estudiante []> {
            return this.studentRepository.searchStudents(input, searchType);
        }
        constructor(studentRepository: StudentRepositoryInterface) {
            this.studentRepository = studentRepository;
        }
    getStudentResolution(student: Estudiante):  Promise<string> {
        return this.studentRepository.getStudentResolution(student);
    }
    getStudentAcademicHistory(student: Estudiante): Promise <RegistrosHistorialAcademico> {
        return this.studentRepository.getStudentAcademicHistory(student);
    }
    async getStudentAcademicHistories(docNumbers: Array<number>): Promise<RegistrosHistorialAcademico[]> {
        const registros: Array<RegistrosHistorialAcademico> = [];
        var students: Estudiante[] = [];
        for(const [i, docNumber]: any of docNumbers.entries()) {
            let entradaParaBusquedaEstudiante = new EntradaParaBusquedaEstudiante();
            entradaParaBusquedaEstudiante.doc_number = docNumber;
            console.log(`Buscando al usuario con numero documento  ${docNumber}, porcentaje: ${i * 100 / docNumbers.length }%`);
            let studentsResults = await this.searchStudents(entradaParaBusquedaEstudiante,  TipoBusquedaEstudianteEnum.documento)
            students = [...studentsResults, ...students];
        }
        for(const [i, student] of students.entries()){
            console.log(`Porcentaje historico academico: ${i * 100 / students.length }%`);
            registros.push(await this.getStudentAcademicHistory(student));
        }
        return registros;
    }

}

