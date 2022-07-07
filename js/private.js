$('.btn-menu a').click(function(){
    $('.sub-menu').slideDown(500);
    $('.btn-menu').addClass('active');
})

$('.close-menu a').click(function(){
    $('.sub-menu').slideUp(500);
    $('.btn-menu').removeClass('active');
})