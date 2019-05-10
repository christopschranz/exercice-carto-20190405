const data = require('../data/averagePerYear.json')
const c = console.log

data.forEach(element => {
  element.pays = element.pays.replace(/\s/g, "");
})


let world = data.filter(d=> d.pays == 'World')

// DÉFINIT L'AXE X
let scale = []
scale.push('x');
for(let i = 1970; i < 2018; i++) {
    scale.push(i);
}

// CRÉE LE GRAPHIQUE
var chart = bb.generate({
    title: {
        text: "Évolution du nombre d'enfants sans accès à la scolarité, Monde "
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
      padding: {
        top: 30,
        right: 100,
        bottom: 0,
        left: 100
      },
      data: {
      x : 'x',
    columns: [
    scale,
    world[0].data
    ],
  },
  axis: {
    y: {
    tick: {
        format: function(y) { return (y); }
      },
      label : {
         text : "Nombre d'enfants",
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
transition: {
  duration: 1000
},
  bindto: "#multipleXYLineChart2"
});
// AJOUTE LES OPTIONS EN FONCTION DES DONNEES
data.sort((a,b) => (a.pays > b.pays) ? 1 : ((b.pays > a.pays) ? -1 : 0)); 
data.forEach(element => {
  let newOption = `<option value=${element.pays_code}>`+element.data[0]+'</option>'
  $('#select').append(newOption)
});

// AJOUTE UN LAST SELECTED POUR POUVOR L'ENLEVER ENSUITE
let lastselected = data.filter(d=> d.pays_code == 'WLD')[0].data

// QUAND UN NOUVEAU PAYS EST SELECTIONNE, LOAD LE NOUVEAU, UNLOAD L'ANCIEN
$('#select').on('change', function () {
  var name = $("#select option:selected").val();
  if(name == 0) {
    name = 'WLD'
  }

  // RECHERCHE LE PAYS EN FONCTION DU CODE SELECTIONNÉ
  let selectedCountry = data.filter(d=> d.pays_code == `${name}`)

  // LOAD LES NOUVELLES DONNEES SELON LES DONNEES SELEDTIONNÉS
  chart.load({
		columns: [
			selectedCountry[0].data
		]
  });
  
  // SUPPRIME LA VISUALISATION DES ANCIENNES DONNEES
    chart.unload({
      ids: lastselected
    });

  // UPDATE DE L'ANCIENNE DONNEE
  lastselected = selectedCountry[0].data;

  // UPDATE TITLE
  $('.bb-title tspan').text("Évolution du nombre d'enfants sans accès à la scolarité, "+lastselected[0])
});