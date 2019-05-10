const continent = require('../data/countriesPerContinent.json');
const female = require('../data/female.json');
const male = require('../data/male.json');
const c = console.log
const fs = require('fs');

// LONGUEUR TABLEAU *FEMALE*
let length = female.length;
for (let i = 0; i < length; i++) {
    female[i]['gender'] = 'female';
}

// LONGUEUR TABLEAU *MALE*
let Mlength = male.length;
for (let i = 0; i < Mlength; i++) {
    male[i]['gender'] = 'male';
}

// FONCTION QUI AJOUTE LES DONNEES DES ANNEES DANS LE TABLEAU
let data = (country) => {
    let tableau = [];
    tableau.push(country['gender'])
    for(let i = 1970; i < 2018; i++) {
        tableau.push(country[i])
    }
    return tableau;
}

// RECHERCHE DANS QUEL CONTINENT SE TROUVE LE PAYS ET RETOURNE LE RESULTAT
let searchForContinent = (element) => {
    let el = continent.filter(d => d.Three_Letter_Country_Code == element['Country Code'])
    if(el[0] == undefined) {return undefined}
    else {
    return el[0].Continent_Code;
    }
}

// FONCTION QUI CREE LE NOUVEAU TABLEAU
let newTab = (element) => {
    let obj = {
    'continent' : searchForContinent(element),
    'pays' : element['Country Name'],
    'pays_code' : element['Country Code'],
    'gender' : element['gender'],
    'data' : data(element)
    }
    return obj;
    }

// NOUVEAU TABLEAU CONTENANT LES DONNEES *FEMALE* MISES EN FORME
let maleList = []
male.forEach(element => {
    let e = newTab(element);
    maleList.push(e)
});

// NOUVEAU TABLEAU CONTENANT LES DONNEES *MALE* MISES EN FORME
let femaleList = []
female.forEach(element => {
    let e = newTab(element);
    femaleList.push(e)
});

const save = data => fs.writeFile('maleDATA.json', JSON.stringify(data, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))

save(maleList)
