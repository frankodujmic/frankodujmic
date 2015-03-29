var images = ['http://frankodujmic.github.io/images/fox-proba4.jpg',
    'http://frankodujmic.github.io/images/kaktus-scena3.jpg',
    'http://frankodujmic.github.io/images/zecov.jpg',
    'http://frankodujmic.github.io/images/maczka.jpg'];

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
});


function next() {

    if (navigator.product == 'Gecko') {
        for (i = 0; i <= 5; i++) {
            if ($("#image").css("background-image") == 'url("' + images[i] + '")') {
                if (i == 4) {
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
