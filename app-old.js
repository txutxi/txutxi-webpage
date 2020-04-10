const http = require('http');


http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'application/json' });
        //res.write('Hola mundo');
        let salida = {
            nombre: 'Pepe',
            edad: 32,
            url: req.url
        };

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(7225);

console.log('Escuchando por el puerto 7225');