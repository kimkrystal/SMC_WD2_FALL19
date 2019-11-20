$(document).ready(function(){
    $('input, label').focus(function(){
        if($(this).val() =='' ){
         $('main section.notification-area').append('<p class="notification">Please fill '+$(this).attr('id')+' out!</p>');
        }
    });
       
    $('input, label').blur(function(){
        $('p.notification').remove()
    });

    $('.button-Apple').click(function(){
        $('.Apple').remove()
    });

    $('.button-SugarCrisp').click(function(){
        $('.SugarCrisp').remove()
    });

    $('.button-CocoaPuffs').click(function(){
        $('.CocoaPuffs').remove()
    });


    $('.button-FruitBrute').click(function(){
        $('.FruitBrute').remove()
    });

    $('.button-LuckyCharms').click(function(){
        $('.LuckyCharms').remove()
    });

    $('.button-GrapeFellow').click(function(){
        $('.GrapeFellow').remove()
    });

    $('.button-Post').click(function(){
        $('.Post').remove()
    });
    $('.button-Jets').click(function(){
        $('.Jets').remove()
    });
    $('.button-Kix').click(function(){
        $('.Kix').remove()
    });


    $('select#FX').change(function(){
        var currentSelection = $(this).val();

        if(currentSelection === 'show'){
            $('.box').show(1000);
        }
        if(currentSelection === 'hide'){
            $('.box').hide(1000);
        }
        if(currentSelection === 'slidedown'){
            $('.box').slideDown(1000);
        }
        if(currentSelection === 'slideup'){
            $('.box').slideUp(1000);
        }
    })
});
