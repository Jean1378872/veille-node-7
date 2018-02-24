const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient // le pilote MongoDB
const ObjectID = require('mongodb').ObjectID;
const peupler = require('./mes_modules/peupler');

const app = express();
app.set('view engine', 'ejs'); // générateur de template 
var util = require("util");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public')) // pour utiliser le dossier public

let db // variable qui contiendra le lien sur la BD


////////////////// 5-Les routes //////////////////
app.get('/adresse', (req, res) => {
 console.log('la route route get / = ' + req.url)
 
 var cursor = db.collection('adresse')
                .find().toArray(function(err, resultat){

 if (err) return console.log(err)
 // transfert du contenu vers la vue index.ejs (renders)
 // affiche le contenu de la BD
 res.render('gabarit.ejs', {adresse: resultat})
 })
})

app.get('/list', (req, res) => {
 console.log('la route route get / = ' + req.url)
 
 var cursor = db.collection('adresse')
                .find().toArray(function(err, resultat){

 if (err) return console.log(err)
 // transfert du contenu vers la vue index.ejs (renders)
 // affiche le contenu de la BD
 res.render('gabarit.ejs', {adresse: resultat})
 })
})

app.get('/', (req, res) => {
 console.log('la route route get / = ' + req.url)
 
 var cursor = db.collection('adresse')
                .find().toArray(function(err, resultat){

 if (err) return console.log(err)
 // transfert du contenu vers la vue index.ejs (renders)
 // affiche le contenu de la BD
 res.render('gabarit.ejs', {adresse: resultat})
 })
})
///////////**** VIDER ***********/////////////////
app.get('/vider', (req, res) => {
    db.collection('adresse').drop((err, resultat) => {
        if (err) return console.log(err)
            res.redirect('/adresse');
    });

})
//////////////********* PEUPLER *****/////////////////
app.get('/peupler', function(req,res) {

	let remplir = require("./mes_modules/peupler/index.js");
	let tableauPeupler = remplir();
 
 
 db.collection('adresse').insertMany(tableauPeupler, (err, result) => {
 if (err) return console.log(err)
 	remplir = "";
 	console.log('sauvegarder dans la BD');
 	res.redirect('/adresse')
 })


})
/****************************************/

//////////// AJOUTER ///////////////
app.post('/ajouter', (req, res) => {
 db.collection('adresse').insert(req.body, (err, result) => {
 if (err) return console.log(err)
 console.log('sauvegarder dans la BD')
 res.redirect('/adresse')
 })
})
/*********************************/

/////////////////////// Détruire ////////////////////////
app.get('/detruire/:id', (req, res) => {
 var id = req.params.id
 console.log(id)
 db.collection('adresse')
 .findOneAndDelete({"_id": ObjectID(req.params.id)}, (err, resultat) => {

if (err) return console.log(err)
 res.redirect('/adresse')  // redirige vers la route qui affiche la collection
 })
})
/****************************************/

/////////////////////////Trier////////////////////////////
app.get('/trier/:cle/:ordre', (req, res) => {
let cle = req.params.cle
 let ordre = (req.params.ordre == 'asc' ? 1 : -1)
 let cursor = db.collection('adresse').find().sort(cle,ordre).toArray(function(err, resultat){
 ordre = (req.params.ordre == 'asc' ? 'desc' : 'asc')
 res.render('gabarit.ejs', {adresse: resultat, cle, ordre })
})

})
/*********************************************/

///////////////////////Modifier///////////////////////
app.post('/modifier', (req, res) => {
 db.collection('adresse').save(req.body, (err, result) => {
 if (err) return console.log(err)
 console.log('sauvegarder dans la BD')
 res.redirect('/adresse')
 })
})
/*********************************************************/


MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
 if (err) return console.log(err)
 db = database.db('adresse')
// lancement du serveur Express sur le port 8081
 app.listen(8081, () => {
 console.log('connexion à la BD et on écoute sur le port 8081')
 })
})