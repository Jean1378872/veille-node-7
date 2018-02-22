"use strict";

const fs = require('fs');
const peupler = require('./mes_modules/peupler');

fs.readFile('toto.txt', (err,resultat) => {
	if(err) console.log("erreur");
	console.log(peupler());

})

