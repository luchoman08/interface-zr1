import {
    ResultadoBusquedaEstudiante,
    EntradaParaBusquedaEstudiante,
    TipoBusquedaEstudianteEnum
} from "../models/index.js";
import { printElement } from "./cheerio.js";
import cheerio  from "cheerio";

function extractStudentsResultTrs($) {
    return $('table').first().find('tbody > tr[bgcolor="#CCCCCC"], tr[bgcolor="#FFFFFF"]')
}
function extractStudentResultFromTr(el) {
    
    const resultado = new ResultadoBusquedaEstudiante();
    const $ = cheerio.load(el);
    const aLinks = $('td > a');
    resultado.apellidos = aLinks.get(4).firstChild.data;
    resultado.codigo_persona = aLinks.get(0).firstChild.data;
    resultado.codigo_estudiante = aLinks.get(1).firstChild.data;
    const tipoDocumento_documento = aLinks.get(2).firstChild.data.split(' ');
    resultado.tipo_documento = tipoDocumento_documento[0];
    resultado.documento = tipoDocumento_documento[1];
    resultado.nombre = aLinks.get(3).firstChild.data;
    const programa_sede_jornada = aLinks.get(5).firstChild.data.split('-');
    resultado.programa = programa_sede_jornada[0];
    resultado.sede = programa_sede_jornada[1];
    resultado.jornada = programa_sede_jornada[2];
    return resultado;
}
/**
 * Seleccione el estudiante del cuál desea ver la Carpeta Académica. Puede hacerlo de tres (3) formas:
   Digite el código completo del estudiante (incluyendo la centuria, es decir con los nueve dígitos), y luego haga la búsqueda del mismo, haciendo clic sobre el botón . Seleccione el estudiante de interés; luego haga clic en el botón: Consultar Estudiante
   Digite los apellidos del estudiante, y luego haga la búsqueda del mismo, haciendo clic sobre el botón . Seleccione el estudiante de interés; luego haga clic en el botón: Consultar Estudiante
   Digite los apellidos del estudiante y el nombre, usando entre ellos un guión ( - ), Ejemplo: Quintero-Carlos , y luego haga la búsqueda del mismo, haciendo clic sobre el botón . Seleccione el estudiante de interés; luego haga clic en el botón: Consultar Estudiante
 */
export function getSearchPatron(input, method )  {
    if(method === undefined) {
        method = TipoBusquedaEstudianteEnum.documento;
    }
    switch (method) {
        case TipoBusquedaEstudianteEnum.apellidos: 
        return input.apellidos;
        case TipoBusquedaEstudianteEnum.nombres:
        return input.apellidos;
        case TipoBusquedaEstudianteEnum.apellidos_nombres:
        return `${input.apellidos}-${input.nombres}`;
        case TipoBusquedaEstudianteEnum.documento:
        return input.doc_number;
        default: 
        return '';
    }
}
export function extractStudentsResults(html /** string */) {
    var results = [];
    var $ = cheerio.load(html);
    const trs = extractStudentsResultTrs($);
    trs.map((index, el) => {
        results.push(extractStudentResultFromTr(el));
    }
    );
    console.log(results);
    return results;
}