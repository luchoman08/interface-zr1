import { RegistroHistorialAcademico } from "./RegistroHistorialAcademico.mjs";

export class RegistrosHistorialAcademico {

    promedio_actual_acumulado: string;
    /**
     * @var array Array de RegistroHistorialAcademico
     */
    registros: Array<RegistroHistorialAcademico>;
    documento_estudiante: string;
    programa_estudiante: string;
    codigo_estudiante: string;
    constructor() {
        this.registros = [];
    }
}