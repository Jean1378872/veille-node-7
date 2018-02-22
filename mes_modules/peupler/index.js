
module.exports = peupler_json;

"use strict";

const tableau = require('./tableaux.js');

//const maximum = tableau.nom.length;

console.log('max = ' + maximum);


const maxNom = tableau.nom.length;
const maxPrenom = tableau.prenom.length;
const maxVille = tableau.ville.length;
const maxCourriel = tableau.courriel.length;
const maxTelephone = tableau.telephone.length;

console.log('maxNom = ' + maxNom);

const peupler_json = () => {

	let position;
	let tabNom = [];
	let tabPrenom = [];
	let tabVille = [];
	let tabCourriel = [];
	let tabTelephone = [];

	for (let k=0 ; k<10 ; k++){
		//let position = Math.floor(Math.random()*maximum);
		position = Math.floor(Math.random()*maxNom);
		let nom = tabNom[position];
		//tabNom.push(tableau[position]);
		position = Math.floor(Math.random()*maxPrenom);
		let prenom = tabPrenom[position];
		//tabPrenom.push(tableau[position]);
		position = Math.floor(Math.random()*maxVille);
		let ville = tabVille[position];
		//tabVille.push(tableau[position]);
		position = Math.floor(Math.random()*maxCourriel);
		let courriel = tabCourriel[position];
		//tabCourriel.push(tableau[position]);
		position = Math.floor(Math.random()*maxTelephone);
		let telephone = tabTelephone[position];
		//tabTelephone.push(tableau[position]);
		//let domaine = tableau.tabDomaine[position];
		//tabVille.push(tableau[position]);
	}
	console.log(nom + " " + prenom);
	return{
		nom:nom,
		prenom:prenom,
		ville:ville,
		courriel:courriel,
		telephone:telephone
	};
}

module.exports = peupler;