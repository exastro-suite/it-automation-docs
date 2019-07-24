// JavaScript Document

$(function(){
    var topMoveHeight;

    // title background image
    $('#articleTitle').append('<div class="background"></div>');
    
    // resize window
    var resizeWindow = function() {
        topMoveHeight = $('#articleBody').offset();
    }
    var timer = false;    
    $( window ).resize( function() {
        if ( timer !== false ) {
            clearTimeout( timer );
        }
        timer = setTimeout( function(){
            resizeWindow();
        }, 500 );
    });
    
    resizeWindow();
    
    $( window ).scroll( function(){
        var windowScrollTop = $( this ).scrollTop();
        var windowBackgroundPosition = windowScrollTop / 2;
        if ( windowScrollTop < topMoveHeight.top ){
            $('#topMove').css('bottom', '-64px' );
            $('#articleTitle .background').css('top', windowBackgroundPosition + 'px' );
        } else {
            $('#topMove').css('bottom', '8px' );
        }
    });
});