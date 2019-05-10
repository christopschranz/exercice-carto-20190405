const c = console.log

let count = 0;
let next = 1;
let max = 4;
let last =0;

// CACHE LES BONNES SECTION LORS DU CHARGEMENT DE LA PAGE
const pageLoad = () => {
    for (let i = 1; i< 6; i++) {
        $(`.section${i}`).addClass('hidden')
    }
    $('.left svg').css('display', 'none')
    $('#stackedAreaChart').addClass('hidden');
    $('.line-icon').removeClass('hidden');
}

    $('.img').toggleClass('transform-active')


// LORS DU CLIQUE SUR LE BOUTON PRINCIPAL, FADEIN ET FADEOUT LES BONNES SECTIONS
$('.btn-start').on('click', event => {
    $('.img').toggleClass('transform-active')
    setTimeout(function () {
        $(`#section1`).fadeToggle(500).promise().done(function () {
            $('.bottom-nav').fadeToggle(500);
            $('.bottom-nav').css('display', 'flex');
            $(`.section1`).fadeIn(500);
            $(`.section1`).css('display', 'flex');
        })    }, 700)

})

// CHECK L'ORDRE POUR FADEIN ET FADEOUT LES BONNES SECTIONS
$('.lateral-cell').on('click', e => {
    let dir = $(e.currentTarget).data('dir')
    if (dir == 'right') {
        count = 1;
    } else {
        count = -1;
    }
    next = next + count;
    if(next == 1) {
        $('.left svg').fadeOut(500);
    }
    if(next == max) {
        $('.right svg').fadeOut(500);
    }
    if(next > max) {
        next = max
    }
    if(next < 1) {
        next = 1
    }
    if(next == 2) {
        $('.left svg').fadeIn(500);
    }
    if(next == max-1) {
        $('.right svg').fadeIn(500);
    }

    if (count > 0) {
        last = next -1;
    } else {
        last = next +1 ;
    }

    // FADEIN ET FADEOUT LES DEUX SECTIONS (NEXT ET LAST)
    $(`.section${last}`).fadeOut(500).promise().done(function () {
        $(`.section${next}`).fadeIn(500);
        $(`.section${next}`).css('display', 'flex');
    })
    $('.count').text(next+' ')
})

pageLoad();