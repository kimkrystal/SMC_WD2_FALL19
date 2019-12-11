$(document).ready(function(){

    $('.toggle').click(function(){
        $('.navbar').toggleClass('open');
        $('main, #mobileHeader').toggleClass('slide-right')
        $('.toggle').toggleClass('active');
    });

    $('#donate').click(function(){
        $('.blur-window').fadeIn('300');
        $('.close').click(function(){
            $('.blur-window').fadeOut('300');
        });
    });

    $('.donate-items').click(function(){
        $(this).toggleClass('active');
    });
});

