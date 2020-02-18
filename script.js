$(window).ready(function () {
    let move = 0;

    let block = $('body').prepend('<div id="lol"></div>');
    let nolik = $('#lol').prepend('<img class="hero" id="two"  src="./nolik.png" />');
    let simka = $('#lol').prepend('<img class="hero" id="one"  src="./simka.png" />');
    let title = $('body').prepend('<h1>You can choose who will be first</h1>');

    $('#one').click(function () {
        alert('The first player is Simka');
        move = 1;
    })

    $('#two').click(function () {
        alert('The first player is Nolik');
        move = 0;
    })



    let play = true;

    $('table tr td').click(function () {
        let simka = $('<img width="50px" src="./simka.png" />');
        let nolik = $('<img width="50px" src="./nolik.png" />');
        if ($(this).text() == '' && play) {
            if ((move % 2) == 1) {
                $(this).append(simka);
                $(this).css('color', '#61892f');
                $('#two').css('box-shadow', '0 8px 6px -6px #20B2AA');
                $('#one').css('box-shadow', 'none');
                $(this).off('click');
            } else {
                $(this).append(nolik);
                $(this).css('color', '#e85a4f');
                $('#one').css('box-shadow', '0 8px 6px -6px #de1dde');
                $('#two').css('box-shadow', 'none');
                $(this).off('click');
            }
            move++;

            if (findWinner() != -1 && findWinner() != '') {

                if (String(findWinner()) === simka[0].outerHTML) {
                    $('body').append('<div class="winner">Winner is Simka</div>');
                    $('body').append('<button onclick="location.reload()">Play Again</button>');
                    $('.winner').css('background-color', '#61892f');
                    $('button').css('color', '#61892f');
                    alert('y');
                } else if (String(findWinner()) === nolik[0].outerHTML) {
                    $('body').append('<div class="winner">Winner is Nolik</div>');
                    $('body').append('<button onclick="location.reload()">Play Again</button>');
                    $('.winner').css('background-color', '#e85a4f');
                    $('button').css('color', '#e85a4f');
                }

                play = false;
            }
        }
    });

    function findWinner() {
        sp1 = $('table tr:nth-child(1) td:nth-child(1)').html();
        sp2 = $('table tr:nth-child(1) td:nth-child(2)').html();
        sp3 = $('table tr:nth-child(1) td:nth-child(3)').html();
        sp4 = $('table tr:nth-child(2) td:nth-child(1)').html();
        sp5 = $('table tr:nth-child(2) td:nth-child(2)').html();
        sp6 = $('table tr:nth-child(2) td:nth-child(3)').html();
        sp7 = $('table tr:nth-child(3) td:nth-child(1)').html();
        sp8 = $('table tr:nth-child(3) td:nth-child(2)').html();
        sp9 = $('table tr:nth-child(3) td:nth-child(3)').html();
        //check rows
        if ((sp1 == sp2) && (sp2 == sp3)) {
            return sp3;
        } else if ((sp4 == sp5) && (sp5 == sp6)) {
            return sp6;
        }
        else if ((sp7 == sp8) && (sp8 == sp9)) {
            return sp9;
        }
        //check columns
        else if ((sp1 == sp4) && (sp4 == sp7)) {
            return sp7;
        } else if ((sp2 == sp5) && (sp5 == sp8)) {
            return sp8;
        } else if ((sp3 == sp6) && (sp6 == sp9)) {
            return sp9;
        }
        //check diagonals
        else if ((sp1 == sp5) && (sp5 == sp9)) {
            return sp9;
        } else if ((sp3 == sp5) && (sp5 == sp7)) {
            return sp7;
        }
        //no winner
        return -1;
    }

});

