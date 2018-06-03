$('.slider-block1').addClass('no-transition slider-block1-left');
$('.slider-block2').addClass('no-transition slider-block2-right');
$('.slider-img').addClass('no-transition slider-img-anim');
$('.current-slide').find('.slider-block1').removeClass('no-transition slider-block1-left');
$('.current-slide').find('.slider-block2').removeClass('no-transition slider-block2-right');
$('.current-slide').find('.slider-img').removeClass('no-transition slider-img-anim');
$('.arrow-left').css({cursor: 'not-allowed', opacity: '0.2'});
if($(window).width() <= 939) {
    $('.slider .current-slide').show(0);
    $('.current-slide').find('.slider-block1').animate({left: '0'}, 'fast');
    $('.current-slide').find('.slider-block2').animate({left: '50%'}, 'fast');
    $('.current-slide').find('.slider-img').animate({top: '0'}, 'fast');
}
$('.arrow-down, .top-menu a').click(function(){
    var anchor = $(this).attr('href');
    var desct = $(anchor).offset().top - 40;
    $('html,body').animate({
        scrollTop: desct
    }, 1000);
    return false;
});
$('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.top-menu').toggleClass('menu-left');
});

$('.arrow-right').click(function(){

    var currentSlide = $('.current-slide').index();
    var nextSlide = currentSlide + 1;
    var prevSlide = currentSlide - 1;
    $('.slide').eq(prevSlide).find('.slider-block1');
    if(nextSlide == ($('.slide:last-child').index())) {
        $('.slider-block1').addClass('slider-block1-left').addClass('no-transition');
        $('.slider-block2').addClass('slider-block2-right').addClass('no-transition');
        $('.slider-img').addClass('slider-img-anim no-transition');
        $('.slide').removeClass('current-slide').eq(nextSlide).addClass('current-slide');
        $('.arrow-right').css({cursor: 'not-allowed', opacity: '0.2'});

        $('.current-slide').find('.slider-block1').removeClass('no-transition slider-block1-left');
        $('.current-slide').find('.slider-block2').removeClass('no-transition slider-block2-right');
        $('.current-slide').find('.slider-img').removeClass('no-transition slider-img-anim');
        if($(window).width() <= 939) {
            $('.slide').hide();
            $('.slider-block1, .slider-block2, .slider-img').attr('style', '');
            $('.current-slide').show();
            $('.current-slide').find('.slider-block1').animate({left: '0px'}, 'fast');
            $('.current-slide').find('.slider-block2').animate({left: '50%'}, 'fast');
            $('.current-slide').find('.slider-img').animate({top: '0'}, 'fast');
        }
    }
    else if (nextSlide == ($('.slide:last-of-type').index() + 1 )){
    }
  else {

        $('.slider-img').addClass('slider-img-anim no-transition');
        $('.slider-block1').addClass('slider-block1-left').addClass('no-transition');
        $('.slider-block2').addClass('slider-block2-right').addClass('no-transition');
        $('.slide').removeClass('current-slide').eq(nextSlide).addClass('current-slide');
        $('.current-slide').find('.slider-block1').removeClass('no-transition slider-block1-left');
        $('.current-slide').find('.slider-block2').removeClass('no-transition slider-block2-right');
        $('.current-slide').find('.slider-img').removeClass('no-transition slider-img-anim');
        $('.arrow-left').attr('style', '');
        if($(window).width() <= 939) {
            $('.slide').hide();
            $('.slider-block1, .slider-block2, .slider-img').attr('style', '');
            $('.current-slide').show();
        $('.current-slide').find('.slider-block1').animate({left: '0px'}, 'fast');
        $('.current-slide').find('.slider-block2').animate({left: '50%'}, 'fast');
        $('.current-slide').find('.slider-img').animate({top: '0'}, 'fast');
        }


    }
});

$('.arrow-left').click(function(){
    var currentSlide = $('.current-slide').index();
    var prevSlide = currentSlide - 1;
    if(prevSlide == ($('.slide:first-child').index())) {
        $('.slider-block1').addClass('slider-block1-left no-transition');
        $('.slider-block2').addClass('slider-block2-right no-transition');
        $('.slider-img').addClass('slider-img-anim no-transition');
        $('.slide').removeClass('current-slide').eq(prevSlide).addClass('current-slide');
        $('.current-slide').find('.slider-block1').removeClass('no-transition slider-block1-left');
        $('.current-slide').find('.slider-block2').removeClass('no-transition slider-block2-right');
        $('.current-slide').find('.slider-img').removeClass('no-transition slider-img-anim');
        $('.arrow-left').css({cursor: 'not-allowed', opacity: '0.2'});
        if($(window).width() <= 939) {
            $('.slide').hide();
            $('.slider-block1, .slider-block2, .slider-img').attr('style', '');
            $('.current-slide').show();
            $('.current-slide').find('.slider-block1').animate({left: '0px'}, 'fast');
            $('.current-slide').find('.slider-block2').animate({left: '50%'}, 'fast');
            $('.current-slide').find('.slider-img').animate({top: '0'}, 'fast');
        }


    }
    else if (prevSlide == ($('.slide:first-child').index() - 1 )) {
    }
    else {
        $('.slider-block1').addClass('slider-block1-left').addClass('no-transition');
        $('.slider-block2').addClass('slider-block2-right').addClass('no-transition');
        $('.slider-img').addClass('slider-img-anim no-transition');
        $('.slide').removeClass('current-slide').eq(prevSlide).addClass('current-slide');
        $('.current-slide').find('.slider-block1').removeClass('no-transition slider-block1-left');
        $('.current-slide').find('.slider-block2').removeClass('no-transition slider-block2-right');
        $('.current-slide').find('.slider-img').removeClass('no-transition slider-img-anim');
        $('.arrow-right').attr('style', '');
        if($(window).width() <= 939) {
            $('.slide').hide();
            $('.slider-block1, .slider-block2, .slider-img').attr('style', '');
            $('.current-slide').show();
            $('.current-slide').find('.slider-block1').animate({left: '0px'}, 'fast');
            $('.current-slide').find('.slider-block2').animate({left: '50%'}, 'fast');
            $('.current-slide').find('.slider-img').animate({top: '0'}, 'fast');
        }


    }

});

