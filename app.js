const express = require('express');
const app = express();
const pug = require('pug');

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/tes0', (req, res) => 
    //res.send('Hello World!')
    res.send('tes express')
);

app.get('/', (req, res) => 
    //res.send('Hello World!')
    res.render('tes1.pug')
);

app.get('/tes', (req, res) => 
    res.render('form1.pug', {judul: 'test', message: 'test message'})
);

app.post('/tes', function (req, res) {
    console.log(req.body.nama);
    var nama = req.body.nama;
    res.send('hello '+nama);
});

app.get('/angka', (req, res) => 
    //res.send('Hello World!')
    res.render('form2.pug', {judul: 'test', message: 'test message'})
);

function cekBilangan(angka, res){
    if(angka % 2 === 0){
        res.send(angka+' adalah bilangan genap');
    } else {
        res.send(angka+' adalah bilangan ganjil');
    }
}

app.post('/angka', function (req, res) {
    console.log(req.body.angka);
    var bil1 = req.body.angka;
    cekBilangan(bil1);
    
    /*if(bil1 % 2 === 0){
        res.send(bil1+' adalah bilangan genap');
    } else {
        res.send(bil1+' adalah bilangan ganjil');
    }*/
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
