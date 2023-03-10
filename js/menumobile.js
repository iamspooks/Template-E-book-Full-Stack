$(function() {
    var $menu = $('.lista__mobile');
    var $btnMenu = $('.btn__open__menu');
    var $btnMenuClose = $('.btn__close__menu');

    $btnMenu.click(function() {
        $menu.slideToggle(300);
        $btnMenu.hide();
        $btnMenuClose.show();
        $('.bg__newsletter').animate({marginTop: '130px'}, 300);
    });

    $btnMenuClose.click(function() {
        $menu.slideToggle(300);
        $btnMenuClose.hide();
        $btnMenu.show();
        $('.bg__newsletter').animate({marginTop: '0px'}, 300);
    });
});