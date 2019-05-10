const data = require('../data/averagePerYear.json')
const Datamap = require('datamaps');
const c = console.log

var map = new Datamap({
  element: document.getElementById('chart5'),
  projection: 'mercator',
  height: 540,
  width: 750,
  geographyConfig: {
    highlightOnHover: false,
    popupOnHover: false
  }
});

let color;

const makeColor = function (number) {
  $('.datamaps-subunit').each(function () {
    let tab = $(this).attr("class").split(' ');
    let pays_code = data.filter(d => d.pays_code == tab[1])

    if (pays_code[0] != undefined) {
      let data = pays_code[0].data[number];

      if (data == 0) {
        color = '#cccccc'
      }
      if (data >= 1) {
        color = '#f9caca';
      }
      if (data >= 1000) {
        color = '#fcaeae';
      }
      if (data >= 5000) {
        color = '#e86868';
      }
      if (data >= 10000) {
        color = '#c13434';
      }
      if (data >= 50000) {
        color = '#911717';
      }
      if (data >= 100000) {
        color = '#660000';
      }
    } else {
      color = '#cccccc'
    }
    let fill = 'fill : '.color;
    $(this).css('fill', color)
  })
}

// BOUCLE ET FONCTION POUR LANCER ET METTRE SUR PAUSE L'ANIMATION
var cnt = 1;
var go = false;

function timer() {
  if (!go)
    return;
  cnt++;
  if (cnt == 48) {
    cnt = 1;
  }
  $('#year-to-change').text(cnt + 1969);
  makeColor(cnt);
  setTimeout(timer, 700);
}

function stopTimer() {
  go = false;
}
function startTimer() {
  go = true;
  timer();
}

// START OU STOP LES TIMERS
$('.play-button.stop').on('click', evt => {
  stopTimer();
  $('.play-button.stop').addClass('active')
  $('.play-button.start').removeClass('active')
})

$('.play-button.start').on('click', evt => {
  startTimer();
  $('.play-button.stop').removeClass('active')
  $('.play-button.start').addClass('active')
})

// AJOUTE LES COULEURS DE LA PREMIÈRE ANNÉE
makeColor(1);