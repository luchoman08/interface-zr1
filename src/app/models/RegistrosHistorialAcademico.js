import { RegistroHistorialAcademico } from "./RegistroHistorialAcademico.js";

export class RegistrosHistorialAcademico {

    promedio_actual_acumulado: string;
    /**
     * @var array Array de RegistroHistorialAcademico
     */
    registros: Array<RegistroHistorialAcademico>;

    codigo_estudiante: string;
    constructor() {
        this.registros = [];
    }
}