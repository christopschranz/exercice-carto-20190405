const continent = require('../data/averagePerYear.json');
const c = console.log
const fs = require('fs');

let list = []

// ENLEVE LES DOUBLONS DU TABLEAU
const checkIfpresent = (continent) => {
    if(continent !== undefined) {
        let l = list.length
        for (let i = 0; i< l; i++) {
            if(list[i] == continent) {
                return 1
            }
        }
    }
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// AJOUTE LE NOM DU CONTINENT TIRÉ DU CODE
const codeToNoun = (code) => {
    switch (code) {
        case 'NA' : 
        return 'North America'
        break;
        case 'AS' : 
        return 'Asia'
        break;
        case 'EU' : 
        return 'Europe'
        break;
        case 'OC' : 
        return 'Oceania'
        break;
        case 'AF' : 
        return 'Africa'
        break;
        case 'SA' : 
        return 'South America'
        break;
    }
}

// make the sum for each continent
const sumPerContinent = (el, nom) => {
    let tab = []
    let same = continent.filter(d => d.continent == el)
    for (let j = 1; j<49; j++) {
        let sumForAYear = 0;
    for(let i = 0; i<same.length; i++) {
        sumForAYear = sumForAYear + same[i].data[j]
    }
    tab.push(sumForAYear)
}
    tab.unshift(nom)
    return tab
}

// MAKE A LIST OF CONTINENT CODE
continent.forEach(element => {
    let e = checkIfpresent(element.continent)
    if (e!= 1) {
    list.push(element.continent)
    }
})

// ENLEVE LES CONTINENTS NON-DÉFINIS
let continents = list.filter(d => d != undefined)

let cont = [];

// MAKE A NEW TAB WITH USABLE VALUES FOR GRAPH
continents.forEach(el => {
    let obj = {
        'continent_code' : el,
        'continent' : codeToNoun(el),
        'data' : sumPerContinent(el, codeToNoun(el))
    }
    cont.push(obj);
})

const save = data => fs.writeFile('totalPerContinent.json', JSON.stringify(data, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))

save(cont)
