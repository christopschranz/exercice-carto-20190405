const femaleJson = require('./female.json');
const maleJson = require('./male.json');
const allJson = require('./allCountiresData.json')
const fs = require('fs');
const c = console.log;

delete maleJson[0]['2018'];

c(allJson)

maleJson[0]['gender'] = 'male';
femaleJson[0]['gender'] = 'female';

c(femaleJson.length)

let bYear = 1970;
let eYear = 2017;

let addStats = function (tableau) {
    let stats = [];
for (let i = bYear; i<=eYear; i++) {
    let obj = {
        year : i, 
        total : tableau[0][i]
    }
    stats.push(obj)
    delete tableau[0][i]
}
    tableau[0]['statistics'] = stats;
}

addStats(femaleJson);
addStats(maleJson);

let world = [
    femaleJson[0],
    maleJson[0]
]


const save = function (data) { fs.writeFile('allCountiresData.json', JSON.stringify(data, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))}
save(world);
