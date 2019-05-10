const femaleData = require('../data/femaleDATA.json');
const maleData = require('../data/maleDATA.json');
const c = console.log

let femaleWorld = femaleData.filter(d=> d.pays == 'World')
let maleWorld = maleData.filter(d=> d.pays == 'World')

let scale = []
scale.push('x');
for(let i = 1970; i < 2018; i++) {
    scale.push(i);
}

var chart = bb.generate({
    title: {
        text: "Évolution du nombre d'enfants sans accès à la scolarité dans le monde de 1970 à 2017"
      },
      size: {
        height: 500,
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      },
      data: {
      x : 'x',
    columns: [
    scale,
    femaleWorld[0].data,
    maleWorld[0].data
    ],
    
    
  },
  axis: {

  y: {
    tick: {
        format: function(y) { return (y/1000000); }
      },
      label : {
         text : "Nombre d'enfants (en Millions)",
         position: "outer",
        }
  },
  x: {
    label : {
      text : 'Années',
      position : 'outer'
    }
  }
},
  bindto: "#multipleXYLineChart"
});
