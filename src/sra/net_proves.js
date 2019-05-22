const https = require('https');

https.get('https://swebse32.univalle.edu.co/sra//paquetes/herramientas/wincombo.php?opcion=estudianteConsulta&variableCalculada=0&patron=1058847076', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
  
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  
  }).on('error', (e) => {
    console.error(e);
  });