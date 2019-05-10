const data = require('../data/totalPerContinent.json')
const c = console.log

let scale = []
scale.push('x');
for(let i = 1970; i < 2018; i++) {
    scale.push(i);
}

// ECOUTE L'INPUT POUR AFFICHER L'ANNEE CHOISIE
$('#range').on('input propertychange', event => {
    var newValue = $(event.currentTarget).val();
    var target = $('#rangeval');
    target.text(newValue);
})

// CRÉATION DU GRAPH 1
var chart = bb.generate({
    data: {
      columns: [
          [data[0].data[0], data[0].data[1]],
          [data[1].data[0], data[1].data[1]],
          [data[2].data[0], data[2].data[1]],
          [data[3].data[0], data[3].data[1]],
          [data[4].data[0], data[4].data[1]],
          [data[5].data[0], data[5].data[1]],
      ],
      type: "pie",
      
    },
    title: {
      text: "Répartition globale des enfants par continent, 1970"
    },

      size : {
          height: 400
      },
      transition: {
        duration: 500
      },
      interaction: {
        enabled: false
    },

    bindto: "#pieChart"
  });


// CRÉATION DU GRAPH 2
var chart2 = bb.generate({
  data: {
    x : 'x',
    columns: [
      scale,
      data[0].data,
      data[1].data,
      data[2].data,
      data[3].data,
      data[4].data,
      data[5].data,
    ],
    type: "area-spline",
    groups: [
      [
        data[0].data[0],
        data[1].data[0]
      ]
    ]
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
  bindto: "#stackedAreaChart"
});
  
//$('#pieChart .bb-chart-arc text').attr('style', 'fill : black')
let last = 0

// QUAND LE SELECT CHANGE, EFFECTUE LE CHANGEMENTS DES DONNEES
$('#range').on('change', evt => {
    var year = $("#range").val();

    let pos = year - 1969;

    // LOAD LES NOUVELLES DONNEES SELON LES DONNEES SELEDTIONNÉS
  chart.load({
    columns: [
        [data[0].data[0], data[0].data[pos]],
        [data[1].data[0], data[1].data[pos]],
        [data[2].data[0], data[2].data[pos]],
        [data[3].data[0], data[3].data[pos]],
        [data[4].data[0], data[4].data[pos]],
        [data[5].data[0], data[5].data[pos]],
  ]
});

// DÉFINIT LES VALEURS A SUPPRIMER
let lastselected = data[0].data[last]
let lastselected1 = data[1].data[last]
let lastselected2 = data[2].data[last]
let lastselected3 = data[3].data[last]
let lastselected4 = data[4].data[last]
let lastselected5 = data[5].data[last]

// ENLEVE LES ANCIENNES DONNEES
chart.unload({
    ids: lastselected, lastselected1, lastselected2, lastselected3, lastselected4, lastselected5
  });

 last = pos;
 $('#pieChart .bb-title tspan').text("Répartition globale des enfants par continent,  "+year)
})

// LORSQUE LES ICONES DE CHANGEMENTS DE GRAPH SONT CLIQUÉES, AFFICHE LE BON GRAPH
$('.graph-icon').on('click', e => {
    $('.graph-to-change').toggleClass('hidden');
    $('#imsifi').toggleClass('hidden');
    $('.change-icon-graph').toggleClass('hidden');})
