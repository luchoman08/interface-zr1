import { Kernel } from "./kernel.mjs";
import { TipoBusquedaEstudianteEnum, EntradaParaBusquedaEstudiante, RegistrosHistorialAcademico } from "./models/index.mjs";
import { document_numbers } from "./docs_to_download.mjs";
import fs from 'fs';
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

async function main() {
    var appKernel = new Kernel('PHPSESSID=68b290b0a35e728279d8ab4a73c9b7ec');
    const registries = await appKernel.getStudentService().getStudentAcademicHistories(document_numbers.slice(610)) ;
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
main();
