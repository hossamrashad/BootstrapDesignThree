/* jslint plusplus: true, evil:true */
/* globel $, jQuery, console, document, window, alert, prompt, confirm */

/* start section loading */
$(document).ready(function () {

    'use strict';

    $(".loading .spinner").fadeOut(2000, function () {

        $(this).parent().fadeOut(2000, function () {

            $(this).remove();

        });
    });
});

/* end section loading */

/***************************************************/


/* Window Height */
$(function () {

    'use strict';

    var header = $("#header").innerHeight();

    //console.log(header);

    $('.windowHeight').height($(window).height() - header);

    $(window).resize(function () {

        $('.windowHeight').height($(window).height() - header);

    });
});
$(function () {

    'use strict';

    $('.window-height').height($(window).height());

    $(window).resize(function () {

        $('.window-height').height($(window).height());

    });
});
/**************************************************/
/* scroll To Element */
$(document).ready(function () {

    'use strict';

    $('.scrollTo li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top

        }, 1000);

        console.log('#' + $(this).data('value'));
    });
});

/*********************************************************/
/* padding navbar height */
/*
$(function () {
    'use strict';

    $('body, .paddingNavbarHeight').css('paddingTop', $('.navbar').innerHeight());

});
*/

/************************************************/

/* welcome message */
$(function () {

    'use strict';

    $(".welcomeMessage ").each(function () {

        $(this).delay(3000).animate({

            right: 0

        }, 1000, function () {

            $(this).delay(3000).animate({

                right: -400

            }, 1000);
        });
    });
});
/***********************************************/
/* placeholder */
$(function () {

    'use strict';

    var placeAttr = '';

    $('[placeholder]').focus(function () {

        placeAttr = $(this).attr('placeholder');

        $(this).attr('placeholder', '');

    }).blur(function () {

        $(this).attr('placeholder', placeAttr);

    });
});

/******************************************/
/* input direction */
$(function () {

    'use strict';

    $('.auto-direction').on('keyup', function () {

        if ($(this).val().charCodeAt(0) < 200) {

            $(this).css('direction', 'ltr');

        } else {

            $(this).css('direction', 'rtl');
        }
    });
});
/********************************************/

/* */

$(function () {
    'use strict';

    $('<span class="asterisk">*</span>').insertBefore(':input[required]');

    $('.asterisk').parent('div').css('position', 'relative');

    $('.asterisk').each(function () {
        $(this).css({
            'position': 'absolute',
            'top': $(this).parent('div').find(':input').innerHeight() / 2,
            'left': $(this).parent('div').find(':input').innerWidth() - 10,
            'color': '#f00',
            'font-weight': 'bold'
        });
    });
});

/***********************************************************/

$(".toggle").click(function () {

    "use strict";

    $(".toggleElement").fadeToggle(10);
});

/***********************************************************/

/*
$(document).ready(function () {
    'use strict';
    $(window).resize(function () {
        $('.paddingMidWindow').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.padding-top').height()) / 2);
        });
    });
    $('.paddingMidWindow').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.padding-top').height()) / 2);
    });
});*/
/**************************/
/*
$(window).ready(function () {
    $(".nav-link .dropdown").hover(function () {
        $(".dropdown-menu ").addClass("show");
    });
});
*/
/***********************************************************/

$(function () {
    $('.tabs-list li').on('click', function () {


        $(this).addClass('active').siblings().removeClass('active');

        $('.content-list > div').hide();

        $($(this).data('content')).fadeIn();
    });
});
/**************************************/

$('.showLang').click(function () {

    "use strict";

    $('.toggleLang').slideToggle();

});
