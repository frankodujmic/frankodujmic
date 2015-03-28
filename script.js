var images = ['fox-proba4.jpg', 'kaktus-scena3.jpg', 'zecov.jpg', 'maczka.jpg'];

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

    //if (navigator.product == 'Gecko') {
    //    for (i = 0; i <= 5; i++) {
    //        if ($("#rightPhoto").css("background-image") == 'url("' + picsRight[i] + '")') {
    //            if (i == 4) {
    //                $("#rightPhoto").css("background-image", 'url("' + picsRight[0] + '")');
    //                break;
    //            }
    //            $("#rightPhoto").css("background-image", 'url("' + picsRight[i + 1] + '")');
    //            break;
    //        }
    //    }
    //}


    alert($("#image").css("background-image") + "  " + 'url(images/' + images[0] + ')');
    for (i = 0; i <= images.length; i++) {
        if ($("#image").css("background-image") == 'url(images/' + images[i] + ')') {
            if (i == images.length-1) {
                $("#image").css("background-image", 'url(images/' + images[0] + ')');
                break;
            }
            $("#image").css("background-image", 'url(images/' + images[i + 1] + ')');
            break;
        }
    }
};