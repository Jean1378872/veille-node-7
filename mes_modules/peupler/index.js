
"use strict";

const tableau = require('./tableaux.js');

//const maximum = tableau.nom.length;

const maxNom = tableau.nom.length;
const maxPrenom = tableau.prenom.length;
const maxVille = tableau.ville.length;
const maxCourriel = tableau.courriel.length;
const maxTelephone = tableau.telephone.length;

console.log('maxNom = ' + maxNom);

const peupler = () => {

	var position;
	let tabMembre = [];
	let listeMembres;

	for (let k=0 ; k<10 ; k++){
		//let position = Math.floor(Math.random()*maximum);
		position = Math.floor(Math.random()*maxNom);
		let nom = tableau.nom[position];
		console.log(nom);
		//tabNom.push(tableau[position]);
		position = Math.floor(Math.random()*maxPrenom);
		let prenom = tableau.prenom[position];
		//tabPrenom.push(tableau[position]);
		position = Math.floor(Math.random()*maxVille);
		let ville = tableau.ville[position];
		//tabVille.push(tableau[position]);
		position = Math.floor(Math.random()*maxCourriel);
		let courriel = tableau.courriel[position];
		//tabCourriel.push(tableau[position]);
		position = Math.floor(Math.random()*maxTelephone);
		let telephone = tableau.telephone[position];
		//tabTelephone.push(tableau[position]);
		//let domaine = tableau.tabDomaine[position];
		

		listeMembres={
		"nom":nom,
		"prenom":prenom,
		"ville":ville,
		"courriel":courriel,
		"telephone":telephone
		}

		tabMembre.push(listeMembres);
	}
	return listeMembres;
}

module.exports = peupler;