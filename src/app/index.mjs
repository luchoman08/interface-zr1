import { Kernel } from "./kernel.mjs";
import { htmlToAcademicRegistries } from '../sra/lib/academic-history';
import { TipoBusquedaEstudianteEnum, EntradaParaBusquedaEstudiante, RegistrosHistorialAcademico } from "./models/index.mjs";
import { document_numbers } from "./docs_to_download.mjs";
import fs from 'fs';
// $FlowFixMe
import  ObjectsToCsv from 'objects-to-csv';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
/*var appKernel = new Kernel('PHPSESSID=a8f2b2b4d0c0bbcf88d43483573f167b');
var inputBusqueda = new EntradaParaBusquedaEstudiante();
inputBusqueda.doc_number = "1085339336";
inputBusqueda.nombres = "DANIEL DAVID";
inputBusqueda.codigo_estudiante = "201010274";
inputBusqueda.apellidos = "CARDONA HENAO";
async function main() {
    const results = await appKernel.getStudentService().searchStudents(inputBusqueda, TipoBusquedaEstudianteEnum.codigoCompleto);
    console.log(results[0]);
    const studentResolution = appKernel.getStudentService().getStudentAcademicHistory(results[0])
    .then((res: RegistrosHistorialAcademico) => {
       res.registros.forEach(r => console.log(r.notas));
       //console.log(res);
    }).catch(err => console.log(err));
}*/
/*
async function main() {
    var appKernel = new Kernel('PHPSESSID=9d37bdbe8dd89949d92de32708054240');
    const registries = await appKernel.getStudentService().getStudentAcademicHistories(document_numbers.slice(0,1)) ;
    const date = new Date();
    fs.writeFile(
        `./historicos-academicos-json/results-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.json`,
        JSON.stringify(registries),
        function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        });
}
*/
function academic_history_object_to_rows(object: RegistrosHistorialAcademico) {
	const rows = [];
	const registro = {
        promedio_actual_acumulado: object.promedio_actual_acumulado,
        documento: object.documento,
        codigo_estudiante: object.codigo_estudiante,
        codigo_programa: object.codigo_programa,
        nombre_estudiante: object.nombre_estudiante
	};
	for(let semestre of object.registros) {
		let row = {...registro, ...semestre};
		for(let nota of semestre.notas) {
			row = {...row, ...nota};
			delete row.notas;
			rows.push(row);
		}
	}
	return rows;
}
/*
async function main() {
    const baseDir = './historicos-academicos/';
    const academicStoryFiles = fs.readdirSync(baseDir);
    var failed = 0;
    var processed = 0;
    var registries = [];
    academicStoryFiles.forEach(fileName => {
        const html = fs.readFileSync(`${baseDir}${fileName}`, 'utf8');
        try {
            let registry = htmlToAcademicRegistries(html);
            registries.push(registry);
            processed++;
            console.log(`Porcentaje terminado: ${processed*100/academicStoryFiles.length}`)
        } catch( err ){
            failed++;
        }
    })
    const date = new Date();
    fs.writeFile(
        `./historicos-academicos-json/results-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.json`,
        JSON.stringify(registries),
        function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        });
    console.log(failed);

}*/

function main() {
    const registriesContent = fs.readFileSync('./historicos-academicos-json/results-2019-4-29-16-19-54.json', 'utf8');
    console.log(registriesContent.length);
    const registries = JSON.parse(registriesContent);
    console.log(registries[1]);

    console.log(registries.length);
    var rows = [];
    registries.forEach(registry => {
        rows = rows.concat(academic_history_object_to_rows(registry));
    });
    console.log(rows[0]);
    new ObjectsToCsv(rows).toDisk('./csv-files/students.csv');
}
main();
