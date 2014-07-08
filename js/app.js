$(document).ready(function () {
    
    $('.logo').fadeIn(1200);
    $('.logo').fadeOut(1200);

    $('.tutorial1, .tutorial2').fadeIn(1200);
    
    $('.ryu').on('mouseenter', function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    
    .on('mouseleave', function () {         //method chaining
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    
    .mousedown(function () {
        playHadouken ();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '300px'}, 500, 
            function () {
                $(this).hide();                   
                $(this).css('left', '-212px');
            });
    })
    
    .mouseup(function () {
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
    });
    
        
    $('body').keydown(function (event) {
        if( event.which == 88) {
        $('.ryu-cool').show();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        }
    })
    
    .keyup(function (event) {
        if( event.which == 88) {
        $('.ryu-cool').hide();
        $('.ryu-still').show();
        }
    });
    
});
    

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
    }