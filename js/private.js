
$(document).ready(function(){

    $('.btn-menu a').click(function(){
        $('.sub-menu').slideDown(500);
        $('.btn-menu').addClass('active');
    })

    $('.close-menu a').click(function(){
        $('.sub-menu').slideUp(500);
        $('.btn-menu').removeClass('active');
    })

    $('.icon-info a').click(function(){
        $('.box-tab-service').slideToggle(500);
    })
    
    $('.tab-srv a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-srv a').removeClass('active');
        $('.tab-content').slideUp(500);

        $(this).addClass('active');
        $("#"+tab_id).slideDown(500);
    })

})