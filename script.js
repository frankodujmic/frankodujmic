var images = ['http://lowpolypessimism.github.io/images/fox-proba4.jpg',
    'http://lowpolypessimism.github.io/images/kaktus-scena3.jpg',
    'http://lowpolypessimism.github.io/images/zecov.jpg',
    'http://lowpolypessimism.github.io/images/maczka.jpg', 
    'http://media.giphy.com/media/3oEduZ2CpDE6C30GL6/giphy.gif'];

$(document).ready(function () {
    var defaults = {
        selector: '[data-adaptive-background="1"]',
        parent: '#imgHolder',
        exclude: ['rgb(0,0,0)', 'rgba(255,255,255)'],
        normalizeTextColor: false,
        normalizedTextColors: {
            light: "#fff",
            dark: "#000"
        },
        lumaClasses: {
            light: "ab-light",
            dark: "ab-dark"
        }
    };

    $.adaptiveBackground.run(defaults);

    $('#right').click(function () {
        next();
        $.adaptiveBackground.run(defaults);
    });

    $('#left').click(function () {
        previous();
        $.adaptiveBackground.run(defaults);
    });

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '37') {
            previous();
            $.adaptiveBackground.run(defaults);
        }
        else if (e.keyCode == '39') {
            next();
            $.adaptiveBackground.run(defaults);
        }
    }
});


function next() {

    if (navigator.product == 'Gecko') {
        for (i = 0; i <= images.length; i++) {
            if ($("#image").css("background-image") == 'url("' + images[i] + '")') {
                if (i == images.length - 1) {
                    $("#image").css("background-image", 'url("' + images[0] + '")');
                    break;
                }
                $("#image").css("background-image", 'url("' + images[i + 1] + '")');
                break;
            }
        }
    }

    for (i = 0; i <= images.length; i++) {
        if ($("#image").css("background-image") == 'url(' + images[i] + ')') {
            if (i == images.length - 1) {
                $("#image").css("background-image", 'url(' + images[0] + ')');
                break;
            }
            $("#image").css("background-image", 'url(' + images[i + 1] + ')');
            break;
        }
    }
};

function previous() {

    if (navigator.product == 'Gecko') {
        for (i = 0; i <= images.length; i++) {
            if ($("#image").css("background-image") == 'url("' + images[i] + '")') {
                if (i == 0) {
                    $("#image").css("background-image", 'url("' + images[images.length - 1] + '")');
                    break;
                }
                $("#image").css("background-image", 'url("' + images[i - 1] + '")');
                break;
            }
        }
    }

    for (i = 0; i <= images.length; i++) {
        if ($("#image").css("background-image") == 'url(' + images[i] + ')') {
            if (i == 0) {
                $("#image").css("background-image", 'url(' + images[images.length - 1] + ')');
                break;
            }
            $("#image").css("background-image", 'url(' + images[i - 1] + ')');
            break;
        }
    }
};
