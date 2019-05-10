const femaleData = require('../data/femaleDATA.json');
const maleData = require('../data/maleDATA.json');
const c = console.log
const fs = require('fs');
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// CREE LE JEU DE DONNEES POUR LE GRAPHIQUE, NE RETOURNE RIEN S'IL N'Y A PAS DE DONNEES
const averagePerYear = (female, male) => {
    let data = [];
    female.data.shift();
    male[0].data.shift();
    for (i = 0; i<48; i++) {
        let average = (female.data[i] + male[0].data[i])
        data.push(average)
    }
    let sum = data.reduce(reducer)
    if(sum!= 0) {
    data.unshift(female.pays)
    return data;}
}

const averageList = []

// CREE UN UNIQUE TABLEAU AVEC LA SOMME DES FILLES ET GARçONS
femaleData.forEach(element => {
    let paysmale = maleData.filter(d => d.pays == element.pays)
    let e = averagePerYear(element, paysmale)
    let obj = {
        'continent' : element.continent,
        'continent_code' : element.continent_code,
        'pays' : element.pays,
        'pays_code' : element.pays_code,
        'data' : e
    }
    averageList.push(obj)
});

// LISTE FINALE SANS LES PAYS N'AYANT AUCUNE DONNEES
let finalList = averageList.filter(d => d.data != undefined)

const save = data => fs.writeFile('averagePerYear.json', JSON.stringify(data, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))

c(finalList)
//save(finalList)