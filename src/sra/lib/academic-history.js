import { RegistrosHistorialAcademico } from "../models/RegistrosHistorialAcademico.js";
import { RegistroHistorialAcademico } from "../models/RegistroHistorialAcademico.js";
import cheerio  from "cheerio";
import { RegistroNota } from "../models/RegistroNota.js";
function getPeriodTables($: CheerioStatic): Cheerio {
    return $('table[width="95%"]table[cellspacing="1"]table[align="center"]');
}

function extractGradeRegistry(el: CheerioElement) : any {
    if(! (el && el.childNodes) ) {
        return
    } else {
        const grade = new RegistroNota();
        const codigo = el.childNodes[1].firstChild.data;
        if(codigo) {
            grade.codigo_materia = codigo.trim();
        }
        const grupo = el.childNodes[2].firstChild.data;
        if (grupo) {
            grade.grupo = grupo.trim();
        }
        const nombre = el.childNodes[3].firstChild.data;
        const nota = el.childNodes[5].firstChild.data;
        grade.nota = nota? nota.trim(): '';
        const fechaCancela = el.childNodes[10].firstChild.data;
        const fechaReactiva = el.childNodes[11].firstChild.data;
        grade.nombre_materia = nombre? nombre.trim(): '';
      
        grade.fecha_reactivacion_materia = fechaReactiva? fechaReactiva.trim(): '';
        grade.fecha_cancelacion_materia = fechaCancela? fechaCancela.trim() : '';
        grade.cancela_materia = grade.fecha_cancelacion_materia !== "" && grade.fecha_reactivacion_materia == "";
        return grade;
    }
}

function printElement(el: CheerioElement) {
    const $ : any = cheerio.load(el);
    console.log($.html());
}

function extractPeriodTrGrades($: CheerioStatic): Array<Object> {
    const trs = $('tr');
    var elements: Array<CheerioElement> = [];
    trs.each((index, tr) => {
       
        if(tr && tr.childNodes[1] && tr.children.length === 12 ) {
            const codigoMateria = tr.childNodes[1].firstChild.data;
            if ( codigoMateria && codigoMateria.trim() !== "CÓDIGO") {
                elements.push(tr);
            }
        }
    });
    return elements;
}
function extractGrades(period: CheerioStatic): Array<RegistroNota> {
    const grades: Array<RegistroNota> = [];
    const tdGrades = extractPeriodTrGrades(period);
    for(let tdGrade of tdGrades) {
        let grade = extractGradeRegistry(tdGrade);
        grades.push(grade);
    }
    return grades;
}
function extractPeriodNameFromTable($: CheerioStatic): string {
    return $('td').first().text().trim();
}
function isLowAcademicPerformancePeriod($: CheerioStatic): bool {
    const title = "Bajos Rendimientos";
    const inputs = $('form').find(`input[title*="${title}"]`);
    return inputs.length>0
}

function hasStimulusPeriod($: CheerioStatic): bool {
    const title = "DetalleEst";
    const inputs = $('form').find(`input[title*="${title}"]`);
    return inputs.length>0
}
function getPeriodAverage($: CheerioStatic): string {
    const tdGrade = $('tr').find('td').find('font').last();
    return tdGrade.text();
}
function extractCancelPeriodNameFromTable($: CheerioStatic): boolean {
    return false;
}
function isCanceledSemester($: CheerioStatic): bool {
    let isCanceled = false;
    $('td').each((index, td) => {
        const tdData = (td.firstChild? td.firstChild.data: '');
        if(tdData && tdData.trim() === "Fecha Cancelación Semestre:") {
            isCanceled = true;
        }
    });
    return isCanceled;
}
function getCancelPeriodDate($: CheerioStatic): string {
   
    let cancelDate = $('tr').get(1).childNodes[4];
    if (!cancelDate || !cancelDate.childNodes[0]){
        return '';
    }
    return cancelDate.childNodes[0].data;
   
}
function periodTableToAcademicRegistry(el: CheerioElement): RegistroHistorialAcademico {
    const $ = cheerio.load(el);
    const registro = new RegistroHistorialAcademico();
    registro.nombre_periodo = extractPeriodNameFromTable($);
    registro.bajo_academico = isLowAcademicPerformancePeriod($);
    registro.estimulo_academico = hasStimulusPeriod($);
    const grades = extractGrades($);
    registro.promedio = getPeriodAverage($);
    registro.notas = grades;
    registro.cancelo_semestre = isCanceledSemester($); 
    let cancelperiodDate =  getCancelPeriodDate($);
    registro.fecha_cacelacion_semestre = cancelperiodDate;
    return registro;
}

function getTotalAverage($: CheerioStatic): string {
    return $('.error').find('font').find('b').text();
}

export  function htmlToAcademicRegistries(html: any): RegistrosHistorialAcademico {
    const historialAcademico = new RegistrosHistorialAcademico();
    var $ = cheerio.load(html);
    const periodTables = getPeriodTables($);
    historialAcademico.promedio_actual_acumulado = getTotalAverage($);
   
    periodTables.each((key: number, table)=> {
        let registro = periodTableToAcademicRegistry(table);
        historialAcademico.registros.push(registro);
    });
   console.log(historialAcademico.registros[2].notas);
    return historialAcademico;
}