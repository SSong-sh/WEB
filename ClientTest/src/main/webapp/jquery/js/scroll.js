

//1. <div id="bar"></div> 동적추가
//2. css 적용 
//3. 이벤트 추가


$('<div id="scroll-bar-indicator"></div>')
    .css({
        width: 0,
        height: '7px',
        backgroundColor: 'blue',
        position: 'fixed',
        left: 0,
        top:0,
        border: 0,
        padding:0,
        margin:0
    }).prependTo('body');

$(document).scroll(function() {

     let x = $(document).scrollTop() * 100 / ($(document)
        .outerHeight() - $(window).outerHeight()) ;

        $('#scroll-bar-indicator').css('width', x + '%');
    })