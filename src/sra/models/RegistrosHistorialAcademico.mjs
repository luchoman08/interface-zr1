import { RegistroHistorialAcademico } from "./RegistroHistorialAcademico.mjs";

export class RegistrosHistorialAcademico {

    promedio_actual_acumulado: string;
    /**
     * @var array Array de RegistroHistorialAcademico
     */
    registros: Array<RegistroHistorialAcademico>;
    documento: string;
    codigo_programa: string;
    codigo_estudiante: string;
    nombre_estudiante: string;
    constructor() {
        this.registros = [];
    }
}