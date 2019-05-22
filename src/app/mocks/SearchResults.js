export const HTML_SEARCH_STUDENTS_MULTIPLE_RESULTS = `<html><head></head><body onload="if (!opener) window.close()"><script src="/sra/paquetes/herramientas/funciones.js" language="JavaScript"></script><link rel="stylesheet" href="/sra/paquetes/gui/temas/univalleRojoAmarillo/estilos.css" type="text/css"> <script language="JavaScript"><!-- function pasaparam(table_id, table_nombre, variable){var campo_b=variable; campo_b++; opener.document.forma.elements[variable].value=table_id; opener.document.forma.elements[campo_b].value=table_nombre; opener.document.forma.elements[campo_b].focus(); window.close();}// Esta función sirve para tablas con llave primaria de 2 atributos function pasaparam_tableComp(table_id, table_id_two, table_nombre, variable ){var campo_b=variable; campo_b++; campo_b1=campo_b+1; opener.document.forma.elements[variable].value=table_id; opener.document.forma.elements[campo_b].value=table_id_two; opener.document.forma.elements[campo_b1].value=table_nombre; opener.document.forma.elements[campo_b1].focus(); window.close();}// Esta función sirve para tablas con llave primaria de 3 atributos function pasaparam3(id_1, id_2, id_3, descripcion, posicion_real ){var posicion=posicion_real-2; // var posicion_0=posicion-2; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}function pasaparam3Despues(id_1, id_2, id_3, descripcion, posicion ){// var posicion=posicion_real-2; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=descripcion; posicion++; posicion++; opener.document.forma.elements[posicion].value=id_2; posicion++; opener.document.forma.elements[posicion].value=id_3; opener.document.forma.elements[posicion].focus(); window.close();}//Crhistian Muñoz 2007-03-12 Originado para obtener informacion de case empresa, que ya estaba digitada en el maestro y ponerla en el formulario de inscripcion respectivo para no volver a digitarla //Utilizado en el formulario fm_AspirantepregradoAdmisionesDigitador_admonCORTO.php function pasaparam5Despues(id_1, id_2, id_3, id_4, id_5,descripcion, posicion ){// var posicion=posicion_real-2; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=descripcion; posicion++; posicion++; opener.document.forma.elements[posicion].value=id_2; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=id_4; posicion++; opener.document.forma.elements[posicion].value=id_5; opener.document.forma.elements[posicion].focus(); window.close();}//Crhistian Munozfunction pasaparam2Despues(id_1, id_2, descripcion, posicion ){// var posicion=posicion_real-2; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=descripcion; posicion++; posicion++; opener.document.forma.elements[posicion].value=id_2; opener.document.forma.elements[posicion].focus(); window.close();}//Crhistian Munoz para el wincombo utilizado en la solicitud de certificados function pasaparam7Despues(id_1, id_2, id_3, id_4, id_5, id_6, id_7, id_8, id_9, id_10, id_11, id_12,id_13,descripcion, posicion ){opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=descripcion; posicion++; posicion++; opener.document.forma.elements[posicion].value=id_2; //opener.document.forma.elements[posicion].value=id_1 ; //posicion++; //opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=id_4; posicion++; opener.document.forma.elements[posicion].value=id_5; posicion++; opener.document.forma.elements[posicion].value=id_6; posicion++; opener.document.forma.elements[posicion].value=id_7; posicion++; opener.document.forma.elements[posicion].value=id_8; posicion++; opener.document.forma.elements[posicion].value=id_9; posicion++; opener.document.forma.elements[posicion].value=id_10; posicion++; opener.document.forma.elements[posicion].value=id_11; posicion++; opener.document.forma.elements[posicion].value=id_12; posicion++; opener.document.forma.elements[posicion].value=id_13; opener.document.forma.elements[posicion].focus(); window.close();}// Esta función sirve para tablas con llave primaria de 6 atributos function pasaparam6(id_1, id_2, id_3, id_4, id_5, id_6, descripcion, posicion_real ){var posicion=posicion_real-5; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=id_4; posicion++; opener.document.forma.elements[posicion].value=id_5; posicion++; opener.document.forma.elements[posicion].value=id_6; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}/** * Permite ingresar el codigo del programa academico en los reportes de foxPro * Coloca los datos de codigo del estudiante, codigo del plan, sede y jornada en el formulario * @author John R.Q. * @since * @modiffied 2007-20-03 * Formularios que lo usan: Consultar Carpeta=> Generar Archivo Certificado Visual Fox Pro */ function pasaparamFox(id_0, id_1, id_2, id_3, id_4, descripcion, posicion ){posicion--;opener.document.forma.elements[posicion].value=id_1+'-'+id_2; posicion--;opener.document.forma.elements[posicion].value=id_4; posicion--;opener.document.forma.elements[posicion].value=id_3; posicion--;opener.document.forma.elements[posicion].value=id_2; posicion--;opener.document.forma.elements[posicion].value=id_1; posicion--;opener.document.forma.elements[posicion].value=id_0; window.close();}// Esta función sirve para pasar 8 parametros cuando se hace necesario function pasaparam8(id_1, id_2, id_3, id_4, id_5, id_6, id_7,id_8, descripcion, observacion, posicion_real ){var posicion=posicion_real-7; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=id_4; posicion++; opener.document.forma.elements[posicion].value=id_5; posicion++; opener.document.forma.elements[posicion].value=id_6; posicion++; opener.document.forma.elements[posicion].value=id_7; posicion++; opener.document.forma.elements[posicion].value=id_8; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.est_observacion.value=observacion; opener.document.forma.elements[posicion].focus(); window.close();}// Esta función sirve para tablas con llave primaria de 7 atributos function pasaparam7(id_1, id_2, id_3, id_4, id_5, id_6, id_7, descripcion, posicion_real ){var posicion=posicion_real-6; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=id_4; posicion++; opener.document.forma.elements[posicion].value=id_5; posicion++; opener.document.forma.elements[posicion].value=id_6; posicion++; opener.document.forma.elements[posicion].value=id_7; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}// Esta función sirve para tablas con llave primaria de 5 atributos function pasaparam5(id_1, id_2, id_3, id_4, id_5, descripcion, posicion_real ){var posicion=posicion_real-4; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=id_4; posicion++; opener.document.forma.elements[posicion].value=id_5; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}// Esta función sirve para pasar 2 parametros a traves de un wincombo function pasaparam2(id_1, id_2, descripcion, posicion_real ){var posicion=posicion_real-1; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}// Esta función sirve para tablas con llave primaria de 4 atributos function pasaparam4(id_1, id_2, id_3, id_4, descripcion, posicion_real ){var posicion=posicion_real-3; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=id_4; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}// Esta pre_tia_codigo,pre_coa_codigo,pre_creditos,asi_codigo function pasaparam_asignaturaResolucionDelEstudianteParaEquivalencias(id_1, id_2, id_3, id_4, descripcion, posicion_real ){var posicion_asi_codigo=posicion_real; opener.document.forma.elements[posicion_asi_codigo].value=id_4 ;posicion_real++;var posicion_descripcion=posicion_real; opener.document.forma.elements[posicion_descripcion].value=descripcion;posicion_real++;posicion_real++;var posicion_pre_tia_codigo=posicion_real; opener.document.forma.elements[posicion_pre_tia_codigo].value=id_1 ;posicion_real++;var posicion_pre_coa_codigo=posicion_real; opener.document.forma.elements[posicion_pre_coa_codigo].value=id_2 ;posicion_real++;var posicion_pre_creditos=posicion_real; opener.document.forma.elements[posicion_pre_creditos].value=id_3; posicion_real++;opener.document.forma.elements[posicion_real].focus(); window.close();}// Esta función sirve para pasar 3 parametros a traves de un wincombo function pasa3parametros(id_1, id_2, id_3, descripcion, posicion_real ){var posicion=posicion_real+1; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}// Esta función sirve para pasar 1 parametro a traves de un wincombo function pasa1parametro(id_1, descripcion, posicion_real ){var posicion=posicion_real+6; opener.document.forma.elements[posicion].value=id_1 ; posicion++; opener.document.forma.elements[posicion].value=descripcion; opener.document.forma.elements[posicion].focus(); window.close();}// Función para pasar 5 parametros en el formulario de ingreso de Graduados Avanzado, // para los datos de la Resolución y de las actas si es una sola, si son más debe escogerlas del Wincombo de acta. // Diego Fernando Reyes Alegrias. // 2004-09-28 function pasaparam6_resolucion(id_1, id_2, id_3, id_4, id_5, id_6, numfilas, posicion_real ){var campo=2; campo--; campo--; opener.document.forma.elements[campo].value=id_1; campo++; opener.document.forma.elements[campo].value=id_2; if ( numfilas <=1 ){campo++; campo++; opener.document.forma.elements[campo].value=id_3; campo++; opener.document.forma.elements[campo].value=id_4; campo++; campo++; opener.document.forma.elements[campo].value=id_5; campo++; opener.document.forma.elements[campo].value=id_6;}opener.document.forma.elements[campo].focus(); window.close();}// Función para pasar 3 parametros en el formulario de ingreso de Graduados Avanzado, para los datos del ACTA. // Diego Fernando Reyes Alegrias. // 2004-09-28 function pasaparam3_acta(id_1, id_2, id_3, id_4, posicion_real ){var campo=3; opener.document.forma.elements[campo].value=id_1; campo++; opener.document.forma.elements[campo].value=id_2; campo++; campo++; opener.document.forma.elements[campo].value=id_3; campo++; opener.document.forma.elements[campo].value=id_4; opener.document.forma.elements[campo].focus(); window.close();}function pasaparamTalentosSubDivisionPolitica(id_1, id_2, id_3, descripcion, posicion_real ){var posicion=posicion_real; opener.document.forma.elements[posicion].value=id_1 ; posicion=parseInt(posicion)+8; //alert(posicion); opener.document.forma.elements[posicion].value=id_2 ; posicion++; opener.document.forma.elements[posicion].value=id_3; posicion=parseInt(posicion)-8; opener.document.forma.elements[posicion].value=descripcion; posicion=parseInt(posicion)+9; opener.document.forma.elements[posicion].focus(); window.close();}function pasaparamEstudianteRestringidoGrado (id_1, id_2, id_3, id_4, id_5,id_6,id_7, descripcion, posicion_real ){var campo=0; opener.document.forma.elements[campo].value=id_1 ; campo++; opener.document.forma.elements[campo].value=id_2 ; campo++; opener.document.forma.elements[campo].value=descripcion; campo++; campo++; opener.document.forma.elements[campo].value=id_3; campo++; opener.document.forma.elements[campo].value=id_7; campo++; opener.document.forma.elements[campo].value=id_4; campo++; opener.document.forma.elements[campo].value=id_5; campo++; opener.document.forma.elements[campo].value=id_6; opener.document.forma.elements[campo].focus(); window.close();}document.onkeydown=cerrarVentanaTeclaEscape; --> </script> <table width="100%" cellspacing="2" cellpadding="0" border="1" bgcolor="#e04e4f" align="center"> <tbody><tr> <td bgcolor="#F9EDDB"> <table width="100%" cellspacing="2" cellpadding="0" border="0"> <tbody><tr bgcolor="#F9EDDB"> <td class="encabezado1" align="center">Estudiante</td><td class="encabezado1" width="34" background="/sra/paquetes/gui/temas/univalleRojoAmarillo/imagenes/adornoForma.jpg">&nbsp;</td></tr></tbody></table> </td></tr><tr> <td bgcolor="#FFFFFF"> <table width="100%" cellspacing="2" cellpadding="0" border="0"> <tbody><tr> <td width="12" bgcolor="white" align="center"><a class="normalNegro"></a></td><td width="10" bgcolor="" align="center"><a class="normalNegroB">Código Persona</a></td><td width="20" bgcolor="" align="center"><a class="normalNegroB">Código Estudiante</a></td><td width="40" bgcolor="" align="center"><a class="normalNegroB">Documento</a></td><td width="180" bgcolor="" align="center"><a class="normalNegroB">Nombre</a></td><td width="180" bgcolor="" align="center"><a class="normalNegroB">Apellidos</a></td><td width="40" bgcolor="" align="center"><a class="normalNegroB">Programa</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('87810','196300100','AMPARO LOPEZ MARIN -> 3445-00-DIU','0')">87810</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('87810','196300100','AMPARO LOPEZ MARIN -> 3445-00-DIU','0')">196300100</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('87810','196300100','AMPARO LOPEZ MARIN -> 3445-00-DIU','0')">C.C. 25149350</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('87810','196300100','AMPARO LOPEZ MARIN -> 3445-00-DIU','0')">AMPARO</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('87810','196300100','AMPARO LOPEZ MARIN -> 3445-00-DIU','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('87810','196300100','AMPARO LOPEZ MARIN -> 3445-00-DIU','0')">3445-00-DIU</a></td></tr><tr bgcolor="#FFFFFF"> <td width="5%" bgcolor="#FFFFFF" align="left"></td><td class="normalNegro" width="10" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('145199','200327435','CARLOS ALBERTO LOPEZ MARIN -> 3745-00-DIU','0')">145199</a></td><td class="normalNegro" width="20" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('145199','200327435','CARLOS ALBERTO LOPEZ MARIN -> 3745-00-DIU','0')">200327435</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('145199','200327435','CARLOS ALBERTO LOPEZ MARIN -> 3745-00-DIU','0')">C.C. 1130670068</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('145199','200327435','CARLOS ALBERTO LOPEZ MARIN -> 3745-00-DIU','0')">CARLOS ALBERTO</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('145199','200327435','CARLOS ALBERTO LOPEZ MARIN -> 3745-00-DIU','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('145199','200327435','CARLOS ALBERTO LOPEZ MARIN -> 3745-00-DIU','0')">3745-00-DIU</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000148468','201760682','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">2000148468</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000148468','201760682','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">201760682</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000148468','201760682','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">C.C. 1116446416</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000148468','201760682','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">CARLOS EDUARDO</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000148468','201760682','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000148468','201760682','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">2710-07-NOC</a></td></tr><tr bgcolor="#FFFFFF"> <td width="5%" bgcolor="#FFFFFF" align="left"></td><td class="normalNegro" width="10" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000131830','201562782','CARLOS EDUARDO LOPEZ MARIN -> 2711-07-NOC','0')">2000131830</a></td><td class="normalNegro" width="20" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000131830','201562782','CARLOS EDUARDO LOPEZ MARIN -> 2711-07-NOC','0')">201562782</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000131830','201562782','CARLOS EDUARDO LOPEZ MARIN -> 2711-07-NOC','0')">C.C. 1116446416</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000131830','201562782','CARLOS EDUARDO LOPEZ MARIN -> 2711-07-NOC','0')">CARLOS EDUARDO</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000131830','201562782','CARLOS EDUARDO LOPEZ MARIN -> 2711-07-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000131830','201562782','CARLOS EDUARDO LOPEZ MARIN -> 2711-07-NOC','0')">2711-07-NOC</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000119122','201457241','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">2000119122</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000119122','201457241','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">201457241</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000119122','201457241','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">C.C. 1116446416</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000119122','201457241','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">CARLOS EDUARDO</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000119122','201457241','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000119122','201457241','CARLOS EDUARDO LOPEZ MARIN -> 2710-07-NOC','0')">2710-07-NOC</a></td></tr><tr bgcolor="#FFFFFF"> <td width="5%" bgcolor="#FFFFFF" align="left"></td><td class="normalNegro" width="10" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000088162','201151308','DARLYN JULIETH LOPEZ MARIN -> 3249-03-DIU','0')">2000088162</a></td><td class="normalNegro" width="20" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000088162','201151308','DARLYN JULIETH LOPEZ MARIN -> 3249-03-DIU','0')">201151308</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000088162','201151308','DARLYN JULIETH LOPEZ MARIN -> 3249-03-DIU','0')">C.C. 1114092800</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000088162','201151308','DARLYN JULIETH LOPEZ MARIN -> 3249-03-DIU','0')">DARLYN JULIETH</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000088162','201151308','DARLYN JULIETH LOPEZ MARIN -> 3249-03-DIU','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000088162','201151308','DARLYN JULIETH LOPEZ MARIN -> 3249-03-DIU','0')">3249-03-DIU</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('115197','199726469','DIANA MARIA LOPEZ MARIN -> 3841-27-NOC','0')">115197</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('115197','199726469','DIANA MARIA LOPEZ MARIN -> 3841-27-NOC','0')">199726469</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('115197','199726469','DIANA MARIA LOPEZ MARIN -> 3841-27-NOC','0')">C.C. 24392454</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('115197','199726469','DIANA MARIA LOPEZ MARIN -> 3841-27-NOC','0')">DIANA MARIA</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('115197','199726469','DIANA MARIA LOPEZ MARIN -> 3841-27-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('115197','199726469','DIANA MARIA LOPEZ MARIN -> 3841-27-NOC','0')">3841-27-NOC</a></td></tr><tr bgcolor="#FFFFFF"> <td width="5%" bgcolor="#FFFFFF" align="left"></td><td class="normalNegro" width="10" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('134234','200354184','GUSTAVO ADOLFO LOPEZ MARIN -> 2710-06-NOC','0')">134234</a></td><td class="normalNegro" width="20" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('134234','200354184','GUSTAVO ADOLFO LOPEZ MARIN -> 2710-06-NOC','0')">200354184</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('134234','200354184','GUSTAVO ADOLFO LOPEZ MARIN -> 2710-06-NOC','0')">C.C. 1116232745</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('134234','200354184','GUSTAVO ADOLFO LOPEZ MARIN -> 2710-06-NOC','0')">GUSTAVO ADOLFO</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('134234','200354184','GUSTAVO ADOLFO LOPEZ MARIN -> 2710-06-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('134234','200354184','GUSTAVO ADOLFO LOPEZ MARIN -> 2710-06-NOC','0')">2710-06-NOC</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('146162','200355433','INGRID PAULETTE LOPEZ MARIN -> 3845-01-DIU','0')">146162</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('146162','200355433','INGRID PAULETTE LOPEZ MARIN -> 3845-01-DIU','0')">200355433</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('146162','200355433','INGRID PAULETTE LOPEZ MARIN -> 3845-01-DIU','0')">T.I. 85091739696</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('146162','200355433','INGRID PAULETTE LOPEZ MARIN -> 3845-01-DIU','0')">INGRID PAULETTE</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('146162','200355433','INGRID PAULETTE LOPEZ MARIN -> 3845-01-DIU','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('146162','200355433','INGRID PAULETTE LOPEZ MARIN -> 3845-01-DIU','0')">3845-01-DIU</a></td></tr><tr bgcolor="#FFFFFF"> <td width="5%" bgcolor="#FFFFFF" align="left"></td><td class="normalNegro" width="10" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('106708','200043269','JAIME ANDRES LOPEZ MARIN -> 3841-03-NOC','0')">106708</a></td><td class="normalNegro" width="20" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('106708','200043269','JAIME ANDRES LOPEZ MARIN -> 3841-03-NOC','0')">200043269</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('106708','200043269','JAIME ANDRES LOPEZ MARIN -> 3841-03-NOC','0')">C.C. 14568009</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('106708','200043269','JAIME ANDRES LOPEZ MARIN -> 3841-03-NOC','0')">JAIME ANDRES</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('106708','200043269','JAIME ANDRES LOPEZ MARIN -> 3841-03-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('106708','200043269','JAIME ANDRES LOPEZ MARIN -> 3841-03-NOC','0')">3841-03-NOC</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2830-03-NOC','0')">2000041782</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2830-03-NOC','0')">200653420</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2830-03-NOC','0')">C.C. 1112764209</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2830-03-NOC','0')">JOSE DAVID</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2830-03-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2830-03-NOC','0')">2830-03-NOC</a></td></tr><tr bgcolor="#FFFFFF"> <td width="5%" bgcolor="#FFFFFF" align="left"></td><td class="normalNegro" width="10" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2833-03-DIU','0')">2000041782</a></td><td class="normalNegro" width="20" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2833-03-DIU','0')">200653420</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2833-03-DIU','0')">C.C. 1112764209</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2833-03-DIU','0')">JOSE DAVID</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2833-03-DIU','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 2833-03-DIU','0')">2833-03-DIU</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 3845-03-NOC','0')">2000041782</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 3845-03-NOC','0')">200653420</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 3845-03-NOC','0')">C.C. 1112764209</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 3845-03-NOC','0')">JOSE DAVID</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 3845-03-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000041782','200653420','JOSE DAVID LOPEZ MARIN -> 3845-03-NOC','0')">3845-03-NOC</a></td></tr><tr bgcolor="#FFFFFF"> <td width="5%" bgcolor="#FFFFFF" align="left"></td><td class="normalNegro" width="10" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000016896','200475260','JOSE LUIS LOPEZ MARIN -> 2711-14-NOC','0')">2000016896</a></td><td class="normalNegro" width="20" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000016896','200475260','JOSE LUIS LOPEZ MARIN -> 2711-14-NOC','0')">200475260</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000016896','200475260','JOSE LUIS LOPEZ MARIN -> 2711-14-NOC','0')">C.C. 16462573</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000016896','200475260','JOSE LUIS LOPEZ MARIN -> 2711-14-NOC','0')">JOSE LUIS</a></td><td class="normalNegro" width="180" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000016896','200475260','JOSE LUIS LOPEZ MARIN -> 2711-14-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#FFFFFF" align="center"><a href="#" onclick="pasaparam_tableComp('2000016896','200475260','JOSE LUIS LOPEZ MARIN -> 2711-14-NOC','0')">2711-14-NOC</a></td></tr><tr bgcolor="#CCCCCC"> <td width="5%" bgcolor="#CCCCCC" align="left"></td><td class="normalNegro" width="10" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000070304','200943879','JULIAN ANDRES LOPEZ MARIN -> 2635-00-NOC','0')">2000070304</a></td><td class="normalNegro" width="20" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000070304','200943879','JULIAN ANDRES LOPEZ MARIN -> 2635-00-NOC','0')">200943879</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000070304','200943879','JULIAN ANDRES LOPEZ MARIN -> 2635-00-NOC','0')">C.C. 1130622824</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000070304','200943879','JULIAN ANDRES LOPEZ MARIN -> 2635-00-NOC','0')">JULIAN ANDRES</a></td><td class="normalNegro" width="180" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000070304','200943879','JULIAN ANDRES LOPEZ MARIN -> 2635-00-NOC','0')">LOPEZ MARIN</a></td><td class="normalNegro" width="40" bgcolor="#CCCCCC" align="center"><a href="#" onclick="pasaparam_tableComp('2000070304','200943879','JULIAN ANDRES LOPEZ MARIN -> 2635-00-NOC','0')">2635-00-NOC</a></td></tr></tbody></table> </td></tr></tbody></table> <br><br><table cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"> <tbody><tr> <td class="normalNegroB">1&nbsp;</td><td align="center"> <a href="wincombo.php?&amp;ID=ID&amp;db_conexion=&amp;patron=LOPEZ MARIN&amp;patron2=&amp;patron3=&amp;patron4=&amp;patron5=&amp;patron6=&amp;patron7=&amp;patron8=&amp;patron9=&amp;opcion=estudianteConsulta&amp;min=15&amp;variableCalculada=0&amp;numeroRegistros=31"> <span class="normalRojoB"><u>2</u>&nbsp;</span> </a> </td><td align="center"> <a href="wincombo.php?&amp;ID=ID&amp;db_conexion=&amp;patron=LOPEZ MARIN&amp;patron2=&amp;patron3=&amp;patron4=&amp;patron5=&amp;patron6=&amp;patron7=&amp;patron8=&amp;patron9=&amp;opcion=estudianteConsulta&amp;min=30&amp;variableCalculada=0&amp;numeroRegistros=31"> <span class="normalRojoB"><u>3</u>&nbsp;</span> </a> </td><td align="center"> <a href="wincombo.php?&amp;ID=ID&amp;db_conexion=&amp;patron=LOPEZ MARIN&amp;patron2=&amp;patron3=&amp;patron4=&amp;patron5=&amp;patron6=&amp;patron7=&amp;patron8=&amp;patron9=&amp;min=15&amp;opcion=estudianteConsulta&amp;variableCalculada=0&amp;numeroRegistros=31"> <img src="/sra/paquetes/gui/temas/univalleRojoAmarillo/imagenes/iconos/gif/boton_siguiente.gif" title="SIGUIENTE" border="0"> </a> </td></tr><tr align="center"> </tr></tbody></table><table align="center"> <tbody><tr> <td class="miniRojo">Total Registros: 31</td></tr></tbody></table> <br><table width="400" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"> <tbody><tr> <td align="center"><input class="botonForma" value="Cerrar Ventana" title="Cerrar Ventana" onclick="cerrar();" type="Button"> </td></tr></tbody></table> </body></html>`;