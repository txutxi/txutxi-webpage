const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 7226;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'pepe'
    });

    //res.end();
});

app.get('/about', (req, res) => {

    res.render('about');

    //res.end();
});

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});