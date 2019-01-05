$(function (){
    isNavBarHidden = true;
    heightNav = $('.nav_bar').height();
    $('header .menu_icon').click(function (){
        if(isNavBarHidden){
            $('.nav_bar').css('height','0px');
            $('.nav_bar').show();
            $('.nav_bar').animate({
                height: heightNav
            }, 500);
            isNavBarHidden  = false;
        }
        else{
            isNavBarHidden = true;
            $('.nav_bar').animate({
                height: '0px'
            }, 500,function (){
                $('.nav_bar').hide();
            });
        }
    });
});